"use client"

import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { title } from "process";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Task manager",
    desc: "Full-stack task app with authentication",
    tech: ["React", "Node", "MongoDB"],
    github: "https://github.com/Prachinchekar/Task-Manager",
  },
  {
    title: "Goal-Setter",
    desc: "Full-stack goal setter app with authentication",
    tech: ["React", "Node", "MongoDB"],
    github: "https://github.com/Prachinchekar/Goal-Setter-App"
  },
  {
    title: "Portfolio Website",
    desc: "Animated portfolio with GSAP",
    tech: ["Next.js", "Tailwind"],
    github: "https://github.com/Prachinchekar/Portfolio"
  },
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    gsap.from(ref.current, {
      y: 150,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%"
      },
    });
  }, []);

  return (
    <section ref={ref} id="projects" className="min-h-screen px-6">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div key={i} className="glass p-6 rounded-xl hover:scale-103 transition  border border-white/10">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>

            <div className="flex gap-2 mt-3">
              {p.tech.map((t) => (
                <span key={t} className="text-sm bg-white/10 px-2 py-1 rounded">
                  {t}
                </span>
              ))}

              {/* <Image 
                src="/projet.png"
                alt="project"
                width={500}
                height={300}
                className="rounded-lg"
              /> */}
            </div>

            <div className="mt-4 flex gap-4">
              <a 
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium text-white transition hover:bg-white hover:text-black"
              >
                GitHub
              </a>
              
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}