import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "CORPORATES",
      description: "Professional mental health support for organizations",
      link: "/services/corporate",
    },
    {
      id: "02",
      title: "EDUCATIONAL",
      description: "Mental wellness programs for educational institutions",
      link: "/services/educational",
    },
    {
      id: "03",
      title: "INDIVIDUALS",
      description: "Personalized therapy and counseling services",
      link: "/services/individual",
    },
    {
      id: "04",
      title: "RELATIONSHIP",
      description: "Couples and family therapy solutions",
      link: "/services/relationship",
    },
  ];

  return (
    <section className="py-12">
      {/* Heading */}
      <div className="top-30 text-center mb-8">
        <h2 className="text-4xl font-extrabold text-orange-500 flex items-center justify-center gap-2">
          Our Services <span className="text-orange-500">*</span>
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-purple-900 text-sm sm:text-base">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and standard
          dummy text ever since.
        </p>
        <Button
          size="lg"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg"
        >
          Book Now
        </Button>
      </div>

      {/* Services Grid */}
      <div className="bg-yellow-400 rounded-2xl p-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link key={service.id} href={service.link} passHref>
              <Card className="relative border border-orange-200 shadow-md hover:shadow-lg transition-shadow rounded-xl cursor-pointer">
                <CardContent className="flex justify-between items-center p-4">
                  <div className="flex flex-col">
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
