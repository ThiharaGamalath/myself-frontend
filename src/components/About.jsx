import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from 'react-icons/fa';

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-[#121212] py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">About Me</h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          Hey there! 👋 I'm <span className="font-semibold text-cyan-500">Gihini</span>, an enthusiastic and driven IT undergraduate at the
          <span className="font-semibold text-cyan-500"> Institute of Technology, University of Moratuwa (ITUM)</span>. I have a huge passion for
          <span className="font-semibold text-cyan-500"> technology, design, and creativity</span>. My dream is to build innovative, secure, and impactful digital products that make people’s lives better.
        </p>

        <div className="mt-6 text-lg text-gray-300 leading-relaxed text-left">
          <p className="mb-2">Currently, I’m exploring:</p>
          <ul className="list-disc list-inside ml-4 text-base md:text-lg text-gray-400">
            <li>🌐 <strong>Web Development</strong> — HTML, CSS, JavaScript, React</li>
            <li>🎨 <strong>UI/UX Design</strong> — Using Figma to build clean and user-friendly interfaces</li>
          </ul>
        </div>

        <div className="flex justify-center space-x-6 mt-6 text-3xl text-cyan-500">
          <FaHtml5 title="HTML5" className="transition duration-300 transform hover:scale-110 hover:text-white" />
          <FaCss3Alt title="CSS3" className="transition duration-300 transform hover:scale-110 hover:text-white" />
          <FaJs title="JavaScript" className="transition duration-300 transform hover:scale-110 hover:text-white" />
          <FaReact title="React" className="transition duration-300 transform hover:scale-110 hover:text-white" />
          <FaFigma title="Figma" className="transition duration-300 transform hover:scale-110 hover:text-white" />
        </div>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Outside of coding, I’m someone who enjoys learning new tech trends, designing digital art, and spending quality time with friends and family. I believe in being curious, kind, and always leveling up — both in tech and in life.
        </p>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed italic">
          “Stay curious. Stay humble. Keep building.” 💙
        </p>

        <a 
          href="/Gihini_CV.pdf" 
          download 
          className="mt-8 inline-block bg-cyan-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300"
        >
          Download My CV 📄
        </a>
      </div>
    </motion.section>
  );
};

export default About;
