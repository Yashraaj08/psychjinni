import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "CORPORATES",
      image: "/home/corporate_home.mov",
      description:
        "Corporate wellness redefined—enabling teams to perform at their best with resilience, harmony, and maximum performance.",
      link: "/services/corporate",
    },
    {
      id: "02",
      title: "EDUCATIONAL",
      image: "/home/educational_home.mov",
      description:
        "Education wellness programs that construct healthier, more concentrated, and emotionally nurturing learning environments.",
      link: "/services/educational",
    },
    {
      id: "03",
      title: "INDIVIDUALS",
      image: "/home/individual_home.mov",
      description:
        "Each journey is individual—our programs lead you to heal, grow, and flourish at your own pace.",
      link: "/services/individual",
    },
    {
      id: "04",
      title: "RELATIONSHIP",
      image: "/home/relationship_home.mov",
      description:
        "Specialized programs for couples and families to enhance communication, deepen relationships, and develop healthy, supportive relationships.",
      link: "/services/relationship",
    },
    {
      id: "05",
      title: "SPIRITUALITY & MINDFULLNESS",
      image: "/home/spirituality_home.mov",
      description:
        "Specialized programs for couples and families to enhance communication, deepen relationships, and develop healthy, supportive relationships.",
      link: "/services/spirituality",
    },
  ];

  return (
    <section className="py-12 bg-[#fafafa]">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#71722C]/70">
          Our Approach
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-slate-700 text-sm sm:text-base mb-4">
          Your mind is unique, and so is the healing process. We blend
          creativity and compassion to design programs that enable you to
          develop, thrive, and live on your terms at PsychJinni.
        </p>
        <a
          href="/contact-us"
          className="bg-primary hover:bg-primary/80 text-white rounded-full px-8 py-2 shadow-xl cursor-pointer text-lg"
        >
          Book Now
        </a>
      </div>

      {/* Services Grid */}
      <div className="bg-[#71722C]/50 rounded-2xl p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.link}
              passHref
              className={index === services.length - 1 ? "sm:col-span-2" : ""}
            >
              <Card className="relative border border-orange-200 shadow-md hover:shadow-lg transition-shadow rounded-xl cursor-pointer h-full">
                <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 w-full">
                  {/* Left Section - Title + Description */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-500 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Section - Video */}
                  {service.image && (
                    <div className="flex-shrink-0 flex justify-center items-center">
                      <video
                        src={service.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
