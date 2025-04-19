import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-sm">

        {/* About Me */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Me</h3>
          <p className="leading-relaxed text-gray-400">
            I’m Gihini, a passionate tech enthusiast and future software engineer.
            I love crafting beautiful and functional web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="mb-4 text-gray-400">Feel free to connect or drop a message.</p>
          <div className="flex space-x-5 text-2xl">
            <a href="https://github.com/ThiharaGamalath/ThiharaGamalath.git" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-gray-500 text-xs">
        © 2025 <span className="text-blue-500 font-medium">Gihini.dev</span>. Crafted with ❤️ and clean code.
      </div>
    </footer>
  );
};

export default Footer;
