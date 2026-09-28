"use client";

import {
  createContext,
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import Matter, {
  Bodies,
  Body,
  Common,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Query,
  Render,
  World,
} from "matter-js";

function calculatePosition(
  value: number | string | undefined,
  containerSize: number,
  elementSize: number
) {
  if (typeof value === "string" && value.endsWith("%")) {
    const percentage = parseFloat(value) / 100;
    return containerSize * percentage;
  }
  return typeof value === "number"
    ? value
    : elementSize - containerSize + elementSize / 2;
}

type GravityProps = {
  children: ReactNode;
  debug?: boolean;
  gravity?: { x: number; y: number };
  resetOnResize?: boolean;
  grabCursor?: boolean;
  addTopWall?: boolean;
  autoStart?: boolean;
  /** Start/stop the simulation automatically as the container enters/leaves the viewport. */
  runWhenVisible?: boolean;
  className?: string;
};

type PhysicsBody = {
  element: HTMLElement;
  body: Matter.Body;
  props: MatterBodyProps;
  w: number;
  h: number;
  // last written transform — lets us skip DOM writes for resting bodies
  lx: number;
  ly: number;
  la: number;
};

type MatterBodyProps = {
  children: ReactNode;
  matterBodyOptions?: Matter.IBodyDefinition;
  isDraggable?: boolean;
  bodyType?: "rectangle" | "circle";
  x?: number | string;
  y?: number | string;
  angle?: number;
  className?: string;
};

export type GravityRef = {
  start: () => void;
  stop: () => void;
  reset: () => void;
};

const GravityContext = createContext<{
  registerElement: (id: string, element: HTMLElement, props: MatterBodyProps) => void;
  unregisterElement: (id: string) => void;
} | null>(null);

// Fixed physics step (same as Matter.Runner's default) so speed doesn't
// depend on the display refresh rate.
const STEP = 1000 / 60;
const MAX_STEPS = 3;

export const MatterBody = ({
  children,
  className,
  matterBodyOptions = {
    friction: 0.1,
    restitution: 0.1,
    density: 0.001,
    isStatic: false,
  },
  bodyType = "rectangle",
  isDraggable = true,
  x = 0,
  y = 0,
  angle = 0,
  ...props
}: MatterBodyProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(Math.random().toString(36).substring(7));
  const context = useContext(GravityContext);

  useEffect(() => {
    if (!elementRef.current || !context) return;
    const id = idRef.current;
    context.registerElement(id, elementRef.current, {
      children,
      matterBodyOptions,
      bodyType,
      isDraggable,
      x,
      y,
      angle,
      ...props,
    });
    return () => context.unregisterElement(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={elementRef}
      className={`absolute ${className ?? ""} ${isDraggable ? "pointer-events-none" : ""}`}
      style={{ top: 0, left: 0, willChange: "transform" }}
    >
      {children}
    </div>
  );
};

export const Gravity = forwardRef<GravityRef, GravityProps>(
  (
    {
      children,
      debug = false,
      gravity = { x: 0, y: 1 },
      grabCursor = true,
      resetOnResize = true,
      addTopWall = true,
      autoStart = true,
      runWhenVisible = false,
      className,
      ...props
    },
    ref
  ) => {
    const canvas = useRef<HTMLDivElement>(null);
    const engine = useRef<Matter.Engine | null>(null);
    if (!engine.current) engine.current = Engine.create();
    const render          = useRef<Render | undefined>(undefined);
    const bodiesMap       = useRef(new Map<string, PhysicsBody>());
    const walls           = useRef<Matter.Body[]>([]);
    const frameId         = useRef<number | undefined>(undefined);
    const lastTime        = useRef(0);
    const acc             = useRef(0);
    const mouseConstraint = useRef<Matter.MouseConstraint | undefined>(undefined);
    const detachInput     = useRef<(() => void) | undefined>(undefined);
    const mouseDown       = useRef(false);
    const size            = useRef({ width: 0, height: 0 });
    const isRunning       = useRef(false);

    // ── DOM sync ──────────────────────────────────────────────────────────
    const syncEntry = (entry: PhysicsBody, force = false) => {
      const { x, y } = entry.body.position;
      const a = entry.body.angle;
      if (!force && Math.abs(x - entry.lx) < 0.05 && Math.abs(y - entry.ly) < 0.05 && Math.abs(a - entry.la) < 0.001) return;
      entry.lx = x; entry.ly = y; entry.la = a;
      entry.element.style.transform =
        `translate3d(${x - entry.w / 2}px, ${y - entry.h / 2}px, 0) rotate(${a * (180 / Math.PI)}deg)`;
    };

    const syncAll = useCallback((force = false) => {
      bodiesMap.current.forEach((entry) => syncEntry(entry, force));
    }, []);

    const placeBody = (entry: PhysicsBody) => {
      const { width, height } = size.current;
      const x = calculatePosition(entry.props.x, width, entry.w);
      const y = calculatePosition(entry.props.y, height, entry.h);
      Body.setPosition(entry.body, { x, y });
      Body.setAngle(entry.body, (entry.props.angle || 0) * (Math.PI / 180));
      Body.setVelocity(entry.body, { x: 0, y: 0 });
      Body.setAngularVelocity(entry.body, 0);
    };

    // ── Body registration ─────────────────────────────────────────────────
    const registerElement = useCallback(
      (id: string, element: HTMLElement, props: MatterBodyProps) => {
        if (!canvas.current) return;
        const w = element.offsetWidth;
        const h = element.offsetHeight;
        if (!size.current.width) {
          size.current = { width: canvas.current.offsetWidth, height: canvas.current.offsetHeight };
        }
        const x = calculatePosition(props.x, size.current.width, w);
        const y = calculatePosition(props.y, size.current.height, h);
        const angle = (props.angle || 0) * (Math.PI / 180);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const bodyOpts = props.matterBodyOptions as any;
        const sharedOpts = {
          ...bodyOpts,
          angle,
          render: {
            fillStyle:   debug ? "#888888" : "#00000000",
            strokeStyle: debug ? "#333333" : "#00000000",
            lineWidth:   debug ? 3 : 0,
          },
        };

        const body = props.bodyType === "circle"
          ? Bodies.circle(x, y, Math.max(w, h) / 2, sharedOpts)
          : Bodies.rectangle(x, y, w, h, sharedOpts);

        World.add(engine.current!.world, [body]);
        const entry: PhysicsBody = { element, body, props, w, h, lx: NaN, ly: NaN, la: NaN };
        bodiesMap.current.set(id, entry);
        syncEntry(entry, true);
      },
      [debug]
    );

    const unregisterElement = useCallback((id: string) => {
      const entry = bodiesMap.current.get(id);
      if (entry) {
        World.remove(engine.current!.world, entry.body);
        bodiesMap.current.delete(id);
      }
    }, []);

    // ── Loop — one rAF drives both physics and DOM ─────────────────────────
    const loop = useCallback((time: number) => {
      const dt = lastTime.current ? Math.min(time - lastTime.current, STEP * MAX_STEPS) : STEP;
      lastTime.current = time;
      acc.current += dt;
      let steps = 0;
      while (acc.current >= STEP && steps < MAX_STEPS) {
        Engine.update(engine.current!, STEP);
        acc.current -= STEP;
        steps++;
      }
      if (steps) syncAll();
      frameId.current = requestAnimationFrame(loop);
    }, [syncAll]);

    const startEngine = useCallback(() => {
      if (isRunning.current) return;
      isRunning.current = true;
      lastTime.current = 0;
      acc.current = 0;
      if (render.current) Render.run(render.current);
      frameId.current = requestAnimationFrame(loop);
    }, [loop]);

    const stopEngine = useCallback(() => {
      if (!isRunning.current) return;
      isRunning.current = false;
      if (frameId.current) cancelAnimationFrame(frameId.current);
      frameId.current = undefined;
      if (render.current) Render.stop(render.current);
    }, []);

    // ── World setup (walls, mouse, optional debug renderer) ───────────────
    const buildWorld = useCallback(() => {
      const el = canvas.current;
      if (!el) return;
      const eng = engine.current!;
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      size.current = { width, height };

      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        Common.setDecomp(require("poly-decomp"));
      } catch {
        // only needed for concave SVG bodies
      }

      eng.gravity.x = gravity.x;
      eng.gravity.y = gravity.y;

      // The canvas renderer only draws invisible bodies unless debugging,
      // so skip it entirely — saves a full-size canvas redraw every frame.
      if (debug) {
        render.current = Render.create({
          element: el,
          engine: eng,
          options: { width, height, wireframes: false, background: "#00000000" },
        });
        render.current.canvas.style.pointerEvents = "none";
      }

      const m = Mouse.create(el);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mm = m as any;
      // Matter binds a non-passive wheel listener (blocks page scroll) and
      // touch listeners that preventDefault anywhere in the zone. Drop them;
      // touch is re-added below so it only captures touches that land on a body.
      el.removeEventListener("wheel",      mm.mousewheel);
      el.removeEventListener("touchmove",  mm.mousemove);
      el.removeEventListener("touchstart", mm.mousedown);
      el.removeEventListener("touchend",   mm.mouseup);

      // Everything added below registers its own remover here
      const cleanups: (() => void)[] = [];
      detachInput.current = () => cleanups.forEach((f) => f());
      cleanups.push(() => {
        el.removeEventListener("mousemove", mm.mousemove);
        el.removeEventListener("mousedown", mm.mousedown);
        el.removeEventListener("mouseup",   mm.mouseup);
      });

      const bodyAt = (e: TouchEvent) => {
        const t = e.touches[0] ?? e.changedTouches[0];
        if (!t) return false;
        const r = el.getBoundingClientRect();
        return Query.point(
          Array.from(bodiesMap.current.values(), (b) => b.body),
          { x: t.clientX - r.left, y: t.clientY - r.top }
        ).length > 0;
      };
      // Only touchstart is non-passive up front. Move/end listeners go on when
      // a touch lands on a pill and come off when it ends, so swipes elsewhere
      // never wait on JS.
      const opts = { passive: false };
      const onTouchMove = (e: TouchEvent) => mm.mousemove(e);
      const onTouchEnd  = (e: TouchEvent) => {
        mm.mouseup(e);
        stopDrag();
      };
      const stopDrag = () => {
        el.removeEventListener("touchmove",   onTouchMove);
        el.removeEventListener("touchend",    onTouchEnd);
        el.removeEventListener("touchcancel", onTouchEnd);
      };
      const onTouchStart = (e: TouchEvent) => {
        if (!bodyAt(e)) return;
        mm.mousedown(e);
        el.addEventListener("touchmove",   onTouchMove, opts);
        el.addEventListener("touchend",    onTouchEnd,  opts);
        el.addEventListener("touchcancel", onTouchEnd,  opts);
      };
      el.addEventListener("touchstart", onTouchStart, opts);
      cleanups.push(() => el.removeEventListener("touchstart", onTouchStart), stopDrag);

      mouseConstraint.current = MouseConstraint.create(eng, {
        mouse: m,
        constraint: { stiffness: 0.2, render: { visible: debug } },
      });

      const wallOpts = { isStatic: true, friction: 1, render: { visible: debug } };
      const wall = (x: number, y: number, w: number, h: number) => Bodies.rectangle(x, y, w, h, wallOpts);
      walls.current = [
        wall(width / 2, height + 10, width, 20),
        wall(width + 10, height / 2, 20, height),
        wall(-10, height / 2, 20, height),
      ];
      if (addTopWall) walls.current.push(wall(width / 2, -10, width, 20));

      const touchingMouse = () =>
        Query.point(eng.world.bodies, mouseConstraint.current?.mouse.position || { x: 0, y: 0 }).length > 0;

      if (grabCursor) {
        const onBeforeUpdate = () => {
          el.style.cursor = touchingMouse() ? (mouseDown.current ? "grabbing" : "grab") : "default";
        };
        const onDown = () => {
          mouseDown.current = true;
          el.style.cursor = touchingMouse() ? "grabbing" : "default";
        };
        const onUp = () => {
          mouseDown.current = false;
          el.style.cursor = touchingMouse() ? "grab" : "default";
        };
        Events.on(eng, "beforeUpdate", onBeforeUpdate);
        cleanups.push(() => Events.off(eng, "beforeUpdate", onBeforeUpdate));
        el.addEventListener("mousedown", onDown);
        cleanups.push(() => el.removeEventListener("mousedown", onDown));
        el.addEventListener("mouseup", onUp);
        cleanups.push(() => el.removeEventListener("mouseup", onUp));
      }

      World.add(eng.world, [mouseConstraint.current, ...walls.current]);
      if (render.current) render.current.mouse = m;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debug, addTopWall, grabCursor]);

    const teardownWorld = useCallback(() => {
      const eng = engine.current!;
      detachInput.current?.();
      detachInput.current = undefined;
      if (mouseConstraint.current) World.remove(eng.world, mouseConstraint.current);
      // MouseConstraint.create registers its own beforeUpdate handler; without
      // this every rebuild would leave one more running on each physics step
      Events.off(eng, "beforeUpdate");
      if (walls.current.length) World.remove(eng.world, walls.current);
      walls.current = [];
      if (render.current) {
        Render.stop(render.current);
        render.current.canvas.remove();
        render.current = undefined;
      }
    }, []);

    // Resize keeps the registered bodies — only walls/mouse are rebuilt and
    // bodies are put back at their start positions.
    const rebuild = useCallback(() => {
      const wasRunning = isRunning.current;
      stopEngine();
      teardownWorld();
      buildWorld();
      bodiesMap.current.forEach(placeBody);
      syncAll(true);
      if (wasRunning) startEngine();
    }, [stopEngine, teardownWorld, buildWorld, syncAll, startEngine]);

    useImperativeHandle(ref, () => ({ start: startEngine, stop: stopEngine, reset: rebuild }), [
      startEngine,
      stopEngine,
      rebuild,
    ]);

    // Mount / unmount
    useEffect(() => {
      const eng = engine.current!;
      const bodies = bodiesMap.current;
      buildWorld();
      syncAll(true);
      if (autoStart && !runWhenVisible) startEngine();
      return () => {
        stopEngine();
        teardownWorld();
        World.clear(eng.world, false);
        Engine.clear(eng);
        bodies.clear();
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Rebuild only when the width actually changes — phones fire resize
    // constantly as the URL bar shows/hides.
    useEffect(() => {
      if (!resetOnResize) return;
      let t: ReturnType<typeof setTimeout> | undefined;
      const onResize = () => {
        clearTimeout(t);
        t = setTimeout(() => {
          const el = canvas.current;
          if (!el || el.offsetWidth === size.current.width) return;
          rebuild();
        }, 300);
      };
      window.addEventListener("resize", onResize, { passive: true });
      return () => {
        clearTimeout(t);
        window.removeEventListener("resize", onResize);
      };
    }, [rebuild, resetOnResize]);

    // Pause when offscreen and when the tab is hidden.
    useEffect(() => {
      const el = canvas.current;
      let visible = !runWhenVisible;
      let wasRunning = false;
      const update = () => {
        if (visible && !document.hidden && (runWhenVisible || wasRunning)) startEngine();
        else stopEngine();
      };

      let io: IntersectionObserver | undefined;
      if (runWhenVisible && el) {
        io = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          update();
        });
        io.observe(el);
      }

      const onVisibilityChange = () => {
        if (document.hidden) {
          wasRunning = isRunning.current;
          stopEngine();
        } else {
          update();
        }
      };
      document.addEventListener("visibilitychange", onVisibilityChange);
      return () => {
        io?.disconnect();
        document.removeEventListener("visibilitychange", onVisibilityChange);
      };
    }, [runWhenVisible, startEngine, stopEngine]);

    return (
      <GravityContext.Provider value={{ registerElement, unregisterElement }}>
        <div
          ref={canvas}
          className={`absolute top-0 left-0 w-full h-full ${className ?? ""}`}
          {...props}
        >
          {children}
        </div>
      </GravityContext.Provider>
    );
  }
);

Gravity.displayName = "Gravity";
