"use client";

import { nav } from "framer-motion/client";
import { useState } from "react";

export default function Navbar() {
    return (
        <nav className="fixed bg-gray-950 top-0 w-full z-50 glass px-6 py-4 flex justify-between">
            <h1 className="font-bold text-xl">Pranay</h1>

            <div className="flex gap-6">
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}