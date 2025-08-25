import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Heart, MessageCircle, Users, Calendar, Target, Shield, Baby, DollarSign, Home, Sparkles } from "lucide-react";

const RelationshipProgramCards = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const programs = [
    {
      id: 1,
      title: "HeartSync: Couples & Partnership Coaching",
      tagline: "From conflict to connection—strengthen your partnership.",
      icon: Heart,
      color: "bg-red-50 text-red-600",
      benefit:
        "Strengthening your partnership allows you to feel emotionally supported, reduce stress, and experience more joy and balance in daily life."
    },
    {
      id: 2,
      title: "Bridge Talk: Communication & Conflict Coaching",
      tagline: "Speak to be heard. Listen to be understood.",
      icon: MessageCircle,
      color: "bg-blue-50 text-blue-600",
      benefit:
        "Learning to communicate effectively helps you express yourself without guilt or fear, creating peace in your relationships and confidence in your voice."
    },
    {
      id: 3,
      title: "Family Ties: Family Dynamics & Harmony Coaching",
      tagline: "Stronger families. Stronger foundations.",
      icon: Users,
      color: "bg-green-50 text-green-600",
      benefit:
        "Harmonious family relationships help you feel grounded, understood, and emotionally nourished, reducing stress and creating a sense of belonging."
    },
    {
      id: 4,
      title: "Together Ahead: Pre-Marital & Life Transition Coaching",
      tagline: "Prepare for the journey, not just the day.",
      icon: Calendar,
      color: "bg-purple-50 text-purple-600",
      benefit:
        "Preparing for major life changes gives you clarity, confidence, and emotional readiness to build a life you truly desire with your partner."
    },
    {
      id: 5,
      title: "Love Languages Lab: Emotional Intelligence & Intimacy Coaching",
      tagline: "Empathy is the secret ingredient to lasting bonds.",
      icon: Target,
      color: "bg-pink-50 text-pink-600",
      benefit:
        "Developing emotional awareness lets you connect deeply, respond thoughtfully, and create more satisfying, fulfilling relationships."
    },
    {
      id: 6,
      title: "Trust Builder: Infidelity & Relationship Trust Coaching",
      tagline: "Healing wounds. Restoring connection.",
      icon: Shield,
      color: "bg-amber-50 text-amber-600",
      benefit:
        "Recovering from betrayal allows you to reclaim trust in yourself and your relationships, helping you feel secure, empowered, and emotionally whole again."
    },
    {
      id: 7,
      title: "Bond Beyond: Postpartum & New Parent Relationship Coaching",
      tagline: "Rediscover connection after life changes.",
      icon: Baby,
      color: "bg-cyan-50 text-cyan-600",
      benefit:
        "Adjusting after childbirth restores closeness and understanding, helping you feel supported, valued, and connected as a partner and parent."
    },
    {
      id: 8,
      title: "Harmony Hub: Financial & Lifestyle Relationship Coaching",
      tagline: "Because money and life stress affect love.",
      icon: DollarSign,
      color: "bg-emerald-50 text-emerald-600",
      benefit:
        "Resolving financial and lifestyle conflicts reduces personal anxiety, promotes clarity, and allows you to enjoy life together without constant tension."
    },
    {
      id: 9,
      title: "Family Peace: In-Law & Extended Family Coaching",
      tagline: "Creating bridges across households.",
      icon: Home,
      color: "bg-indigo-50 text-indigo-600",
      benefit:
        "Managing in-law and extended family relationships brings peace, confidence, and emotional freedom, so you can focus on your own happiness."
    },
    {
      id: 10,
      title: "SparkRevive: Reigniting Love & Intimacy",
      tagline: "Rediscover the passion in your relationship.",
      icon: Sparkles,
      color: "bg-rose-50 text-rose-600",
      benefit:
        "Rekindling emotional and physical connection restores joy, excitement, and fulfillment in your personal life, boosting your overall emotional wellbeing."
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core Programs for Relationship Growth
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Comprehensive coaching programs designed to strengthen every aspect of your relationships, 
            from communication and trust to intimacy and long-term connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {programs.map((program) => {
            const IconComponent = program.icon;
            const isExpanded = expandedCard === program.id;

            return (
              <Card
                key={program.id}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border-0 overflow-hidden ${
                  isExpanded ? "md:col-span-2 shadow-xl" : "shadow-lg"
                }`}
                onClick={() => toggleCard(program.id)}
              >
                <CardHeader className="relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${program.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent size={24} />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </Button>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-medium">
                    {program.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-border/20">
                      <div className="space-y-4">

                        <div className="bg-orange-400/20 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2">Why This Matters:</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {program.benefit}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelationshipProgramCards;