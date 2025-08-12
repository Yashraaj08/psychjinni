"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function RotatingBanner() {
  const textItems = Array(10).fill({
    name: "",
    title: "",
    quote: "Healing Not Hiding",
  });

  return (
    <section className="bg-primary">
      <InfiniteMovingCards
        items={textItems}
        direction="left"
        speed="normal"
        pauseOnHover={false}
        className="[mask-image:none]" // remove fade mask if you want full text
      />
    </section>
  );
}
