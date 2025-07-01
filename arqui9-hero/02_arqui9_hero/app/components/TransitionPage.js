"use client";
import { motion } from "framer-motion";

export default function TransitionPage() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[999] pointer-events-none">
      {/* TEXT: always centered, above both layers */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <h1 className="text-4xl font-extralight font-title text-gray-600 italic">
          AK0121
        </h1>
      </div>

      {/* WHITE SCREEN */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
        className="absolute inset-0 bg-white z-20"
      />
    </div>
  );
}
