import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaChevronDown } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import './Welcome.css';


const Welcome = () => {
  return (
    <section
      id="welcome"
      className="d-flex flex-column justify-content-center align-items-center text-center text-white vh-100 position-relative"
      style={{
    backgroundImage: 'url(/bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backdropFilter: 'brightness(0.7)',
  }}
    >
      <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    }}
  ></div>  
      <motion.div
        className="container position-relative"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
   <motion.h2
  className="text-uppercase display-6 display-md-5 display-lg-4"
  style={{
    fontSize: '2.8rem', 
    fontWeight: 1500, 
    color: '#ffffff',
    letterSpacing: '2px', 
    textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255,255,255,0.3)', // Daha güçlü parlaklık
    marginBottom: '1rem',
    marginTop: '-40px',
    fontFamily: '"Share Tech Mono", monospace', //'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' 
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 1 }}
>
  <Typewriter
    words={['WELCOME TO MY PORTFOLIO']}
    loop={false}
    cursor
    cursorStyle="_"
    typeSpeed={120}
    deleteSpeed={60}
    delaySpeed={1000}
  />
</motion.h2>


        <motion.h1
          className="display-4 fw-bold"
          style={{
          textShadow: '0 0 20px rgba(255,255,255,0.3)',
          letterSpacing: '2px',
            }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Önder Doruk Bingül
        </motion.h1>
        <motion.p
          className="lead mt-3 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Full Stack Geliştirici • Modern ve Etkili Web Deneyimleri
        </motion.p>
        <motion.a
          href="#contact"
          className="btn btn-outline-light btn-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          İletişime Geç
        </motion.a>

        <div className="d-flex justify-content-center gap-4 mt-4">
    <a href="https://github.com/D0rkk" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
       <FaGithub />
    </a>
        <a href="https://linkedin.com/in/dorukbingul" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
       <FaLinkedin />
    </a>
        <a href="https://instagram.com/dorukbingul" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
        <FaInstagram />
    </a>
</div>
       <div className="scroll-down mt-5">
  <a href="#about" className="text-white fs-4">
    <FaChevronDown className="arrow bounce" />
  </a>
</div>

      </motion.div>
    </section>
  );
};

export default Welcome;
