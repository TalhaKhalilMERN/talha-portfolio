import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import TechBadge from './TechBadge';
import '../components/assets/css/Portfolio.css';

function Portfolio() {
  // Show only the first 6 projects on landing page (featured projects)
  const featuredProjects = projectsData.slice(0, 6);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Featured Projects — Real-World Applications Built for Production</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="col-lg-4 col-md-6" 
              data-aos="fade-up" 
              data-aos-delay={100 * (index + 1)}
            >
              <div className="portfolio-item">
                <div 
                  className="portfolio-accent" 
                  style={{ backgroundColor: project.color }}
                ></div>
                <div className="portfolio-content">
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
                  <p className="portfolio-tagline">{project.tagline}</p>
                  
                  <p className="portfolio-description">
                    {project.oneLiner}
                  </p>
                  
                  <div className="tech-badges">
                    {project.techStack.map((tech, idx) => (
                      <TechBadge key={idx} tech={tech} />
                    ))}
                  </div>
                  
                  <Link 
                    to={`/projects/${project.slug}`} 
                    className="portfolio-link"
                  >
                    View Details <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <Link to="/projects" className="view-all-btn">
            View All Projects <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
