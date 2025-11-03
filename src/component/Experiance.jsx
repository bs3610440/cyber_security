import React from "react";
import { motion } from "framer-motion";

export default function Experiance() {
  const data = [
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      companyname: "Sqilco",
      startdate: "May 27, 2024",
      enddate: "July 12, 2025",
      posti: "Internship - MERN Stack Developer",
      des: "Worked on full-stack web applications using MongoDB, Express, React, and Node.js. Contributed to building dynamic APIs, improving front-end performance, and ensuring seamless integration across services.",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/942/942799.png",
      companyname: "Harton Advance Skill Center",
      startdate: "August 5, 2025",
      enddate: "Present",
      posti: "Cyber Security & Web Development Associate",
      des: "Responsible for developing and maintaining secure web applications with a strong emphasis on cybersecurity principles. Implemented threat analysis and modern security practices to protect digital infrastructure.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-700/20 via-green-500/10 to-green-700/20 blur-3xl"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 drop-shadow-[0_0_20px_rgba(0,255,100,0.6)] relative z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Work Experience
      </motion.h2>

      <div className="relative z-10 grid md:grid-cols-2 gap-10">
        {data.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-black/40 border border-green-500/30 rounded-xl p-6 shadow-lg hover:shadow-[0_0_25px_rgba(0,255,100,0.4)] transition-all duration-300"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            {/* Company Info */}
            <div className="flex items-center gap-4 mb-4">
              <motion.img
                src={exp.logo}
                alt={exp.companyname}
                className="w-14 h-14 rounded-full object-contain bg-white p-2"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <div>
                <h3 className="text-2xl font-bold text-green-400">{exp.companyname}</h3>
                <p className="text-sm text-gray-400">
                  {exp.startdate} - {exp.enddate}
                </p>
              </div>
            </div>

            {/* Position */}
            <motion.h4
              className="text-xl font-semibold text-green-300 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {exp.posti}
            </motion.h4>

            {/* Description */}
            <p className="text-gray-200 leading-relaxed">{exp.des}</p>

            {/* Animated line */}
            <motion.div
              className="mt-4 h-[2px] bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-700/30 to-transparent blur-3xl"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
}
