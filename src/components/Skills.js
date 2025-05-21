import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaCode, FaVideo} from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />,  },
  { name: 'CSS3', icon: <FaCss3Alt />,  },
  { name: 'JavaScript', icon: <FaJs />, },
  { name: 'React', icon: <FaReact />,  },
  { name: 'Python', icon: <FaPython /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'C#', icon: <FaCode />,  },
  { name: 'C++', icon: <FaCode />,  },
  { name: 'Video Editing', icon: <FaVideo />,},
];

const Skills = ({darkMode}) => {
  return (
    <section id="skills" className={`py-5 ${darkMode ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
      <div className="container">
        <h2 className="text-center mb-4">{darkMode ? 'Beceriler' : 'Skills'}</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-sm-6 col-md-4 mb-4">
              <div className={`card text-center h-100 shadow ${
                  darkMode ? 'bg-dark text-white' : 'bg-white text-dark'
                }`}>
                <div className="card-body">
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
                    {skill.icon}
                  </div>
                  <h5 className="card-title">{skill.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

