"use client";

import ContactForm from "@/components/ContactForm";
import FlipCardGrid from "@/components/FilpCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Corporate = () => {
  const corporatePrograms = [
    {
      id: 1,
      title: "The Resilient Leader Program",
      tagline: "From managers to visionaries—unleash authentic leadership.",
      gradient: "from-amber-500 to-orange-600",
      benefit:
        "Strong leadership builds retention and reduces dependency on external hiring. By developing middle-level managers from within, you create a sustainable leadership pipeline and ensure long-term organizational growth.",
    },
    {
      id: 2,
      title: "Synergy: High-Performance Team Coaching",
      tagline: "Better collaboration. Smarter outcomes.",
      gradient: "from-blue-500 to-purple-600",
      benefit:
        "A team that communicates well saves time, reduces conflicts, and delivers stronger results. This program boosts engagement while identifying emerging team leaders who can be shaped into strong mid-level managers.",
    },
    {
      id: 3,
      title: "Work-Life Balance & Well-being Series",
      tagline: "Healthy employees. Thriving workplaces.",
      gradient: "from-emerald-500 to-teal-600",
      benefit:
        "Employee well-being directly impacts productivity, retention, and workplace culture. By equipping staff with mental health tools, you minimize absenteeism, improve morale, and create healthier workplaces.",
    },
    {
      id: 4,
      title: "Culture Catalyst: Organizational Development Program",
      tagline: "Create workplaces where people feel safe, valued, and engaged.",
      gradient: "from-rose-500 to-pink-600",
      benefit:
        "A strong culture reduces turnover, attracts top talent, and prevents conflicts. By embedding psychological safety and inclusivity, employees perform better, and HR leaders spend less time firefighting issues.",
    },
    {
      id: 5,
      title: "Agility & Innovation Coaching",
      tagline: "Turning change into opportunity.",
      gradient: "from-teal-400 to-sky-500",
      benefit:
        "In a fast-changing world, adaptability is a key survival skill. This program equips employees to embrace change with confidence and prepares future mid-level managers to lead with innovation and resilience.",
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
          style={{ backgroundImage: "url(/corporate-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
            Corporate Growth <br className="hidden sm:block" /> & Mental Fitness
            Programs
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <div>
              <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowered Minds. Empowered Organizations.
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At PsychJinni, we understand that the success of any business
                depends on the{" "}
                <b>mental fitness, resilience, and emotional intelligence</b> of
                its people. Our{" "}
                <b>corporate wellness and leadership coaching programs</b> are
                crafted to help companies minimize attrition, absenteeism, and
                managerial issues, while creating a workplace where employees
                thrive both personally and professionally.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Whether it’s{" "}
                <b>
                  strengthening leadership, developing middle-level managers,
                  enhancing team collaboration, stress management, or building a
                  positive workplace culture
                </b>
                , our programs are designed to transform challenges into growth
                opportunities.
              </p>
            </div>
          </div>

          <FlipCardGrid
            title={"Our Core Corporate Programs"}
            programs={corporatePrograms}
          />

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Transform Your Workplace?
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At <b>PsychJinni</b>, we partner with organizations not just to
                build stronger employees, but to shape resilient leaders,
                future-ready managers, and thriving workplace cultures.
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

      <div className="py-10">
        <Footer />
      </div>
    </div>
  );
};

export default Corporate;
