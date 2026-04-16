"use client";

import { section } from "framer-motion/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";


export default function About() {
    const ref = useRef(null);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(ref.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
            },
        });
    }, []);

    return(
        <section ref={ref} className="min-h-screen flex items-center px-6">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="mt-4 text-gray-400">
                    Full Stack Developer specializing in building modern, scalable, and high-performance web applications with React, Next.js, Node.js, Express.js, and MongoDB. Passionate about crafting seamless frontend experiences, powerful backend architectures, and visually engaging digital products with smooth animations and clean design.
                </p>
                {/* <img
                    src="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=dark"
                /> */}
            </div>
        </section>
    );
}