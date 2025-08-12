"use client";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Corporate = () => {
  const features = [
    "Employee Assistance Programs (EAP)",
    "Workplace Mental Health Workshops",
    "Leadership Training on Mental Health",
    "Crisis Intervention Support",
    "Stress Management Programs",
    "Team Building & Communication",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className=" -top-20 relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/corporate-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="top-30 relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Corporate Mental Health
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Building healthier workplaces through comprehensive mental health
            support
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-orange-400 hover:bg-orange-500/90 text-white cursor-pointer"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transform Your Workplace Culture
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                optio, voluptate nobis praesentium autem eligendi ducimus sit
                reiciendis eum nam doloremque deleniti molestias, repellat
                voluptatem cumque earum harum rem cupiditate!
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                eaque laudantium ipsum, consectetur voluptas architecto magni
                aliquid perferendis possimus soluta tempore adipisci optio
                labore debitis ut suscipit
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Download Our Corporate Brochure
              </Button>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Services Include:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="p-4 bg-white shadow-soft">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      <span className="text-foreground font-medium">
                        {feature}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-primary rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">85%</div>
                <p className="text-white/90">
                  Improvement in Employee Satisfaction
                </p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">40%</div>
                <p className="text-white/90">Reduction in Sick Days</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                <p className="text-white/90">Client Retention Rate</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Transform Your Workplace?
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                optio, voluptate nobis praesentium autem eligendi ducimus sit
                reiciendis eum nam doloremque deleniti molestias, repellat
                voluptatem cumque earum harum rem cupiditate!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 text-xl">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">
                      corporate@mentalhealth.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm serviceType="corporate mental health" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
