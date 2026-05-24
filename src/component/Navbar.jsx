import React, { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaBlog,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
  FaDownload,
  FaCode,
} from 'react-icons/fa';

import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/', icon: FaHome },
    { name: 'Skills', href: '/skill', icon: FaCode },
    { name: 'Projects', href: '/project', icon: FaProjectDiagram },
    { name: 'Education', href: '/education', icon: FaBlog },
    { name: 'Contact', href: '/contact', icon: FaEnvelope },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/bs3610440',
      color: 'hover:text-gray-900',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/simran-jeet-kaur-01b580391/',
      color: 'hover:text-blue-600',
      label: 'LinkedIn'
    },
    {
      icon: FaTwitter,
      href: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400',
      label: 'Twitter'
    }
  ];

  const handleDownloadResume = () => {
    const resumeUrl = '/simran Resume.pdf.pdf'; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Simran_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <FaCode className="text-white text-sm" />
            </div>
            <button
              onClick={() => navigate('/home')}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Simran
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.href;

              return (
                <button
                  key={link.name}
                  onClick={() => navigate(link.href)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 group
                  ${
                    isActive
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  }`}
                >
                  <Icon className={`text-base ${isActive ? 'text-purple-600' : 'group-hover:text-purple-600'}`} />
                  <span className="font-medium">{link.name}</span>
                  
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <div key={index} className="relative group">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 block p-1`}
                  >
                    <Icon className="text-xl" />
                  </a>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {social.label}
                  </div>
                </div>
              );
            })}

            <div className="w-px h-6 bg-gray-300 mx-1"></div>

            {/* Download Resume Button */}
            <button
              onClick={handleDownloadResume}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative group overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaDownload className={`text-sm transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
                <span>Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-purple-50 transition-colors"
            >
              {isOpen ? (
                <FaTimes className="text-2xl text-gray-700" />
              ) : (
                <FaBars className="text-2xl text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-slideDown">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.href;
                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      navigate(link.href);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-purple-100 text-purple-600'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                    }`}
                  >
                    <Icon className="text-base" />
                    <span className="font-medium">{link.name}</span>
                    {isActive && (
                      <div className="ml-auto w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="my-4 border-t border-gray-100"></div>

            {/* Mobile Resume Button */}
            <button
              onClick={() => {
                handleDownloadResume();
                setIsOpen(false);
              }}
              className="w-full mb-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all"
            >
              <FaDownload />
              <span>Download Resume</span>
            </button>

            {/* Mobile Social Links */}
            <div className="flex justify-center gap-4 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-gray-600 ${social.color} hover:scale-110 transition-transform p-2`}
                  >
                    <Icon className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        .animate-bounce {
          animation: bounce 0.5s ease infinite;
        }
      `}</style>
    </nav>
  );
}