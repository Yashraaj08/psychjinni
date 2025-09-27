"use client";
import React from "react";
import clsx from "clsx";

/**
 * HeroVideoSection
 * @param {string} title - The main title (can include <br/> for line breaks)
 * @param {string} videoSrc - The video file path (e.g. "/home/corporate-inside.mov")
 * @param {string} [bgOverlay] - Optional Tailwind classes for overlay gradient
 * @param {boolean} [breakTitle=false] - If true, allows <br/> in title, else renders as plain text
 * @param {string} [className] - Additional classes for the section
 */
const HeroVideoSection = ({
  title,
  videoSrc,
  bgOverlay = "bg-gradient-to-r from-primary/20 to-primary/80 sm:bg-gradient-to-r sm:from-primary/20 sm:to-primary/60 lg:bg-gradient-to-r lg:from-primary/10 lg:to-primary/90",
  breakTitle = false,
  className = "",
}) => (
  <section
    className={clsx(
      "top-10 relative flex flex-col md:flex-row items-center justify-center md:justify-end overflow-hidden h-auto md:h-[60vh]",
      className
    )}
  >
    {/* Overlay background (always behind everything) */}
    <div className={clsx("absolute inset-0 w-full h-full z-10", bgOverlay)} />

    {/* Background Video (desktop only, above overlay) */}
    <div className="hidden md:block absolute inset-0 w-full h-full ">
      <img
        className="w-full md:w-1/2 h-full object-cover"
        src={videoSrc}
      />
    </div>

    {/* Video for mobile (stacked, not background, above overlay) */}
    <div className="w-full md:hidden -my-20">
      <img
        className="w-full h-full sm:h-48 object-contain sm:object-cover"
        src={videoSrc}
      />
    </div>

    {/* Text Content (always above everything) */}
    <div className="relative z-20 text-center md:text-right px-4 sm:px-6 md:px-8 w-full md:w-1/2 flex flex-col justify-center items-center md:items-end py-8 md:py-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-white md:text-white italic sm:leading-tight drop-shadow-lg md:drop-shadow-none">
        {breakTitle ? (
          <span dangerouslySetInnerHTML={{ __html: title }} />
        ) : (
          title
        )}
      </h1>
    </div>
  </section>
);

export default HeroVideoSection;
