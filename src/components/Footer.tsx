import { footer } from "framer-motion/client";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 mt-10 py-10 text-center">
            <h2 className="text-xl font-semibold">Pranay Chinchekar</h2>

            <p className="text-gray-400 mt-2">
                Fullstack Developer
            </p>

            <div className="flex justify-center gap-6 mt-4
            ">
                <a href="https://github.com/Prachinchekar">Github</a>
                <a href="www.linkedin.com/in/pranay-chinchekar-9670bb295">LinkedIn</a>
            </div>

            <p className="text-gray-500 text-sm">
                © 2026 All rights reserved
            </p>
        </footer>
    )
}