// Project.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Project() {
  const ProjectData = [
    {
      projectName: "Portfolio",
      img:"https://eccweb.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/01/26103854/Blog-Secrets-to-Building-a-Career-in-Cybersecurity-in-2023-1.png",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      startDate: "02-Oct-2025",
      endDate: "31-Oct-2025",
      info: "Frontend Project",
      githubLink: "https://github.com/Manoj-Dev/Portfolio",
      deploymentLink: "https://manoj-dev.github.io/Portfolio/",
    },
    {
      projectName: "E-Book",
      img:"https://assets.entrepreneur.com/content/3x2/2000/1593079102-work-731198.jpg",
      des: "Full-stack e-book platform for digital reading.",
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Lucide Icons",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Mongoose",
        "Cloudinary",
      ],
      startDate: "05-Nov-2025",
      endDate: "07-Apr-2026",
      info: "MERN Stack Project",
      githubLink: "https://github.com/Manoj-Dev/Portfolio",
      deploymentLink: "https://manoj-dev.github.io/Portfolio/",
    },
    {
      projectName: "Messenger App",
      img:"https://cdn.prod.website-files.com/63a71c562e3ccbc6f6a40f0f/67b98625472de816d0951c58_65bcbb02d38aec8f6ce1f1ab_L%2526D_Cyber%2526ITSecurity_Hero.png",
      
      des: "Real-time messaging application with chat rooms.",
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Lucide Icons",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Mongoose",
        "Cloudinary",
      ],
      startDate: "02-May-2026",
      endDate: "19-Sep-2026",
      info: "MERN Stack Project",
      githubLink: "https://github.com/Manoj-Dev/Portfolio",
      deploymentLink: "https://manoj-dev.github.io/Portfolio/",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-green-400 drop-shadow-[0_0_25px_rgba(0,255,100,0.8)]"
      >
        Projects
      </motion.h2>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 px-6 sm:px-12">
        {ProjectData.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 0px 30px rgba(0,255,100,0.7)" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-900 rounded-xl overflow-hidden border border-green-500"
          >
            <img
              src={project.img}
              alt={project.projectName}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-2">{project.projectName}</h3>
              <p className="text-gray-300 mb-3">{project.des}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-green-800 px-2 py-1 rounded text-green-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-400 mb-3">
                <span>{project.startDate}</span>
                <span>{project.endDate}</span>
              </div>
              <div className="flex justify-between">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-semibold"
                >
                  GitHub
                </a>
                <a
                  href={project.deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-semibold"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
