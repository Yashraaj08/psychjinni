import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "CORPORATES",
      description:
        "Corporate wellness redefined—enabling teams to perform at their best with resilience, harmony, and maximum performance.",
      link: "/services/corporate",
    },
    {
      id: "02",
      title: "EDUCATIONAL",
      description:
        "Education wellness programs that construct healthier, more concentrated, and emotionally nurturing learning environments.",
      link: "/services/educational",
    },
    {
      id: "03",
      title: "INDIVIDUALS",
      description:
        "Each journey is individual—our programs lead you to heal, grow, and flourish at your own pace.",
      link: "/services/individual",
    },
    {
      id: "04",
      title: "RELATIONSHIP",
      description:
        "Specialized programs for couples and families to enhance communication, deepen relationships, and develop healthy, supportive relationships.",
      link: "/services/relationship",
    },
    {
      id: "05",
      title: "Spirituality & Mindfulness",
      description:
        "Specialized programs for couples and families to enhance communication, deepen relationships, and develop healthy, supportive relationships.",
      link: "/services/spirituality",
    },
  ];

  return (
    <section className="py-12">
      {/* Heading */}
      <div className="top-30 text-center mb-8">
        <h2 className="text-4xl font-extrabold text-orange-500 flex items-center justify-center gap-2">
          Our Approach <span className="text-orange-500">*</span>
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-purple-900 text-sm sm:text-base mb-4">
          Your mind is unique, and so is the healing process. We blend
          creativity and compassion to design programs that enable you to
          develop, thrive, and live on your terms at PsychJinni.
        </p>
        <a
          href="/contact-us"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-2 shadow-xl cursor-pointer text-lg"
        >
          Book Now
        </a>
      </div>

      {/* Services Grid */}
      <div className="bg-yellow-400 rounded-2xl p-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.link}
              passHref
              className={`
                ${index === services.length - 1 ? "sm:col-span-2" : ""}
              `}
            >
              <Card className="relative border border-orange-200 shadow-md hover:shadow-lg transition-shadow rounded-xl cursor-pointer h-full flex">
                <CardContent className="flex flex-col justify-between p-4 w-full">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {service.description}
                    </p>
                  </div>
                  <span className="absolute top-2 right-4 text-black font-extrabold text-5xl">
                    {service.id}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
