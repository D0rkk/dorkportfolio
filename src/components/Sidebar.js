import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.classList.contains('menu-toggle')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Light/dark sınıfları
  const sidebarClass = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  const linkClass = darkMode ? 'text-white' : 'text-dark';

  return (
    <>
      {/* Mobil Menü Butonu */}
      <button
        className={`menu-toggle btn btn-outline-${darkMode ? 'light' : 'dark'} d-md-none position-fixed top-0 start-0 m-3 z-3`}
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`sidebar ${sidebarClass} d-flex flex-column align-items-center p-4 position-fixed h-100 ${isOpen ? 'open' : ''}`}
        style={{ width: '240px', zIndex: 2 }}
      >
        {/* Profil Fotoğrafı */}
        <div className="mb-3">
          <img
            src="/profile.jpeg"
            alt="Profil"
            className="rounded-circle img-fluid border shadow"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>

        {/* Ad */}
        <h4 className="mb-4">Önder Doruk</h4>

        {/* Navigasyon */}
        <nav className="sidebar-nav w-100">
          <ul className="nav flex-column text-center">
            <li className="nav-item">
              <a className={`nav-link py-2 ${linkClass}`} href="#about" onClick={closeMenu}>Hakkımda</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link py-2 ${linkClass}`} href="#skills" onClick={closeMenu}>Beceriler</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link py-2 ${linkClass}`} href="#portfolio" onClick={closeMenu}>Projeler</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link py-2 ${linkClass}`} href="#contact" onClick={closeMenu}>İletişim</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;


