import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBlog, FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: 'home', icon: FaHome },
    { name: 'Skill', href: 'skill', icon: FaUser },
    { name: 'Projects', href: 'projects', icon: FaProjectDiagram },
    { name: 'Education', href: 'education', icon: FaBlog },
    { name: 'Contact', href: 'contact', icon: FaEnvelope },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', color: 'hover:text-gray-900' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', color: 'hover:text-blue-400' },
  ];

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsOpen(false); // Close mobile menu after click
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href);
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer"
            >
              simran
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'text-purple-600 bg-purple-50' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <Icon className={`text-lg transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span className="font-medium">{link.name}</span>
                </button>
              );
            })}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <Icon className="text-xl" />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-100">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`flex items-center gap-3 px-4 py-3 w-full rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'text-purple-600 bg-purple-50' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <Icon className="text-lg" />
                  <span className="font-medium">{link.name}</span>
                </button>
              );
            })}
            
            {/* Social Links - Mobile */}
            <div className="flex justify-center gap-6 pt-4 mt-2 border-t border-gray-100">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <Icon className="text-2xl" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Active Indicator Line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
          style={{ 
            width: `${(navLinks.findIndex(link => link.href === activeSection) + 1) * (100 / navLinks.length)}%` 
          }}
        />
      </div>
    </nav>
  );
}