"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20  text-white min-h-screen">
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 mb-10 md:mb-0 space-y-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-indigo-500 hover:text-indigo-400 transition-colors">
            Simran
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
          Cyber Security & Web Development
        </h2>
        <p className="text-gray-400 max-w-md">
          Passionate about building secure, scalable, and modern web
          applications while staying ahead in the ever-evolving world of
          cybersecurity.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold text-white shadow-lg transition-all"
        >
          Explore My Work
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="https://images.financialexpressdigital.com/2023/07/Royal-Enfield-Bullet-350.jpg"
          alt="Simran"
          className="rounded-2xl shadow-2xl w-80 md:w-96 object-cover border-4 border-indigo-600"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 150 }}
        />
      </motion.div>
    </section>
  );
}
