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
      description:
        "Corporate wellness redefined—enabling teams to perform at their best with resilience, harmony, and maximum performance.",
      link: "/services/corporate",
    },
    {
      id: "02",
      title: "EDUCATIONAL",
      description:
        "Education wellness programs that construct healthier, more concentrated, and emotionally nurturing learning environments.",
      link: "/services/educational",
    },
    {
      id: "03",
      title: "INDIVIDUALS",
      description:
        "Each journey is individual—our programs lead you to heal, grow, and flourish at your own pace.",
      link: "/services/individual",
    },
    {
      id: "04",
      title: "RELATIONSHIP",
      description:
        "Specialized programs for couples and families to enhance communication, deepen relationships, and develop healthy, supportive relationships.",
      link: "/services/relationship",
    },
    {
      id: "05",
      title: "Spirituality & Mindfulness",
      description:
        "Specialized programs for couples and families to enhance communication, deepen relationships, and develop healthy, supportive relationships.",
      link: "/services/spirituality",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #a8c0ff 0%, #cfd9ff 30%, #e0c3fc 60%, #8ec5fc 100%)",
      }}
    >
      <Header />

      <section className="-top-40 relative flex items-center overflow-hidden h-[50vh] sm:h-[60vh] md:h-[60vh] lg:h-[60vh]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/contact-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        </div>

        {/* Text Content */}
        <div className="top-20 relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-2xl md:max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
              Our Approach
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Your mind is unique, and so is the healing process. We blend
              creativity and compassion to design programs that enable you to
              develop, thrive, and live on your terms at{" "}
              <span className="font-semibold">PsychJinni</span>.
            </p>
          </div>
        </div>
      </section>

      <div className="-mt-20 bg-yellow-400 rounded-2xl p-6 max-w-5xl mx-auto">
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
              <Card className="relative border border-orange-200 shadow-md hover:shadow-lg transition-shadow rounded-xl cursor-pointer h-full flex">
                <CardContent className="flex flex-col justify-between p-4 w-full">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {service.description}
                    </p>
                  </div>
                  <span className="absolute top-2 right-4 text-black font-extrabold text-5xl">
                    {service.id}
                  </span>
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
