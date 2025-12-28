import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Foo() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-green-400 border-t border-green-500 shadow-[0_-0_20px_rgba(0,255,100,0.2)] py-10 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section - Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex flex-col items-start"
        >
          <h1 className="text-2xl font-bold text-green-400 tracking-wide">
            Let's Connect & Collaborate🤝
          </h1>
          <p className="mt-3 text-green-300 text-sm max-w-sm">
            Building beautiful, fast, and modern web experiences using React, Tailwind CSS,
            and Framer Motion. Our mission: style + performance + innovation.
          </p>
        </motion.div>

        {/* Middle Section - Related Projects */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-green-400 mb-3">
            🔗 Related Projects
          </h2>
          <div className="space-y-2 text-sm text-green-300">
            <motion.a
              whileHover={{ x: 6, color: "#00FF7F" }}
              href="#"
              className="block transition-all"
            >
              🧠 Portfolio React Template
            </motion.a>
            <motion.a
              whileHover={{ x: 6, color: "#00FF7F" }}
              href="#"
              className="block transition-all"
            >
              💼 Business Landing Page
            </motion.a>
            <motion.a
              whileHover={{ x: 6, color: "#00FF7F" }}
              href="#"
              className="block transition-all"
            >
              🌐 Animated Portfolio Site
            </motion.a>
            <motion.a
              whileHover={{ x: 6, color: "#00FF7F" }}
              href="#"
              className="block transition-all"
            >
              🎨 UI Component Library
            </motion.a>
          </div>
        </div>

        {/* Right Section - Socials */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-xl font-semibold text-green-400 mb-3">
            🌍 Connect with Us
          </h2>
          <div className="flex gap-5 text-xl mb-4">
            <motion.a
              whileHover={{ scale: 1.2, color: "#00FF7F" }}
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#00FF7F" }}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#00FF7F" }}
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#00FF7F" }}
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </motion.a>
          </div>
          <p className="text-sm text-green-300">
            Follow us for updates & new releases.
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-sm text-green-300 mt-10 border-t border-green-500 pt-4"
      >
      </motion.div>
    </motion.footer>
  );
}
