'use client';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Instagram } from 'lucide-react';

export default function Navbar() {
  const icons = [
    { id: 1, icon: <Github size={26} />, link: 'https://github.com' },
    { id: 2, icon: <Linkedin size={26} />, link: 'https://linkedin.com' },
    { id: 3, icon: <Instagram size={26} />, link: 'https://instagram.com' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="flex justify-between items-center px-8 py-4 bg-black/90 text-green-400 shadow-[0_0_25px_rgba(0,255,100,0.3)] backdrop-blur-md sticky top-0 z-50 border-b border-green-500/30"
    >
      {/* Left Side - Logo */}
      <motion.div
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-extrabold tracking-wide hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,255,100,0.8)] cursor-pointer"
      >
        SK
      </motion.div>

      {/* Right Side - Download Button + Icons */}
      <div className="flex items-center gap-6">
        {/* Download Resume Button */}
        <motion.a
          href="#"
          whileHover={{
            scale: 1.1,
            textShadow: '0 0 12px rgba(0,255,100,0.8)',
            boxShadow: '0 0 15px rgba(0,255,100,0.5)',
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-green-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-green-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,100,0.5)]"
        >
          <Download size={18} /> Download Resume
        </motion.a>

        {/* Social Icons */}
        <div className="flex gap-5 items-center">
          {icons.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                y: [0, -10, 0], // Snake-like vertical motion
                x: [0, 5, -5, 0], // Slight horizontal wiggle
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                delay: index * 0.2, // stagger effect like a snake
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.3,
                rotate: 15,
                color: '#00FF7F',
                textShadow: '0 0 20px rgba(0,255,100,1)',
              }}
              className="hover:text-green-300 transition-all duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
