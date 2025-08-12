"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Button } from "@/components/ui/button";

const stats = [
  { value: 400, suffix: "+", label: "Lorem Ipsum has been the industry's" },
  { value: 89, suffix: "K+", label: "Lorem Ipsum has been the industry's" },
  { value: 92, suffix: "%", label: "Lorem Ipsum has been the industry's" },
  { value: 50, suffix: "L+", label: "Lorem Ipsum has been the industry's" },
];

function AnimatedCounter({ target, suffix }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return controls.stop;
  }, [count, target]);

  return (
    <motion.p
      className="text-4xl font-extrabold text-white sm:text-5xl"
      aria-label={`${display}${suffix}`}
    >
      {display}
      {suffix}
    </motion.p>
  );
}

export default function StatsSection() {
  return (
    <section className="wave-bg relative py-16 px-4 sm:px-8 text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          lorem ipsum has been thr srted
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-blue-100 max-w-3xl mx-auto">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and standard dummy text ever since,
          when an unknown printer took a galley of type
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-white text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 text-lg">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
