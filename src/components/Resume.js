import React from "react";
import { Link } from "react-router-dom";
import styles from "./assets/css/main.module.css";

function Resume() {
  return (
    <section id="resume" className={`${styles.resume} ${styles.section}`}>
      <div
        className={`container ${styles["section-title"]}`}
        data-aos="fade-up"
      >
        <h2>Resume</h2>
        <p>My Professional Journey at a Glance</p>
        <a href="/Resume.pdf" download className={styles["download-btn"]}>
          <i className="bi bi-download"></i> Download CV
        </a>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className={styles["resume-title"]}>Sumary</h3>

            <div className={styles["resume-item"]}>
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
              <ul>
                <li>Rawalpindi, Punjab, Pakistan</li>
                <li>+92 303 5562974</li>
                <li>talhakhalil974@gmail.com</li>
              </ul>
            </div>

            <h3 className={styles["resume-title"]}>Education</h3>

            <div className={styles["resume-item"]}>
              <h4>Bachelor of Computer Science</h4>
              <h5>2020 - 2024</h5>
              <p>
                <em>Institute of Space and Technology, Islamabad</em>
              </p>
              <p>
                Gained comprehensive knowledge in core computer science
                principles and cutting-edge technologies. Mastered Data
                Structures and Algorithms, while exploring AI, Computer Vision,
                and Big Data. Developed practical skills in Compiler
                Construction, Mobile App Development, and Web Technologies.
                Acquired expertise in Computer Networks and Network Security.
                This diverse education has prepared me to tackle a wide range of
                technological challenges in today's fast-paced tech industry.
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className={styles["resume-title"]}>Professional Experience</h3>

            <div className={styles["resume-item"]}>
              <h4>MERN Stack Intern</h4>
              <h5>Jun 2025 - Sep 2025</h5>
              <p>
                <em>NextPak Agile Solutions, Rawalpindi, Pakistan</em>
              </p>
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

            <div className={styles["resume-item"]}>
              <h4>Frontend Developer</h4>
              <h5>Oct 2025 - Present</h5>
              <p>
                <em>NextPak Agile Solutions, Rawalpindi, Pakistan</em>
              </p>
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

            {/* <div className={styles['resume-item']}>
              <h4>Final Year Project - Legal Insight</h4>
              <h5>2023 - 2024</h5>
              <p><em>Institute of Space Technology, Islamabad, PK</em></p>
              <ul>
                <li>Pioneered the development of a web-based platform aimed at improving the accessibility of legal judgments and court decisions.</li>
                <li>Designed and implemented advanced lawyer profiling features, streamlining the connection between lawyers and potential clients.</li>
                <li>Utilized React.js, CSS, Node.js, Express.js, and SSMS to create a full-stack application.</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
