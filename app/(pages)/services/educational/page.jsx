"use client";

import ContactForm from "@/components/ContactForm";
import FlipCardGrid from "@/components/FilpCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Educational = () => {
  const academicPrograms = [
    {
      id: 1,
      title: "Ignite: Student Growth & Resilience Program",
      tagline: "Helping students learn smarter, not harder.",
      benefit:
        "Students learn resilience, focus, and self-confidence—skills that last well beyond exams.",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      id: 2,
      title: "EmpowerEd: Educator Development Workshops",
      tagline: "Empowered educators create empowered learners.",
      benefit:
        "Teachers who feel supported create classrooms where students feel safe, motivated, and inspired.",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      id: 3,
      title: "Family Connect: Parent & Student Support",
      tagline: "Because a child’s growth begins at home.",
      benefit:
        "Parents learn to support without pressuring, building stronger bonds and reducing conflict at home.",
      gradient: "from-pink-400 to-rose-500",
    },
    {
      id: 4,
      title: "EduVision: Institutional Excellence & Wellness",
      tagline: "Helping institutions build legacies, not just curriculums.",
      benefit:
        "Institutions create reputations not just for academics, but for fostering mentally healthy communities.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      id: 5,
      title: "Thrive: Adolescent & Youth Emotional Wellness",
      tagline: "Guiding young minds through life’s toughest years.",
      benefit:
        "This program gives adolescents tools to handle stress, belonging, and identity crises in healthy ways.",
      gradient: "from-purple-400 to-fuchsia-500",
    },
    {
      id: 6,
      title: "Future Pathways: Career & Motivation Coaching",
      tagline: "Clarity today. Success tomorrow.",
      benefit:
        "Students learn to pursue paths aligned with their true potential—not just external pressures.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 7,
      title: "Bridge: Parent–Teen Communication Labs",
      tagline: "Because conversations at home shape futures.",
      benefit:
        "Families learn to replace nagging, silence, and conflict with trust, empathy, and open communication.",
      gradient: "from-teal-400 to-sky-500",
    },
    {
      id: 8,
      title: "Safe Space: Anti-Bullying & Peer Support Program",
      tagline: "Every student deserves safety, belonging & respect.",
      benefit:
        "Schools foster inclusivity and create safe communities where students thrive socially and academically.",
      gradient: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/educational-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
            Education <br className="hidden sm:block" /> & Academic Wellness
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="-mt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
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
            </div>
          </div>

          <FlipCardGrid
            title="Expanded Academic Wellness Programs"
            programs={academicPrograms}
          />

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

      <div className="py-10">
        <Footer />
      </div>
    </div>
  );
};

export default Educational;
