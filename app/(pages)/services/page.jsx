"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "CORPORATES",
      image: "/home/corporate_home.mov",
      description:
        "Corporate wellness redefined—enabling teams to perform at their best with resilience, harmony, and maximum performance.",
      link: "/services/corporate",
    },
    {
      id: "02",
      title: "EDUCATIONAL",
      image: "/home/educational_home.mov",
      description:
        "Education wellness programs that construct healthier, more concentrated, and emotionally nurturing learning environments.",
      link: "/services/educational",
    },
    {
      id: "03",
      title: "INDIVIDUALS",
      image: "/home/individual_home.mov",
      description:
        "Each journey is individual—our programs lead you to heal, grow, and flourish at your own pace.",
      link: "/services/individual",
    },
    {
      id: "04",
      title: "RELATIONSHIP",
      image: "/home/relationship_home.mov",
      description:
        "Specialized programs for couples and families to enhance communication, deepen relationships, and develop healthy, supportive relationships.",
      link: "/services/relationship",
    },
    {
      id: "05",
      title: "SPIRITUALITY & MINDFULLNESS",
      image: "/home/spirituality_home.mov",
      description:
        "Specialized programs for couples and families to enhance communication, deepen relationships, and develop healthy, supportive relationships.",
      link: "/services/spirituality",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />

      {/* Hero Section */}
      <section className="top-10 relative flex items-center justify-center sm:justify-end overflow-hidden h-[60vh]">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full sm:w-1/2 h-full object-contain"
            src={"/home/approach.mov"} // your .mp4/.mov file
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/80 sm:bg-gradient-to-r sm:from-primary/20 sm:to-primary/60 lg:bg-gradient-to-r lg:from-primary/10 lg:to-primary/90"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center sm:text-right px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug text-white italic sm:leading-tight">
            Our Approach
          </h1>
        </div>
      </section>

      <div className="mt-20 bg-[#F36B1D]/80  rounded-2xl p-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.link}
              passHref
              className={`
                ${index === services.length - 1 ? "sm:col-span-2" : ""}
              `}
            >
              <Card className="relative border border-orange-200 shadow-md hover:shadow-lg transition-shadow rounded-xl cursor-pointer h-full">
                <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 w-full">
                  {/* Left Section - Title + Description */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-800 text-sm sm:text-base md:text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Section - Video */}
                  {service.image && (
                    <div className="flex-shrink-0 flex justify-center items-center">
                      <video
                        src={service.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="py-10">
        <div className="py-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
