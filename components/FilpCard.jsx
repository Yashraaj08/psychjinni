"use client";
import { Card } from "@/components/ui/card";
import { Sparkle, Quote } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const FlipCardGrid = ({ title, subtitle, programs }) => {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {programs.map((program, index) => {
            const IconComponent = program.icon || Sparkle; // fallback

            return (
              <div key={program.id}>
                <div className="flip-card w-full h-[320px] sm:h-[360px] md:h-[380px] perspective-1000">
                  <div className="flip-inner relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <Card className="absolute inset-0 flex flex-col items-center justify-center p-6 border-0 shadow-xl rounded-2xl [backface-visibility:hidden] transition-transform duration-500 group-hover:scale-[1.02]">
                      {/* Image + Title wrapper */}
                      <div className="flex flex-col items-center">
                        {program.img && (
                          <img
                            src={program.img}
                            className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl object-cover border border-slate-300 mb-3"
                          />
                        )}

                        {/* Fixed-height title box to keep alignment stable */}
                        <div className="h-12 sm:h-14 md:h-16 flex items-center">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-center text-foreground leading-tight">
                            {program.title}
                          </h3>
                        </div>
                      </div>
                    </Card>

                    {/* Back */}
                    <Card
                      className={`bg-gradient-to-br ${
                        program.gradient || "from-blue-500 to-indigo-600"
                      } absolute inset-0 p-6 border-0 flex flex-col justify-center items-center shadow-xl rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] text-white`}
                    >
                      <div>
                        <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-5 leading-snug">
                          {program.tagline}
                        </p>
                        <div className="bg-card/20 p-4 rounded-lg border border-primary/10 relative">
                          <div className="absolute right-0 bottom-0 w-10 h-10 rounded-full flex items-center justify-center">
                            <Quote className="text-white opacity-70" />
                          </div>
                          <blockquote className="border-l-4 border-card rounded-md italic text-xs sm:text-sm text-white leading-relaxed px-4 py-2">
                            {program.benefit}
                          </blockquote>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Flip Effect Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .perspective-1000 { perspective: 1000px; }
            .flip-card .flip-inner { transform-style: preserve-3d; }
            .flip-card:hover .flip-inner { transform: rotateY(180deg); }
            .flip-card .flip-inner > div { backface-visibility: hidden; }
          `,
        }}
      />
    </section>
  );
};

export default FlipCardGrid;
