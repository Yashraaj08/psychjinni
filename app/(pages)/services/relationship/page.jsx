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
            Relationship Therapy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Strengthening bonds and building healthier relationships together
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-orange-400 hover:bg-orange-500/90 text-white"
          >
            Begin Healing Together
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Healing Relationships, Building Connections
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                quidem reprehenderit alias voluptatem. Illum, dolorem facere.
                Sit ab vitae, rem harum exercitationem provident placeat
                repellendus odio suscipit.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis debitis fugit magni eos quasi voluptates
                reprehenderit in excepturi. Porro optio, ea ipsum nisi ducimus
                aperiam fugit saepe, assumenda dolor tempore quas consectetur,
                obcaecati est beatae perspiciatis eos doloribus commodi dicta!
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
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus veritatis inventore, adipisci vitae ad laudantium
                quisquam, minus iste error, dignissimos dolorum eos ut animi
                quasi.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-brand-orange text-xl">🌟</span>
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
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-brand-orange text-xl">🛠️</span>
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
