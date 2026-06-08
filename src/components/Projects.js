import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import TechBadge from './TechBadge';
import '../components/assets/css/Portfolio.css';

function Projects() {
  const [selectedTech, setSelectedTech] = useState('All');

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projectsData.forEach(project => {
      project.techStack.forEach(tech => techSet.add(tech));
    });
    return ['All', ...Array.from(techSet).sort()];
  }, []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (selectedTech === 'All') return projectsData;
    return projectsData.filter(project => 
      project.techStack.includes(selectedTech)
    );
  }, [selectedTech]);

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container text-center">
          <div data-aos="fade-up">
            <h1>My Projects</h1>
            <p>Production-ready applications built with modern technologies</p>
            
            <div className="projects-stats">
              <div className="stat-box">
                <span className="stat-number">9</span>
                <span className="stat-label">Production Projects</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">20+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">1 Year</span>
                <span className="stat-label">Industry Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-filter">
        <div className="container">
          {/* <div className="filter-buttons" data-aos="fade-up">
            {allTechnologies.map(tech => (
              <button
                key={tech}
                className={`filter-btn ${selectedTech === tech ? 'active' : ''}`}
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </button>
            ))}
          </div> */}

          <div className="row gy-4">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="col-lg-4 col-md-6" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="project-card">
                  <div 
                    className="project-accent" 
                    style={{ backgroundColor: project.color }}
                  ></div>
                  <div className="project-card-content">
                    <span 
                      className="domain-tag"
                      style={{ 
                        backgroundColor: `${project.color}15`,
                        color: project.color 
                      }}
                    >
                      {project.domain}
                    </span>
                    {/* {project.secondaryLabel && (
                      <span 
                        className="secondary-label"
                        style={{ 
                          backgroundColor: `${project.color}10`,
                          color: project.color,
                          fontSize: '10px',
                          padding: '2px 8px',
                          borderRadius: '999px',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          display: 'inline-block',
                          marginLeft: '8px'
                        }}
                      >
                        {project.secondaryLabel}
                      </span>
                    )} */}
                    
                    <h3>{project.name}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                    
                    <p className="project-description">
                      {project.oneLiner}
                    </p>
                    
                    <div className="tech-badges">
                      {project.techStack.map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                    </div>
                    
                    <Link 
                      to={`/projects/${project.slug}`} 
                      className="project-link"
                    >
                      View Details <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center mt-5" data-aos="fade-up">
              <p>No projects found with the selected technology.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Projects;
