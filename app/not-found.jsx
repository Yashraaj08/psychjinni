"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(135deg, #a8c0ff 0%, #cfd9ff 30%, #e0c3fc 60%, #8ec5fc 100%)",
      }}
    >
      <div className="flex flex-col sm:flex-row items-center gap-8 justify-center w-full max-w-4xl">
        <motion.div
          className="text-6xl sm:text-7xl mb-4 bg-white/70 rounded-full p-6 shadow-lg"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          🧭
        </motion.div>
        <div className="sm:ml-4 w-full max-w-md">
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold text-[#1e293b] mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            404
          </motion.h1>
          <motion.h2
            className="text-lg sm:text-2xl font-bold text-slate-700 mb-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            OOPS! PAGE NOT FOUND.
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-slate-500 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            You must have picked the wrong door because we haven't been able to
            lay our eye on the page you've been searching for.
          </motion.p>
        </div>
      </div>
      <motion.div
        className="mt-10 w-full max-w-xs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Button
          variant="ghost"
          onClick={() => router.push("/")}
          className="w-full bg-white text-gray-700 hover:text-black border border-gray-700"
        >
          ← Back to Home
        </Button>
      </motion.div>
    </div>
  );
}
