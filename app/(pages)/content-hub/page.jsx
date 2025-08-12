"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContentHub() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = () => {
    if (email) {
      // Simulate API call
      setSubmitted(true);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-gray-50 to-gray-100 text-center">
        <div className="animate-bounce text-6xl mb-4">📚</div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Content Hub Launching Soon!
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          We're crafting a powerful hub full of tutorials, guides, videos,
          blogs, and resources to help you grow, learn, and stay inspired. Be
          the first to get access.
        </p>

        {!submitted ? (
          <div className="w-full max-w-md space-y-4">
            <Input
              type="email"
              placeholder="Enter your email to get notified"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="w-full" onClick={handleNotify} disabled={!email}>
              Notify Me
            </Button>
          </div>
        ) : (
          <p className="text-green-600 font-medium mb-6">
            ✅ You're on the list!
          </p>
        )}

        <Button
          variant="ghost"
          onClick={() => router.push("/")}
          className="mt-10 text-gray-700 hover:text-black border border-gray-700"
        >
          ← Back to Home
        </Button>
      </div>
      <Footer />
    </div>
  );
}
