"use client"

import { div } from "framer-motion/client"

export default function BackgroundGlow() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">

            <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px] rounded-full animate-blob top-10 left-10"></div>

            <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[120px] rounded-full animate-blob animation-delay-2000 top-1/2 right-10"></div>

            <div className="absolute w-[500px] h-[500px] bg-pink-500 opacity-20 blur-[120px] rounded-full animate-blob animation-delay-4000 bottom-10 left-1/3"></div>

        </div>
    );
}