"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="-top-40 relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/about-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#000]/50 to-primary/60"></div>
        </div>

        <div className="top-30 relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Dedicated to transforming lives through compassionate,
              evidence-based mental health care.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="-mt-30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Mission Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                voluptate eveniet, officia hic esse explicabo a, reprehenderit
                vel harum sit earum velit voluptatibus aliquid unde?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam error molestiae minus a? Mollitia consectetur, nam
                reiciendis blanditiis fuga dignissimos esse obcaecati? Omnis,
                error perferendis.
              </p>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Compassion",
                    description:
                      "We approach every client with empathy, understanding, and genuine care for their unique journey.",
                  },
                  {
                    title: "Excellence",
                    description:
                      "We maintain the highest standards of clinical practice and continue our professional development.",
                  },
                  {
                    title: "Inclusivity",
                    description:
                      "We welcome and affirm people of all backgrounds, identities, and experiences.",
                  },
                  {
                    title: "Innovation",
                    description:
                      "We embrace new approaches and technologies that enhance the therapeutic experience.",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-[#fff] p-6 rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Story Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  distinctio. Harum nostrum omnis qui tenetur distinctio
                  reprehenderit placeat, illum voluptates fugit? Ut repudiandae,
                  vitae iusto ea ab cumque tempore aspernatur cupiditate iure
                  sapiente sequi repellat, officia dicta, facere excepturi sit
                  minima nihil quibusdam eum inventore!
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem dolores consectetur architecto corrupti libero
                  voluptatibus et quia molestias necessitatibus omnis dolorum
                  aut officia iste cumque consequatur molestiae inventore, quam
                  veritatis.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas nihil reprehenderit minima, non amet, consequuntur
                  assumenda aut culpa asperiores tenetur delectus quo alias,
                  distinctio eos.
                </p>
              </div>
            </div>

            {/* Approach Section */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                accusantium similique obcaecati aut, animi eaque rerum dolorum
                possimus aspernatur at incidunt id cum provident earum doloribus
                dolor porro soluta, optio quae voluptas sequi delectus. Sed
                dignissimos nam laudantium nobis accusantium quis odio
                asperiores adipisci, error omnis dicta impedit repellat?
              </p>
              <div className="bg-orange-200/20 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  "Healing is not about returning to who you were, but
                  discovering who you can become."
                </h3>
                <p className="text-muted-foreground italic">
                  - Mental Wellness Center Philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
