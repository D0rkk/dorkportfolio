/*import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (event.target.tagName === 'A' && event.target.hash) {
        event.preventDefault();
        document.querySelector(event.target.hash).scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="App d-flex">
      <Sidebar />
      <main className="content" style={{marginLeft: '240px', width: '100%'}}>
        <Welcome/>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;*/
/*import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (event.target.tagName === 'A' && event.target.hash) {
        event.preventDefault();
        document.querySelector(event.target.hash).scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className={`App d-flex ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      
      <button 
        className="btn btn-sm btn-outline-secondary position-fixed top-0 end-0 m-3 z-3"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <Sidebar  darkMode={darkMode}/>
      <main className="content" style={{ marginLeft: '240px', width: '100%' }}>
        <Welcome />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;*/
import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (event.target.tagName === 'A' && event.target.hash) {
        event.preventDefault();
        document.querySelector(event.target.hash).scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className={`App d-flex flex-column min-vh-100 ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Tema Değiştir Butonu */}
      <button 
        className="btn btn-sm btn-outline-secondary position-fixed top-0 end-0 m-3 z-3"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <div className="d-flex flex-grow-1">
       <Sidebar darkMode={darkMode} />
       <main className="content" style={{ marginLeft: '240px', width: '100%' }}>
        <Welcome />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
        <Contact darkMode={darkMode} />
       </main>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;

