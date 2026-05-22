'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaShieldAlt, FaCalendarAlt, FaBookOpen, FaAward, FaCode, FaUserGraduate, FaCheckCircle, FaClock } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    title: "B.Sc (Life Sciences)",
    subtitle: "RKSD College of Education",
    description: "Pursuing Bachelor of Science in Life Sciences with a focus on biology, environmental science, and analytical skills.",
    year: "2022 - 2025",
    icon: FaGraduationCap,
    achievements: ["Research Methodology", "Analytical Skills", "Scientific Writing"],
    type: "degree",
    status: "Pursuing"
  },
  {
    id: 2,
    title: "Cyber Security & Web Development",
    subtitle: "Self Learning / Online Courses",
    description: "Learning ethical hacking, network security, and penetration testing with hands-on experience.",
    year: "2025 - Present",
    icon: FaShieldAlt,
    achievements: ["Ethical Hacking", "Network Security", "Penetration Testing", "Web Development"],
    type: "certification",
    status: "Active"
  }
];

export default function Education() {
  return (
    <section className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
      
      {/* Subtle Background Pattern */}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaUserGraduate className="text-purple-600" />
            <span>Academic Journey</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Education
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Combining academic knowledge with practical skills in cybersecurity and web development
          </motion.p>
        </div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {educationData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                  
                  {/* Header with Icon and Year */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg group-hover:scale-110 transition-transform">
                        <Icon className="text-xl text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                        {item.year}
                      </span>
                      <span className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        <FaClock className="text-[10px]" />
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                      <FaAward className="text-purple-600 text-[10px]" />
                      <span>Key Highlights:</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {item.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-200"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Section - Small Cards */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Certifications & Courses
              </span>
            </h3>
            <p className="text-gray-500 text-sm">
              Continuous learning and professional development
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: FaShieldAlt, name: "Ethical Hacking", platform: "Online Course", color: "purple", hours: "40+" },
              { icon: FaCode, name: "MERN Stack Development", platform: "Self Learning", color: "pink", hours: "120+" },
              { icon: FaBookOpen, name: "Network Security", platform: "Certification", color: "blue", hours: "30+" },
            ].map((cert, idx) => {
              const Icon = cert.icon;
              const getColorClass = () => {
                switch(cert.color) {
                  case 'purple': return 'bg-purple-50 text-purple-600';
                  case 'pink': return 'bg-pink-50 text-pink-600';
                  case 'blue': return 'bg-blue-50 text-blue-600';
                  default: return 'bg-purple-50 text-purple-600';
                }
              };
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${getColorClass()} group-hover:scale-110 transition-transform`}>
                      <Icon className="text-lg" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-800">{cert.name}</h4>
                      <p className="text-[11px] text-gray-500">{cert.platform}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-purple-600">{cert.hours}</span>
                      <p className="text-[10px] text-gray-400">hours</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-50">
                    <div className="flex items-center gap-1">
                      <FaCheckCircle className="text-[10px] text-green-500" />
                      <span className="text-[10px] text-gray-500">Completed</span>
                    </div>
                    <span className="text-[10px] text-purple-600">Certificate</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Section - Small Cards */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { icon: FaGraduationCap, label: "Courses", value: "10+", color: "purple" },
            { icon: FaAward, label: "Certifications", value: "5+", color: "pink" },
            { icon: FaBookOpen, label: "Projects", value: "15+", color: "blue" },
            { icon: FaCode, label: "Learning Hours", value: "500+", color: "green" },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            const getColorClass = () => {
              switch(stat.color) {
                case 'purple': return 'bg-purple-50 text-purple-600';
                case 'pink': return 'bg-pink-50 text-pink-600';
                case 'blue': return 'bg-blue-50 text-blue-600';
                case 'green': return 'bg-green-50 text-green-600';
                default: return 'bg-purple-50 text-purple-600';
              }
            };
            return (
              <div
                key={idx}
                className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100"
              >
                <div className={`inline-block p-2 rounded-lg mb-2 ${getColorClass()} group-hover:scale-110 transition-transform`}>
                  <Icon className="text-xl" />
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-400">
            📚 Always learning, always growing • 500+ hours of continuous learning
          </p>
        </motion.div>
      </div>
    </section>
  );
}