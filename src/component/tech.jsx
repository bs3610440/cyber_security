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

export default function Tech() {
  const icons = [
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-blue-400" />, name: "React" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node JS" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express JS" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
    { icon: <FaDocker className="text-blue-300" />, name: "Docker" },
    { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
    { icon: <SiPostman className="text-orange-400" />, name: "Postman" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-yellow-600 text-white">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold mb-16 text-yellow-400 drop-shadow-[0_0_20px_rgba(255,255,0,0.6)]"
      >
        🚀 Technology Festival
      </motion.h1>

      {/* Center Glow Circle */}
      <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
        {/* Central glowing core */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute w-28 h-28 bg-yellow-400 rounded-full blur-xl opacity-50"
        ></motion.div>

        {/* Rotating ring of icons */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {icons.map((item, index) => {
            const angle = (index / icons.length) * 2 * Math.PI;
            const radius = 150; // circular radius
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={index}
                className="absolute text-4xl sm:text-5xl"
                style={{ transform: `translate(${x}px, ${y}px)` }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
                title={item.name}
              >
                {item.icon}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 text-lg sm:text-xl text-gray-300"
      >
        Connecting innovators, creators, and coders from around the world 🌍
      </motion.p>
    </section>
  );
}
