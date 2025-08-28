"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[100vh] md:min-h-screen text-center overflow-hidden px-4"
      style={{
        background:
          "linear-gradient(125deg, #a8c0ff 0%, #cfd9ff 30%, #e0c3fc 60%, #8ec5fc 100%)",
      }}
    >
      {/* Title & Subtitle */}
      <div className="mt-40 sm:mt-48 md:mt-60 max-w-2xl md:max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black italic mb-4 leading-snug">
          Empowering Minds to Heal, Not Hide
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 font-semibold leading-relaxed">
          PsychJinni is your safe space for emotional healing, growth, and
          discovery. We believe each mind has strength, even in silence, and no
          one should need to conceal struggle. With understanding and
          compassion, we bring mental health within reach and stigma-free —
          walking alongside you throughout every step of your journey toward
          healing and growth.
        </p>
      </div>

      {/* Button & Media */}
      <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
        <a
          href="/contact-us"
          className="rounded-full px-6 sm:px-8 my-5 sm:my-0 py-2 sm:py-3 cursor-pointer shadow-xl text-base sm:text-lg bg-[#F36B1D] hover:bg-[#F36B1D]/70 text-white transition"
        >
          Get Started
        </a>

        {/* Hero Video */}
        <div className="z-10">
          <video
            src="/alternative-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[250px] sm:w-[350px] md:w-[400px] h-auto"
          />
        </div>
      </div>
      {/* Clouds Layered Behind Video */}
      <div className="hidden sm:flex relative w-full justify-center mt-[-90px] bottom-0">
        {/* Container with explicit height */}
        <div className="relative w-full h-[500px] sm:h-[500px] md:h-[500px] lg:h-[500px]">
          {/* Back Cloud */}
          <Image
            src="/clouds-back.png"
            alt="Clouds Background"
            fill
            className="object-contain z-0"
          />
          {/* Front Cloud */}
          <Image
            src="/clouds-front.png"
            alt="Clouds Foreground"
            fill
            className="object-contain z-10 -mt-10 md:mt-4"
          />
        </div>
      </div>
    </section>
  );
}
