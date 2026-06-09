import React from "react";
import styles from "./assets/css/main.module.css";

function Services() {
  return (
    <section id="services" className={`${styles.services} ${styles.section}`}>
      <div
        className={`container ${styles["section-title"]}`}
        data-aos="fade-up"
      >
        <h2>Services</h2>
        <p>Crafting Modern, Responsive & User-Centric Web Experiences</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className={styles["service-item"]}>
              <div className={styles.icon}>
                <i className="bi bi-code-slash"></i>
              </div>
              <h3>React.js Development</h3>
              <p>
                Build dynamic, high-performance single-page applications using
                React.js with modern hooks, state management, and component
                architecture.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className={styles["service-item"]}>
              <div className={styles.icon}>
                <i className="bi bi-phone"></i>
              </div>
              <h3>Responsive Web Design</h3>
              <p>
                Create pixel-perfect, mobile-first responsive designs that work
                seamlessly across all devices using HTML5, CSS3, and modern
                frameworks.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={styles["service-item"]}>
              <div className={styles.icon}>
                <i className="bi bi-palette"></i>
              </div>
              <h3>UI/UX Implementation</h3>
              <p>
                Transform designs into interactive, accessible user interfaces
                with attention to detail, animations, and smooth user
                experiences.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className={styles["service-item"]}>
              <div className={styles.icon}>
                <i className="bi bi-lightning-charge"></i>
              </div>
              <h3>Performance Optimization</h3>
              <p>
                Optimize web applications for speed and performance through code
                splitting, lazy loading, and best practices for faster load
                times.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className={styles["service-item"]}>
              <div className={styles.icon}>
                <i className="bi bi-plug"></i>
              </div>
              <h3>API Integration</h3>
              <p>
                Integrate third-party APIs and RESTful services into frontend
                applications, handling data fetching, state management, and
                error handling.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className={styles["service-item"]}>
              <div className={styles.icon}>
                <i className="bi bi-arrow-repeat"></i>
              </div>
              <h3>Website Maintenance & Updates</h3>
              <p>
                Provide ongoing support, bug fixes, feature enhancements, and
                regular updates to keep your web applications running smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
