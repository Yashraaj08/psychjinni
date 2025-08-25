import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Users,
  Heart,
  Building,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const CorporateProgramCards = () => {
  const programs = [
    {
      id: 1,
      title: "The Resilient Leader Program",
      tagline: "From managers to visionaries—unleash authentic leadership.",
      icon: Crown,
      gradient: "from-amber-500 to-orange-600",
      glowColor: "amber",
      benefit:
        "Strong leadership builds retention and reduces dependency on external hiring. By developing middle-level managers from within, you create a sustainable leadership pipeline and ensure long-term organizational growth.",
    },
    {
      id: 2,
      title: "Synergy: High-Performance Team Coaching",
      tagline: "Better collaboration. Smarter outcomes.",
      icon: Users,
      gradient: "from-blue-500 to-purple-600",
      glowColor: "blue",
      benefit:
        "A team that communicates well saves time, reduces conflicts, and delivers stronger results. This program boosts engagement while identifying emerging team leaders who can be shaped into strong mid-level managers.",
    },
    {
      id: 3,
      title: "Work-Life Balance & Well-being Series",
      tagline: "Healthy employees. Thriving workplaces.",
      icon: Heart,
      gradient: "from-emerald-500 to-teal-600",
      glowColor: "emerald",
      benefit:
        "Employee well-being directly impacts productivity, retention, and workplace culture. By equipping staff with mental health tools, you minimize absenteeism, improve morale, and create healthier workplaces.",
    },
    {
      id: 4,
      title: "Culture Catalyst: Organizational Development Program",
      tagline: "Create workplaces where people feel safe, valued, and engaged.",
      icon: Building,
      gradient: "from-rose-500 to-pink-600",
      glowColor: "rose",
      benefit:
        "A strong culture reduces turnover, attracts top talent, and prevents conflicts. By embedding psychological safety and inclusivity, employees perform better, and HR leaders spend less time firefighting issues.",
    },
    {
      id: 5,
      title: "Agility & Innovation Coaching",
      tagline: "Turning change into opportunity.",
      icon: Lightbulb,
      gradient: "from-violet-500 to-indigo-600",
      glowColor: "violet",
      benefit:
        "In a fast-changing world, adaptability is a key survival skill. This program equips employees to embrace change with confidence and prepares future mid-level managers to lead with innovation and resilience.",
    },
  ];

  return (
    <section className="pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Corporate Programs
          </h2>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                className="group perspective-1000 animate-fade-up opacity-0 [animation-fill-mode:forwards]"
              >
                <Card className="relative h-80 cursor-pointer overflow-hidden border-0 bg-gradient-to-br from-card to-card/80 shadow-lg transition-all duration-700 ease-out group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:z-10">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                  />
                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 -z-10`}
                  />

                  {/* Default (Title Only) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-700 group-hover:opacity-0 group-hover:scale-75">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground text-center leading-tight">
                      {program.title}
                    </h3>

                    {/* Floating particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
                    <div className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse delay-300" />
                    <div className="absolute top-1/3 left-6 w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-700" />
                  </div>

                  {/* Hover State */}
                  <div className="absolute inset-0 p-6 opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 flex flex-col">
                    {/* Creative Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${program.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex gap-1">
                        <div
                          className={`w-2 h-2 bg-${program.glowColor}-400 rounded-full animate-pulse`}
                        />
                        <div
                          className={`w-2 h-2 bg-${program.glowColor}-400 rounded-full animate-pulse delay-200`}
                        />
                        <div
                          className={`w-2 h-2 bg-${program.glowColor}-400 rounded-full animate-pulse delay-400`}
                        />
                      </div>
                    </div>

                    {/* Tagline */}
                    <span
                      className={`text-lg font-bold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent mb-4 leading-tight`}
                    >
                      {program.tagline}
                    </span>

                    {/* Benefits Quote */}
                    <div className="bg-card/50 rounded-lg border border-primary/10 relative">
                      <div
                        className={`absolute -top-2 -left-2 w-6 h-6  bg-gradient-to-r ${program.gradient} rounded-full flex items-center justify-center`}
                      >
                        <span className="text-white text-xs font-bold">"</span>
                      </div>
                      <blockquote className="border-l-8 border-card/90 italic pl-6 text-xs text-muted-foreground leading-relaxed p-4">
                        {program.benefit}
                      </blockquote>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Extra Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fade-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fade-up 1s ease-out forwards;
          }
          .perspective-1000 {
            perspective: 1000px;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 2px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: hsl(var(--primary) / 0.3);
            border-radius: 1px;
          }
        `,
        }}
      />
    </section>
  );
};

export default CorporateProgramCards;
