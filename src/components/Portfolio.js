import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
  
   {
    title: 'Spotify V2',
    description: 'React ile oluşturduğumuz bu projede Spotify uygulamasını Görsel programlama için tasarımını kodladık  ',
    link: 'https://github.com/D0rkk/final_project',
  },
  {
    title: 'Kişisel Portfolyo',
    description: 'React ve Bootstrap kullanarak oluşturduğum bu portfolyo sitesi, mobil uyumlu ve modern tasarıma sahiptir.',
    link: 'https://github.com/D0rkk/dorkportfolio',
  },
  {
    title: 'Donanım Takip Uygulaması',
    description: 'C++ ve Open Hardware Monitor ile masaüstü donanım izleme uygulaması geliştirme aşamasındayım.',
    link: '',
  },
  {
    title: 'SQL Lojistik Veritabanı',
    description: 'MS SQL Server üzerinde oluşturulan lojistik veri yönetim sistemi.',
    link: 'https://github.com/D0rkk/Lojistik-Takibi',
  },
];

const Portfolio = ({darkMode}) => {
  return (
    <section id="portfolio" className={`py-5 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="container">
        <h2 className="text-center mb-4">Projelerim</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className={`card h-100 shadow ${
                  darkMode ? 'bg-secondary text-white' : 'bg-white text-dark'
                }`}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={`btn btn-${darkMode ? 'light' : 'dark'}`}>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
