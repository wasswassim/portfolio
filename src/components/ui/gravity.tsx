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
  useState,
} from "react";
import { debounce } from "lodash";
import Matter, {
  Bodies,
  Common,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Query,
  Render,
  Runner,
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
  className?: string;
};

type PhysicsBody = {
  element: HTMLElement;
  body: Matter.Body;
  props: MatterBodyProps;
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
      className,
      ...props
    },
    ref
  ) => {
    const canvas = useRef<HTMLDivElement>(null);
    const engine = useRef(Engine.create());
    const render          = useRef<Render | undefined>(undefined);
    const runner          = useRef<Runner | undefined>(undefined);
    const bodiesMap       = useRef(new Map<string, PhysicsBody>());
    const frameId         = useRef<number | undefined>(undefined);
    const mouseConstraint = useRef<Matter.MouseConstraint | undefined>(undefined);
    const mouseDown = useRef(false);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
    const isRunning = useRef(false);

    const registerElement = useCallback(
      (id: string, element: HTMLElement, props: MatterBodyProps) => {
        if (!canvas.current) return;
        const width = element.offsetWidth;
        const height = element.offsetHeight;
        const canvasRect = canvas.current.getBoundingClientRect();
        const angle = (props.angle || 0) * (Math.PI / 180);
        const x = calculatePosition(props.x, canvasRect.width, width);
        const y = calculatePosition(props.y, canvasRect.height, height);

        // Strip null from matterBodyOptions before passing to Matter.js Bodies —
        // IBodyDefinition.chamfer is IChamfer|undefined but the user-facing prop
        // allows null to make it easier to spread conditionally.
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

        let body: Matter.Body;
        if (props.bodyType === "circle") {
          const radius = Math.max(width, height) / 2;
          body = Bodies.circle(x, y, radius, sharedOpts);
        } else {
          body = Bodies.rectangle(x, y, width, height, sharedOpts);
        }

        World.add(engine.current.world, [body]);
        bodiesMap.current.set(id, { element, body, props });
      },
      [debug]
    );

    const unregisterElement = useCallback((id: string) => {
      const entry = bodiesMap.current.get(id);
      if (entry) {
        World.remove(engine.current.world, entry.body);
        bodiesMap.current.delete(id);
      }
    }, []);

    const updateElements = useCallback(() => {
      bodiesMap.current.forEach(({ element, body }) => {
        const { x, y } = body.position;
        const rotation = body.angle * (180 / Math.PI);
        element.style.transform = `translate(${x - element.offsetWidth / 2}px, ${
          y - element.offsetHeight / 2
        }px) rotate(${rotation}deg)`;
      });
      frameId.current = requestAnimationFrame(updateElements);
    }, []);

    const initializeRenderer = useCallback(() => {
      if (!canvas.current) return;
      const height = canvas.current.offsetHeight;
      const width = canvas.current.offsetWidth;

      // poly-decomp: safe dynamic require (only needed for concave SVG bodies)
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        Common.setDecomp(require("poly-decomp"));
      } catch {
        // not needed for rectangle/circle bodies
      }

      engine.current.gravity.x = gravity.x;
      engine.current.gravity.y = gravity.y;

      render.current = Render.create({
        element: canvas.current,
        engine: engine.current,
        options: {
          width,
          height,
          wireframes: false,
          background: "#00000000",
        },
      });

      // Bind mouse to the container div, not the canvas, so the canvas
      // can be pointer-events:none and never block page scroll.
      const mouse = Mouse.create(canvas.current!);

      // Matter.js v0.20 registers a non-passive 'wheel' listener (and legacy
      // aliases) that calls event.preventDefault(), blocking page scroll.
      // Remove all three so wheel events propagate normally to the document.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mouseAny = mouse as any;
      mouse.element.removeEventListener("wheel",           mouseAny.mousewheel);
      mouse.element.removeEventListener("mousewheel",      mouseAny.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll",  mouseAny.mousewheel);

      // The canvas itself must not capture any events — it is purely visual.
      if (render.current.canvas) {
        render.current.canvas.style.pointerEvents = "none";
      }

      mouseConstraint.current = MouseConstraint.create(engine.current, {
        mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: debug },
        },
      });

      const walls = [
        Bodies.rectangle(width / 2, height + 10, width, 20, {
          isStatic: true,
          friction: 1,
          render: { visible: debug },
        }),
        Bodies.rectangle(width + 10, height / 2, 20, height, {
          isStatic: true,
          friction: 1,
          render: { visible: debug },
        }),
        Bodies.rectangle(-10, height / 2, 20, height, {
          isStatic: true,
          friction: 1,
          render: { visible: debug },
        }),
      ];

      if (addTopWall) {
        walls.push(
          Bodies.rectangle(width / 2, -10, width, 20, {
            isStatic: true,
            friction: 1,
            render: { visible: debug },
          })
        );
      }

      const touchingMouse = () =>
        Query.point(
          engine.current.world.bodies,
          mouseConstraint.current?.mouse.position || { x: 0, y: 0 }
        ).length > 0;

      if (grabCursor) {
        Events.on(engine.current, "beforeUpdate", () => {
          if (canvas.current) {
            canvas.current.style.cursor =
              !mouseDown.current && !touchingMouse()
                ? "default"
                : touchingMouse()
                ? mouseDown.current
                  ? "grabbing"
                  : "grab"
                : "default";
          }
        });
        canvas.current.addEventListener("mousedown", () => {
          mouseDown.current = true;
          if (canvas.current)
            canvas.current.style.cursor = touchingMouse() ? "grabbing" : "default";
        });
        canvas.current.addEventListener("mouseup", () => {
          mouseDown.current = false;
          if (canvas.current)
            canvas.current.style.cursor = touchingMouse() ? "grab" : "default";
        });
      }

      World.add(engine.current.world, [mouseConstraint.current, ...walls]);
      render.current.mouse = mouse;
      runner.current = Runner.create();
      Render.run(render.current);
      updateElements();
      runner.current.enabled = false;

      if (autoStart) {
        runner.current.enabled = true;
        startEngine();
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateElements, debug, autoStart]);

    const clearRenderer = useCallback(() => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
      if (mouseConstraint.current) World.remove(engine.current.world, mouseConstraint.current);
      if (render.current) {
        Mouse.clearSourceEvents(render.current.mouse);
        Render.stop(render.current);
        render.current.canvas.remove();
      }
      if (runner.current) Runner.stop(runner.current);
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      bodiesMap.current.clear();
    }, []);

    const handleResize = useCallback(() => {
      if (!canvas.current || !resetOnResize) return;
      setCanvasSize({
        width: canvas.current.offsetWidth,
        height: canvas.current.offsetHeight,
      });
      clearRenderer();
      initializeRenderer();
    }, [clearRenderer, initializeRenderer, resetOnResize]);

    const startEngine = useCallback(() => {
      if (isRunning.current) return; // guard: already running, don't double-start rAF
      if (runner.current) {
        runner.current.enabled = true;
        Runner.run(runner.current, engine.current);
      }
      if (render.current) Render.run(render.current);
      frameId.current = requestAnimationFrame(updateElements);
      isRunning.current = true;
    }, [updateElements]);

    const stopEngine = useCallback(() => {
      if (!isRunning.current) return;
      if (runner.current) Runner.stop(runner.current);
      if (render.current) Render.stop(render.current);
      if (frameId.current) cancelAnimationFrame(frameId.current);
      isRunning.current = false;
    }, []);

    const reset = useCallback(() => {
      stopEngine();
      bodiesMap.current.forEach(({ element, body, props }) => {
        body.angle = props.angle || 0;
        const x = calculatePosition(props.x, canvasSize.width, element.offsetWidth);
        const y = calculatePosition(props.y, canvasSize.height, element.offsetHeight);
        body.position.x = x;
        body.position.y = y;
      });
      updateElements();
      handleResize();
    }, [stopEngine, canvasSize, updateElements, handleResize]);

    useImperativeHandle(ref, () => ({ start: startEngine, stop: stopEngine, reset }), [
      startEngine,
      stopEngine,
      reset,
    ]);

    useEffect(() => {
      if (!resetOnResize) return;
      const debouncedResize = debounce(handleResize, 500);
      window.addEventListener("resize", debouncedResize);
      return () => {
        window.removeEventListener("resize", debouncedResize);
        debouncedResize.cancel();
      };
    }, [handleResize, resetOnResize]);

    useEffect(() => {
      initializeRenderer();
      return clearRenderer;
    }, [initializeRenderer, clearRenderer]);

    // Pause physics and rAF when the tab is hidden; resume only if engine
    // was already running so autoStart=false components stay paused on return.
    useEffect(() => {
      const wasRunning = { current: false };
      const onVisibilityChange = () => {
        if (document.hidden) {
          wasRunning.current = isRunning.current;
          stopEngine();
        } else if (wasRunning.current) {
          startEngine();
        }
      };
      document.addEventListener("visibilitychange", onVisibilityChange);
      return () => document.removeEventListener("visibilitychange", onVisibilityChange);
    }, [startEngine, stopEngine]);

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
