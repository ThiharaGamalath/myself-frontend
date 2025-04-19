import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import ParticlesBackground from './ParticlesBackground';
import profilePic from '../assets/1ab.jpg'; // ✅ Fix this line

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black px-6 text-center overflow-hidden"
    >
      {/* Constellation Particle Background */}
      <ParticlesBackground />

      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-0"></div>

      {/* Main Content */}
      <div className="z-10 max-w-xl mx-auto">
        <img
          src={profilePic}
          alt="Gihini"
          className="w-40 h-40 mx-auto rounded-full border-4 border-gray-800 shadow-xl mb-6 hover:scale-110 transition-transform duration-300"
        />

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
          Hi, I'm <span className="text-cyan-400">Gihini</span>
        </h1>

        <h2 className="text-lg md:text-xl text-gray-300 mb-6">
          <Typewriter
            words={['Developer 💻', 'Designer 🎨', 'Tech Enthusiast 🚀']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <a
          href="#projects"
          className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300 transform hover:scale-105"
        >
          View My Work
        </a>
      </div>

      {/* SVG Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
            fill="#0f172a"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
