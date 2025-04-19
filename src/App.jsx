import './index.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Cursor from './components/Cursor';


const App = () => {
  const [message, setMessage] = useState(''); // Store the response message from the server

  useEffect(() => {
    // Fetch the message from the backend on component mount
    fetch('http://localhost:5000')
      .then(response => response.text())
      .then(data => setMessage(data)); // Set the message to the state
  }, []); // Empty array means it only runs once when the component mounts

  return (
    <Router> {/* Wrap your app with Router */}
      <div>
        <Cursor />
         {/* Define your routes */}
         <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Navbar />
        
        <About />
        <Skill />
        <Project />
        <Contact />
      
      
       

        <Footer />
        
        {/* Display the fetched message */}
        <div className="p-8">
          <h1 className="text-xl font-bold">{message}</h1> {/* Display the message */}
        </div>
      </div>
    </Router>
  );
};

export default App;
