"use client";

import ContactForm from "@/components/ContactForm";
import FlipCardGrid from "@/components/FilpCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Spirituality = () => {
  const spiritualPrograms = [
    {
      id: 1,
      title: "InnerLight: Guided Meditation & Mindfulness Coaching",
      tagline: "Reconnect with your present, find clarity, and reduce stress.",
      benefit:
        "Developing mindfulness empowers you to respond rather than react, promoting emotional stability and personal fulfillment.",
      gradient: "from-pink-300 to-purple-400", // soft spiritual vibe
    },
    {
      id: 2,
      title: "SoulPath: Life Purpose & Spiritual Alignment",
      tagline: "Discover your deeper meaning and align with your values.",
      benefit:
        "Clarifying your purpose cultivates motivation, inner peace, and personal satisfaction.",
      gradient: "from-purple-400 to-indigo-500",
    },
    {
      id: 3,
      title: "GriefEase: Mindful Healing & Loss Recovery",
      tagline: "Transform loss into growth with compassionate guidance.",
      benefit:
        "Mindful grief processing allows healing, emotional release, and renewed strength in everyday life.",
      gradient: "from-rose-300 to-pink-500",
    },
    {
      id: 4,
      title: "PresenceMaster: Mindful Emotional Regulation",
      tagline: "Stay centered even in life’s most challenging moments.",
      benefit:
        "Mastering emotional regulation improves personal well-being, reduces anxiety, and enhances decision-making.",
      gradient: "from-teal-300 to-emerald-400",
    },
    {
      id: 5,
      title: "ZenWork: Mindfulness in Daily Life & Work",
      tagline: "Bring calm and focus into your everyday routines.",
      benefit:
        "Mindful living promotes sustained focus, reduces burnout, and creates a harmonious daily rhythm.",
      gradient: "from-amber-300 to-yellow-500",
    },
    {
      id: 6,
      title: "HeartCenter: Compassion & Self-Love Practices",
      tagline: "Cultivate inner kindness and stronger emotional connection.",
      benefit:
        "Developing self-compassion strengthens emotional resilience, reduces self-criticism, and promotes inner peace.",
      gradient: "from-pink-400 to-red-500",
    },
    {
      id: 7,
      title: "AwakenFlow: Mind-Body Awareness & Energy Alignment",
      tagline: "Tune into your body, mind, and subtle energies.",
      benefit:
        "Enhancing mind-body awareness supports holistic well-being, vitality, and emotional equilibrium.",
      gradient: "from-indigo-300 to-violet-500",
    },
    {
      id: 8,
      title: "ClarityCompass: Decision-Making & Mindful Choices",
      tagline: "Make choices aligned with values and long-term goals.",
      benefit:
        "Mindful decision-making increases confidence, reduces regret, and fosters purposeful living.",
      gradient: "from-cyan-300 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}

      <section className="top-10 relative flex items-center justify-center sm:justify-end overflow-hidden h-[60vh]">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full sm:w-1/2 h-full object-contain"
            src={"/home/spirituality-inside.mov"} // your .mp4/.mov file
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/80 sm:bg-gradient-to-r sm:from-primary/20 sm:to-primary/60 lg:bg-gradient-to-r lg:from-primary/10 lg:to-primary/90"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center sm:text-right px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
            Spirituality <br className="hidden sm:block" /> & Mindfulness
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="mt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
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
            </div>
          </div>

          <FlipCardGrid
            title="Core Programs for Spirituality & Mindfulness"
            programs={spiritualPrograms}
          />

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

      <div className="py-10">
        <Footer />
      </div>
    </div>
  );
};

export default Spirituality;
