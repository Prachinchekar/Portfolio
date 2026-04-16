"use client"

import { div } from "framer-motion/client";
import { useEffect, useState } from "react"

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[999]">
            <h1 className="text-2xl animate-pulse">Loading...</h1>
        </div>
    )
}