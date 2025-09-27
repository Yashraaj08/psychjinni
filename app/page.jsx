"use client";

import ChartSection from "@/components/ChartSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RotatingBanner from "@/components/RotatingBanner";
import OurServices from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Navbar */}
      <Header />
      <HeroSection />
      <RotatingBanner />

      <OurServices />

      <StatsSection />
      <ChartSection />

      <TestimonialsSection />
      <RotatingBanner />

      {/* <ContactForm /> */}

      <div className="py-10">
        <Footer />
      </div>
    </div>
  );
}
