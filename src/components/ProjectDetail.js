import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import TechBadge from './TechBadge';
import '../components/assets/css/Portfolio.css';

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="container text-center py-5">
        <h2>Project not found</h2>
        <Link to="/projects" className="btn btn-primary mt-3">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="container" data-aos="fade-up">
          <Link to="/projects" className="back-link">
            <i className="bi bi-arrow-left"></i> Back to Projects
          </Link>
          
          <span 
            className="domain-tag"
            style={{ 
              backgroundColor: `${project.color}25`,
              color: '#fff',
              display: 'inline-block',
              padding: "10px 18px",
              marginTop: '16px',
              marginLeft: '8px'
            }}
          >
            {project.domain}
          </span>
          
          <h1 className='text-white'>{project.name}</h1>
          <p className="project-hero-tagline">{project.tagline}</p>
          
          <div className="tech-badges-large">
            {project.techStack.map((tech, idx) => (
              <TechBadge key={idx} tech={tech} variant="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container" data-aos="fade-up">
          <h2 className="section-heading">Overview</h2>
          <p className="overview-text">{project.overview}</p>
          
          {/* Live Links Section */}
          {project.liveLinks && project.liveLinks.length > 0 && (
            <div className="live-links-section" data-aos="fade-up" data-aos-delay="100">
              <h3 className="live-links-heading">
                <i className="bi bi-box-arrow-up-right"></i> Live Links
              </h3>
              <div className="live-links-grid">
                {project.liveLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link-btn"
                    data-aos="fade-up"
                    data-aos-delay={150 + (idx * 50)}
                  >
                    <span className="live-link-label">{link.label}</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <div className="container" data-aos="fade-up">
          <h2 className="section-heading">Key Features</h2>
          <div className="row gy-4 mt-3">
            {project.features.map((feature, idx) => (
              <div key={idx} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Contributions Section */}
      <section className="contributions-section">
        <div className="container" data-aos="fade-up">
          <h2 className="section-heading text-white">My Contributions</h2>
          <ul className="contributions-list">
            {project.contributions.map((contribution, idx) => (
              <li className="align-items-center" key={idx} data-aos="fade-up" data-aos-delay={50 * (idx + 1)}>
                <i className="bi bi-check-circle-fill"></i>
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech Stack Breakdown Section */}
      <section className="tech-stack-section">
        <div className="container" data-aos="fade-up">
          <h2 className="section-heading">Tech Stack Breakdown</h2>
          <div className="tech-stack-grid">
            <div className="tech-stack-group" data-aos="fade-up" data-aos-delay="100">
              <h4><i className="bi bi-laptop"></i> Frontend</h4>
              <div className="tech-badges">
                {project.techStackDetailed.frontend.map((tech, idx) => (
                  <TechBadge key={idx} tech={tech} />
                ))}
              </div>
            </div>
            
            <div className="tech-stack-group" data-aos="fade-up" data-aos-delay="200">
              <h4><i className="bi bi-server"></i> Backend</h4>
              <div className="tech-badges">
                {project.techStackDetailed.backend.map((tech, idx) => (
                  <TechBadge key={idx} tech={tech} />
                ))}
              </div>
            </div>
            
            <div className="tech-stack-group" data-aos="fade-up" data-aos-delay="300">
              <h4><i className="bi bi-plug"></i> Integrations</h4>
              <div className="tech-badges">
                {project.techStackDetailed.integrations.map((tech, idx) => (
                  <TechBadge key={idx} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="explore-more-section">
        <div className="container text-center" data-aos="fade-up">
          <h3>Explore More Projects</h3>
          <Link to="/projects" className="view-all-btn">
            View All Projects <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
