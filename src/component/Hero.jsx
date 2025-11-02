import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 bg-gradient-to-b from-black via-yellow-900 to-black text-white min-h-screen relative overflow-hidden">

      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-yellow-500/10 to-yellow-600/20 blur-3xl"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Text Section */}
      <motion.div
        className="text-center md:text-left space-y-6 md:w-1/2 relative z-10"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Simran
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
          Passionate about <strong className="text-yellow-400">Cybersecurity</strong> and{" "}
          <strong className="text-yellow-400">Web Development</strong>, I love protecting systems
          from digital threats while crafting clean, responsive, and innovative web experiences.
          My mission is to bridge security with design — building safe, smart, and stunning
          online spaces.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition-all duration-300"
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0 relative z-10"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-4 ring-yellow-500 shadow-[0_0_40px_rgba(255,215,0,0.5)]"
          animate={{
            y: [0, -15, 0],
            boxShadow: [
              "0 0 40px rgba(255,215,0,0.3)",
              "0 0 60px rgba(255,215,0,0.6)",
              "0 0 40px rgba(255,215,0,0.3)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.img
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
            alt="Simran"
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
