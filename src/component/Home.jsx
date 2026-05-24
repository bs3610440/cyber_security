import React from 'react';
import { FaCode, FaShieldAlt, FaDatabase, FaReact, FaNodeJs, FaPython, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

export default function Hero() {
  const techStack = [
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-700' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite] animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite] animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0">
              <FaShieldAlt className="text-purple-600" />
              <span>Security First Developer</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards] opacity-0">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-800">Hi, I'm </span>
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  Simran
                </span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl text-gray-700">
                  <span className="font-semibold">MERN Stack Developer</span>
                  <span className="mx-2 text-purple-500">&</span>
                  <span className="font-semibold text-purple-700">Cybersecurity Expert</span>
                </p>
                <p className="text-lg text-gray-600 max-w-lg">
                  Building secure, scalable, and beautiful web applications with a focus on 
                  cybersecurity best practices.
                </p>
              </div>
            </div>

            

            {/* Tech Stack */}
            <div className="pt-6 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards] opacity-0">
              <p className="text-sm text-gray-500 mb-3 font-semibold">TECH STACK & TOOLS</p>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                      <Icon className={`text-xl ${tech.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 animate-[fadeInUp_0.6s_ease-out_0.8s_forwards] opacity-0">
              <a href="https://github.com/bs3610440"
               target="_blank" rel="noopener noreferrer" 
                className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-900 transform hover:scale-110 transition-all duration-300">
                <FaGithub className="text-xl" />
              </a>

              <a href="https://www.linkedin.com/in/simran-jeet-kaur-01b580391"
               target="_blank" rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transform hover:scale-110 transition-all duration-300">
                <FaLinkedin className="text-xl" />
              </a>
              
              <a href="https://twitter.com/simran" target="_blank" rel="noopener noreferrer"
                className="bg-blue-400 p-3 rounded-full text-white hover:bg-blue-500 transform hover:scale-110 transition-all duration-300">
                <FaTwitter className="text-xl" />
              </a>
              <a href="mailto:simran@example.com"
                className="bg-red-500 p-3 rounded-full text-white hover:bg-red-600 transform hover:scale-110 transition-all duration-300">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Content - Illustration/Profile */}
          <div className="relative animate-[fadeInUp_0.6s_ease-out_0.3s_forwards] opacity-0">
            <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-400 rounded-full opacity-20 blur-2xl"></div>
              
              <div className="relative space-y-6">
                {/* Code Security Illustration */}
                <div className="text-center">
                  <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
                    <FaCode className="text-5xl text-purple-600" />
                  </div>
                  <div className="flex justify-center gap-2">
                    <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
                    <div className="w-12 h-1 bg-pink-600 rounded-full"></div>
                    <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                  </div>
                </div>

                {/* Stats/Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all">
                    <div className="text-3xl font-bold text-purple-600">5+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all">
                    <div className="text-3xl font-bold text-pink-600">100%</div>
                    <div className="text-sm text-gray-600">Security Focused</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all">
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Learning Mode</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all">
                    <div className="text-3xl font-bold text-green-600">⚡</div>
                    <div className="text-sm text-gray-600">Fast Delivery</div>
                  </div>
                </div>

                {/* Code Snippet */}
                <div className="bg-gray-900 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-400 ml-2">secure-app.js</span>
                  </div>
                  <pre className="text-xs text-green-400 overflow-x-auto">
                    <code>{`// Security First Approach
const secureMiddleware = {
  encrypt: (data) => bcrypt.hash(data, 10),
  validate: (input) => sanitize(input),
  protect: (route) => auth(route)
};

export default secureApp;`}</code>
                  </pre>
                </div>

                {/* Security Badge */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    <FaShieldAlt className="animate-pulse" />
                    <span>🔒 Security First Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-purple-600 rounded-full mt-2 animate-[scroll_2s_infinite]"></div>
        </div>
      </div>

      {/* Add these keyframes to your global CSS or tailwind.config.js */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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
        
        @keyframes scroll {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.5; }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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