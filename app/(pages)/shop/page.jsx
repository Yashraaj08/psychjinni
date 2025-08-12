'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Shop() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = () => {
    if (email) {
      // Simulate sending email to backend
      setSubmitted(true);
    }
  };

  return (
  <div>
    <Header />
      <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-white to-gray-100 text-center">
      <div className="animate-bounce text-6xl mb-4">🛍️</div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Our Shop is Coming Soon!
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
        We’re building something exciting! Soon you’ll be able to explore exclusive products, special deals, and more. Stay tuned and be the first to know when we launch.
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
        <p className="text-green-600 font-medium mb-6">🎉 You’ll be the first to know!</p>
      )}

      <Button
        variant="ghost"
        onClick={() => router.push('/')}
        className="mt-10 text-gray-700 hover:text-black border border-gray-700"
      >
        ← Back to Home
      </Button>
    </div>
    <Footer />
  </div>
  );
}
