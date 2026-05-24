'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBriefcase, FaCalendarAlt, FaUserTie, FaShieldAlt, 
  FaRocket, FaShoppingBag, FaStar, FaGithub, FaExternalLinkAlt,
  FaAward, FaUsers, FaChartLine, FaGlobe, FaCode, FaLaptopCode,
  FaDatabase, FaServer, FaCloud, FaLock, FaMobileAlt
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss } from 'react-icons/si';

export default function ExperienceProjects() {
  const [filter, setFilter] = useState("all");
  const [selectedCard, setSelectedCard] = useState(null);

  const projects = [
    {
      id: "p1",
      logo: "https://res.cloudinary.com/dxa0dfaes/image/upload/v1768900152/favicon_iounbx.png",
      title: "Migration Hub",
      startdate: "Nov 24, 2025",
      enddate: "Present",
      role: "Frontend Developer",
      description: "Built a modern visa-based frontend application using React and Tailwind CSS with smooth animations and responsive UI design.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "REST API"],
      type: "project",
      featured: true,
      achievements: ["Achieved 99% Lighthouse score", "Implemented complex animations", "Reduced load time by 50%"],
      impact: "Increased user engagement by 45%",
      color: "green",
      liveLink: "https://migrationhub.com",
      githubLink: "https://github.com/username/migration-hub"
    },
    {
      id: "p2",
      logo: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      title: "She Slay - E-Commerce",
      startdate: "Dec 15, 2025",
      enddate: "Present",
      role: "Full Stack Developer",
      description: "Designed and developed a modern women's clothing e-commerce website featuring product catalog, shopping cart, wishlist, secure checkout, and payment integration.",
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
      id: "p3",
      logo: "https://blog.ipleaders.in/wp-content/uploads/2020/10/1573226259538.jpg",
      title: "Cyber Crime Reporting System",
      startdate: "Jan 5, 2026",
      enddate: "Present",
      role: "Full Stack Developer",
      description: "Developed a full-stack cyber crime system using MERN stack with secure APIs, MongoDB database, and tested endpoints via Postman.",
      technologies: ["MERN Stack", "Security", "Postman", "JWT", "Socket.io"],
      type: "project",
      achievements: ["Handled 1000+ reports", "Reduced response time by 70%", "Implemented real-time tracking"],
      impact: "Helped resolve 200+ cyber crime cases",
      color: "purple",
      githubLink: "https://github.com/username/cyber-crime"
    },
    {
      id: "p4",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      title: "Portfolio Website",
      startdate: "Jan 10, 2026",
      enddate: "Present",
      role: "Designer & Developer",
      description: "Created a modern, responsive portfolio website showcasing skills, projects, and achievements with smooth animations.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "EmailJS"],
      type: "project",
      achievements: ["100+ hours of development", "Fully responsive design", "SEO optimized"],
      impact: "Increased client inquiries by 60%",
      color: "blue",
      liveLink: "https://portfolio.com",
      githubLink: "https://github.com/username/portfolio"
    }
  ];

  const experiences = [
    {
      id: "e1",
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
      id: "e2",
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
    
  ];

  const allItems = [...projects, ...experiences];
  const filteredData = filter === "all" 
    ? allItems 
    : filter === "project" 
      ? projects 
      : experiences;

  const getColorScheme = (color) => {
    const schemes = {
      blue: { light: "bg-blue-50", text: "text-blue-600", border: "hover:border-blue-200", icon: "text-blue-500", gradient: "from-blue-500 to-blue-600" },
      red: { light: "bg-red-50", text: "text-red-600", border: "hover:border-red-200", icon: "text-red-500", gradient: "from-red-500 to-red-600" },
      green: { light: "bg-green-50", text: "text-green-600", border: "hover:border-green-200", icon: "text-green-500", gradient: "from-green-500 to-green-600" },
      pink: { light: "bg-pink-50", text: "text-pink-600", border: "hover:border-pink-200", icon: "text-pink-500", gradient: "from-pink-500 to-pink-600" },
      purple: { light: "bg-purple-50", text: "text-purple-600", border: "hover:border-purple-200", icon: "text-purple-500", gradient: "from-purple-500 to-purple-600" }
    };
    return schemes[color] || schemes.purple;
  };

  return (
    <section className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-[blob_7s_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-[blob_7s_infinite] animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-[blob_7s_infinite] animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg border border-purple-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaRocket className="text-purple-600" />
            <span className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">Portfolio Highlights</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
              Projects & Experience
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore my featured projects and professional journey in web development & cybersecurity
          </motion.p>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { id: "all", label: "All", icon: FaGlobe },
              { id: "project", label: "Projects", icon: FaLaptopCode },
              { id: "experience", label: "Experience", icon: FaBriefcase }
            ].map((btn) => {
              const Icon = btn.icon;
              return (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id)}
                  className={`relative px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                    filter === btn.id
                      ? "text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-md border border-gray-200"
                  }`}
                >
                  {filter === btn.id && (
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></span>
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className="text-xs" />
                    {btn.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { icon: FaLaptopCode, label: "Projects", value: "4+", color: "purple" },
            { icon: FaBriefcase, label: "Experience", value: "1+ Year", color: "pink" },
            { icon: FaCode, label: "Technologies", value: "20+", color: "blue" },
            { icon: FaUsers, label: "Happy Clients", value: "10+", color: "green" },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            const getColorClass = () => {
              switch(stat.color) {
                case 'purple': return 'bg-purple-100 text-purple-600';
                case 'pink': return 'bg-pink-100 text-pink-600';
                case 'blue': return 'bg-blue-100 text-blue-600';
                case 'green': return 'bg-green-100 text-green-600';
                default: return 'bg-purple-100 text-purple-600';
              }
            };
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <div className={`inline-block p-2 rounded-lg mb-2 ${getColorClass()}`}>
                  <Icon className="text-xl" />
                </div>
                <div className="text-xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredData.map((item, index) => {
              const colorScheme = getColorScheme(item.color);
              const isProject = item.hasOwnProperty('title');
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="relative"
                >
                  <div 
                    className={`bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 ${colorScheme.border} cursor-pointer h-full flex flex-col`}
                    onMouseEnter={() => setSelectedCard(index)}
                    onMouseLeave={() => setSelectedCard(null)}
                  >
                    
                    {/* Featured Badge */}
                    {item.featured && (
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
                          <img src={item.logo} alt={isProject ? item.title : item.companyname} className="w-full h-full object-contain" />
                        </div>
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-gray-800 truncate">
                          {isProject ? item.title : item.companyname}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <FaCalendarAlt className="text-[10px]" />
                          <span>{item.startdate}</span>
                          <span>→</span>
                          <span>{item.enddate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Role/Position */}
                    <div className="mb-2">
                      <h4 className={`text-sm font-semibold flex items-center gap-1.5 ${colorScheme.text}`}>
                        <FaUserTie className="text-xs" />
                        <span className="truncate">{isProject ? item.role : item.posti}</span>
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-xs leading-relaxed mb-2 line-clamp-2 flex-1">
                      {isProject ? item.description : item.des}
                    </p>

                    {/* Expandable Content */}
                    <motion.div
                      initial={false}
                      animate={{ height: selectedCard === index ? "auto" : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {/* Key Achievements */}
                      {item.achievements && (
                        <div className="mb-2 p-2 bg-gray-50 rounded-lg">
                          <h5 className="text-[10px] font-semibold text-gray-700 mb-1 flex items-center gap-1">
                            <FaAward className="text-purple-500 text-[10px]" />
                            Achievements:
                          </h5>
                          <ul className="space-y-0.5">
                            {item.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-[10px] text-gray-600 flex items-center gap-1">
                                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Impact */}
                      {item.impact && (
                        <div className={`mb-2 p-1.5 ${colorScheme.light} rounded-lg`}>
                          <p className={`text-[10px] font-semibold ${colorScheme.text} flex items-center gap-1`}>
                            <FaChartLine className="text-[10px]" />
                            Impact: {item.impact}
                          </p>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.technologies.slice(0, selectedCard === index ? 10 : 3).map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${colorScheme.light} ${colorScheme.text} border border-gray-200`}
                          >
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 3 && selectedCard !== index && (
                          <span className="text-[9px] px-1.5 py-0.5 text-gray-400">
                            +{item.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Project Links */}
                      {(item.liveLink || item.githubLink) && (
                        <div className="flex gap-2">
                          {item.liveLink && (
                            <a href={item.liveLink} target="_blank" rel="noopener noreferrer" 
                              className={`flex items-center gap-0.5 text-[10px] font-semibold ${colorScheme.text} hover:underline`}>
                              <FaExternalLinkAlt className="text-[8px]" /> Live
                            </a>
                          )}
                          {item.githubLink && (
                            <a href={item.githubLink} target="_blank" rel="noopener noreferrer"
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

        {/* Call to Action */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <FaRocket className="text-sm" />
            <span>Let's Work Together</span>
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}