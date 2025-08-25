"use client";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Educational = () => {
  const programs = [
    "Student Counseling Services",
    "Teacher Mental Health Support",
    "Classroom Mental Health Education",
    "Bullying Prevention Programs",
    "Academic Stress Management",
    "Social-Emotional Learning (SEL)",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="-top-40 relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/educational-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="top-30 relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Education & Academic Wellness
          </h1>
          {/* <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Supporting student and educator mental wellness in learning
            environments
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-orange-400 hover:bg-orange-500/90 text-white"
          >
            Learn More
          </Button> */}
        </div>
      </section>

      {/* Content Section */}
      <section className="-mt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Because strong minds create strong futures.
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At PsychJinni, we know that education is more than just
                grades—it’s about building resilient, confident, and emotionally
                balanced learners. Our academic wellness programs support
                students, educators, parents, and institutions in navigating
                challenges like exam stress, peer pressure, parental
                expectations, bullying, relationship conflicts, communication
                gaps, and adjustment struggles.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                We go beyond academics to address the emotional, social, and
                psychological well-being of learning communities—creating
                schools and colleges where both performance and mental health
                thrive.
              </p>
              {/* <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                View Our Case Studies
              </Button> */}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Educational Programs:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {programs.map((program, index) => (
                  <Card key={index} className="p-4 bg-white shadow-soft">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      <span className="text-foreground font-medium">
                        {program}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Age Groups Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-white shadow-soft text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎒</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                K-12 Schools
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolores, eum.
              </p>
            </Card>

            <Card className="p-6 bg-white shadow-soft text-center">
              <div className="w-16 h-16 bg-orange-500/10rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Universities
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolores, eum.
              </p>
            </Card>

            <Card className="p-6 bg-white shadow-soft text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Educators
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolores, eum.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Partner with Us for Educational Excellence
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At <b>PsychJinni</b>, our mission is clear: to help students{" "}
                <b>
                  excel without anxiety, learn without fear, and grow with
                  balance.
                </b>
                By empowering <b>educators, parents, and institutions</b>, we
                create a future where learning communities are as{" "}
                <b>healthy as they are successful.</b>
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 text-xl">📚</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Educational Resources
                    </p>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolores, eum.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 text-xl">🎯</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Custom Solutions
                    </p>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolores, eum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm serviceType="educational mental health" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Educational;
