'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, 
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp,
  FaClock, FaCheckCircle, FaSpinner, FaRegSmile, FaHeart,
  FaLocationArrow, FaBuilding, FaCoffee, FaHeadset, FaCode,
  FaArrowRight
} from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Me",
      value: "simran@example.com",
      link: "mailto:simran@example.com",
      color: "purple",
      bgGradient: "from-purple-50 to-purple-100",
      description: "Get response within 24 hours"
    },
  
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Kaithal, Haryana, India",
      link: "https://maps.google.com/?q=Kaithal,Haryana",
      color: "blue",
      bgGradient: "from-blue-50 to-blue-100",
      description: "Available for remote work worldwide"
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/bs3610440", label: "GitHub", color: "hover:text-gray-900", bgColor: "hover:bg-gray-100" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/simran", label: "LinkedIn", color: "hover:text-blue-600", bgColor: "hover:bg-blue-50" },
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", status: "open" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", status: "open" },
    { day: "Sunday", hours: "Closed", status: "closed" },
  ];

  const services = [
    "Web Development", "UI/UX Design", "Cybersecurity", "API Integration",
    "Database Design", "Performance Optimization", "Security Audits", "Cloud Deployment"
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-[blob_7s_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-[blob_7s_infinite] animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-[blob_7s_infinite] animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-[blob_8s_infinite] animation-delay-3000"></div>
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
              opacity: [0, 0.5, 0],
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
            <FaHeart className="text-purple-600 animate-pulse" />
            <span className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">Let's Connect</span>
            <FaRegSmile className="text-pink-600" />
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
              Get In Touch
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Contact Info Cards - Left Side */}
          <div className="lg:col-span-5 space-y-5">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              const getColorClass = () => {
                switch(info.color) {
                  case 'purple': return 'from-purple-500 to-purple-600';
                  case 'pink': return 'from-pink-500 to-pink-600';
                  case 'green': return 'from-green-500 to-green-600';
                  case 'blue': return 'from-blue-500 to-blue-600';
                  default: return 'from-purple-500 to-purple-600';
                }
              };
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className={`relative`}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${getColorClass()} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                      <div className={`relative p-3 rounded-xl bg-gradient-to-br ${info.bgGradient} group-hover:scale-110 transition-transform`}>
                        <Icon className={`text-2xl text-${info.color}-600`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-gray-800 font-semibold hover:text-purple-600 transition-colors text-lg">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-semibold text-lg">{info.value}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-1">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                  <FaClock className="text-xl text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Working Hours</h3>
              </div>
              <div className="space-y-2">
                {workingHours.map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1.5 border-b border-gray-50">
                    <span className="text-sm text-gray-600">{schedule.day}</span>
                    <span className={`text-sm font-medium ${schedule.status === 'open' ? 'text-green-600' : 'text-red-500'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

           
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 text-center"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">Follow Me</h3>
              <div className="flex justify-center gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className={`p-2.5 bg-gray-50 rounded-full text-gray-600 ${social.color} ${social.bgColor} transition-all duration-300 hover:shadow-md`}
                    >
                      <Icon className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Contact Form - Right Side */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-800">Send Me a Message</h3>
              </div>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <FaCheckCircle className="text-4xl text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FaUser className="inline mr-2 text-purple-600" />
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all ${
                          focusedField === 'name' 
                            ? 'border-purple-500 ring-2 ring-purple-200' 
                            : 'border-gray-300'
                        }`}
                        placeholder="simran"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FaEnvelope className="inline mr-2 text-pink-600" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all ${
                          focusedField === 'email' 
                            ? 'border-purple-500 ring-2 ring-purple-200' 
                            : 'border-gray-300'
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all ${
                        focusedField === 'subject' 
                          ? 'border-purple-500 ring-2 ring-purple-200' 
                          : 'border-gray-300'
                      }`}
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all resize-none ${
                        focusedField === 'message' 
                          ? 'border-purple-500 ring-2 ring-purple-200' 
                          : 'border-gray-300'
                      }`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Section - Kaithal Location */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <SiGooglemaps className="text-purple-600 text-2xl" />
                  Find Me Here
                </h3>
                <p className="text-sm text-gray-500 mt-1">Based in Kaithal, Haryana - Available worldwide</p>
              </div>
              <div className="flex gap-2">
                <motion.a 
                  href="https://maps.google.com/?q=Kaithal,Haryana"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  className="text-sm px-3 py-1.5 bg-purple-50 text-purple-600 rounded-lg font-medium flex items-center gap-1"
                >
                  <FaLocationArrow className="text-xs" />
                  Get Directions
                </motion.a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.584426823801!2d76.399327375959!3d29.80175227521223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39112dfc3d33b87d%3A0x4b4e1223fbc7843!2sKaithal%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kaithal Location Map"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaBuilding className="text-purple-500" />
                <span>Kaithal, Haryana, India - 136027</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaCoffee className="text-pink-500" />
                <span>Coffee meetings available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaHeadset className="text-blue-500" />
                <span>24/7 Online Support</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Let's Create Something Amazing Together!</h3>
            <p className="text-purple-100 text-sm mb-4">Available for freelance work, collaborations, and full-time opportunities</p>
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2 bg-white text-purple-600 rounded-lg font-semibold text-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <FaArrowRight />
              <span>View My Work</span>
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
        
        @keyframes blob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-30px, 40px) scale(1.2); }
          66% { transform: translate(20px, -30px) scale(0.8); }
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