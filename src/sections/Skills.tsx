"use client"

import { div } from "framer-motion/client";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss, SiGreensock, } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "GSAP", icon: SiGreensock },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Express.js", icon: SiExpress },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: SiMongodb },
    ];


    return(
        <section id="skills" className="min-h-screen px-6">
            <h2 className="text-3xl font-bold mb-10">
                Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                        <div
                            key={skill.name}
                            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5 flex flex-col items-center gap-3 text-white font-medium transition-all duration-200 hover:scale-105 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_25px_rgba(59, 130, 246, 0.25)]"
                        >
                            <Icon className="text-3xl text-blue-400 group-hover:scale-110 transition" />
                            <span>{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}