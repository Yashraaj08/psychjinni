import { TestimonialsCards } from "./ui/testimonial";

const testimonials = [
  {
    image: "/testimonials/avatar_04.png",
    name: "Aarti Mehra",
    location: "Mumbai, India",
    rating: 5,
    text: "I always thought I had to deal with stress alone. PsychJinni made me feel safe and understood. For the first time, I felt someone was really listening without judgment.",
  },
  {
    image: "/testimonials/avatar_09.png",
    name: "Rahul Iyer",
    location: "Bangalore, India",
    rating: 4,
    text: "As a working professional, burnout was hitting me hard. The sessions gave me simple, practical ways to balance work and life. I feel more in control now.",
  },
  {
    image: "/testimonials/avatar_07.png",
    name: "Sarah Collins",
    location: "London, UK",
    rating: 5,
    text: "What I loved most was how human and warm the sessions felt. No jargon, no judgment—just genuine support and clear steps forward.",
  },
  {
    image: "/testimonials/avatar_04.png",
    name: "Neha Kapoor",
    location: "Delhi, India",
    rating: 5,
    text: "After my divorce, I felt broken. PsychJinni helped me slowly rebuild myself. The compassion and tools they gave me made me believe in second chances.",
  },
  {
    image: "/testimonials/avatar_05.png",
    name: "Vikas Sharma",
    location: "Pune, India",
    rating: 4,
    text: "What stood out for me was the non-judgmental approach. It wasn’t about labeling me, but about helping me understand myself better. That changed everything.",
  },

  {
    image: "/testimonials/avatar_03.png",
    name: "Daniel Rodriguez",
    location: "New York, USA",
    rating: 5,
    text: "I’ve tried therapy before, but PsychJinni felt different. It was less about diagnosis and more about actually equipping me to handle life better.",
  },
  {
    image: "/testimonials/avatar_02.png",
    name: "Sanya Thomas",
    location: "Kochi, India",
    rating: 4,
    text: "I used to think counseling was only for people with ‘serious issues.’ But PsychJinni showed me it’s also about growth, self-confidence, and creating healthier relationships.",
  },
  {
    image: "/testimonials/avatar_05.png",
    name: "Arjun Desai",
    location: "Ahmedabad, India",
    rating: 5,
    text: "The workplace stress sessions were a game-changer. I now handle conflicts more calmly and don’t carry the weight home anymore.",
  },
  {
    image: "/testimonials/avatar_06.png",
    name: "Emma Johnson",
    location: "Sydney, Australia",
    rating: 5,
    text: "As an educator, I was looking for ways to support my students. PsychJinni not only helped me personally but gave me tools to pass on.",
  },
  {
    image: "/testimonials/avatar_04.png",
    name: "Ritu Malhotra",
    location: "Chandigarh, India",
    rating: 4,
    text: "I had struggled with grief for years after losing my father. PsychJinni gave me a way to heal without feeling guilty for moving forward.",
  },
  {
    image: "/testimonials/avatar_07.png",
    name: "Suresh Reddy",
    location: "Hyderabad, India",
    rating: 5,
    text: "The balance of psychology and coaching is what worked for me. It wasn’t heavy or clinical, but also not just motivational talk. It was real and actionable.",
  },
  {
    image: "/testimonials/avatar_03.png",
    name: "Hiroshi Tanaka",
    location: "Tokyo, Japan",
    rating: 5,
    text: "I found the mindfulness program deeply grounding. It brought me back to myself during one of the most stressful phases of my life.",
  },
  {
    image: "/testimonials/avatar_04.png",
    name: "Priya Nair",
    location: "Trivandrum, India",
    rating: 4,
    text: "As a mother, I often ignored my own mental health. PsychJinni reminded me that caring for myself is also caring for my family. That hit home.",
  },
  {
    image: "/testimonials/avatar_03.png",
    name: "Aman Verma",
    location: "Gurgaon, India",
    rating: 5,
    text: "I had lost confidence after failing in my startup. The coaching here helped me rebuild my mindset and approach life with fresh energy.",
  },
  {
    image: "/testimonials/avatar_06.png",
    name: "Maria Fernandez",
    location: "Toronto, Canada",
    rating: 4,
    text: "It felt like talking to someone who truly cared. PsychJinni made me realize that healing doesn’t have to be lonely—it can be guided with kindness.",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F36B1D] mb-4">
          Testimonials<span className="text-[#F36B1D]"></span>
        </h2>
      </div>
      <TestimonialsCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}
