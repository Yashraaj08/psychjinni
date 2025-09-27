"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroVideoSection from "@/components/HeroVideoSection";
import ServicesSection from "@/components/ServicesSection";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "CORPORATES",
      image: "/home/corporate_home.gif",
      description:
        "Corporate wellness redefined—enabling teams to perform at their best with resilience, harmony, and maximum performance.",
      link: "/services/corporate",
    },
    {
      id: "02",
      title: "EDUCATIONAL",
      image: "/home/educational_home.gif",
      description:
        "Education wellness programs that construct healthier, more concentrated, and emotionally nurturing learning environments.",
      link: "/services/educational",
    },
    {
      id: "03",
      title: "INDIVIDUALS",
      image: "/home/individual_home.gif",
      description:
        "Each journey is individual—our programs lead you to heal, grow, and flourish at your own pace.",
      link: "/services/individual",
    },
    {
      id: "04",
      title: "RELATIONSHIP",
      image: "/home/relationship_home.gif",
      description:
        "Specialized programs for couples and families to enhance communication, deepen relationships, and develop healthy, supportive relationships.",
      link: "/services/relationship",
    },
    {
      id: "05",
      title: "SPIRITUALITY & MINDFULLNESS",
      image: "/home/spirituality_home.gif",
      description:
        "Specialized programs for couples and families to enhance communication, deepen relationships, and develop healthy, supportive relationships.",
      link: "/services/spirituality",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />

      {/* Hero Section */}
      <HeroVideoSection title="Our Approach" videoSrc="/home/approach.gif" />

      <div className="mt-20 bg-[#71722C]/50 rounded-2xl p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.link}
              passHref
              className={index === services.length - 1 ? "sm:col-span-2" : ""}
            >
              <Card className="relative border border-orange-200 shadow-md hover:shadow-lg transition-shadow rounded-xl cursor-pointer h-full">
                <CardContent className="flex flex-col lg:flex-row items-center justify-between gap-4 p-6 w-full">
                  {/* Left Section - Title + Description */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-500 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Section - Video */}
                  {service.image && (
                    <div className="flex-shrink-0 flex justify-center items-center">
                      <img
                        src={service.image}
                        className="w-48 h-48 object-cover"
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
