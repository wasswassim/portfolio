import type Lenis from "lenis";

// Module-level singleton so any component can stop/start the scroll lock
// without prop-drilling or context overhead.
let instance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => { instance = l; };
export const getLenis = (): Lenis | null => instance;
