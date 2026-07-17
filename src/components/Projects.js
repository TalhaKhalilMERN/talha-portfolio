import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import TechBadge from "./TechBadge";

function Projects() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page py-5">
      <section className="projects-hero text-center py-0">
        <div className="container" data-aos="fade-up">
          <Link
            to="/"
            className="project-card-link mb-4 d-inline-flex align-items-center gap-2"
            style={{ color: "var(--text-secondary)" }}
          >
            <i className="bi bi-arrow-left"></i> Back to Home
          </Link>

          <h1
            className="mb-3"
            style={{
              fontSize: "42px",
              fontWeight: "800",
              fontFamily: "var(--font-heading)",
            }}
          >
            My Projects
          </h1>
          <p
            className="mb-5"
            style={{
              color: "var(--text-secondary)",
              fontSize: "18px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Production-ready applications, local products, and technical
            contributions
          </p>

          <div
            className="row g-4 justify-content-center mb-5"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            <div className="col-12 col-sm-4">
              <div className="stat-card-modern p-3">
                <div className="stat-value" style={{ fontSize: "32px" }}>
                  10+
                </div>
                <div className="stat-label" style={{ fontSize: "11px" }}>
                  Apps Built
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="stat-card-modern p-3">
                <div className="stat-value" style={{ fontSize: "32px" }}>
                  20+
                </div>
                <div className="stat-label" style={{ fontSize: "11px" }}>
                  Technologies
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="stat-card-modern p-3">
                <div className="stat-value" style={{ fontSize: "32px" }}>
                  1+ Year
                </div>
                <div className="stat-label" style={{ fontSize: "11px" }}>
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-list-section">
        <div className="container">
          <div className="project-grid-modern">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={50 * (index + 1)}
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
                        <i
                          className="bi bi-lock-fill"
                          style={{
                            fontSize: "9px",
                            marginRight: "4px",
                            opacity: 0.5,
                          }}
                        ></i>
                        <span>
                          {project.liveLinks && project.liveLinks.length > 0
                            ? project.liveLinks[0].url
                                .replace(/^(https?:\/\/)?(www\.)?/, "")
                                .split("/")[0]
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
                          style={{
                            background: `linear-gradient(to bottom, transparent 50%, ${project.color}18 100%)`,
                          }}
                        ></div>
                      </div>
                    ) : (
                      <div
                        className="project-fallback-preview"
                        style={{
                          background:
                            "linear-gradient(135deg, #121214 0%, #1e1e24 100%)",
                        }}
                      >
                        <div
                          className="browser-glow-bg"
                          style={{
                            background: `radial-gradient(circle, ${project.color}35 0%, transparent 70%)`,
                          }}
                        ></div>
                        <span
                          className="mock-browser-domain"
                          style={{ color: project.color }}
                        >
                          {project.domain}
                        </span>
                        <h4 className="mock-browser-title">{project.name}</h4>
                      </div>
                    )}
                    {/* Domain badge overlay */}
                    <div
                      className="project-domain-badge"
                      style={{
                        borderColor: `${project.color}40`,
                        color: project.color,
                      }}
                    >
                      {project.domain}
                    </div>
                  </div>

                  {/* Card Content */}
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
                        View Details <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {projectsData.length === 0 && (
            <div className="text-center py-5" data-aos="fade-up">
              <p style={{ color: "var(--text-muted)", fontSize: "16px" }}>
                No projects found with the selected technology tag.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Projects;
