"use client";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Relationship = () => {
  const services = [
    "Couples Therapy",
    "Premarital Counseling",
    "Family Therapy",
    "Communication Skills Training",
    "Conflict Resolution",
    "Intimacy & Connection Building",
  ];

  const relationshipTypes = [
    {
      type: "Romantic Couples",
      description: "Strengthen your bond and resolve conflicts",
      icon: "💕",
    },
    {
      type: "Married Couples",
      description: "Navigate marriage challenges together",
      icon: "💑",
    },
    {
      type: "Families",
      description: "Improve family dynamics and communication",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      type: "Parent-Child",
      description: "Build stronger parent-child relationships",
      icon: "👪",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="-top-40 relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/relationship-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="top-30 relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Spirituality & Mindfulness
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="-mt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Because inner balance creates outer clarity.
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                A grounded, mindful life enhances emotional resilience, clarity
                of thought, and overall well-being. At <b>PsychJinni</b>, we
                recognize that spirituality and mindfulness are not about
                dogma—they are practical tools for cultivating presence,
                emotional regulation, and a sense of purpose. Our programs are
                designed to help individuals explore inner growth, reduce
                stress, and foster a deeper connection with themselves and the
                world around them.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                We cover a wide range of areas including meditation practices,
                self-awareness, mindfulness in daily life, spiritual alignment,
                grief and loss, emotional resilience, life purpose exploration,
                inner peace cultivation, conscious decision-making, and stress
                reduction.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Learn About Our Approach
              </Button>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Relationship Services:
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <Card key={index} className="p-4 bg-white shadow-soft">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      <span className="text-foreground font-medium">
                        {service}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Relationship Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              We Support All Types of Relationships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relationshipTypes.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white shadow-soft hover:shadow-medium transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.type}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Common Issues Section */}
          <div className="bg-brand-yellow/10 rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Common Relationship Challenges We Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💬",
                  title: "Communication Issues",
                  description:
                    "Learn to express yourself clearly and listen effectively",
                },
                {
                  icon: "🤝",
                  title: "Trust & Betrayal",
                  description:
                    "Rebuild trust and heal from relationship wounds",
                },
                {
                  icon: "⚖️",
                  title: "Conflict Resolution",
                  description: "Develop healthy ways to handle disagreements",
                },
                {
                  icon: "❤️",
                  title: "Intimacy & Connection",
                  description: "Strengthen emotional and physical bonds",
                },
                {
                  icon: "📅",
                  title: "Life Transitions",
                  description: "Navigate major changes together as a team",
                },
                {
                  icon: "👨‍👩‍👧‍👦",
                  title: "Parenting Challenges",
                  description: "Unite in your parenting approach and decisions",
                },
              ].map((issue, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{issue.icon}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {issue.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {issue.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Start Your Relationship Journey Today
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At <b>PsychJinni</b>, we don’t prescribe a one-size-fits-all
                approach. Instead, we empower you to{" "}
                <b>
                  discover your own spiritual path, practice mindful living, and
                  integrate inner calm into everyday life.
                </b>
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 text-xl">🌟</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Neutral Environment
                    </p>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolores, eum.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 text-xl">🛠️</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Practical Tools
                    </p>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolores, eum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm serviceType="relationship counseling" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Relationship;
