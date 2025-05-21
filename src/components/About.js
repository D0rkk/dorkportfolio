import React from 'react';
import {FaBrain, FaBullseye, FaUsers,FaBasketballBall,FaCamera, FaVideo, FaGraduationCap} from 'react-icons/fa';
import './About.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const About = ({darkMode}) => {
  return (
    <section id="about" className={`py-5 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="container">
        <h2 className="text-center mb-4">Hakkımda</h2>
        <div className="row align-items-center">
          <div className="col-md-8">
            <p className="lead">
              Merhaba! Ben <strong>Önder Doruk Bingül</strong>.
              Full Stack Web Geliştirme ve Veritabanı Yönetimi alanlarına ilgi duyuyorum. HTML, CSS, JavaScript, React, Python, C#, SQL gibi teknolojilerde orta seviyede bilgim var.
              Yeni teknolojileri öğrenmeyi, projeler geliştirmeyi ve kendimi sürekli geliştirmeyi seviyorum.Bunun dışında 4 senedir fotoğraf, video çekimi ve video editleme ile uğraşıyorum.
              12 sene kadar lisanslı basketbol oynadım. Sonrasında basketbolu bırakıp hobi olarak yapmaya başladım. 
              
            </p>
              <div className="my-4">
              <h5 className="mb-3">Karakter Özelliklerim</h5>
              <div className="d-flex flex-wrap gap-4">
                <div className="d-flex align-items-center">
                  <FaBrain size={24} className="me-2 text-warning" />
                  <span>Öğrenmeye Aç</span>
                </div>
                <div className="d-flex align-items-center">
                  <FaBullseye size={24} className="me-2 text-warning" />
                  <span>Hedef Odaklı</span>
                </div>
                <div className="d-flex align-items-center">
                  <FaUsers size={24} className="me-2 text-warning" />
                  <span>Takım Oyuncusu</span>
                </div>
              </div>
            </div>

               <div className="my-4">
              <h5 className="mb-3">Hobilerim</h5>
              <div className="d-flex flex-wrap gap-4">
                <div className="d-flex align-items-center">
                  <FaBasketballBall size={24} className="me-2 text-info" />
                  <span>Basketbol</span>
                </div>
                <div className="d-flex align-items-center">
                  <FaCamera size={24} className="me-2 text-info" />
                  <span>Fotoğraf Çekmek</span>
                </div>
                <div className="d-flex align-items-center">
                  <FaVideo size={24} className="me-2 text-info" />
                  <span>Video Editlemek</span>
                </div>
              </div>
            </div>

            <div className="my-4">
              <h5 className="mb-3">Eğitim Hayatım</h5>
              <ul className={`list-group ${darkMode ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
                <li className={`list-group-item d-flex align-items-center gap-3 ${darkMode ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
                  <FaGraduationCap size={20} className="text-primary" />
                  <div>
                    <strong>Balıkesir Üniversitesi</strong> - Bilgisayar Mühendisliği (2022 - ...)
                  </div>
                </li>
                <li className={`list-group-item d-flex align-items-center gap-3 ${darkMode ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
                  <FaGraduationCap size={20} className="text-primary" />
                  <div>
                    <strong>Tekirdağ Fen Lisesi</strong> - 2018 - 2021
                  </div>
                </li>
              </ul>
            </div>
            <ul className="list-unstyled mt-3">
              <li><strong>Yaş:</strong> 22</li>
              <li><strong>Konum:</strong> Tekirdağ, Türkiye</li>
              <li><strong>Hedef:</strong> Full Stack Geliştirici</li>
            </ul>
          </div>

        
          <div className="col-md-4 text-center mt-4 mt-md-0">
            <h5>CV İndir</h5>
            <div className="d-flex flex-column gap-3">
              <a
                href="/cv-turkce.pdf"
                className={`btn btn-${darkMode ? 'light' : 'dark'}`}
                download
              >
                Türkçe CV
              </a>
              <a
                href="/cv-english.pdf"
                className={`btn btn-${darkMode ? 'light' : 'dark'}`}
                download
              >
                English CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
