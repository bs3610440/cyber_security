import React, { useState } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, 
  FaJs, FaGitAlt, FaGithub, FaDocker, FaAws,
  FaShieldAlt, FaNetworkWired, FaEye, FaBrain, FaRocket,
  FaLaptopCode, FaServer, FaDatabase, FaCode
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiRedux, 
  SiNextdotjs, SiTypescript, SiPostman, SiFigma,
  SiMysql, SiPostgresql, SiFirebase, SiGraphql
} from 'react-icons/si';

export default function Skill() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredTech, setHoveredTech] = useState(null);

  const skills = [
    { name: "React.js", level: 90, category: "Frontend", icon: FaReact, color: "text-blue-500" },
    { name: "JavaScript", level: 92, category: "Frontend", icon: FaJs, color: "text-yellow-500" },
    { name: "TypeScript", level: 80, category: "Frontend", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", level: 88, category: "Frontend", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "HTML5/CSS3", level: 95, category: "Frontend", icon: FaHtml5, color: "text-orange-500" },
    { name: "Node.js", level: 88, category: "Backend", icon: FaNodeJs, color: "text-green-600" },
    { name: "Express.js", level: 85, category: "Backend", icon: SiExpress, color: "text-gray-600" },
    { name: "REST API", level: 90, category: "Backend", icon: FaServer, color: "text-green-600" },
    { name: "MongoDB", level: 87, category: "Database", icon: SiMongodb, color: "text-green-600" },
    { name: "Network Security", level: 85, category: "Cybersecurity", icon: FaNetworkWired, color: "text-blue-600" },
    { name: "Penetration Testing", level: 80, category: "Cybersecurity", icon: FaEye, color: "text-purple-600" },
    { name: "Docker", level: 75, category: "DevOps", icon: FaDocker, color: "text-blue-500" },
    { name: "Git/GitHub", level: 88, category: "DevOps", icon: FaGithub, color: "text-gray-700" },
    { name: "Postman", level: 88, category: "DevOps", icon: SiPostman, color: "text-orange-600" },
    { name: "VS Code", level: 92, category: "DevOps", icon: FaLaptopCode, color: "text-blue-500" },
    { name: "Figma", level: 80, category: "DevOps", icon: SiFigma, color: "text-purple-500" },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Cybersecurity", "DevOps"];
  const filteredSkills = activeCategory === "All" ? skills : skills.filter(s => s.category === activeCategory);

  // Orbital positions - Large Tech Orbit at Top
  const orbitSkills = skills.slice(0, 12);
  const orbitRadius = 280;
  const innerOrbitRadius = 180;

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
      
      {/* Animated Background - Matching Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite] animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite] animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaBrain className="text-purple-600" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
              Skills & Expertise
            </span>
          </h2>
        </div>

        {/* Large Tech Orbit - At the Top */}
        <div className="relative flex justify-center items-center min-h-[600px] mb-16">
          {/* Outer Orbit Ring */}
          <div className="absolute w-[600px] h-[600px] rounded-full border-2 border-purple-200/50 animate-spin-slow">
            {orbitSkills.map((skill, idx) => {
              const Icon = skill.icon;
              const angle = (idx * 30) * (Math.PI / 180);
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
                    className="bg-white rounded-2xl p-3 shadow-lg border border-purple-200 hover:scale-125 transition-all duration-300 cursor-pointer group"
                    onMouseEnter={() => setHoveredTech(idx)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Icon className={`text-2xl ${skill.color} relative z-10`} />
                    {hoveredTech === idx && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {skill.name}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inner Orbit Ring (Opposite Direction) */}
          <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-pink-200/50 animate-spin-reverse">
            {skills.slice(12, 24).map((skill, idx) => {
              const Icon = skill.icon;
              const angle = (idx * 30) * (Math.PI / 180);
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
                  <div className="bg-white rounded-full p-3 shadow-md border border-pink-200 hover:scale-125 transition-all duration-300 cursor-pointer group">
                    <Icon className={`text-xl ${skill.color}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center - Main Skill Hub */}
          <div className="relative z-20">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-pulse-glow shadow-xl">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                <FaRocket className="text-4xl text-purple-600" />
              </div>
            </div>
            <p className="text-center mt-4 text-sm font-semibold text-purple-600">Core Skills</p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-md border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid - All Technologies Below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                style={{ animation: `fadeInUp 0.4s ease-out ${index * 0.03}s forwards`, opacity: 0 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className={`text-2xl ${skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-800">{skill.name}</h3>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div 
                        className="h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{skill.category}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
            <div className="inline-block p-3 bg-purple-100 rounded-full mb-3">
              <FaCode className="text-3xl text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">25+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
            <div className="inline-block p-3 bg-pink-100 rounded-full mb-3">
              <FaShieldAlt className="text-3xl text-pink-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">15+</div>
            <div className="text-gray-600">Security Audits</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-3">
              <FaLaptopCode className="text-3xl text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">30+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
            <div className="inline-block p-3 bg-green-100 rounded-full mb-3">
              <FaRocket className="text-3xl text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">100%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
        </div>
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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.8; box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); }
          50% { opacity: 1; box-shadow: 0 0 40px rgba(147, 51, 234, 0.6); }
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