"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative -top-20 flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      {/* Title & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: -20 }}
        transition={{ duration: 0.6 }}
        className="mt-60 max-w-3xl px-4"
      >
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
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8"
      >
        <Button
          size="lg"
          className="rounded-full px-8 py-6 text-lg bg-[#F36B1D] hover:bg-[#F36B1D]/70 text-white"
        >
          Get Started
        </Button>
      </motion.div>

      {/* Skateboard Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative"
      >
        <img
          src="/hero-animate.gif"
          alt="Skater"
          width={500}
          height={500}
          className="relative z-10"
        />
      </motion.div>
    </section>
  );
}
