import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container">
        <div className="row align-items-center">

   
          <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center col-md-4 mb-3 mb-md-0 text-center text-md-start">
            <h5 className="footer-text mb-2">Önder Doruk Bingül</h5>
            <p className="footer-text mb-0" style={{ maxWidth: '300px' }}>
              Full Stack Web Geliştirici | Yazılım, Tasarım ve Proje Yönetimi
            </p>
          </div>

          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className={`mx-2 ${darkMode ? 'text-light' : 'text-dark'}`}>
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className={`mx-2 ${darkMode ? 'text-light' : 'text-dark'}`}>
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={`mx-2 ${darkMode ? 'text-light' : 'text-dark'}`}>
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={`mx-2 ${darkMode ? 'text-light' : 'text-dark'}`}>
              <FaLinkedinIn size={20} />
            </a>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <small>
               &copy; {new Date().getFullYear()}{' '}
              <a href="#welcome" className="text-warning text-decoration-none fw-bold">
                Önder Doruk Bingül
              </a>. Tüm hakları saklıdır.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
