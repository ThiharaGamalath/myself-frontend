import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0d0d0d] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side - Get in Touch */}
        <div className="text-left">
          <h2 className="text-4xl font-extrabold text-cyan-400 mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            I build secure and innovative tech. Drop a message or connect through the links below.
          </p>

          <div className="space-y-6 text-gray-300 text-base">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-cyan-500" />
              <span className="hover:text-white transition">074 226 1703</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-500" />
              <span className="hover:text-white transition">gihinithiharaunv@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-cyan-500" />
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                linkedin.com/in/gihini
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Google Form Embed */}
        <div className="w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdDOKfRaxk9ahLlRmkfsuMk7Uouub7mTwIA_unZbP6DEHDPug/viewform?embedded=true"
            width="100%"
            height="950"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="rounded-xl shadow-lg shadow-cyan-500/10"
            title="Message Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
