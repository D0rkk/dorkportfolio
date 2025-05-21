import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`py-5 ${darkMode ? 'bg-secondary text-white' : 'bg-light text-dark'}`}
    >
      <div className="container">
        <h2 className="text-center mb-5">İletişim</h2>
        <div className="row">
          <div className={`col-md-4 mb-4 ${darkMode ? 'bg-dark text-white' : 'bg-white text-dark'} p-4 rounded shadow`}>
            <h4 className="mb-4">Kişisel Bilgiler</h4>
            <p>
              <FaEnvelope className="me-2" />
              onder-doruk59@hotmail.com
            </p>
            <p>
              <FaPhone className="me-2" />
              +90 546 842 08 93
            </p>
            <p>
              <FaGithub className="me-2" />
              <a
                href="https://github.com/D0rkk"
                target="_blank"
                rel="noreferrer"
                className={darkMode ? 'text-white' : 'text-dark'}
              >
                github.com/D0rkk
              </a>
            </p>
          </div>

          <div className="col-md-8">
            <form action="https://formspree.io/f/xnndrevz" method="POST">
              <div className="mb-3">
                <label htmlFor="name" className={`form-label ${darkMode ? 'text-white' : 'text-dark'}`}>
                  Adınız
                </label>
                <input
                  type="text"
                  className={`form-control ${darkMode ? 'bg-dark text-white border-light' : ''}`}
                  id="name"
                  name="name"
                  placeholder="Adınızı girin"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className={`form-label ${darkMode ? 'text-white' : 'text-dark'}`}>
                  E-posta
                </label>
                <input
                  type="email"
                  className={`form-control ${darkMode ? 'bg-dark text-white border-light' : ''}`}
                  id="email"
                  name="email"
                  placeholder="ornek@mail.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className={`form-label ${darkMode ? 'text-white' : 'text-dark'}`}>
                  Mesajınız
                </label>
                <textarea
                  className={`form-control ${darkMode ? 'bg-dark text-white border-light' : ''}`}
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Mesajınızı yazın"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
