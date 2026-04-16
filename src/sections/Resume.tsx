"use client";

import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

export default function Resume() {
  return (
    <section className="min-h-screen px-6 py-20 flex justify-center items-center">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl p-10 rounded-2xl glass border border-white/10 text-center"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">
          Resume
        </h2>

        <p className="text-gray-400 mb-10">
          Download or view my resume to explore my experience, skills, and projects.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">

          {/* Download */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:scale-103 transition"
          >
            <Download size={18} />
            Download Resume
          </a>

          {/* View */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-lg border border-white/30 hover:bg-white hover:text-black transition"
          >
            <Eye size={18} />
            View Resume
          </a>

        </div>

        {/* Extra highlight */}
        <div className="mt-10 text-sm text-gray-500">
          📄 Updated: 2026 | Available for opportunities
        </div>

      </motion.div>
    </section>
  );
}