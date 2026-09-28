'use client';

import type React from 'react';
import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface FadeSettings {
	fadeIn:  { start: number; end: number };
	fadeOut: { start: number; end: number };
}

interface BlurSettings {
	blurIn:  { start: number; end: number };
	blurOut: { start: number; end: number };
	maxBlur: number;
}

interface InfiniteGalleryProps {
	images:        string[];
	/** Scroll progress, 0 → 1 across the cycle. Read every frame. */
	progress:      { readonly current: number };
	visibleCount?: number;
	/** How far (in depth units) the planes travel over a full 0 → 1 cycle. */
	travel?:       number;
	fadeSettings?: FadeSettings;
	blurSettings?: BlurSettings;
	/** Pauses rendering entirely while false (e.g. section off-screen). */
	active?:       boolean;
	className?:    string;
	style?:        React.CSSProperties;
}

const DEPTH_RANGE           = 50;
const MAX_HORIZONTAL_OFFSET = 8;
const MAX_VERTICAL_OFFSET   = 8;

const DEFAULT_FADE: FadeSettings = {
	fadeIn:  { start: 0.04, end: 0.20 },
	fadeOut: { start: 0.82, end: 0.96 },
};

const DEFAULT_BLUR: BlurSettings = {
	blurIn:  { start: 0.0,  end: 0.08 },
	blurOut: { start: 0.88, end: 1.0  },
	maxBlur: 6.0,
};

const createClothMaterial = () =>
	new THREE.ShaderMaterial({
		transparent: true,
		uniforms: {
			map:         { value: null },
			opacity:     { value: 1.0 },
			blurAmount:  { value: 0.0 },
			scrollForce: { value: 0.0 },
		},
		vertexShader: `
      uniform float scrollForce;
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
        pos.z -= (curve + clothEffect);
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
        color.rgb += vec3(abs(scrollForce) * 0.005);
        gl_FragColor = vec4(color.rgb, color.a * opacity);
      }
    `,
	});

// Piecewise ramp used for both fade and blur curves
function ramp(np: number, inStart: number, inEnd: number, outStart: number, outEnd: number) {
	if (np < inStart || np > outEnd) return 0;
	if (np <= inEnd)    return (np - inStart) / (inEnd - inStart);
	if (np >= outStart) return 1 - (np - outStart) / (outEnd - outStart);
	return 1;
}

const mod = (n: number, m: number) => ((n % m) + m) % m;

