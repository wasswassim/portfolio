"use client";

import { useEffect } from "react";

export function UnicornStudio() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head||document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(script);

    // screen blend mode: black → transparent, white drawing → visible over green bg
    const style = document.createElement("style");
    style.textContent = `
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] {
        mix-blend-mode: screen;
      }
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] canvas {
        mix-blend-mode: screen;
        clip-path: inset(0 0 10% 0) !important;
      }
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] a[href*="unicorn"],
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] [class*="brand"],
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] [class*="credit"],
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] [class*="watermark"] {
        display: none !important;
        opacity: 0 !important;
        pointer-events: none !important;
        position: absolute !important;
        left: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      try { document.head.removeChild(script); } catch { /* already removed */ }
      try { document.head.removeChild(style);  } catch { /* already removed */ }
    };
  }, []);

  return (
    <div
      data-us-project="whwOGlfJ5Rz2rHaEUgHl"
      style={{ width: "100%", height: "100%", mixBlendMode: "screen" }}
    />
  );
}
