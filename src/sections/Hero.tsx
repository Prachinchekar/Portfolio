"use client";

import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const fullText =
    "I build modern, animated & high-performance web experiences";

  // Typing animation
  useEffect(() => {
    setMounted(true);

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // Mouse parallax (disable on mobile)
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const move = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden">

      {/* 🔥 Glow */}
      <div
        className="pointer-events-none absolute w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-500 rounded-full blur-[120px] opacity-20"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
      />

      {/* 🔥 Secondary glow */}
      <div className="pointer-events-none absolute w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-blue-500 rounded-full blur-[100px] opacity-10 animate-pulse" />

      {/* 🔥 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-7xl leading-tight font-bold z-10 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 text-transparent bg-clip-text"
      >
        Pranay Chinchekar
      </motion.h1>

      {/* ✍️ Typing */}
      <p className="mt-4 text-sm sm:text-base md:text-xl text-gray-300 max-w-md md:max-w-2xl leading-relaxed min-h-[40px]">
        {text}
        <span className="animate-pulse ml-1">|</span>
      </p>

      {/* 🔥 Tech stack */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-gray-400 text-xs sm:text-sm flex flex-wrap justify-center gap-2"
      >
        <span>• FullStack Developer</span>
        <span>• React</span>
        <span>• Next.js</span>
        <span>• Node.js</span>
        <span>• MongoDB</span>
      </motion.div>

      {/* 🔥 Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <MagneticButton>
          <a
            href="#projects"
            className="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition shadow-lg"
          >
            View Projects
          </a>
        </MagneticButton>

        <MagneticButton>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-6 py-3 border border-white/30 rounded-lg hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </MagneticButton>
      </motion.div>
    </section>
  );
}