"use client";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndividualProgramFlipCards from "@/components/IndividualProgramCards";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Individual = () => {
  const therapyTypes = [
    "Cognitive Behavioral Therapy (CBT)",
    "Dialectical Behavior Therapy (DBT)",
    "Mindfulness-Based Therapy",
    "Trauma-Informed Care",
    "Solution-Focused Brief Therapy",
    "Psychodynamic Therapy",
  ];

  const conditions = [
    { name: "Anxiety Disorders", icon: "😰" },
    { name: "Depression", icon: "💙" },
    { name: "PTSD & Trauma", icon: "🌟" },
    { name: "Stress Management", icon: "🧘‍♀️" },
    { name: "Life Transitions", icon: "🌱" },
    { name: "Self-Esteem Issues", icon: "💪" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="-top-40 relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/individual-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="top-30 relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Individual Growth <br />& Emotional Wellness
          </h1>
          {/* <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Personalized mental health care tailored to your unique journey
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-orange-400 hover:bg-orange-500/90 text-white"
          >
            Start Your Journey
          </Button> */}
        </div>
      </section>

      {/* Content Section */}
      <section className="-mt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your growth journey starts here.
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At PsychJinni, we know that life can feel overwhelming—whether
                it’s{" "}
                <b>
                  loneliness, grief, cultural identity struggles, self-doubt,
                  sleep issues, or strained relationships
                </b>
                . Our individual coaching programs are crafted to provide{" "}
                <b>clarity, confidence, and emotional balance</b>—not by
                “fixing” you, but by walking beside you as you grow into the
                best version of yourself.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Every journey is unique, and our programs honour that
                uniqueness.
              </p>
              {/* <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Book a Consultation
              </Button> */}
            </div>

            {/* <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Therapy Approaches We Use:
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {therapyTypes.map((type, index) => (
                  <Card key={index} className="p-4 bg-white shadow-soft">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      <span className="text-foreground font-medium">
                        {type}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div> */}
          </div>

          {/* Conditions We Treat */}
          {/* <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Conditions We Specialize In
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditions.map((condition, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white shadow-soft text-center hover:shadow-medium transition-shadow"
                >
                  <div className="text-4xl mb-4">{condition.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {condition.name}
                  </h3>
                </Card>
              ))}
            </div>
          </div> */}

          {/* Process Section */}
          {/* <div className="bg-primary rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              How Our Process Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Initial Assessment",
                  description:
                    "We start with a comprehensive assessment to understand your unique needs and goals.",
                },
                {
                  title: "Personalized Plan",
                  description:
                    "Together, we create a tailored treatment plan that aligns with your specific circumstances.",
                },
                {
                  title: "Ongoing Support",
                  description:
                    "Regular sessions and continuous support to help you achieve lasting positive change.",
                },
              ].map((step, idx) => (
                <div key={idx} className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-white/90">{step.description}</p>
                </div>
              ))}
            </div>
          </div> */}

          <IndividualProgramFlipCards />

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Take the First Step?
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At <b>PsychJinni</b>, we offer more than coaching—we offer a
                safe, non-judgmental space where individuals can{" "}
                <b>heal, grow, and redefine themselves</b>. Whether you’re
                navigating{" "}
                <b>grief, loneliness, identity struggles, or personal growth</b>
                , you don’t have to walk alone.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 text-xl">🔒</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Confidential & Safe
                    </p>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolores, eum.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 text-xl">⏰</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Flexible Scheduling
                    </p>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolores, eum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm serviceType="individual therapy" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Individual;
