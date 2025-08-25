import { TestimonialsCards } from "./ui/testimonial";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The corporate program completely transformed how our team communicates and supports one another. Productivity and morale skyrocketed!",
  },
  {
    name: "David L.",
    rating: 4,
    text: "The educational wellness sessions were inspiring and practical. I noticed students becoming more focused and less stressed.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "I joined the individual program during a very tough phase, and it helped me heal and grow at my own pace. Life-changing!",
  },
  {
    name: "Michael & Anna",
    rating: 5,
    text: "The relationship program gave us the tools to really listen to each other and build a stronger bond. We feel closer than ever.",
  },
  {
    name: "Rachel T.",
    rating: 4,
    text: "Mindfulness sessions helped me find balance amidst chaos. I feel calmer, more centered, and happier with myself.",
  },
  {
    name: "James K.",
    rating: 5,
    text: "PsychJinni combines compassion with science. It’s not just therapy, it’s a journey of rediscovery and empowerment.",
  },
  {
    name: "Emily R.",
    rating: 5,
    text: "The educational program reshaped my classroom. Students are more empathetic, collaborative, and emotionally aware.",
  },
  {
    name: "Carlos D.",
    rating: 4,
    text: "Great program! The spiritual and mindfulness sessions really helped me feel more present and connected in my daily life.",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F36B1D] mb-4">
          Testimonials<span className="text-[#F36B1D]">*</span>
        </h2>
      </div>
      <TestimonialsCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}
