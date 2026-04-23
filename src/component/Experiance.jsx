'use client';
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
      des: "Worked on full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Built and optimized REST APIs, improved frontend performance, and ensured smooth integration between backend and UI components.",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwYBXq2rZtSKtFVed6pvisK6hSrCcwnEONvA&s",
      companyname: "Harton Advance Skill Center",
      startdate: "August 5, 2025",
      enddate: "Present",
      posti: "Cyber Security & Web Development Associate",
      des: "Working on secure web applications with a focus on cybersecurity. Implementing authentication, data protection, and vulnerability assessment while learning penetration testing tools.",
    },
    {
      logo: "https://res.cloudinary.com/dxa0dfaes/image/upload/v1768900152/favicon_iounbx.png",
      companyname: "Migration Hub",
      startdate: "Nov 24, 2025",
      enddate: "Present",
      posti: "Frontend Developer (Project)",
      des: "Built a modern visa-based frontend application using React and Tailwind CSS with smooth animations and responsive UI design.",
    },
    {
      logo: "https://blog.ipleaders.in/wp-content/uploads/2020/10/1573226259538.jpg",
      companyname: "Cyber Crime Project",
      startdate: "Jan 5, 2026",
      enddate: "Present",
      posti: "Full Stack Developer",
      des: "Developed a full-stack cyber crime system using MERN stack with secure APIs, MongoDB database, and tested endpoints via Postman.",
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-[#020617] to-black text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">

      {/* GREEN CYBER GLOW BACKGROUND */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-700/20 via-green-500/10 to-green-700/20 blur-3xl"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-green-400 drop-shadow-[0_0_20px_rgba(0,255,100,0.6)] relative z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      {/* Cards */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10">
        {data.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-[0_0_25px_rgba(0,255,100,0.2)] transition-all duration-300"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Company */}
            <div className="flex items-center gap-4 mb-4">
              <motion.img
                src={exp.logo}
                alt={exp.companyname}
                className="w-14 h-14 rounded-full object-contain bg-white p-2"
                whileHover={{ scale: 1.1 }}
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-200">
                  {exp.companyname}
                </h3>
                <p className="text-sm text-gray-400">
                  {exp.startdate} - {exp.enddate}
                </p>
              </div>
            </div>

            {/* Role */}
            <h4 className="text-lg font-semibold text-gray-300 mb-2">
              {exp.posti}
            </h4>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              {exp.des}
            </p>

            {/* Line */}
            <div className="mt-4 h-[2px] bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Bottom Glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-700/30 to-transparent blur-3xl"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
}