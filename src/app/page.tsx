"use client";
import React, { useEffect, useRef, useState } from "react";

type dimension = {
  width: number;
  height: number;
};

export default function Home() {
  const [dimensions, setDimensions] = useState<dimension>({
    height: 0,
    width: 0,
  });

  const [sideWidth, setsideWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateDimensions() {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      setDimensions({
        width: newWidth,
        height: newHeight,
      });

      // Initialize sideWidth to half of screen width if not set
      if (sideWidth === 0) {
        setsideWidth(newWidth / 2);
      }
    }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [sideWidth]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();

    const startX = e.clientX;
    const startWidth = sideWidth;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const newWidth = startWidth + (e.clientX - startX);
        const minWidth = 600; // Minimum width for left panel
        const maxWidth = dimensions.width - 400; // Leave minimum width for right panel

        // Clamp values so user can't drag beyond limits
        if (newWidth >= minWidth && newWidth <= maxWidth) {
          setsideWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  if (dimensions?.width < 768) {
    return <div>Loading...</div>;
  }

  const rightPanelWidth = dimensions.width - sideWidth - 4; // Subtract 4px for the divider

  return (
    <div className="h-screen w-screen">
      <div
        ref={containerRef}
        className="flex flex-1 flex-row items-center justify-between h-full"
      >
        <div
          style={{ width: sideWidth }}
          className="bg-white h-full min-w-[600px]"
        ></div>
        <div
          onMouseDown={handleMouseDown}
          className="h-full bg-black/5 hover:bg-black/[0.07] w-1 cursor-ew-resize"
        ></div>
        <div
          style={{ width: rightPanelWidth }}
          className="rich-bg h-full min-w-[400px]"
        ></div>
      </div>
    </div>
  );
}
