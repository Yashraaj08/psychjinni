"use client";

import ContactForm from "@/components/ContactForm";
import FlipCardGrid from "@/components/FilpCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Individual = () => {
  const individualPrograms = [
    {
      id: 1,
      title: "Inner Compass: Self-Discovery & Identity Coaching",
      tagline: "Find clarity in who you are and where you’re going.",
      gradient: "from-amber-500 to-orange-600",
      benefit:
        "Many people feel lost in who they are. This program provides a safe space to rediscover identity, accept yourself, and design a path forward with confidence.",
    },
    {
      id: 2,
      title: "Resilience Reset: Emotional Stability & Mental Fitness",
      tagline: "Balance your emotions. Build inner resilience.",
      gradient: "from-blue-500 to-indigo-600",
      benefit:
        "Emotional instability often leads to burnout and strained relationships. This program strengthens emotional balance, resilience, and everyday calm.",
    },
    {
      id: 3,
      title: "Healing Heart: Grief & Loss Recovery",
      tagline: "Finding light in the shadows of loss.",
      gradient: "from-rose-500 to-pink-600",
      benefit:
        "Grief is deeply personal and often isolating. This program offers compassionate guidance through loss, helping individuals find healing and renewed strength.",
    },
    {
      id: 4,
      title: "Strength in Silence: Loneliness & Connection Coaching",
      tagline: "Because everyone deserves to feel seen and heard.",
      gradient: "from-emerald-500 to-teal-600",
      benefit:
        "Sometimes people just need someone to truly listen. This program creates connection, trust, and pathways to meaningful relationships.",
    },
    {
      id: 5,
      title: "Mind Uncluttered: Thought & Sleep Reset Program",
      tagline: "Quiet the mind. Rest the body. Reset the spirit.",
      gradient: "from-purple-500 to-violet-600",
      benefit:
        "Overthinking and sleepless nights drain energy and clarity. This program helps individuals reset their minds, restore sleep, and regain focus.",
    },
    {
      id: 6,
      title: "Cultural Harmony: Identity & Belonging Coaching",
      tagline: "Finding your balance between cultures and expectations.",
      gradient: "from-teal-500 to-cyan-600",
      benefit:
        "Cultural differences and family pressures often create identity struggles. This program helps individuals embrace uniqueness while staying rooted in belonging.",
    },
    {
      id: 7,
      title: "Life Pathways: Career & Purpose Alignment",
      tagline: "Create a career that fits your life, not the other way around.",
      gradient: "from-indigo-500 to-blue-600",
      benefit:
        "Careers often shape identity and self-worth. This program helps individuals find clarity, overcome blocks, and build meaningful career paths.",
    },
    {
      id: 8,
      title: "Self-Leadership Mastery: Becoming Your Own Guide",
      tagline: "Lead yourself first—the rest will follow.",
      gradient: "from-orange-500 to-red-600",
      benefit:
        "Lasting growth begins with self-leadership. This program teaches you to trust yourself, take ownership, and build consistency for long-term success.",
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
          style={{ backgroundImage: "url(/individual-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
            Individual Growth <br className="hidden sm:block" /> & Emotional
            Wellness
          </h1>
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
            </div>
          </div>

          <FlipCardGrid
            title={"Core Programs for Individuals"}
            programs={individualPrograms}
          />

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

      <div className="py-10">
        <Footer />
      </div>
    </div>
  );
};

export default Individual;
