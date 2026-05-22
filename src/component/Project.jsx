'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaUserTie, FaCode, FaRocket, FaAward, FaStar } from 'react-icons/fa';

export default function Experience() {
  const experienceData = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Sqilco Pvt Ltd",
      duration: "May 2024 - 2025",
      description: "Built responsive UI using React and Tailwind CSS with smooth animations using Framer Motion. Collaborated with design team to implement pixel-perfect designs and optimized website performance.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
      type: "internship",
      achievements: ["Improved load time by 40%", "Implemented 10+ responsive components"]
    },
    {
      id: 2,
      title: "MERN Stack Developer",
      company: "Freelance",
      duration: "Nov 2025 - Present",
      description: "Developed full-stack applications including authentication systems, APIs, and real-time features using MERN stack. Worked with 5+ clients to deliver custom web solutions.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
      type: "freelance",
      achievements: ["Delivered 8+ projects", "5-star client ratings"]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Personal Projects",
      duration: "2025 - 2026",
      description: "Built projects like Portfolio, E-book platform, and Messenger app to enhance full-stack and real-time development skills. Focused on implementing modern UI/UX patterns.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSocket"],
      type: "personal",
      achievements: ["3 major projects completed", "100+ hours of development"]
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
      
      {/* Animated Background - Matching Hero Section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite] animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite] animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header - Matching Hero Style */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaBriefcase className="text-purple-600" />
            <span>Professional Journey</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl font-bold mb-4 relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
              Work Experience
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full animate-gradient-x"></div>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My professional journey and work experience in web development
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { icon: FaBriefcase, label: "Companies Worked", value: "3+", color: "purple" },
            { icon: FaCode, label: "Projects Completed", value: "12+", color: "pink" },
            { icon: FaRocket, label: "Happy Clients", value: "10+", color: "blue" },
            { icon: FaStar, label: "Years Experience", value: "2+", color: "green" },
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
              <div
                key={idx}
                className="relative group transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <div className={`inline-block p-4 rounded-full mb-4 group-hover:scale-110 transition-transform ${getColorClass()}`}>
                    <Icon className="text-3xl" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Experience Cards with Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              const getTypeColor = () => {
                switch(exp.type) {
                  case 'internship': return 'purple';
                  case 'freelance': return 'pink';
                  case 'personal': return 'blue';
                  default: return 'purple';
                }
              };
              const typeColor = getTypeColor();
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative md:flex md:items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:relative md:left-auto z-10">
                    <div className="absolute md:relative left-0 top-1">
                      <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                      
                      {/* Duration Badge */}
                      <div className={`inline-flex items-center gap-2 bg-${typeColor}-100 text-${typeColor}-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 ${isEven ? 'md:float-right md:ml-4' : 'float-left mr-4'}`}>
                        <FaCalendarAlt className={`text-${typeColor}-600`} />
                        <span>{exp.duration}</span>
                      </div>
                      
                      {/* Title and Company */}
                      <div className={`mb-4 ${isEven ? 'md:text-right' : ''}`}>
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-gray-500 font-medium flex items-center gap-2 justify-start md:justify-end">
                          <FaUserTie className="text-purple-400" />
                          {exp.company}
                        </p>
                      </div>

                      {/* Description */}
                      <p className={`text-gray-600 leading-relaxed mb-4 ${isEven ? 'md:text-right' : ''}`}>
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className={`mb-4 ${isEven ? 'md:flex md:flex-wrap md:justify-end' : ''}`}>
                        <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1 bg-purple-50 text-purple-600 rounded-full border border-purple-200 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className={`mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl ${isEven ? 'md:text-right' : ''}`}>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2 justify-start md:justify-end">
                          <FaAward className="text-purple-600" />
                          <span>Key Achievements:</span>
                        </h4>
                        <ul className={`space-y-1 ${isEven ? 'md:flex md:flex-wrap md:gap-3 md:justify-end' : ''}`}>
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center gap-2 justify-start md:justify-end">
                              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer Line */}
                      <div className={`h-[2px] bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 rounded-full mt-4 ${isEven ? 'md:ml-auto' : ''}`} style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Ready to Work Together?</h3>
            <p className="text-purple-100 mb-6">Let's discuss how I can contribute to your next project</p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <FaRocket />
              <span>Hire Me</span>
            </a>
          </div>
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