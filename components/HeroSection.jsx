"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative -top-32 flex flex-col items-center justify-center min-h-screen text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #a8c0ff 0%, #cfd9ff 30%, #e0c3fc 60%, #8ec5fc 100%)",
      }}
    >
      {/* Title & Subtitle */}
      <div className="mt-60 max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#5664FF] mb-4">
          Empowering Minds to Heal, Not Hide
        </h1>
        <p className="text-lg md:text-xl text-slate-700">
          PsychJinni is your safe space for emotional healing, growth, and
          discovery. We believe each mind has strength, even in silence, and no
          one should need to conceal struggle. With understanding and
          compassion, we bring mental health within reach and stigma-free —
          walking alongside you throughout every step of your journey toward
          healing and growth.
        </p>
      </div>

      {/* Button */}
      <div className="mt-8 flex items-center gap-6">
        <a
          href="/contact-us"          
          className="rounded-full px-8 py-2 cursor-pointer shadow-xl text-lg bg-[#F36B1D] hover:bg-[#F36B1D]/70 text-white"
        >
          Get Started
        </a>

        {/* <video
          src="/hero-animate.mp4"
          autoPlay
          loop
          muted
          playsInline
          width={500}
          height={500}
          className="relative z-10"
        ></video> */}
        <img
          src="/hero-animate.gif"
          alt="Skater"
          width={500}
          height={500}
          className="relative z-10"
        />
      </div>
    </section>
  );
}
