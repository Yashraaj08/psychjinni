"use client";

import ContactForm from "@/components/ContactForm";
import FlipCardGrid from "@/components/FilpCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroVideoSection from "@/components/HeroVideoSection";

const Relationship = () => {
  const relationshipPrograms = [
    {
      id: 1,
      img: "/services/couple-heart.gif",
      title: "HeartSync: Couples & Partnership Coaching",
      tagline: "From conflict to connection—strengthen your partnership.",
      gradient: "from-red-400 to-rose-500",
      benefit:
        "Strengthening your partnership allows you to feel emotionally supported, reduce stress, and experience more joy and balance in daily life.",
    },
    {
      id: 2,
      title: "Bridge Talk: Communication & Conflict Coaching",
      img: "/services/bridge-comm.gif",
      tagline: "Speak to be heard. Listen to be understood.",
      gradient: "from-blue-400 to-indigo-500",
      benefit:
        "Learning to communicate effectively helps you express yourself without guilt or fear, creating peace in your relationships and confidence in your voice.",
    },
    {
      id: 3,
      img: "/services/family-ties.gif",
      title: "Family Ties: Family Dynamics & Harmony Coaching",
      tagline: "Stronger families. Stronger foundations.",
      gradient: "from-green-400 to-emerald-500",
      benefit:
        "Harmonious family relationships help you feel grounded, understood, and emotionally nourished, reducing stress and creating a sense of belonging.",
    },
    {
      id: 4,
      title: "Together Ahead: Pre-Marital & Life Transition Coaching",
      img: "/services/pre-marraige.gif",
      tagline: "Prepare for the journey, not just the day.",
      gradient: "from-purple-400 to-fuchsia-500",
      benefit:
        "Preparing for major life changes gives you clarity, confidence, and emotional readiness to build a life you truly desire with your partner.",
    },
    {
      id: 5,
      title: "Love Languages Lab: Emotional Intelligence & Intimacy Coaching",
      img: "/services/love-language.gif",
      tagline: "Empathy is the secret ingredient to lasting bonds.",
      gradient: "from-pink-400 to-rose-500",
      benefit:
        "Developing emotional awareness lets you connect deeply, respond thoughtfully, and create more satisfying, fulfilling relationships.",
    },
    {
      id: 6,
      title: "Trust Builder: Infidelity & Relationship Trust Coaching",
      img: "/services/infidelity.gif",
      tagline: "Healing wounds. Restoring connection.",
      gradient: "from-amber-400 to-orange-500",
      benefit:
        "Recovering from betrayal allows you to reclaim trust in yourself and your relationships, helping you feel secure, empowered, and emotionally whole again.",
    },
    {
      id: 7,
      title: "Bond Beyond: Postpartum & New Parent Relationship Coaching",
      img: "/services/new-parent.gif",
      tagline: "Rediscover connection after life changes.",
      gradient: "from-cyan-400 to-sky-500",
      benefit:
        "Adjusting after childbirth restores closeness and understanding, helping you feel supported, valued, and connected as a partner and parent.",
    },
    {
      id: 8,
      title: "Harmony Hub: Financial & Lifestyle Relationship Coaching",
      img: "/services/finances.gif",
      tagline: "Because money and life stress affect love.",
      gradient: "from-emerald-400 to-teal-500",
      benefit:
        "Resolving financial and lifestyle conflicts reduces personal anxiety, promotes clarity, and allows you to enjoy life together without constant tension.",
    },
    {
      id: 9,
      title: "Family Peace: In-Law & Extended Family Coaching",
      img: "/services/in-laws.gif",
      tagline: "Creating bridges across households.",
      gradient: "from-indigo-400 to-blue-600",
      benefit:
        "Managing in-law and extended family relationships brings peace, confidence, and emotional freedom, so you can focus on your own happiness.",
    },
    {
      id: 10,
      title: "SparkRevive: Reigniting Love & Intimacy",
      img: "/services/spark-revie.gif",
      tagline: "Rediscover the passion in your relationship.",
      gradient: "from-rose-400 to-pink-600",
      benefit:
        "Rekindling emotional and physical connection restores joy, excitement, and fulfillment in your personal life, boosting your overall emotional wellbeing.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroVideoSection
        title="Relationship"
        videoSrc="/home/relationship-inside.gif"
      />

      {/* Content Section */}
      <section className="mt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Because thriving relationships create thriving lives.
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Healthy, fulfilling relationships are the cornerstone of
                emotional well-being, personal happiness, and professional
                fulfillment. At <b>PsychJinni</b> , we understand that every
                relationship—whether with a partner, family member, or
                oneself—faces unique challenges. Our relationship coaching
                programs are designed to provide compassionate, practical
                guidance to help individuals and couples strengthen
                communication, navigate conflict, and cultivate deeper, lasting
                connections.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                We address a wide range of relationship challenges including
                infidelity, dating, long-distance relationships, premarital
                concerns, postpartum adjustments, readiness for the right
                partner, emotional intelligence, love languages, differences in
                belief systems, loss of spark, financial struggles, trust
                issues, in-law adjustments, dependency patterns, household
                conflicts, petty fights, and intimacy concerns after childbirth.
              </p>
            </div>
          </div>

          <FlipCardGrid
            title={"Core Programs for Relationships"}
            programs={relationshipPrograms}
          />

          {/* Contact Form */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Start Your Relationship Journey Today
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At <b>PsychJinni</b> we don’t simply “fix” relationships—we
                guide you to <b>grow, understand, and nurture them</b> with
                empathy, insight, and actionable strategies.
              </p>
            </div>

            <ContactForm serviceType="relationship coaching" />
          </div>
        </div>
      </section>

      <div className="py-10">
        <Footer />
      </div>
    </div>
  );
};

export default Relationship;
