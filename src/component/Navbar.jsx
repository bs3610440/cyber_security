'use client';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Instagram } from 'lucide-react';

export default function Navbar() {
  const icons = [
    { id: 1, icon: <Github size={24} />, link: 'https://github.com' },
    { id: 2, icon: <Linkedin size={24} />, link: 'https://linkedin.com' },
    { id: 3, icon: <Instagram size={24} />, link: 'https://instagram.com' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="flex justify-between items-center px-8 py-4 bg-black text-yellow-400 shadow-lg sticky top-0 z-50"
    >
      {/* Left Side - Logo */}
      <motion.div
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-extrabold tracking-wide hover:scale-110 transition-transform duration-300"
      >
        SK
      </motion.div>

      {/* Right Side - Download Button + Icons */}
      <div className="flex items-center gap-6">
        {/* Download Resume Button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 shadow-md"
        >
          <Download size={18} /> Download Resume
        </motion.a>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            },
          }}
        >
          {icons.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { y: 0 },
                visible: {
                  y: [0, -8, 0],
                  transition: {
                    duration: 1.2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    delay: index * 0.2,
                  },
                },
              }}
              className="hover:text-white transition-colors duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
}
