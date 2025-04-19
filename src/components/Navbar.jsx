import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Gihini.dev</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li><a href="#hero" className="hover:text-cyan-400 transition duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition duration-300">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition duration-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition duration-300">Contact</a></li>
          {/* Admin link for admin users */}
          <li><Link to="/admin" className="hover:text-cyan-400 transition duration-300">Admin</Link></li> {/* Changed to Link */}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-2xl text-white" />
            ) : (
              <FiMenu className="text-2xl text-white" />
            )}
          </button>
        </div>
      </div>

        {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white px-6 py-4">
          <ul className="flex flex-col space-y-4">
            <li><a href="#hero" className="hover:text-cyan-400 transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition duration-300">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition duration-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition duration-300">Contact</a></li>
            {/* Admin link for mobile */}
            <li><Link to="/admin" className="hover:text-cyan-400 transition duration-300">Admin</Link></li> {/* Changed to Link */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
