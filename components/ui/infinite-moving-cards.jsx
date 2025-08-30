"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "medium",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      // Remove previous duplicates if any
      while (scrollerRef.current.children.length > items.length) {
        scrollerRef.current.removeChild(scrollerRef.current.lastChild);
      }
      // Duplicate only the original items for seamless loop
      const scrollerContent = Array.from(scrollerRef.current.children).slice(0, items.length);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full max-w-8xl overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center justify-center" // uniform horizontal padding for all
            style={{ gap: "1rem" }} // uniform gap between gif and text
          >
            <span className="flex items-center justify-center px-4 py-2">
              <img
                src={item.gif}
                alt={item.text}
                className="h-9 sm:h-10 md:h-12 w-auto object-contain bg-white rounded-full p-0.1"
              />
              <span className="ml-6 text-base sm:text-lg md:text-xl font-bold text-white whitespace-nowrap">
                {item.text}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
