'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

export default function Skill() {
  const icons = [
    { icon: <SiJavascript className="text-green-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-teal-400" />, name: "React" },
    { icon: <SiTailwindcss className="text-green-300" />, name: "Tailwind CSS" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node JS" },
    { icon: <SiExpress className="text-gray-200" />, name: "Express JS" },
    { icon: <SiMongodb className="text-emerald-400" />, name: "MongoDB" },
    { icon: <SiMysql className="text-teal-500" />, name: "MySQL" },
    { icon: <FaDocker className="text-green-300" />, name: "Docker" },
    { icon: <FaGitAlt className="text-lime-500" />, name: "Git" },
    { icon: <SiPostman className="text-lime-400" />, name: "Postman" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* 🔥 Glow (same hi rehne diya for effect) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute w-[28rem] h-[28rem] bg-green-500 rounded-full blur-3xl opacity-10 -top-32 -left-32"
        />
        <motion.div
          animate={{ y: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute w-[24rem] h-[24rem] bg-emerald-400 rounded-full blur-3xl opacity-10 bottom-0 right-0"
        />
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold mb-16 text-green-300 text-center drop-shadow-[0_0_25px_rgba(0,255,100,0.7)]"
      >
        Technology Universe
      </motion.h1>

      {/* Rotating Icons */}
      <div className="relative w-[24rem] h-[24rem] sm:w-[28rem] sm:h-[28rem] flex items-center justify-center">

        {/* Center Glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute w-32 h-32 bg-green-400 rounded-full blur-2xl opacity-40 shadow-[0_0_40px_rgba(0,255,100,0.6)]"
        />

        {/* Rotating Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {icons.map((item, index) => {
            const angle = (index / icons.length) * 2 * Math.PI;
            const radius = 180;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={index}
                className="absolute text-6xl sm:text-7xl"
                style={{ transform: `translate(${x}px, ${y}px)` }}
                whileHover={{
                  scale: 1.4,
                  textShadow: "0px 0px 20px rgba(0,255,100,0.9)",
                }}
                title={item.name}
              >
                {item.icon}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}