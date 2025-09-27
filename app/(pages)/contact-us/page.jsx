"use client";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroVideoSection from "@/components/HeroVideoSection";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

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
      <HeroVideoSection title="Contact Us" videoSrc="/home/contact-us.gif" />

      {/* Contact Information & Form Section */}
      <section className="mt-20 relative mx-4 sm:mx-8 lg:mx-20">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-5">
              <div>
                <h2 className="text-4xl font-extrabold text-[#1e293b] mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-slate-600 max-w-lg">
                  We're committed to providing you with the support you need.
                  Reach out through any of the following ways, and we’ll respond
                  promptly.
                </p>
              </div>

              <div className="grid gap-6">
                {/* Contact Items */}
                {[
                  {
                    title: "Office Address:",
                    desc: "142/2 Chaman Vihar, Niranjanpur, Dehradun 248001, Uttarakhand, India",
                    icon: "📍",
                  },
                  { title: "Phone:", desc: "+919897192630", icon: "📞" },
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
                    className="flex items-center gap-4 bg-white backdrop-blur-lg shadow-md p-5 rounded-xl transition"
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
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-xl mt-8 sm:mt-10 md:mt-12">
            <h3 className="font-semibold text-red-600 mb-2">
              🚨 Emergency Support
            </h3>
            <p className="text-slate-700 mb-4">
              If you ever express thoughts of suicide or severe self-harm, our
              first responsibility is to ensure your safety. In such cases,
              confidentiality may be broken to connect you with immediate
              support.
            </p>
            <p className="text-slate-700 mb-3">
              If you are in India and need urgent help, please reach out to:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-red-700">
                <Phone fill="#C10008" className="w-4 h-4" />
                <span>Vandrevala Foundation Helpline: +91-9999 666 555</span>
              </div>
              <div className="flex items-center gap-2 text-red-700">
                <Phone fill="#C10008" className="w-4 h-4" />
                <span>AASRA Helpline (24x7): +91-98204 66726</span>
              </div>
            </div>
            <p className="text-slate-800 dark:text-red-300 font-medium mt-4">
              Remember: You are not alone, and help is available.
            </p>
          </div>
        </div>
      </section>

      <div className="py-10">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
