"use client";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #a8c0ff 0%, #cfd9ff 30%, #e0c3fc 60%, #8ec5fc 100%)",
      }}
    >
      <Header />

      {/* Hero Section */}
      <section className="-top-40 relative flex items-center overflow-hidden h-[50vh] sm:h-[60vh] md:h-[60vh] lg:h-[60vh]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/contact-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/80 sm:bg-gradient-to-r sm:from-primary/20 sm:to-primary/60 lg:bg-gradient-to-r lg:from-primary/10 lg:to-primary/90"></div>
        </div>

        {/* Text Content */}
        <div className="top-20 relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-2xl md:max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Ready to start your mental health journey? We're here to help you
              take the first step towards healing and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="-top-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-extrabold text-[#1e293b] mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-slate-600 max-w-lg">
                  We're committed to providing you with the support you need.
                  Reach out through any of the following ways, and we’ll respond
                  promptly.
                </p>
              </motion.div>

              <div className="grid gap-6">
                {/* Contact Items */}
                {[
                  {
                    title: "Office Address:",
                    desc: "Dehradun, Uttarakhand, India",
                    icon: "📍",
                  },
                  { title: "Phone:", desc: "(555) 123-4567", icon: "📞" },
                  {
                    title: "Email:",
                    desc: "psychjinni@gmail.com",
                    icon: "✉️",
                  },
                  {
                    title: "Office Hours:",
                    desc: "Mon - Fri: 10:00 AM - 7:00 PM",
                    icon: "⏰",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-4 bg-white/70 backdrop-blur-lg shadow-md p-5 rounded-xl transition"
                  >
                    {/* Icon */}
                    <div className="text-2xl">{item.icon}</div>

                    {/* Title + Description in row */}
                    <div className="flex flex-row gap-1 flex-wrap">
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Info */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-red-50 border-l-4 border-red-400 p-6 rounded-xl"
              >
                <h3 className="font-semibold text-red-600 mb-2">
                  🚨 Emergency Support
                </h3>
                <p className="text-slate-600 mb-3">
                  If you're experiencing a mental health emergency, please call:
                </p>
                <p className="text-red-500 font-bold text-lg">
                  Crisis Hotline: 19 / 1800-599-0019
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="py-10">
        <div className="py-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
