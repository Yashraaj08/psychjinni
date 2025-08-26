"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative -top-32 flex flex-col items-center justify-center min-h-[80vh] md:min-h-screen text-center overflow-hidden px-4"
      style={{
        background:
          "linear-gradient(135deg, #a8c0ff 0%, #cfd9ff 30%, #e0c3fc 60%, #8ec5fc 100%)",
      }}
    >
      {/* Title & Subtitle */}
      <div className="mt-40 sm:mt-48 md:mt-60 max-w-2xl md:max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#5664FF] mb-4 leading-snug">
          Empowering Minds to Heal, Not Hide
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
          PsychJinni is your safe space for emotional healing, growth, and
          discovery. We believe each mind has strength, even in silence, and no
          one should need to conceal struggle. With understanding and
          compassion, we bring mental health within reach and stigma-free —
          walking alongside you throughout every step of your journey toward
          healing and growth.
        </p>
      </div>

      {/* Button & Media */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
        <a
          href="/contact-us"
          className="rounded-full px-6 sm:px-8 py-2 sm:py-3 cursor-pointer shadow-xl text-base sm:text-lg bg-[#F36B1D] hover:bg-[#F36B1D]/70 text-white transition"
        >
          Get Started
        </a>

        {/* Keep video option for later */}
        {/* <video
      src="/hero-animate.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="relative z-10 w-[250px] sm:w-[350px] md:w-[500px] h-auto"
    ></video> */}

        <img
          src="/hero-animate.gif"
          alt="Skater"
          className="relative z-10 w-[250px] sm:w-[350px] md:w-[500px] h-auto"
        />
      </div>
    </section>
  );
}
