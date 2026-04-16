"use client"

import { motion } from "framer-motion"
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", msg: "" });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                "service_1fn322s",
                "template_3n6wu6n",
                {
                    name: form.name,
                    email: form.email,
                    message: form.msg,
                },
                "yHMgozhlF3UJfWld2"
            );

            setSuccess(true);
            setForm({ name: "", email: "", msg: "" });

            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            alert("Something went wrong!")
        }

        setLoading(false);
    };

    return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl p-8 rounded-2xl glass border border-white/10"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              required
              value={form.name}
              className="w-full p-4 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none peer"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            <label className="absolute left-4 top-4 text-gray-400 transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white">
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              required
              value={form.email}
              className="w-full p-4 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none peer"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
            <label className="absolute left-4 top-4 text-gray-400 transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white">
              Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              required
              rows={4}
              value={form.msg}
              className="w-full p-4 bg-transparent border border-white/20 rounded-lg focus:border-white focus:outline-none peer"
              onChange={(e) =>
                setForm({ ...form, msg: e.target.value })
              }
            />
            <label className="absolute left-4 top-4 text-gray-400 transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white">
              Message
            </label>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="mt-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 font-semibold"
          >
            {loading ? "Sending..." : "Send Message "}
          </motion.button>

          {/* Success Message */}
          {success && (
            <p className="text-green-400 text-center mt-2">
              Message sent successfully ✅
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}