"use client";
import { Card } from "@/components/ui/card";
import { Sparkle, Quote } from "lucide-react";
import { motion } from "framer-motion";

const FlipCardGrid = ({ title, subtitle, programs }) => {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {title && (
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>
          )}
        </div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {programs.map((program, index) => {
            const IconComponent = program.icon || Sparkle; // fallback
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flip-card w-full h-80 perspective-1000">
                  <div className="flip-inner relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <Card className="absolute inset-0 flex flex-col items-center justify-center p-6 border-0 shadow-xl rounded-2xl bg-gradient-to-br from-card to-card/80 [backface-visibility:hidden] transition-transform duration-500 group-hover:scale-[1.02]">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                          program.gradient || "from-blue-500 to-indigo-600"
                        } flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-center text-foreground">
                        {program.title}
                      </h3>
                      <div className="absolute top-4 right-4 w-2 h-2 bg-primary/80 rounded-full animate-pulse" />
                      <div className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-primary/70 rounded-full animate-pulse delay-300" />
                      <div className="absolute top-1/3 left-6 w-1 h-1 bg-primary/90 rounded-full animate-pulse delay-700" />
                      <div className="absolute bottom-15 right-14 w-1.5 h-1.5 bg-primary/70 rounded-full animate-pulse delay-300" />
                    </Card>

                    {/* Back */}
                    <Card
                      className={`bg-gradient-to-br ${
                        program.gradient || "from-blue-500 to-indigo-600"
                      } absolute inset-0 p-6 border-0 flex flex-col justify-center items-center shadow-xl rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] text-white`}
                    >
                      <div>
                        <p className="text-white font-bold text-lg mb-5 leading-snug">
                          {program.tagline}
                        </p>
                        <div className="bg-card/20 p-4 rounded-lg border border-primary/10 relative">
                          <div className="absolute right-0 bottom-0 w-10 h-10 rounded-full flex items-center justify-center">
                            <Quote className="text-white opacity-70" />
                          </div>
                          <blockquote className="border-l-4 border-card rounded-md italic text-sm text-white leading-relaxed px-4 py-2">
                            {program.benefit}
                          </blockquote>
                        </div>
                      </div>

                      <div className="absolute top-4 right-4 w-2 h-2 bg-card/80 rounded-full animate-pulse" />
                      <div className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-card/70 rounded-full animate-pulse delay-300" />
                      <div className="absolute bottom-15 right-14 w-1.5 h-1.5 bg-card/70 rounded-full animate-pulse delay-300" />
                    </Card>
                  </div>
                </div>
              </motion.div>
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
