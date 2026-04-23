'use client';
import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experienceData = [
    {
      title: "Frontend Developer Intern",
      company: "Sqilco Pvt Ltd",
      duration: "may 2024-2025",
      description:
        "Built responsive UI using React and Tailwind CSS with smooth animations using Framer Motion.",
    },
    {
      title: "MERN Stack Developer",
      company: "Freelance",
      duration: "Nov 2025 - Present",
      description:
        "Developed full-stack applications including authentication systems, APIs, and real-time features using MERN stack.",
    },
    {
      title: "Full Stack Developer",
      company: "Personal Projects",
      duration: "2025 - 2026",
      description:
        "Built projects like Portfolio, E-book platform, and Messenger app to enhance full-stack and real-time development skills.",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-16 relative overflow-hidden">

      {/* GREEN GLOW BACKGROUND */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-700/20 via-green-500/10 to-green-700/20 blur-3xl"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 text-green-400 drop-shadow-[0_0_25px_rgba(0,255,100,0.8)] relative z-10"
      >
        Experience 
      </motion.h2>

      {/* MAIN CARD */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Timeline line */}
        <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-green-400 to-transparent" />

        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-16 mb-12 group"
          >
            {/* Dot */}
            <div className="absolute left-2 top-2 w-6 h-6 rounded-full bg-green-400 shadow-[0_0_20px_rgba(0,255,100,0.9)] group-hover:scale-125 transition" />

            {/* Card */}
            <div className="bg-gray-900/80 backdrop-blur-xl border border-green-500/30 rounded-xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(0,255,100,0.4)] transition-all duration-300">

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-green-400">
                {item.title}
              </h3>

              {/* Company + Duration */}
              <p className="text-gray-300 mt-1">
                {item.company} •{" "}
                <span className="text-gray-400">{item.duration}</span>
              </p>

              {/* Description */}
              <p className="text-gray-400 mt-3 leading-relaxed">
                {item.description}
              </p>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}