'use client';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Instagram } from 'lucide-react';

export default function Navbar() {
  const icons = [
    { id: 1, icon: <Github size={22} />, link: 'https://github.com' },
    { id: 2, icon: <Linkedin size={22} />, link: 'https://linkedin.com' },
    { id: 3, icon: <Instagram size={22} />, link: 'https://instagram.com' },
  ];

  // Animation Variants for sequential loading (Stagger Effect)
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.2, // Items appear one after another
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 300, damping: 24 } 
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 
      bg-[#020617]/80 backdrop-blur-md text-green-300 z-50 
      border-b border-green-500/10 shadow-lg shadow-[#020617]/50"
    >
      {/* 🔥 LOGO + NAME */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-3 cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* ✅ SJ LOGO (Floating Animation added) */}
        <motion.img
          src="/logo.png"
          alt="SJ Logo"
          animate={{ y: [0, -3, 0] }} // Subtle continuous float
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-18 h-18 object-contain bg-[#020617]/60 p-1 rounded-md"
          whileHover={{ scale: 1.1, rotate: 10 }}
        />

        {/* ✅ NAME */}
        <span className="text-green-300 text-4xl font-bold tracking-wide relative">
          Simar
          {/* Animated Underline Effect on Hover */}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </motion.div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        {/* SOCIAL ICONS */}
        <motion.div variants={itemVariants} className="flex gap-5">
          {icons.map((item) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                filter: "drop-shadow(0px 0px 8px rgba(74, 222, 128, 0.5))" // Glow effect
              }}
              whileTap={{ scale: 0.9 }}
              className="text-green-300 hover:text-green-400 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* RESUME BUTTON */}
        <motion.a
          variants={itemVariants}
          href="/resume.pdf"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(34, 197, 94, 0.4)" 
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 
          bg-green-500 text-black px-5 py-2 rounded-lg font-bold 
          hover:bg-green-400 transition-all"
        >
          <motion.div
            animate={{ y: [0, 2, 0] }} // Small bounce for the download icon
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Download size={18} strokeWidth={2.5} />
          </motion.div>
          Resume
        </motion.a>
      </div>
    </motion.nav>
  );
}