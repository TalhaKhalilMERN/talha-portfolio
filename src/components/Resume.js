import React from "react";

function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container" data-aos="fade-up">
        
        <div className="section-title">
          <div className="section-badge-row">
            <div className="section-badge-icon resume">
              <i className="bi bi-briefcase-fill"></i>
            </div>
            <span className="section-badge-text">Resume</span>
          </div>
          <h2>My professional <span className="gradient-journey">journey</span></h2>
          <p>My academic foundation and professional journey at a glance</p>
        </div>

        {/* Download Button */}
        <div className="resume-download-wrapper" data-aos="fade-up">
          <a href="/Resume.pdf" download className="btn-premium-secondary">
            <i className="bi bi-download"></i> Download Full CV
          </a>
        </div>

        <div className="resume-grid">
          {/* Left Column - Summary & Education */}
          <div data-aos="fade-right">
            
            <h3 className="resume-heading">Summary</h3>
            <div className="resume-item-modern">
              <h4>Talha Khalil</h4>
              <p>
                <em>
                  Frontend Developer with production experience building modern
                  web applications using React.js, TypeScript, and Next.js.
                  Specialized in creating responsive UIs, integrating payment
                  systems, implementing real-time features, and delivering
                  pixel-perfect designs with a focus on user experience and code
                  quality.
                </em>
              </p>
              <ul className="mt-3">
                <li>Rawalpindi, Punjab, Pakistan</li>
                <li><a href="tel:+923035562974" style={{ transition: "var(--transition-smooth)" }} className="resume-contact-link">+92 303 5562974</a></li>
                <li><a href="mailto:talhakhalil974@gmail.com" style={{ transition: "var(--transition-smooth)" }} className="resume-contact-link">talhakhalil974@gmail.com</a></li>
              </ul>
            </div>

            <h3 className="resume-heading mt-4">Education</h3>
            <div className="resume-item-modern">
              <h4>Bachelor of Computer Science</h4>
              <h5>2020 - 2024</h5>
              <em>Institute of Space and Technology, Islamabad</em>
              <p>
                Gained comprehensive knowledge in core computer science
                principles and cutting-edge technologies. Mastered Data
                Structures and Algorithms, while exploring AI, Computer Vision,
                and Big Data. Developed practical skills in Compiler
                Construction, Mobile App Development, and Web Technologies.
                Acquired expertise in Computer Networks and Network Security.
              </p>
            </div>

          </div>

          {/* Right Column - Experience */}
          <div data-aos="fade-left">
            
            <h3 className="resume-heading">Professional Experience</h3>

            <div className="resume-item-modern">
              <h4>Frontend Developer</h4>
              <h5>Oct 2025 - Present</h5>
              <em>NextPak Agile Solutions, Rawalpindi, Pakistan</em>
              <ul>
                <li>
                  Developed and maintained production frontend features across
                  15+ client projects using React.js, TypeScript, Next.js, and
                  Tailwind CSS in an agile team environment.
                </li>
                <li>
                  Integrated Stripe payment systems, Firebase/Supabase backends,
                  real-time features via Socket.IO and Supabase Realtime, and
                  third-party APIs including Algolia, SendGrid, and Tap
                  Payments.
                </li>
                <li>
                  Implemented role-based access control, multi-step forms with
                  validation (React Hook Form + Zod), and state management
                  solutions using Redux Toolkit, Zustand, and TanStack Query.
                </li>
              </ul>
            </div>

            <div className="resume-item-modern">
              <h4>MERN Stack Intern</h4>
              <h5>Jun 2025 - Sep 2025</h5>
              <em>NextPak Agile Solutions, Rawalpindi, Pakistan</em>
              <ul>
                <li>
                  Completed a 4-month React.js internship, developing
                  responsive web applications and implementing reusable UI
                  components.
                </li>
                <li>
                  Integrated APIs, managed frontend state, and collaborated
                  within a Git-based team workflow to deliver
                  production-ready features.
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;
