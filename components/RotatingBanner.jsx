"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function RotatingBanner() {
  return (
    <section className="bg-primary">
      <InfiniteMovingCards
        items={[
          { text: "Healing Not Hiding", gif: "/searching.gif" },
          { text: "Healing Not Hiding", gif: "/searching.gif" },
          { text: "Healing Not Hiding", gif: "/searching.gif" },
          { text: "Healing Not Hiding", gif: "/searching.gif" },
          { text: "Healing Not Hiding", gif: "/searching.gif" },
          { text: "Healing Not Hiding", gif: "/searching.gif" },
        ]}
      />
    </section>
  );
}
