"use client";

import { motion } from "framer-motion";
import { desc } from "framer-motion/client";
import { Code, Layout, PenTool, Server, Sparkles } from "lucide-react";

const services = [
    // {
    //     title: "Full Stack Development",
    //     Icon: Code,
    //     desc: "Building scalable web apps using modern technologies.",
    // },
    {
        title: "Frontend Development",
        Icon: Layout,
        desc: "Creating responsive and high-performance UI.",
    },
    {
        title: "Backend Development",
        Icon: Server,
        desc: "Designing robust APIs, Databases, and server-side logic.",
    },
    {
        title: "UI/UX Design",
        Icon: PenTool,
        desc: "Designing clean and user-friendly interfaces.",
    },
    {
        title: "Web Animations",
        Icon: Sparkles,
        desc: "Adding smooth and engaging animations.",
    },
];

export default function Services() {

    return (
        <section className="min-h-screen px-6 py-20">
            <h2 className="text-3xl font-bold mb-10 text-center ">What I Do</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {services.map((service, i) => {
                    const Icon = service.Icon;

                    return (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            className="relative p-6 rounded-2xl glass border border-white/10 hover:border-white/30 transition duration-300"
                        >
                            {/* GLow effect  */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 blur-xl transition"></div>

                            <div className="relative z-10">
                                <Icon className="w-8 h-8 mb-4 text-white" />

                                <h3 className="text-xl font-semibold mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-sm">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
            
        </section>
    );
}