function GalleryScene({
	textures,
	progress,
	active,
	visibleCount,
	travel,
	fadeSettings,
	blurSettings,
}: {
	textures:     THREE.Texture[];
	progress:     { readonly current: number };
	active:       boolean;
	visibleCount: number;
	travel:       number;
	fadeSettings: FadeSettings;
	blurSettings: BlurSettings;
}) {
	const meshRefs = useRef<(THREE.Mesh | null)[]>([]);
	const offset   = useRef(0);
	const { gl, scene, camera, invalidate } = useThree();

	// We mount a screen early, so upload every texture and compile the shader
	// now rather than hitching on the first visible frame
	useEffect(() => {
		textures.forEach((t) => gl.initTexture(t));
		gl.compile(scene, camera);
	}, [gl, scene, camera, textures]);

	const materials = useMemo(
		() => Array.from({ length: visibleCount }, () => createClothMaterial()),
		[visibleCount]
	);

	useEffect(() => () => materials.forEach((m) => m.dispose()), [materials]);

	// Golden-angle scatter so planes never stack on the same axis
	const planes = useMemo(
		() =>
			Array.from({ length: visibleCount }, (_, i) => {
				const hAngle  = (i * 2.618) % (Math.PI * 2);
				const vAngle  = (i * 1.618 + Math.PI / 3) % (Math.PI * 2);
				const hRadius = (i % 3) * 1.2;
				const vRadius = ((i + 1) % 4) * 0.8;
				return {
					baseZ: (DEPTH_RANGE / visibleCount) * i,
					x: (Math.sin(hAngle) * hRadius * MAX_HORIZONTAL_OFFSET) / 3,
					y: (Math.cos(vAngle) * vRadius * MAX_VERTICAL_OFFSET)   / 4,
				};
			}),
		[visibleCount]
	);

	// frameloop is "demand": poll the scroll progress cheaply and only ask for a
	// frame when there's somewhere to move to
	useEffect(() => {
		if (!active) return;
		invalidate(); // repaint once on becoming visible
		let id = 0;
		const tick = () => {
			if (Math.abs(THREE.MathUtils.clamp(progress.current, 0, 1) * travel - offset.current) > 1e-3) invalidate();
			id = requestAnimationFrame(tick);
		};
		id = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(id);
	}, [active, progress, travel, invalidate]);

	useFrame((_, delta) => {
		const total = textures.length;
		if (total === 0) return;

		// Ease towards the scroll target — same curve forwards and backwards
		const target = THREE.MathUtils.clamp(progress.current, 0, 1) * travel;
		const prev   = offset.current;
		offset.current += (target - prev) * (1 - Math.exp(-Math.min(delta, 0.1) * 6));
		if (Math.abs(target - offset.current) > 1e-3) invalidate();
		const velocity    = (offset.current - prev) / Math.max(delta, 1e-3);
		const scrollForce = THREE.MathUtils.clamp(velocity * 0.06, -3, 3);


		planes.forEach((plane, i) => {
			const mesh = meshRefs.current[i];
			const mat  = materials[i];
			if (!mesh) return;

			// Position is a pure function of offset, so reversing scroll retraces it exactly
			const raw   = plane.baseZ + offset.current;
			const z     = mod(raw, DEPTH_RANGE);
			const wraps = Math.floor(raw / DEPTH_RANGE);
			const tex   = textures[mod(i - wraps * visibleCount, total)];

			if (mat.uniforms.map.value !== tex) {
				mat.uniforms.map.value = tex;
				const img    = tex.image as HTMLImageElement;
				const aspect = img ? img.width / img.height : 1;
				if (aspect > 1) mesh.scale.set(2 * aspect, 2, 1);
				else            mesh.scale.set(2, 2 / aspect, 1);
			}

			mesh.position.set(plane.x, plane.y, z - DEPTH_RANGE / 2);

			const np = z / DEPTH_RANGE;
			const { fadeIn, fadeOut } = fadeSettings;
			const { blurIn, blurOut, maxBlur } = blurSettings;
			const opacity = ramp(np, fadeIn.start, fadeIn.end, fadeOut.start, fadeOut.end);
			// Fully faded planes sit at max blur — the priciest shader path — so skip them
			mesh.visible = opacity > 0.001;
			if (!mesh.visible) return;
			mat.uniforms.opacity.value     = opacity;
			mat.uniforms.blurAmount.value  = maxBlur * (1 - ramp(np, blurIn.start, blurIn.end, blurOut.start, blurOut.end));
			mat.uniforms.scrollForce.value = scrollForce;
		});
	});

	return (
		<>
			{planes.map((_, i) => (
				<mesh key={i} ref={(m) => { meshRefs.current[i] = m; }} material={materials[i]}>
					<planeGeometry args={[1, 1, 24, 24]} />
				</mesh>
			))}
		</>
	);
}

export default function InfiniteGallery({
	images,
	progress,
	visibleCount = 8,
	travel       = DEPTH_RANGE,
	fadeSettings = DEFAULT_FADE,
	blurSettings = DEFAULT_BLUR,
	active       = true,
	className,
	style,
}: InfiniteGalleryProps) {
	const [textures, setTextures] = useState<THREE.Texture[]>([]);

	useEffect(() => {
		let cancelled = false;
		const loader  = new THREE.TextureLoader();
		const loaded: THREE.Texture[] = [];

		Promise.all(
			images.map((src) =>
				loader.loadAsync(src).then(
					(tex) => {
						if (cancelled) { tex.dispose(); return null; }
						tex.colorSpace      = THREE.SRGBColorSpace;
						tex.generateMipmaps = false;
						tex.minFilter       = THREE.LinearFilter;
						loaded.push(tex);
						return tex;
					},
					() => null
				)
			)
		).then((result) => {
			if (!cancelled) setTextures(result.filter((t): t is THREE.Texture<HTMLImageElement> => t !== null));
		});

		return () => {
			cancelled = true;
			loaded.forEach((t) => t.dispose());
		};
	}, [images]);

	return (
		<div
			className={className}
			style={{ position: 'relative', width: '100%', height: '100%', background: '#0a0a0a', ...style }}
		>
			{textures.length > 0 && (
				<Canvas
					frameloop={active ? 'demand' : 'never'}
					dpr={[1, 1.5]}
					camera={{ position: [0, 0, 0], fov: 55 }}
					gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
					style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
				>
					<GalleryScene
						textures={textures}
						progress={progress}
						active={active}
						visibleCount={visibleCount}
						travel={travel}
						fadeSettings={fadeSettings}
						blurSettings={blurSettings}
					/>
				</Canvas>
			)}
		</div>
	);
}
