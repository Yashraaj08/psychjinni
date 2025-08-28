"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, Mail, Phone } from "lucide-react";

const Privacy = () => {
  return (
    <div
      className="min-h-screen -mt-40"
      style={{
        background:
          "linear-gradient(135deg, #a8c0ff 0%, #cfd9ff 30%, #e0c3fc 60%, #8ec5fc 100%)",
      }}
    >
      <div className="pt-44">
        <Header />
      </div>

      <main className="container mx-auto px-4 py-16 max-w-4xl flex-grow">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            At <b>PsychJinni</b>, your trust matters most. We respect your privacy and
            are committed to protecting your personal information with care and
            confidentiality.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="bg-card rounded-lg p-6 sm:p-8 shadow-sm border">
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-3">We may collect:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Basic details (name, email, phone number) when you sign up.
                </li>
                <li>
                  • Information you choose to share during coaching sessions,
                  assessments, or program registrations.
                </li>
                <li>• Website usage data to help us improve our services.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-3">
                We use your information to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Deliver personalized coaching and self-growth programs.
                </li>
                <li>
                  • Communicate with you regarding sessions, updates, or
                  resources.
                </li>
                <li>• Enhance our services and user experience.</li>
                <li>• Share newsletters or resources (only if you opt-in).</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Confidentiality – Your Journey Stays Private
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Everything you share with us during coaching sessions,
                  workshops, or through forms is kept strictly confidential.
                </li>
                <li>
                  • We will never disclose your personal experiences, growth
                  journey, or shared information without your consent.
                </li>
                <li>• Confidentiality may only be broken if:</li>
                <ul className="ml-6 space-y-1">
                  <li>- Required by law or court order.</li>
                  <li>
                    - There is a risk of harm to yourself (suicidal intent or
                    self-harm) or others.
                  </li>
                  <li>- You give written permission to share.</li>
                </ul>
              </ul>
            </section>

            {/* Suicide Prevention Note */}
            <section className="mb-8">
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3">
                      Important Note on Suicide Prevention
                    </h3>
                    <p className="text-red-700 dark:text-red-400 mb-4">
                      If you ever express thoughts of suicide or severe
                      self-harm, our first responsibility is to ensure your
                      safety. In such cases, confidentiality may be broken to
                      connect you with immediate support.
                    </p>
                    <p className="text-red-700 dark:text-red-400 mb-3">
                      If you are in India and need urgent help, please reach out
                      to:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                        <Phone className="w-4 h-4" />
                        <span>
                          Vandrevala Foundation Helpline: +91-9999 666 555
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                        <Phone className="w-4 h-4" />
                        <span>AASRA Helpline (24x7): +91-98204 66726</span>
                      </div>
                    </div>
                    <p className="text-red-800 dark:text-red-300 font-medium mt-4">
                      Remember: You are not alone, and help is available.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Information Sharing
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We do not sell or trade your personal information.</li>
                <li>
                  • Limited sharing may occur with trusted partners (like
                  payment systems or scheduling tools) only for service
                  delivery.
                </li>
                <li>
                  • Any sharing beyond this will always require your permission.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Data Security
              </h2>
              <p className="text-muted-foreground">
                We take reasonable steps (secure platforms, encrypted tools, and
                restricted access) to protect your data. However, no method of
                digital storage is 100% secure, and we encourage you to use
                discretion when sharing sensitive information online.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Your Rights
              </h2>
              <p className="text-muted-foreground mb-3">
                You have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Access the information we store about you.</li>
                <li>• Request corrections or deletion of your data.</li>
                <li>• Withdraw consent for communications anytime.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Changes to Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this policy as we grow and improve. Updates will
                always be available here.
              </p>
            </section>

            {/* Contact */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Contact Us</span>
              </div>
              <p className="text-muted-foreground">
                For any concerns about privacy, confidentiality, or your safety,
                you can contact us directly at:
                <a
                  href="mailto:psychjinni@gmail.com"
                  className="text-primary font-medium ml-1"
                >
                  psychjinni@gmail.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      <div className="py-10">
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
