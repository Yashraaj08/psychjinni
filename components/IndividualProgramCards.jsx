import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Shield,
  Heart,
  Users,
  Moon,
  Globe,
  Briefcase,
  Crown,
  ArrowRight,
} from "lucide-react";

const IndividualProgramFlipCards = () => {
  const programs = [
    {
      id: 1,
      title: "Inner Compass: Self-Discovery & Identity Coaching",
      tagline: "Find clarity in who you are and where you’re going.",
      icon: Compass,
      gradient: "from-amber-500 to-orange-600",
      benefit:
        "Many people feel lost in who they are. This program provides a safe space to rediscover identity, accept yourself, and design a path forward with confidence.",
    },
    {
      id: 2,
      title: "Resilience Reset: Emotional Stability & Mental Fitness",
      tagline: "Balance your emotions. Build inner resilience.",
      icon: Shield,
      gradient: "from-blue-500 to-indigo-600",
      benefit:
        "Emotional instability often leads to burnout and strained relationships. This program strengthens emotional balance, resilience, and everyday calm.",
    },
    {
      id: 3,
      title: "Healing Heart: Grief & Loss Recovery",
      tagline: "Finding light in the shadows of loss.",
      icon: Heart,
      gradient: "from-rose-500 to-pink-600",
      benefit:
        "Grief is deeply personal and often isolating. This program offers compassionate guidance through loss, helping individuals find healing and renewed strength.",
    },
    {
      id: 4,
      title: "Strength in Silence: Loneliness & Connection Coaching",
      tagline: "Because everyone deserves to feel seen and heard.",
      icon: Users,
      gradient: "from-emerald-500 to-teal-600",
      benefit:
        "Sometimes people just need someone to truly listen. This program creates connection, trust, and pathways to meaningful relationships.",
    },
    {
      id: 5,
      title: "Mind Uncluttered: Thought & Sleep Reset Program",
      tagline: "Quiet the mind. Rest the body. Reset the spirit.",
      icon: Moon,
      gradient: "from-purple-500 to-violet-600",
      benefit:
        "Overthinking and sleepless nights drain energy and clarity. This program helps individuals reset their minds, restore sleep, and regain focus.",
    },
    {
      id: 6,
      title: "Cultural Harmony: Identity & Belonging Coaching",
      tagline: "Finding your balance between cultures and expectations.",
      icon: Globe,
      gradient: "from-teal-500 to-cyan-600",
      benefit:
        "Cultural differences and family pressures often create identity struggles. This program helps individuals embrace uniqueness while staying rooted in belonging.",
    },
    {
      id: 7,
      title: "Life Pathways: Career & Purpose Alignment",
      tagline: "Create a career that fits your life, not the other way around.",
      icon: Briefcase,
      gradient: "from-indigo-500 to-blue-600",
      benefit:
        "Careers often shape identity and self-worth. This program helps individuals find clarity, overcome blocks, and build meaningful career paths.",
    },
    {
      id: 8,
      title: "Self-Leadership Mastery: Becoming Your Own Guide",
      tagline: "Lead yourself first—the rest will follow.",
      icon: Crown,
      gradient: "from-orange-500 to-red-600",
      benefit:
        "Lasting growth begins with self-leadership. This program teaches you to trust yourself, take ownership, and build consistency for long-term success.",
    },
  ];

  return (
    <section className="pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core Programs for Individuals
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Explore programs designed to strengthen self-awareness, resilience,
            and personal growth.
          </p>
        </div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                className="flip-card w-full h-80 perspective-1000"
              >
                <div className="flip-inner relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <Card className="absolute inset-0 flex flex-col items-center justify-center p-6 border-0 shadow-xl rounded-2xl bg-gradient-to-br from-card to-card/80 [backface-visibility:hidden]">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-center text-foreground">
                      {program.title}
                    </h3>
                  </Card>

                  {/* Back */}
                  <Card className="absolute inset-0 p-6 border-0 flex justify-center items-center shadow-xl rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] text-white">
                    <div>
                      <p className={`bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent font-bold text-lg mb-5 leading-snug`}>
                        {program.tagline}
                      </p>

                      <div className={`bg-gradient-to-r ${program.gradient} p-4 rounded-lg relative`}>
                        <div
                          className={`absolute -top-2 -left-2 w-6 h-6  bg-gradient-to-r ${program.gradient} rounded-full flex items-center justify-center`}
                        >
                          <span className="text-white text-xs font-bold">
                            "
                          </span>
                        </div>
                        <blockquote className="border-l-8 border-card rounded-2xl italic pl-6 text-xs text-white leading-relaxed p-4">
                          {program.benefit}
                        </blockquote>
                      </div>
                    </div>
                  </Card>
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
          .perspective-1000 {
            perspective: 1000px;
          }
          .flip-card .flip-inner {
            transform-style: preserve-3d;
          }
          .flip-card:hover .flip-inner {
            transform: rotateY(180deg);
          }
          .flip-card .flip-inner > div {
            backface-visibility: hidden;
          }
        `,
        }}
      />
    </section>
  );
};

export default IndividualProgramFlipCards;
