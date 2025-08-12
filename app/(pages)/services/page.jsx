"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import React from "react";

export default function Services() {
  return (
    <div>
      <Header />

      <div className="mt-20">
        <ServicesSection />
      </div>

      <Footer />
    </div>
  );
}
