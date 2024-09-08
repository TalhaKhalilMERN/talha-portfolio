import React from 'react';
import { Link } from 'react-router-dom';
import styles from './assets/css/main.module.css';

function Services() {
  return (
    <section id="services" className={`${styles.services} ${styles.section}`}>

      <div className={`container ${styles['section-title']}`} data-aos="fade-up">
        <h2>Services</h2>
        <p>Elevating Web Presence with End-to-End Expertise</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className={styles['service-item']}>
              <div className={styles.icon}>
                <i className="bi bi-activity"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Full-Stack Web Development</h3>
              </a>
              <p>Develop full-stack applications using React.js for the frontend and Node.js/Express
                 for the backend, integrated with SQL and MongoDB databases.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className={styles['service-item']}>
              <div className={styles.icon}>
                <i className="bi bi-broadcast"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Frontend Development</h3>
              </a>
              <p>Create responsive, user-friendly interfaces using React.js, HTML,
                 CSS, and Bootstrap. Focus on delivering intuitive user experiences.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className={styles['service-item']}>
              <div className={styles.icon}>
                <i className="bi bi-easel"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Backend Development</h3>
              </a>
              <p>Build robust server-side applications and APIs using Node.js and Express. Handle business logic, data processing,
                 and integration with SQL databases.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className={styles['service-item']}>
              <div className={styles.icon}>
                <i className="bi bi-bounding-box-circles"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Database Design & Management</h3>
              </a>
              <p>Design, implement, and manage SQL and MongoDB databases. Optimize database performance and ensure secure data storage</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className={styles['service-item']}>
              <div className={styles.icon}>
                <i className="bi bi-calendar4-week"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>API Development & Integration</h3>
              </a>
              <p>Develop and integrate RESTful APIs, enabling seamless communication between
                 frontend and backend services.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className={styles['service-item']}>
              <div className={styles.icon}>
                <i className="bi bi-chat-square-text"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Website Deployment & Maintenance</h3>
              </a>
              <p>Deploy web applications to cloud platforms (e.g., Heroku, AWS) and provide ongoing
                 maintenance, updates, and optimizations.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;