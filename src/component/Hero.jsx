'use client';
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] pt-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#020617] via-[#020617] to-black text-white overflow-hidden">

      {/* 🔥 Background Glow (Soft Cyber Effect) */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-emerald-500/10 rounded-full blur-3xl"></div>

      {/* LEFT CONTENT */}
      <motion.div
        className="md:w-1/2 space-y-6 z-10 text-center md:text-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500">
            Simran Jeet
          </span>
        </h1>

        {/* Role */}
        <h2 className="text-xl sm:text-2xl font-semibold text-green-400">
          Full Stack Developer • Cybersecurity Enthusiast
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-xl mx-auto md:mx-0">
          I build secure, scalable and high-performance web applications using modern technologies. 
          Focused on clean code, strong backend systems and user-friendly interfaces.
        </p>

       
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-12 md:mt-0 z-10"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative w-64 h-64 sm:w-80 sm:h-80"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-green-500 blur-2xl opacity-20"></div>

          {/* Rotating Border */}
          <motion.div
            className="absolute inset-0 rounded-full border border-green-500/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Image */}
          <img
            src="https://res.cloudinary.com/ddj2og1rh/image/upload/v1766996678/simran_m06yuk.jpg"
            alt="Simran"
            className="relative rounded-full object-cover w-full h-full border-4 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}