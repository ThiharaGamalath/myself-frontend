import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
  { name: 'Figma', icon: <SiFigma className="text-pink-500 text-4xl" /> },
  { name: 'Java', icon: <FaJava className="text-red-500 text-4xl" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-500 text-4xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#121212] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-6">Skills & Technologies</h2>
        <p className="text-gray-400 mb-12">Here are some of the technologies I work with:</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-[#1e1e1e] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-cyan-500 hover:ring-opacity-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="mb-4">{skill.icon}</div>
              <p className="text-lg font-semibold text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
