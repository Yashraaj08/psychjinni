import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Wade Warren",
      rating: 4,
      text: "Awesome service and I recommend to anyone needing help"
    },
    {
      name: "Wade Warren", 
      rating: 4,
      text: "Awesome service and I recommend to anyone needing help"
    },
    {
      name: "Wade Warren",
      rating: 4, 
      text: "Awesome service and I recommend to anyone needing help"
    },
    {
      name: "Wade Warren",
      rating: 4,
      text: "Awesome service and I recommend to anyone needing help"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000] mb-4">
            Testimonials<span className="text-[#F36B1D]">*</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className=" bg-[#7264FF]/10 shadow-md hover:shadow-medium transition-all duration-300">
              {/* Avatar */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium text-foreground">{testimonial.rating}</span>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-center text-foreground">{testimonial.name}</h3>
              
              {/* Testimonial Text */}
              <p className="text-muted-foreground text-center text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
