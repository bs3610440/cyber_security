'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBriefcase, FaCalendarAlt, FaUserTie, FaShieldAlt, 
  FaRocket, FaShoppingBag, FaStar, FaGithub, FaExternalLinkAlt,
  FaAward, FaUsers, FaChartLine, FaGlobe, FaCode
} from 'react-icons/fa';

export default function Experiance() {
  const [filter, setFilter] = useState("all");
  const [selectedCard, setSelectedCard] = useState(null);

  const data = [
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      companyname: "Sqilco",
      startdate: "May 27, 2024",
      enddate: "July 12, 2025",
      posti: "Internship - MERN Stack Developer",
      des: "Worked on full-stack web applications using the MERN stack. Built and optimized REST APIs, improved frontend performance, and ensured smooth integration between backend and UI components.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      type: "internship",
      achievements: ["Reduced API response time by 40%", "Implemented real-time features", "Mentored 2 junior developers"],
      impact: "Improved overall application performance by 35%",
      color: "blue"
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwYBXq2rZtSKtFVed6pvisK6hSrCcwnEONvA&s",
      companyname: "Harton Advance Skill Center",
      startdate: "August 5, 2025",
      enddate: "Present",
      posti: "Cyber Security & Web Development Associate",
      des: "Working on secure web applications with a focus on cybersecurity. Implementing authentication, data protection, and vulnerability assessment.",
      technologies: ["Security", "Penetration Testing", "Authentication", "OWASP"],
      type: "work",
      achievements: ["Identified 15+ security vulnerabilities", "Implemented multi-factor authentication", "Conducted 5 security workshops"],
      impact: "Enhanced application security by 60%",
      color: "red"
    },
    {
      logo: "https://res.cloudinary.com/dxa0dfaes/image/upload/v1768900152/favicon_iounbx.png",
      companyname: "Migration Hub",
      startdate: "Nov 24, 2025",
      enddate: "Present",
      posti: "Frontend Developer (Project)",
      des: "Built a modern visa-based frontend application using React and Tailwind CSS with smooth animations and responsive UI design.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "REST API"],
      type: "project",
      achievements: ["Achieved 99% Lighthouse score", "Implemented complex animations", "Reduced load time by 50%"],
      impact: "Increased user engagement by 45%",
      color: "green"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      companyname: "She Slay",
      startdate: "Dec 15, 2025",
      enddate: "Present",
      posti: "E-Commerce Website Developer",
      des: "Designed and developed a modern women's clothing e-commerce website featuring product catalog, shopping cart, wishlist, secure checkout, and payment integration.",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Razorpay", "JWT"],
      type: "project",
      featured: true,
      achievements: ["Processed 500+ transactions", "30% increase in conversion rate", "Implemented AI-based recommendations"],
      impact: "Generated $50K+ in sales within 3 months",
      color: "pink",
      liveLink: "https://sheslay.com",
      githubLink: "https://github.com/username/sheslay"
    },
    {
      logo: "https://blog.ipleaders.in/wp-content/uploads/2020/10/1573226259538.jpg",
      companyname: "Cyber Crime Project",
      startdate: "Jan 5, 2026",
      enddate: "Present",
      posti: "Full Stack Developer",
      des: "Developed a full-stack cyber crime system using MERN stack with secure APIs, MongoDB database, and tested endpoints via Postman.",
      technologies: ["MERN Stack", "Security", "Postman", "JWT"],
      type: "project",
      achievements: ["Handled 1000+ reports", "Reduced response time by 70%", "Implemented real-time tracking"],
      impact: "Helped resolve 200+ cyber crime cases",
      color: "purple"
    }
  ];

  const filteredData = filter === "all" ? data : data.filter(exp => exp.type === filter);

  const getColorScheme = (color) => {
    const schemes = {
      blue: { light: "bg-blue-50", text: "text-blue-600", border: "hover:border-blue-200", icon: "text-blue-500" },
      red: { light: "bg-red-50", text: "text-red-600", border: "hover:border-red-200", icon: "text-red-500" },
      green: { light: "bg-green-50", text: "text-green-600", border: "hover:border-green-200", icon: "text-green-500" },
      pink: { light: "bg-pink-50", text: "text-pink-600", border: "hover:border-pink-200", icon: "text-pink-500" },
      purple: { light: "bg-purple-50", text: "text-purple-600", border: "hover:border-purple-200", icon: "text-purple-500" }
    };
    return schemes[color] || schemes.purple;
  };

  return (
    <section className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
      
      {/* Subtle Background Pattern */}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header with Animations */}
        <div className="text-center mb-12">
          <motion.div 
            className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaBriefcase className="text-purple-600" />
            <span>Professional Journey</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My professional journey in web development & cybersecurity, building impactful solutions
          </motion.p>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { id: "all", label: "All", icon: FaGlobe },
              { id: "work", label: "Work", icon: FaBriefcase },
              { id: "internship", label: "Internship", icon: FaUserTie },
              { id: "project", label: "Projects", icon: FaRocket }
            ].map((btn) => {
              const Icon = btn.icon;
              return (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    filter === btn.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="text-xs" />
                  <span>{btn.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Small Cards Grid with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredData.map((exp, index) => {
              const colorScheme = getColorScheme(exp.color);
              return (
                <motion.div
                  key={exp.companyname + exp.startdate}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="relative"
                >
                  <div 
                    className={`bg-white rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${colorScheme.border} cursor-pointer`}
                    onMouseEnter={() => setSelectedCard(index)}
                    onMouseLeave={() => setSelectedCard(null)}
                  >
                    
                    {/* Featured Badge */}
                    {exp.featured && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-0.5">
                          <FaStar className="text-yellow-300 text-[8px]" />
                          Featured
                        </span>
                      </div>
                    )}
                    
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.4 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-50 p-1.5 border border-gray-200">
                          <img src={exp.logo} alt={exp.companyname} className="w-full h-full object-contain" />
                        </div>
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-gray-800 truncate">
                          {exp.companyname}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <FaCalendarAlt className="text-[10px]" />
                          <span>{exp.startdate}</span>
                          <span>→</span>
                          <span>{exp.enddate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Position */}
                    <div className="mb-2">
                      <h4 className={`text-sm font-semibold flex items-center gap-1.5 ${colorScheme.text}`}>
                        <FaUserTie className="text-xs" />
                        <span className="truncate">{exp.posti}</span>
                      </h4>
                    </div>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-600 text-xs leading-relaxed mb-2 line-clamp-2"
                      animate={{ 
                        lineClamp: selectedCard === index ? 10 : 2,
                      }}
                    >
                      {exp.des}
                    </motion.p>

                    {/* Expandable Content */}
                    <motion.div
                      initial={false}
                      animate={{ height: selectedCard === index ? "auto" : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {/* Key Achievements */}
                      {exp.achievements && (
                        <div className="mb-2 p-2 bg-gray-50 rounded-lg">
                          <h5 className="text-[10px] font-semibold text-gray-700 mb-1 flex items-center gap-1">
                            <FaAward className="text-purple-500 text-[10px]" />
                            Achievements:
                          </h5>
                          <ul className="space-y-0.5">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-[10px] text-gray-600 flex items-center gap-1">
                                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Impact */}
                      {exp.impact && (
                        <div className={`mb-2 p-1.5 ${colorScheme.light} rounded-lg`}>
                          <p className={`text-[10px] font-semibold ${colorScheme.text} flex items-center gap-1`}>
                            <FaChartLine className="text-[10px]" />
                            Impact: {exp.impact}
                          </p>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {exp.technologies.slice(0, selectedCard === index ? 10 : 3).map((tech, techIdx) => (
                          <motion.span
                            key={techIdx}
                            whileHover={{ scale: 1.05 }}
                            className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${colorScheme.light} ${colorScheme.text} border border-gray-200`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {exp.technologies.length > 3 && selectedCard !== index && (
                          <span className="text-[9px] px-1.5 py-0.5 text-gray-400">
                            +{exp.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Project Links */}
                      {(exp.liveLink || exp.githubLink) && (
                        <div className="flex gap-2">
                          {exp.liveLink && (
                            <a href={exp.liveLink} target="_blank" rel="noopener noreferrer" 
                              className={`flex items-center gap-0.5 text-[10px] font-semibold ${colorScheme.text} hover:underline`}>
                              <FaExternalLinkAlt className="text-[8px]" /> Live
                            </a>
                          )}
                          {exp.githubLink && (
                            <a href={exp.githubLink} target="_blank" rel="noopener noreferrer"
                              className={`flex items-center gap-0.5 text-[10px] font-semibold ${colorScheme.text} hover:underline`}>
                              <FaGithub className="text-[8px]" /> Code
                            </a>
                          )}
                        </div>
                      )}
                    </motion.div>

                    {/* Expand Hint */}
                    <div className="mt-2 text-center">
                      <motion.div
                        animate={{ y: selectedCard === index ? 0 : [0, -2, 0] }}
                        transition={{ repeat: selectedCard === index ? 0 : Infinity, duration: 1.5 }}
                        className="text-[8px] text-gray-400 flex items-center justify-center gap-1"
                      >
                        <span>{selectedCard === index ? "▲ Less info" : "▼ Click to expand"}</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Stats Section - Small Cards */}
        <motion.div 
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { icon: FaBriefcase, label: "Experience", value: "2+ Years", color: "purple" },
            { icon: FaCode, label: "Projects", value: "12+", color: "blue" },
            { icon: FaShieldAlt, label: "Security", value: "5+ Audits", color: "green" },
            { icon: FaUsers, label: "Clients", value: "10+ Happy", color: "pink" },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            const getColorClass = () => {
              switch(stat.color) {
                case 'purple': return 'bg-purple-50 text-purple-600';
                case 'blue': return 'bg-blue-50 text-blue-600';
                case 'green': return 'bg-green-50 text-green-600';
                case 'pink': return 'bg-pink-50 text-pink-600';
                default: return 'bg-purple-50 text-purple-600';
              }
            };
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="bg-white rounded-xl p-3 text-center shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className={`inline-block p-1.5 rounded-lg mb-1 ${getColorClass()}`}>
                  <Icon className="text-base" />
                </div>
                <div className="text-sm font-bold text-gray-800">{stat.value}</div>
                <div className="text-[10px] text-gray-500">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <FaRocket className="text-sm" />
            <span>Let's Work Together</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}