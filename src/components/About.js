import React from "react";

function About() {
  return (
    <section id="about" className="section">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="section-title">
          <div className="section-badge-row">
            <div className="section-badge-icon about">
              <i className="bi bi-person-fill"></i>
            </div>
            <span className="section-badge-text">About</span>
          </div>
          <h2>A bit about <span className="gradient-me">me</span></h2>
          <p>Get to know who I am and what drives me as a developer.</p>
        </div>

        <div className="about-content-modern" data-aos="fade-up" data-aos-delay="200">
          <p className="lead-text">
            Hey there, I'm Talha — a frontend developer.
          </p>
          <p>
            I'm a frontend-focused engineer with a strong foundation in
            React, Next.js, and TypeScript, combined with a passion for
            building user experiences that are both intuitive and
            pixel-perfect. Engineering is my backbone, but I thrive at
            the intersection of clean code and human-centered design.
          </p>
          <p>
            Currently working at NextPak Agile Solutions, where I
            contribute to production applications across 15+ client
            projects — from enterprise POS systems and restaurant
            management platforms to government-grade travel authorization
            systems. I've integrated real-time backends, payment systems,
            multi-role auth flows, and Figma-to-code designs across a
            wide variety of stacks.
          </p>
          <p>
            I've worn multiple hats: shipping full features end-to-end,
            collaborating with cross-functional teams, and consistently
            delivering production-ready code under real agile sprints.
            What drives me is creating digital experiences that feel
            fast, elegant, and genuinely useful.
          </p>
          <p>
            Would you like to work together or just chat? Feel free to
            reach out.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
