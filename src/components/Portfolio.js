import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import TechBadge from './TechBadge';

function Portfolio() {
  // Show only the first 6 projects on landing page (featured projects)
  const featuredProjects = projectsData.slice(0, 6);

  return (
    <section id="portfolio" className="section">
      <div className="container" data-aos="fade-up">
        
        <div className="section-title">
          <div className="section-badge-row">
            <div className="section-badge-icon portfolio">
              <i className="bi bi-grid-fill"></i>
            </div>
            <span className="section-badge-text">Portfolio</span>
          </div>
          <h2>Things I've <span className="gradient-built">built</span></h2>
          <p>Featured Projects — Production-Ready Applications</p>
        </div>

        <div className="project-grid-modern">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              data-aos="fade-up" 
              data-aos-delay={80 * (index + 1)}
            >
              <div className="project-card-modern">
                
                {/* Project Screenshot Preview */}
                <div className="project-card-image-wrapper">
                  {/* macOS-style browser chrome */}
                  <div className="mock-browser-header">
                    <span className="browser-dot close"></span>
                    <span className="browser-dot minimize"></span>
                    <span className="browser-dot maximize"></span>
                    <span className="mock-browser-url-bar">
                      <i className="bi bi-lock-fill" style={{ fontSize: '9px', marginRight: '4px', opacity: 0.5 }}></i>
                      <span>
                        {project.liveLinks && project.liveLinks.length > 0
                          ? project.liveLinks[0].url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0]
                          : `${project.slug}.app`}
                      </span>
                    </span>
                  </div>
                  {/* Screenshot or fallback glow */}
                  {project.image ? (
                    <div className="project-screenshot-container">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="project-screenshot-img"
                      />
                      <div 
                        className="project-screenshot-overlay"
                        style={{ background: `linear-gradient(to bottom, transparent 50%, ${project.color}18 100%)` }}
                      ></div>
                    </div>
                  ) : (
                    <div 
                      className="project-fallback-preview"
                      style={{ background: 'linear-gradient(135deg, #121214 0%, #1e1e24 100%)' }}
                    >
                      <div 
                        className="browser-glow-bg" 
                        style={{ background: `radial-gradient(circle, ${project.color}35 0%, transparent 70%)` }}
                      ></div>
                      <span className="mock-browser-domain" style={{ color: project.color }}>{project.domain}</span>
                      <h4 className="mock-browser-title">{project.name}</h4>
                    </div>
                  )}
                  {/* Domain badge overlay */}
                  <div className="project-domain-badge" style={{ borderColor: `${project.color}40`, color: project.color }}>
                    {project.domain}
                  </div>
                </div>

                {/* Card Body */}
                <div className="project-card-body">
                  <h3 className="project-card-name">{project.name}</h3>
                  <p className="project-card-tagline">{project.tagline}</p>
                  
                  <p className="project-card-description">
                    {project.oneLiner}
                  </p>

                  <div className="tech-badges-modern mb-4">
                    {project.techStack.map((tech, idx) => (
                      <TechBadge key={idx} tech={tech} />
                    ))}
                  </div>
                  
                  <div className="project-card-footer">
                    <Link 
                      to={`/projects/${project.slug}`} 
                      className="project-card-link"
                    >
                      View details <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <Link to="/projects" className="btn-premium-primary">
            View All Projects <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
