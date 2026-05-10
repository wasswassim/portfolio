'use client';

import type React from 'react';
import { useRef, useMemo, useCallback, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type ImageItem = string | { src: string; alt?: string };

interface FadeSettings {
	fadeIn:  { start: number; end: number };
	fadeOut: { start: number; end: number };
}

interface BlurSettings {
	blurIn:  { start: number; end: number };
	blurOut: { start: number; end: number };
	maxBlur: number;
}

export interface GalleryControls {
	addVelocity: (v: number) => void;
}

interface InfiniteGalleryProps {
	images:           ImageItem[];
	speed?:           number;
	visibleCount?:    number;
	fadeSettings?:    FadeSettings;
	blurSettings?:    BlurSettings;
	className?:       string;
	style?:           React.CSSProperties;
	onReady?:         (controls: GalleryControls) => void;
	initialAutoPlay?: boolean;
}

interface PlaneData {
	index:      number;
	z:          number;
	imageIndex: number;
	x:          number;
	y:          number;
}

const DEFAULT_DEPTH_RANGE   = 50;
const MAX_HORIZONTAL_OFFSET = 8;
const MAX_VERTICAL_OFFSET   = 8;

const createClothMaterial = () =>
	new THREE.ShaderMaterial({
		transparent: true,
		uniforms: {
			map:         { value: null },
			opacity:     { value: 1.0 },
			blurAmount:  { value: 0.0 },
			scrollForce: { value: 0.0 },
			time:        { value: 0.0 },
			isHovered:   { value: 0.0 },
		},
		vertexShader: `
      uniform float scrollForce;
      uniform float time;
      uniform float isHovered;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 pos = position;
        float curveIntensity = scrollForce * 0.3;
        float distanceFromCenter = length(pos.xy);
        float curve = distanceFromCenter * distanceFromCenter * curveIntensity;
        float ripple1 = sin(pos.x * 2.0 + scrollForce * 3.0) * 0.02;
        float ripple2 = sin(pos.y * 2.5 + scrollForce * 2.0) * 0.015;
        float clothEffect = (ripple1 + ripple2) * abs(curveIntensity) * 2.0;
        float flagWave = 0.0;
        if (isHovered > 0.5) {
          float wavePhase = pos.x * 3.0 + time * 8.0;
          float dampening = smoothstep(-0.5, 0.5, pos.x);
          flagWave = sin(wavePhase) * 0.1 * dampening;
          flagWave += sin(pos.x * 5.0 + time * 12.0) * 0.03 * dampening;
        }
        pos.z -= (curve + clothEffect + flagWave);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
		fragmentShader: `
      uniform sampler2D map;
      uniform float opacity;
      uniform float blurAmount;
      uniform float scrollForce;
      varying vec2 vUv;
      void main() {
        vec4 color = texture2D(map, vUv);
        if (blurAmount > 0.0) {
          vec2 blurred = vUv;
          vec4 sum = color;
          float total = 1.0;
          float step = blurAmount * 0.002;
          for (float x = -2.0; x <= 2.0; x += 1.0) {
            for (float y = -2.0; y <= 2.0; y += 1.0) {
              if (x == 0.0 && y == 0.0) continue;
              vec2 offset = vec2(x, y) * step;
              float weight = 1.0 / (1.0 + length(vec2(x, y)));
              sum += texture2D(map, vUv + offset) * weight;
              total += weight;
            }
          }
          color = sum / total;
        }
        float curveHighlight = abs(scrollForce) * 0.05;
        color.rgb += vec3(curveHighlight * 0.1);
        gl_FragColor = vec4(color.rgb, color.a * opacity);
      }
    `,
	});

function ImagePlane({
	texture,
	position,
	scale,
	material,
}: {
	texture:  THREE.Texture;
	position: [number, number, number];
	scale:    [number, number, number];
	material: THREE.ShaderMaterial;
}) {
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		if (material && texture) material.uniforms.map.value = texture;
	}, [material, texture]);

	useEffect(() => {
		if (material?.uniforms) material.uniforms.isHovered.value = isHovered ? 1.0 : 0.0;
	}, [material, isHovered]);

	return (
		<mesh
			position={position}
			scale={scale}
			material={material}
			onPointerEnter={() => setIsHovered(true)}
			onPointerLeave={() => setIsHovered(false)}
		>
			<planeGeometry args={[1, 1, 32, 32]} />
		</mesh>
	);
}

function GalleryScene({
	images,
	speed = 1,
	visibleCount = 8,
	fadeSettings = {
		fadeIn:  { start: 0.05, end: 0.15 },
		fadeOut: { start: 0.85, end: 0.95 },
	},
	blurSettings = {
		blurIn:  { start: 0.0, end: 0.1 },
		blurOut: { start: 0.9, end: 1.0 },
		maxBlur: 3.0,
	},
	onReady,
	initialAutoPlay = true,
}: Omit<InfiniteGalleryProps, 'className' | 'style'>) {
	const [scrollVelocity, setScrollVelocity] = useState(0);
	const [autoPlay, setAutoPlay]             = useState(initialAutoPlay);
	const [textures, setTextures]             = useState<(THREE.Texture | null)[]>([]);
	const lastInteraction = useRef(Date.now());

	const normalizedImages = useMemo(
		() => images.map((img) => (typeof img === 'string' ? { src: img, alt: '' } : img)),
		[images]
	);

	// Load textures via THREE.TextureLoader (avoids useTexture/Suspense issues)
	useEffect(() => {
		const loader   = new THREE.TextureLoader();
		const result: (THREE.Texture | null)[] = new Array(normalizedImages.length).fill(null);
		let completed  = 0;
		const total    = normalizedImages.length;

		normalizedImages.forEach((img, i) => {
			loader.load(
				img.src,
				(tex) => {
					tex.colorSpace = THREE.SRGBColorSpace;
					result[i] = tex;
					completed++;
					if (completed === total) setTextures([...result]);
				},
				undefined,
				() => {
					result[i] = null;
					completed++;
					if (completed === total) setTextures([...result]);
				}
			);
		});

		return () => { result.forEach((t) => t?.dispose()); };
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const materials = useMemo(
		() => Array.from({ length: visibleCount }, () => createClothMaterial()),
		[visibleCount]
	);

	const spatialPositions = useMemo(() => {
		const positions: { x: number; y: number }[] = [];
		for (let i = 0; i < visibleCount; i++) {
			const hAngle  = (i * 2.618) % (Math.PI * 2);
			const vAngle  = (i * 1.618 + Math.PI / 3) % (Math.PI * 2);
			const hRadius = (i % 3) * 1.2;
			const vRadius = ((i + 1) % 4) * 0.8;
			positions.push({
				x: (Math.sin(hAngle) * hRadius * MAX_HORIZONTAL_OFFSET) / 3,
				y: (Math.cos(vAngle) * vRadius * MAX_VERTICAL_OFFSET)   / 4,
			});
		}
		return positions;
	}, [visibleCount]);

	const totalImages = normalizedImages.length;
	const depthRange  = DEFAULT_DEPTH_RANGE;

	const planesData = useRef<PlaneData[]>(
		Array.from({ length: visibleCount }, (_, i) => ({
			index:      i,
			z:          ((depthRange / Math.max(visibleCount, 1)) * i) % depthRange,
			imageIndex: totalImages > 0 ? i % totalImages : 0,
			x:          spatialPositions[i]?.x ?? 0,
			y:          spatialPositions[i]?.y ?? 0,
		}))
	);

	// Expose addVelocity to parent for scroll-driven control
	const addVelocity = useCallback((v: number) => {
		setScrollVelocity((prev) => prev + v);
		setAutoPlay(false);
		lastInteraction.current = Date.now();
	}, []);

	useEffect(() => {
		onReady?.({ addVelocity });
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleWheel = useCallback(
		(event: WheelEvent) => {
			event.preventDefault();
			setScrollVelocity((prev) => prev + event.deltaY * 0.01 * speed);
			setAutoPlay(false);
			lastInteraction.current = Date.now();
		},
		[speed]
	);

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if      (event.key === 'ArrowUp'   || event.key === 'ArrowLeft')  { setScrollVelocity((p) => p - 2 * speed); setAutoPlay(false); lastInteraction.current = Date.now(); }
			else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') { setScrollVelocity((p) => p + 2 * speed); setAutoPlay(false); lastInteraction.current = Date.now(); }
		},
		[speed]
	);

	useEffect(() => {
		const canvas = document.querySelector('canvas');
		if (!canvas) return;
		canvas.addEventListener('wheel', handleWheel, { passive: false });
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			canvas.removeEventListener('wheel', handleWheel);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleWheel, handleKeyDown]);

	// Only resume auto-play if the gallery was meant to auto-play in the first place
	useEffect(() => {
		if (!initialAutoPlay) return;
		const id = setInterval(() => {
			if (Date.now() - lastInteraction.current > 3000) setAutoPlay(true);
		}, 1000);
		return () => clearInterval(id);
	}, [initialAutoPlay]);

	useFrame((state, delta) => {
		if (autoPlay) setScrollVelocity((prev) => prev + 0.3 * delta);
		setScrollVelocity((prev) => prev * 0.95);

		const time = state.clock.getElapsedTime();
		materials.forEach((mat) => {
			if (mat?.uniforms) {
				mat.uniforms.time.value        = time;
				mat.uniforms.scrollForce.value = scrollVelocity;
			}
		});

		if (totalImages === 0) return;
		const imageAdvance = visibleCount % totalImages || totalImages;

		planesData.current.forEach((plane, i) => {
			let newZ          = plane.z + scrollVelocity * delta * 10;
			let wrapsForward  = 0;
			let wrapsBackward = 0;

			if (newZ >= depthRange)  { wrapsForward  = Math.floor(newZ / depthRange);  newZ -= depthRange * wrapsForward;  }
			else if (newZ < 0)       { wrapsBackward = Math.ceil(-newZ / depthRange);  newZ += depthRange * wrapsBackward; }

			if (wrapsForward  > 0) plane.imageIndex = (plane.imageIndex + wrapsForward  * imageAdvance) % totalImages;
			if (wrapsBackward > 0) { const s = plane.imageIndex - wrapsBackward * imageAdvance; plane.imageIndex = ((s % totalImages) + totalImages) % totalImages; }

			plane.z = ((newZ % depthRange) + depthRange) % depthRange;
			plane.x = spatialPositions[i]?.x ?? 0;
			plane.y = spatialPositions[i]?.y ?? 0;

			const np = plane.z / depthRange;

			let opacity = 1;
			if      (np < fadeSettings.fadeIn.start)   opacity = 0;
			else if (np <= fadeSettings.fadeIn.end)    opacity = (np - fadeSettings.fadeIn.start)  / (fadeSettings.fadeIn.end  - fadeSettings.fadeIn.start);
			else if (np > fadeSettings.fadeOut.end)    opacity = 0;
			else if (np >= fadeSettings.fadeOut.start) opacity = 1 - (np - fadeSettings.fadeOut.start) / (fadeSettings.fadeOut.end - fadeSettings.fadeOut.start);
			opacity = Math.max(0, Math.min(1, opacity));

			let blur = 0;
			if      (np < blurSettings.blurIn.start)   blur = blurSettings.maxBlur;
			else if (np <= blurSettings.blurIn.end)    blur = blurSettings.maxBlur * (1 - (np - blurSettings.blurIn.start) / (blurSettings.blurIn.end - blurSettings.blurIn.start));
			else if (np > blurSettings.blurOut.end)    blur = blurSettings.maxBlur;
			else if (np >= blurSettings.blurOut.start) blur = blurSettings.maxBlur * ((np - blurSettings.blurOut.start) / (blurSettings.blurOut.end - blurSettings.blurOut.start));
			blur = Math.max(0, Math.min(blurSettings.maxBlur, blur));

			const mat = materials[i];
			if (mat?.uniforms) { mat.uniforms.opacity.value = opacity; mat.uniforms.blurAmount.value = blur; }
		});
	});

	if (textures.length === 0) return null;

	return (
		<>
			{planesData.current.map((plane, i) => {
				const texture  = textures[plane.imageIndex] ?? null;
				const material = materials[i];
				if (!texture || !material) return null;
				const worldZ = plane.z - depthRange / 2;
				const aspect = texture.image ? (texture.image as HTMLImageElement).width / (texture.image as HTMLImageElement).height : 1;
				const scale: [number, number, number] = aspect > 1 ? [2 * aspect, 2, 1] : [2, 2 / aspect, 1];
				return (
					<ImagePlane
						key={plane.index}
						texture={texture}
						position={[plane.x, plane.y, worldZ]}
						scale={scale}
						material={material}
					/>
				);
			})}
		</>
	);
}

export default function InfiniteGallery({
	images,
	className,
	style,
	fadeSettings = {
		fadeIn:  { start: 0.05, end: 0.25 },
		fadeOut: { start: 0.40, end: 0.43 },
	},
	blurSettings = {
		blurIn:  { start: 0.0,  end: 0.1  },
		blurOut: { start: 0.40, end: 0.43 },
		maxBlur: 8.0,
	},
	speed            = 1,
	visibleCount     = 8,
	onReady,
	initialAutoPlay  = true,
}: InfiniteGalleryProps) {
	const containerStyle: React.CSSProperties = {
		position: 'relative',
		width:    '100%',
		height:   '100%',
		background: '#0a0a0a',
		...style,
	};

	return (
		<div className={className} style={containerStyle}>
			<Suspense fallback={null}>
				<Canvas
					camera={{ position: [0, 0, 0], fov: 55 }}
					gl={{ antialias: true, alpha: true }}
					style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
				>
					<GalleryScene
						images={images}
						speed={speed}
						visibleCount={visibleCount}
						fadeSettings={fadeSettings}
						blurSettings={blurSettings}
						onReady={onReady}
						initialAutoPlay={initialAutoPlay}
					/>
				</Canvas>
			</Suspense>
		</div>
	);
}
