"use client";

import { useState } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { motion, AnimatePresence } from "framer-motion";
import { encode } from "qss";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  /** When true, display imageSrc directly instead of generating a screenshot. */
  isStatic?: boolean;
  imageSrc?: string;
};

export function LinkPreview({
  children,
  url,
  className,
  style,
  width = 200,
  height = 125,
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) {
  const [open, setOpen] = useState(false);

  const previewSrc = isStatic
    ? imageSrc
    : `https://api.microlink.io/?${encode({
        url,
        screenshot: true,
        meta: false,
        embed: "screenshot.url",
        colorScheme: "dark",
        "viewport.isMobile": true,
        "viewport.deviceScaleFactor": 1,
        "viewport.width": width * 3,
        "viewport.height": height * 3,
      })}`;

  return (
    <HoverCardPrimitive.Root openDelay={50} closeDelay={100} onOpenChange={setOpen}>
      <HoverCardPrimitive.Trigger asChild>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          style={style}
        >
          {children}
        </a>
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Portal>
        {/* forceMount keeps the node alive so AnimatePresence can run exit animations */}
        <HoverCardPrimitive.Content
          forceMount
          side="top"
          align="center"
          sideOffset={12}
          avoidCollisions
          style={{ outline: "none", zIndex: 99999 }}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                key="preview"
                initial={{ opacity: 0, y: 12, scale: 0.88 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.88 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                style={{
                  width,
                  height,
                  borderRadius: 8,
                  overflow: "hidden",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewSrc}
                  width={width}
                  height={height}
                  alt="link preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  );
}
