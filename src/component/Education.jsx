'use client';
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    title: "B.Sc (Life Sciences)",
    subtitle: "RKSD College of Education",
    description:
      "Pursuing Bachelor of Science in Life Sciences with a focus on biology, environmental science, and analytical skills. Developed a strong understanding of scientific concepts and research-based learning.",
    year: "2022 - 2025",
  },
  {
    id: 2,
    title: "Cyber Security & Web Development",
    subtitle: "Self Learning / Course",
    description:
      "Learning ethical hacking, network security, and penetration testing. Gaining hands-on experience with tools like Kali Linux, Burp Suite, and Wireshark to identify and fix security vulnerabilities.",
    year: "2025 - Present",
  },
];

export default function Education() {
  return (
    <section className="min-h-screen bg-[#020617] text-white px-6 md:px-16 lg:px-32 py-16">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 text-green-300">
        My Education
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#1f2933] to-[#111827] p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-gray-400 hover:shadow-gray-500/20"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-200">
              {item.title}
            </h3>

            <p className="text-lg font-medium mb-1 text-gray-300">
              {item.subtitle}
            </p>

            <p className="text-sm text-gray-400 mb-3">
              {item.year}
            </p>

            <p className="text-gray-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}