import React from 'react';
import bcg from "./assets/img/stats-bg.jpg"
import styles from './assets/css/main.module.css';

function Stat() {
  return (
    <section id="stats" className={`${styles.stats} ${styles.section} ${styles['accent-background']}`}>

      <img src={bcg} alt="" data-aos="fade-in"/>

      <div className={`${styles.container} container position-relative`} data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-3">

          <div className="col-lg-4 col-md-6">
            <div className={`${styles['stats-item']} text-center w-100 h-100`}>
              <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="0" className="purecounter">20+</span>
              <p>Projects Delivered</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className={`${styles['stats-item']} text-center w-100 h-100`}>
              <span data-purecounter-start="0" data-purecounter-end="2300" data-purecounter-duration="0" className="purecounter">2300+</span>
              <p>Hours of Development</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className={`${styles['stats-item']} text-center w-100 h-100`}>
              <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="0" className="purecounter">20+</span>
              <p>Technologies Mastered</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Stat;