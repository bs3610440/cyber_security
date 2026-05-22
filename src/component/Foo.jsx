'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, 
  FaMapMarkerAlt, FaHeart, FaRocket, FaCode, FaShieldAlt,
  FaInstagram, FaFacebook, FaYoutube, FaArrowUp
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", icon: FaCode },
    { name: "Cybersecurity", icon: FaShieldAlt },
    { name: "UI/UX Design", icon: FaRocket },
    { name: "Consultation", icon: FaEnvelope },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/simran", color: "hover:text-gray-900", bg: "bg-gray-100" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/simran", color: "hover:text-blue-600", bg: "bg-blue-50" },
    { icon: FaTwitter, href: "https://twitter.com/simran", color: "hover:text-blue-400", bg: "bg-blue-50" },
    { icon: FaInstagram, href: "https://instagram.com/simran", color: "hover:text-pink-600", bg: "bg-pink-50" },
    { icon: FaEnvelope, href: "mailto:simran@example.com", color: "hover:text-red-500", bg: "bg-red-50" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[blob_7s_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[blob_7s_infinite] animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[blob_7s_infinite] animation-delay-4000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <FaCode className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Simran
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 text-sm leading-relaxed"
            >
              MERN Stack Developer & Cybersecurity Expert building secure, scalable, 
              and beautiful web applications with a security-first approach.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-3"
            >
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bg} bg-opacity-20 p-2 rounded-full text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-opacity-100`}
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:w-2 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Services
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h3>
            <ul className="space-y-2">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <li key={idx}>
                    <a 
                      href="#contact"
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <Icon className="text-sm group-hover:scale-110 transition-transform" />
                      {service.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                <FaEnvelope className="text-purple-400" />
                <a href="mailto:simran@example.com" className="text-sm">simran@example.com</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                <FaPhone className="text-pink-400" />
                <a href="tel:+1234567890" className="text-sm">+91 12345 67890</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-sm">India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-purple-800/50 pt-8 mb-8"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">Subscribe to Newsletter</h3>
                <p className="text-gray-300 text-sm">Get latest updates about my projects and tech insights</p>
              </div>
              <div className="flex-1 flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-purple-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Simran. All rights reserved. Built with <FaHeart className="inline text-red-500 animate-pulse" /> using React & Tailwind CSS
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Terms of Service</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Sitemap</a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
      >
        <FaArrowUp className="text-xl group-hover:animate-bounce" />
      </motion.button>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
}