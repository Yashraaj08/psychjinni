"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #a8c0ff 0%, #cfd9ff 30%, #e0c3fc 60%, #8ec5fc 100%)",
      }}
    >
      <Header />

      <main className="container mx-auto px-4 py-16 max-w-4xl flex-grow">
        {/* Page Title */}
        <div className="text-center my-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-muted-foreground">
            Please read these terms carefully before using our services
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm border">
            <p className="text-muted-foreground mb-6">
              Welcome to PsychJinni. By accessing or using our website and
              services, you agree to the following terms. Please read them
              carefully.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Use of Our Services
              </h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>
                  PsychJinni provides coaching-based and wellness-focused
                  programs, resources, and content.
                </li>
                <li>
                  Our services are designed for personal growth and well-being,
                  not as a substitute for medical, psychological, or psychiatric
                  treatment.
                </li>
                <li>
                  You agree to use our website and services for personal and
                  lawful purposes only.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Eligibility
              </h2>
              <p className="text-muted-foreground">
                You must be at least 18 years old to access our services. If you
                are under 18, parental or guardian consent is required.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Intellectual Property
              </h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>
                  All content on this website—including text, graphics, logos,
                  and program materials—belongs to PsychJinni unless stated
                  otherwise.
                </li>
                <li>
                  You may not copy, modify, or redistribute our materials
                  without written consent.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Payment & Refund Policy
              </h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>
                  Fees for coaching sessions, workshops, or digital products
                  must be paid in full before access.
                </li>
                <li>
                  Refunds may be offered under specific circumstances (such as
                  cancellations within a defined time frame). Details will be
                  shared at the time of booking.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Limitation of Liability
              </h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>
                  PsychJinni aims to provide reliable and high-quality services.
                  However, results may vary from person to person.
                </li>
                <li>
                  We are not liable for any damages, losses, or outcomes
                  resulting from the use of our services or website.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Changes to Terms
              </h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>
                  We may update these Terms & Conditions occasionally. By
                  continuing to use our services, you agree to the updated
                  terms.
                </li>
                <li>
                  If you have any questions about our Terms, please contact us
                  at{" "}
                  <a
                    href="mailto:psychjinni@gmail.com"
                    className="text-primary underline"
                  >
                    psychjinni@gmail.com
                  </a>
                  .
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
