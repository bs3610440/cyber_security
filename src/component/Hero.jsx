import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen relative overflow-hidden">

      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-700/20 via-emerald-500/10 to-green-700/20 blur-3xl"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Animated Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-green-400 rounded-full blur-sm"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.3,
          }}
          animate={{
            y: [Math.random() * 400, Math.random() * -400],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* Text Section */}
      <motion.div
        className="text-center md:text-left space-y-8 md:w-1/2 relative z-10"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 drop-shadow-[0_0_15px_rgba(0,255,100,0.7)] animate-pulse">
            Simran
          </span>
        </h1>

        {/* Main Paragraph */}
        <motion.p
          className="text-lg sm:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A passionate{" "}
          <span className="text-green-400 font-semibold">Cybersecurity Analyst</span> 
          and{" "}
          <span className="text-emerald-400 font-semibold">Web Developer</span> 
          dedicated to creating secure, innovative, and user-friendly digital solutions.
        </motion.p>

        {/* Cybersecurity Line */}
        <motion.div
          className="bg-gradient-to-r from-green-900/30 to-transparent p-4 rounded-xl border border-green-500/30 shadow-[0_0_25px_rgba(0,255,100,0.1)]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl font-bold text-green-400 mb-2"
            whileHover={{ scale: 1.05, textShadow: "0 0 15px #22c55e" }}
          >
            ⚔️ Cybersecurity
          </motion.h2>
          <p className="text-gray-300">
            I focus on safeguarding systems, identifying vulnerabilities, 
            and ensuring strong digital protection.
          </p>
        </motion.div>

        {/* Web Development Line */}
        <motion.div
          className="bg-gradient-to-r from-emerald-900/30 to-transparent p-4 rounded-xl border border-emerald-500/30 shadow-[0_0_25px_rgba(0,255,100,0.1)]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl font-bold text-emerald-400 mb-2"
            whileHover={{ scale: 1.05, textShadow: "0 0 15px #34d399" }}
          >
            💻 Web Development
          </motion.h2>
          <p className="text-gray-300">
            I design and build responsive websites that are fast, modern, 
            and easy to use.
          </p>
        </motion.div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          {/* Learn More Button */}
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(0,255,100,0.8)",
              backgroundColor: "#22c55e",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full shadow-[0_0_25px_rgba(0,255,100,0.4)] transition-all duration-300"
          >
            Learn More
          </motion.button>

          {/* Contact Me Button */}
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(52,211,153,0.8)",
              backgroundColor: "#34d399",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full shadow-[0_0_25px_rgba(52,211,153,0.4)] transition-all duration-300"
            onClick={() => window.location.href = "#contact"}
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0 relative z-10"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-4 ring-green-500 shadow-[0_0_40px_rgba(0,255,100,0.6)]"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 2, -2, 0],
            boxShadow: [
              "0 0 40px rgba(0,255,100,0.3)",
              "0 0 60px rgba(0,255,100,0.6)",
              "0 0 40px rgba(0,255,100,0.3)",
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
