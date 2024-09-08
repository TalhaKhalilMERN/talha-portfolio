import React from 'react';
import { Link } from 'react-router-dom';
import MyProfile from "./assets/img/MyProfile.jpg";
import styles from './assets/css/main.module.css';
import ProgressBar from './ProgressBar';

function About() {

    return (
        <section id="about" className={`${styles.about} ${styles.section}`}>

            <div className={`container ${styles.container}`} data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">
            <div className="col-md-6">

            <div className="row justify-content-between gy-4">
            <div className="col-lg-5">
            <img src={MyProfile} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-7 about-info">
            <p><strong>Name: </strong> <span>Talha Khalil</span></p>
            <p><strong>Profile: </strong> <span>Full Stack Web Developer</span></p>
            <p><strong>Email: </strong> <span>talhakhalil974@gmail.com</span></p>
            <p><strong>Phone: </strong> <span>+92 303 5562974</span></p>
            </div>
            </div>

            <div className={`${styles['skills-content']}  ${styles['skills-animation']}`}>

            <h5>Skills</h5>

            <ProgressBar skill="REACT.JS" value={90} />
            <ProgressBar skill="NODE.JS" value={90} />
            <ProgressBar skill="EXPRESS.JS" value={80} />
            <ProgressBar skill="HTML & CSS" value={90} />
            <ProgressBar skill="SQL" value={85} />
            <ProgressBar skill="Git/Github" value={70} />

            </div>
            </div>

            <div className="col-md-6">
            <div className={styles['about-me']}>
            <h4>About me</h4>
            <p>
            As a Computer Science graduate, I'm passionate about full-stack web development, with a focus on the MERN stack. My journey blends academic
            knowledge with hands-on experience, including an Android development internship at Apptrick.
            </p>
            <p>
            I've led projects like 'Legal Insight', a web platform for legal services, and 'SafeBus', an Android app for school bus tracking.
            These experiences honed my skills in JavaScript, React.js, Node.js, Express.js, and SQL
            </p>
            <p>
            I'm driven by creating efficient, user-friendly web applications and am excited to bring my fresh perspective and technical skills to innovative projects in the field."
            This shorter version captures the key points about your education, skills, experience, and passion while keeping it concise for a portfolio setting.
            </p>
            </div>
            </div>
            </div>

        </div>

        </section>
);
}

export default About;