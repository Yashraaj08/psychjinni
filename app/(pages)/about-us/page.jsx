"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <section className="relative flex items-center justify-center sm:justify-end overflow-hidden h-[40vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-contain bg-yellow-200/10 bg-no-repeat"
          style={{ backgroundImage: "url(/corporate.gif)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 sm:from-primary/0 to-primary/60"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center sm:text-right px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-snug sm:leading-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="mt-20 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Mission Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                At PsychJinni, our mission is to make mental well-being,
                personal growth, and emotional strength accessible to everyone.
                We believe every individual—whether in the workplace, in
                education, in relationships, or on a personal journey—deserves
                not just coping strategies, but compassionate guidance and
                empowering spaces to truly grow and thrive.
              </p>
            </div>

            {/* Vision Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                We envision a world where mental health and personal development
                are not only about fixing problems, but about unlocking human
                potential, nurturing resilience, and creating healthier
                communities. PsychJinni exists to redefine mental
                wellness—shifting the conversation from stigma and silence to
                growth, awareness, and meaningful change.
              </p>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Empathy First",
                    desc: "We listen deeply and hold space without judgment.",
                  },
                  {
                    title: "Authenticity",
                    desc: "We create safe, stigma-free spaces where people can be fully themselves.",
                  },
                  {
                    title: "Empowerment",
                    desc: "We focus on building skills, confidence, and independence.",
                  },
                  {
                    title: "Innovation",
                    desc: "We blend psychology, coaching, and creative tools to design unique, practical programs.",
                  },
                  {
                    title: "Community",
                    desc: "Growth is strongest when shared; we foster connections that heal and empower.",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="wave-bg p-6 rounded-lg shadow-soft transition-transform duration-300 hover:scale-105"
                  >
                    <h3 className="text-white text-lg md:text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-100">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Story Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-base md:text-lg text-gray-800 leading-relaxed">
                <p>
                  PsychJinni was born from a deeply personal place—a recognition
                  that mental wellness often feels distant, clinical, or
                  intimidating. Too many people suffer in silence, unsure of
                  where to turn or afraid of being judged. We wanted to change
                  that.
                </p>
                <p>
                  What began as a vision to simplify mental wellness has grown
                  into a platform that feels human, relatable, and impactful.
                  Our approach bridges psychology, coaching, and community to
                  create programs that go beyond "fixing problems." Instead, we
                  help people discover their strengths, navigate their struggles
                  with dignity, and unlock a deeper sense of purpose.
                </p>
                <p>
                  Along the way, we've seen people who once felt invisible find
                  their voice. We've witnessed workplaces transform into kinder,
                  healthier spaces. We've stood with individuals through grief,
                  burnout, and self-doubt—and celebrated with them as they
                  stepped into confidence, joy, and growth.
                </p>
                <p>
                  PsychJinni isn't just a service; it's a heartfelt commitment
                  to make mental wellness feel less like a diagnosis and more
                  like a journey of being human.
                </p>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    image: "/testimonials/avatar_10.png",
                    name: "Dr. Sarah Johnson",
                    role: "Co-Founder & Clinical Director",
                    desc: "Licensed Clinical Psychologist with 15+ years of experience in trauma therapy and anxiety disorders.",
                  },
                  {
                    image: "/testimonials/avatar_01.png",
                    name: "Dr. Michael Chen",
                    role: "Co-Founder & Research Director",
                    desc: "Licensed Marriage & Family Therapist specializing in couples therapy and family systems.",
                  },
                  {
                    image: "/testimonials/avatar_02.png",

                    name: "Dr. Amanda Rodriguez",
                    role: "Senior Therapist",
                    desc: "Licensed Clinical Social Worker with expertise in depression, grief counseling, and group therapy.",
                  },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="text-center bg-white px-6 py-4 border border-primary shadow-2xl rounded-xl"
                  >
                    <div className="relative w-28 h-28 mx-auto mb-8">
                      <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-6">
                        <img src={member.image} alt={member.image} />
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {member.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder’s Note Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                A Note from Our Founder
              </h2>
              <div className="bg-card border-l-4 border-primary p-6 md:p-8 rounded-lg shadow-soft">
                <blockquote className="text-base md:text-lg text-muted-foreground leading-relaxed italic space-y-4 font-semibold">
                  <p>
                    "PsychJinni was created because I saw too many
                    people—including myself—silently carrying emotional burdens
                    while putting on a brave face for the world..."
                  </p>
                  <p>
                    This work is deeply personal to me. Every program we design
                    is guided by the belief that no one should ever feel ashamed
                    for needing help...
                  </p>
                  <p>
                    If you are here, it means you're ready to choose yourself.
                    And I want you to know—you are not alone. PsychJinni is here
                    to remind you that healing is possible, growth is beautiful,
                    and your story deserves to be heard."
                  </p>
                </blockquote>
                <div className="mt-6">
                  <p className="text-foreground font-semibold">
                    With warmth and hope,
                  </p>
                  <p className="text-primary font-bold text-lg">Duaa</p>
                  <img
                    src={"/founders_sign.png"}
                    alt=""
                    className="w-48 h-48 -mt-20 -mb-10 -rotate-20"
                  />
                  <p className="text-muted-foreground text-sm">
                    Founder, PsychJinni
                  </p>
                </div>
              </div>
            </div>

            {/* Approach Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Our Approach
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                At PsychJinni, we don't just talk about well-being—we design it
                with you. Our programs are:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: "Personalized",
                    gradient: "from-amber-500 to-orange-600",
                    desc: "to your goals and challenges",
                  },
                  {
                    title: "Practical",
                    gradient: "from-blue-500 to-purple-600",

                    desc: "with tools you can use in everyday life",
                  },
                  {
                    title: "Non-judgmental",
                    gradient: "from-emerald-500 to-teal-600",

                    desc: "free from stigma or labels",
                  },
                  {
                    title: "Transformative",
                    gradient: "from-rose-500 to-pink-600",
                    desc: "helping you grow beyond survival into thriving",
                  },
                ].map((approach, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${approach.gradient} opacity-80 p-6 rounded-lg transition-transform duration-300 hover:scale-105`}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {approach.title}
                    </h3>
                    <p className="text-gray-200">{approach.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-10">
        <Footer />
      </div>
    </div>
  );
};

export default About;
