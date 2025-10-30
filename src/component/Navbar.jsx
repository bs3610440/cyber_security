import { Download, Github, Linkedin, Instagram, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-yellow-400 shadow-lg z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Brand */}
        <motion.h1
          className="text-3xl font-extrabold tracking-wide cursor-pointer hover:text-yellow-500 transition-colors"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Royal Enfield
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {/* Download Resume */}
          <motion.a
            href="#"
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.a>

          {/* Social Media Icons */}
          <motion.div
            className="flex gap-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-transform transform hover:scale-125"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-transform transform hover:scale-125"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-transform transform hover:scale-125"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-yellow-400 hover:text-yellow-500 transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-gray-900 text-yellow-400 flex flex-col items-center py-4 space-y-4"
        >
          <a
            href="#"
            className="flex items-center gap-2 font-semibold hover:text-yellow-500 transition"
          >
            <Download className="w-5 h-5" /> Download Resume
          </a>
          <div className="flex gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-transform transform hover:scale-125"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-transform transform hover:scale-125"
            >
              <Linkedin />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-transform transform hover:scale-125"
            >
              <Instagram />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
