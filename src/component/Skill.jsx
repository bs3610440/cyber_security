import React, { useState, useEffect, useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, 
  FaJs, FaGitAlt, FaGithub, FaDocker, FaAws,
  FaShieldAlt, FaNetworkWired, FaEye, FaBrain, FaRocket,
  FaLaptopCode, FaServer, FaDatabase, FaCode, FaStar,
  FaChartLine, FaCrown, FaMicrochip
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiRedux, 
  SiNextdotjs, SiTypescript, SiPostman, SiFigma,
  SiMysql, SiPostgresql, SiFirebase, SiGraphql
} from 'react-icons/si';

export default function Skill() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredTech, setHoveredTech] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillsRef = useRef([]);

  const skills = [
    { name: "React.js", category: "Frontend", icon: FaReact, color: "text-blue-500" },
    { name: "JavaScript", category: "Frontend", icon: FaJs, color: "text-yellow-500" },
    { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "HTML5/CSS3", category: "Frontend", icon: FaHtml5, color: "text-orange-500" },
    { name: "Node.js", category: "Backend", icon: FaNodeJs, color: "text-green-600" },
    { name: "Express.js", category: "Backend", icon: SiExpress, color: "text-gray-600" },
    { name: "REST API", category: "Backend", icon: FaServer, color: "text-green-600" },
    { name: "MongoDB", category: "Database", icon: SiMongodb, color: "text-green-600" },
    { name: "Network Security", category: "Cybersecurity", icon: FaNetworkWired, color: "text-blue-600" },
    { name: "Penetration Testing", category: "Cybersecurity", icon: FaEye, color: "text-purple-600" },
    { name: "Docker", category: "DevOps", icon: FaDocker, color: "text-blue-500" },
    { name: "Git/GitHub", category: "DevOps", icon: FaGithub, color: "text-gray-700" },
    { name: "Postman", category: "DevOps", icon: SiPostman, color: "text-orange-600" },
    { name: "VS Code", category: "DevOps", icon: FaLaptopCode, color: "text-blue-500" },
    { name: "Figma", category: "DevOps", icon: SiFigma, color: "text-purple-500" },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Cybersecurity", "DevOps"];
  const filteredSkills = activeCategory === "All" ? skills : skills.filter(s => s.category === activeCategory);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSkills(prev => [...prev, index]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    skillsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  // Orbital positions
  const orbitSkills = skills.slice(0, 8);
  const orbitRadius = 220;
  const innerOrbitRadius = 130;

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-[blob_7s_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-[blob_7s_infinite] animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-[blob_7s_infinite] animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-[blob_8s_infinite] animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg border border-purple-200">
            <FaBrain className="text-purple-600 animate-pulse" />
            <span className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">Technical Arsenal</span>
            <FaCrown className="text-yellow-500 text-xs" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Mastering the art of modern web development & cybersecurity</p>
        </div>

        {/* Compact Tech Orbit */}
        <div className="relative flex justify-center items-center min-h-[500px] mb-12">
          {/* Glow Effects */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl animate-pulse"></div>
          
          {/* Outer Orbit Ring */}
          <div className="absolute w-[460px] h-[460px] rounded-full border-2 border-purple-300/30 animate-spin-slow">
            {orbitSkills.map((skill, idx) => {
              const Icon = skill.icon;
              const angle = (idx * 45) * (Math.PI / 180);
              const x = Math.cos(angle) * orbitRadius;
              const y = Math.sin(angle) * orbitRadius;
              return (
                <div
                  key={idx}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div 
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-2.5 shadow-xl border border-purple-200 hover:scale-150 transition-all duration-300 cursor-pointer group"
                    onMouseEnter={() => setHoveredTech(idx)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Icon className={`text-xl ${skill.color} relative z-10 transition-transform group-hover:scale-110`} />
                    {hoveredTech === idx && (
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg z-20">
                        <span className="font-semibold">{skill.name}</span>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inner Orbit Ring */}
          <div className="absolute w-[280px] h-[280px] rounded-full border-2 border-pink-300/30 animate-spin-reverse">
            {skills.slice(8, 14).map((skill, idx) => {
              const Icon = skill.icon;
              const angle = (idx * 60) * (Math.PI / 180);
              const x = Math.cos(angle) * innerOrbitRadius;
              const y = Math.sin(angle) * innerOrbitRadius;
              return (
                <div
                  key={idx}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md border border-pink-200 hover:scale-150 transition-all duration-300 cursor-pointer group">
                    <Icon className={`text-base ${skill.color} transition-transform group-hover:scale-110`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center - Main Skill Hub with Technology Icon */}
          <div className="relative z-20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-pulse-glow shadow-2xl">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-inner">
                <div className="relative">
                  <FaMicrochip className="text-5xl text-purple-600 animate-spin-slow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaCode className="text-2xl text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center mt-3 text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Tech Core</p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                activeCategory === category
                  ? 'text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-md border border-gray-200'
              }`}
            >
              {activeCategory === category && (
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></span>
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid - Smaller card widths */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            const isVisible = visibleSkills.includes(index);
            return (
              <div
                key={index}
                ref={el => skillsRef.current[index] = el}
                data-index={index}
                className={`group bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200 cursor-pointer text-center ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative p-2.5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full group-hover:scale-110 transition-transform mb-2 inline-block">
                    <Icon className={`text-2xl ${skill.color}`} />
                  </div>
                </div>
                <h3 className="text-xs font-semibold text-gray-800 group-hover:text-purple-600 transition-colors mt-1">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">{skill.category}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: FaCode, color: "purple", value: "4+", label: "Projects Completed", detail: "3 in production" },
            { icon: FaShieldAlt, color: "pink", value: "10+", label: "Security Audits", detail: "Zero breaches" },
            { icon: FaLaptopCode, color: "blue", value: "20+", label: "Technologies", detail: "Always learning" },
            { icon: FaStar, color: "green", value: "100%", label: "Client Satisfaction", detail: "5-star rating" }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative group bg-white rounded-xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredStat(idx)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className={`inline-block p-2.5 bg-${stat.color}-100 rounded-full mb-2 group-hover:scale-110 transition-transform`}>
                    <Icon className={`text-2xl text-${stat.color}-600`} />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  {hoveredStat === idx && (
                    <div className="mt-2 text-xs text-purple-600 animate-fadeIn">
                      ⚡ {stat.detail}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes blob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-30px, 40px) scale(1.2); }
          66% { transform: translate(20px, -30px) scale(0.8); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.8; 
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.4);
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            box-shadow: 0 0 60px rgba(147, 51, 234, 0.8);
            transform: scale(1.02);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 18s linear infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}