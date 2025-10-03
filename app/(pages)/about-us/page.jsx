"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import BackgroundSection from "@/components/BackgroundSection";

const About = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <BackgroundSection className="top-10" title="About Us" bgImage="/Corporate.gif" />

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
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
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
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
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
                    image: "/testimonials/Avatar_17.png",
                    name: "Duaa",
                    role: "Founder",
                    desc: "Duaa, the founder of PsychJinni, brings over 7 years of experience in relationship coaching, individual self-work, and corporate coaching. Known for her empathetic yet practical approach, she helps people find clarity, strengthen connections, and create lasting change.",
                  },
                  {
                    image: "/testimonials/Avatar_20.png",
                    name: "Yashasvi Sachdeva",
                    role: "Operations & Marketing Head",
                    desc: "Yashasvi leads Operations and Marketing at PsychJinni, ensuring every initiative runs smoothly while reaching the right audience with impact. With a strategic yet creative approach, he bridges efficiency with empathy, making sure PsychJinni’s vision connects meaningfully with people.",
                  },
                  {
                    image: "/testimonials/Avatar_16.png",
                    name: "Dr. Sakshita Anand",
                    role: "Senior Coach & Consultant",
                    desc: "With over 10 years of experience, Dr. Sakshita has worked extensively with institutions, educational programs, and wellness initiatives. As Senior Coach and Consultant at PsychJinni, she offers knowledge-rich, compassionate guidance that supports both individuals and organizations in thriving with balance.",
                  },
                  {
                    image: "/testimonials/Avatar_19.png",
                    name: "Jasmina Khatun",
                    role: "Lead Coach",
                    desc: "With 6 years of experience, Jasmina has been dedicated to empowering individuals and teams through impactful coaching and development programs. As Lead Coach at PsychJinni, she brings a dynamic, supportive approach that fosters growth, resilience, and meaningful progress, helping clients navigate challenges and achieve lasting success.",
                  },
                  {
                    image: "/testimonials/Avatar_21.png",
                    name: "Arsha Alag",
                    role: "Lead Coach",
                    desc: "Arsha blends her expertise in educational and spiritual coaching to guide individuals toward balance, clarity, and growth. As Lead Coach at PsychJinni, her unique style integrates wisdom with practical tools, helping people nurture both personal understanding and inner well-being.",
                  },
                  {
                    image: "/testimonials/Avatar_18.png",
                    name: "Yograj",
                    role: "Techiee",
                    desc: "Yograj is the tech mind behind PsychJinni, ensuring seamless digital experiences for our community. With his expertise in technology and innovation, he makes sure that every interaction is simple, reliable, and user-friendly—helping people connect with support effortlessly.",
                  },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="text-center bg-white px-6 py-4 border border-primary shadow-2xl rounded-xl"
                  >
                    <div className="relative w-28 h-28 mx-auto mb-8">
                      <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-6">
                        <Image
                          width={100}
                          height={100}
                          src={member.image}
                          alt={member.image}
                        />
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
