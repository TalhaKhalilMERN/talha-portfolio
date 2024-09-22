import React from 'react';
import { Link } from 'react-router-dom';
import styles from './assets/css/main.module.css';

function Resume() {
  return (
    <section id="resume" className={`${styles.resume} ${styles.section}`}>

      <div className={`container ${styles['section-title']}`} data-aos="fade-up">
        <h2>Resume</h2>
        <p>My Professional Journey at a Glance</p>
        <a href="/Resume.pdf" download className={styles['download-btn']}>
            <i className="bi bi-download"></i> Download CV</a>
      </div>

      <div className="container">

        <div className="row">

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className={styles['resume-title']}>Sumary</h3>

            <div className={styles['resume-item']}>
              <h4>Talha Khalil</h4>
              <p><em>Dedicated and innovative full-stack web developer with a strong foundation in computer science, specializing in MERN stack development. Committed to creating efficient,
                 user-friendly digital solutions that bridge cutting-edge technology with practical business needs.</em></p>
              <ul>
                <li>Rawalpindi, Punjab, Pakistan</li>
                <li>+92 303 5562974</li>
                <li>talhakhalil974@gmail.com</li>
              </ul>
            </div>

            <h3 className={styles['resume-title']}>Education</h3>

            <div className={styles['resume-item']}>
              <h4>Bachelor of Computer Science</h4>
              <h5>2020 - 2024</h5>
              <p><em>Institute of Space and Technology, Islamabad</em></p>
              <p>Gained comprehensive knowledge in core computer science principles and cutting-edge technologies. 
                Mastered Data Structures and Algorithms, while exploring AI, Computer Vision, and Big Data. Developed practical skills in Compiler Construction, Mobile App Development, and Web Technologies. Acquired expertise in Computer Networks and Network Security. This diverse education
                has prepared me to tackle a wide range of technological challenges in today's fast-paced tech industry.</p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className={styles['resume-title']}>Professional Experience</h3>
            <div className={styles['resume-item']}>
              <h4>Android Developer Internship</h4>
              <h5>June 2023 - August 2023</h5>
              <p><em>Apptrick, Islamabad, PK</em></p>
              <ul>
                <li>Completed a comprehensive 6-week training program, enhancing skills in Android SDK and user interface design.</li>
                <li>Developed multiple Android applications using Kotlin and XML, demonstrating proficiency in modern app development practices.</li>
                <li>Gained hands-on experience in the full mobile app development lifecycle, from concept to deployment.</li>
              </ul>
            </div>
          
            <div className={styles['resume-item']}>
              <h4>Final Year Project - Legal Insight</h4>
              <h5>2023 - 2024</h5>
              <p><em>Institute of Space Technology, Islamabad, PK</em></p>
              <ul>
                <li>Pioneered the development of a web-based platform aimed at improving the accessibility of legal judgments and court decisions.</li>
                <li>Designed and implemented advanced lawyer profiling features, streamlining the connection between lawyers and potential clients.</li>
                <li>Utilized React.js, CSS, Node.js, Express.js, and SSMS to create a full-stack application.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Resume;