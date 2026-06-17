import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import TechBadge from './TechBadge';

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="container text-center py-5" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 className="mb-3">Project Not Found</h2>
        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>The project you are looking for does not exist.</p>
        <Link to="/projects" className="btn-premium-primary">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      {/* Detail Hero Section */}
      <section className="project-detail-hero" style={{ background: `linear-gradient(180deg, ${project.color}10 0%, var(--bg-primary) 100%)` }}>
        <div className="container" data-aos="fade-up">
          <Link to="/projects" className="project-card-link mb-4 d-inline-flex align-items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            <i className="bi bi-arrow-left"></i> Back to Projects
          </Link>
          
          <div className="mt-3">
            <span 
              className="tech-badge mb-3"
              style={{ 
                borderColor: `${project.color}30`,
                background: `${project.color}15`,
                color: '#ffffff' 
              }}
            >
              {project.domain}
            </span>
            <h1 className="mb-2" style={{ fontSize: '48px', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
              {project.name}
            </h1>
            <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '700px' }}>
              {project.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <section className="project-detail-body">
        <div className="container">
          <div className="project-detail-layout">
            
            {/* Left Content Column */}
            <div data-aos="fade-right">
              
              {/* Overview Section */}
              <div className="project-detail-section">
                <h3 className="project-detail-title">Overview</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                  {project.overview}
                </p>
              </div>

              {/* Key Features Section */}
              <div className="project-detail-section">
                <h3 className="project-detail-title">Key Features</h3>
                <div className="features-grid-modern">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="feature-card-modern">
                      <h4>
                        <i className={`bi ${feature.icon}`}></i>
                        {feature.title}
                      </h4>
                      <p className="mt-2">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contributions Section */}
              <div className="project-detail-section">
                <h3 className="project-detail-title">My Contributions</h3>
                <ul className="contributions-list-modern">
                  {project.contributions.map((contribution, idx) => (
                    <li key={idx}>
                      <i className="bi bi-check-circle-fill"></i>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Sidebar Column */}
            <div data-aos="fade-left">
              <div className="sidebar-card-modern">
                
                {/* Live Links */}
                {project.liveLinks && project.liveLinks.length > 0 && (
                  <div className="mb-5">
                    <h4 className="sidebar-section-title">Deployment</h4>
                    <div className="d-flex flex-column gap-2 mt-3">
                      {project.liveLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-premium-primary text-center justify-content-center w-100"
                        >
                          {link.label} <i className="bi bi-box-arrow-up-right" style={{ fontSize: '13px' }}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Scope Scale Stats */}
                {project.scale && project.scale.length > 0 && (
                  <div className="mb-5">
                    <h4 className="sidebar-section-title">Project Scale</h4>
                    <div className="d-flex flex-column gap-3 mt-3">
                      {project.scale.map((item, idx) => (
                        <div key={idx} className="d-flex justify-content-between align-items-center" style={{ fontSize: '14px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>
                          <span style={{ color: 'var(--text-muted)' }}>{item.label}</span>
                          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Details */}
                <div>
                  <h4 className="sidebar-section-title">Tech Stack</h4>
                  
                  <div className="d-flex flex-column gap-4 mt-3">
                    <div>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Frontend</span>
                      <div className="tech-badges-modern mt-2">
                        {project.techStackDetailed.frontend.map((tech, idx) => (
                          <TechBadge key={idx} tech={tech} />
                        ))}
                      </div>
                    </div>

                    {project.techStackDetailed.backend && project.techStackDetailed.backend.length > 0 && (
                      <div>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Backend</span>
                        <div className="tech-badges-modern mt-2">
                          {project.techStackDetailed.backend.map((tech, idx) => (
                            <TechBadge key={idx} tech={tech} />
                          ))}
                        </div>
                      </div>
                    )}

                    {project.techStackDetailed.integrations && project.techStackDetailed.integrations.length > 0 && (
                      <div>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Integrations</span>
                        <div className="tech-badges-modern mt-2">
                          {project.techStackDetailed.integrations.map((tech, idx) => (
                            <TechBadge key={idx} tech={tech} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
