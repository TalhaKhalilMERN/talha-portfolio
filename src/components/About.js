import React from "react";
import MyProfile from "./assets/img/MyProfile.jpg";
import styles from "./assets/css/main.module.css";

function About() {
  return (
    <section id="about" className={`${styles.about} ${styles.section}`}>
      <div
        className={`container ${styles.container}`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row gy-4">
          {/* Left Column - Image and Bio */}
          <div className="col-lg-4" data-aos="fade-right">
            <div>
              <img
                src={MyProfile}
                className="img-fluid rounded-3 mb-4"
                alt="Talha Khalil"
                style={{ width: "100%", maxWidth: "100%" }}
              />

              <div
                className="about-info text-start"
                style={{
                  background: "#F8FAFC",
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  width: "100%",
                }}
              >
                <p style={{ marginBottom: "12px", fontSize: "14px" }}>
                  <strong style={{ color: "#0f172a", fontWeight: "600" }}>
                    Name:
                  </strong>{" "}
                  <span style={{ color: "#64748b" }}>Talha Khalil</span>
                </p>
                <p style={{ marginBottom: "12px", fontSize: "14px" }}>
                  <strong style={{ color: "#0f172a", fontWeight: "600" }}>
                    Role:
                  </strong>{" "}
                  <span style={{ color: "#64748b" }}>Frontend Developer</span>
                </p>
                <p style={{ marginBottom: "12px", fontSize: "14px" }}>
                  <strong style={{ color: "#0f172a", fontWeight: "600" }}>
                    Email:
                  </strong>{" "}
                  <span style={{ color: "#64748b" }}>
                    talhakhalil974@gmail.com
                  </span>
                </p>
                <p style={{ marginBottom: "0", fontSize: "14px" }}>
                  <strong style={{ color: "#0f172a", fontWeight: "600" }}>
                    Phone:
                  </strong>{" "}
                  <span style={{ color: "#64748b" }}>+92 303 5562974</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - About Me Content */}
          <div className="col-lg-8" data-aos="fade-left">
            <div className={styles["about-me"]}>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "24px",
                  color: "#0f172a",
                }}
              >
                About Me
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#475569",
                  marginBottom: "20px",
                }}
              >
                Frontend Developer with 1+ year of professional experience
                building modern, responsive web applications using React,
                Next.js, and TypeScript. As a Computer Science graduate, my
                journey in web development has been shaped by hands-on
                experience across diverse production projects — from enterprise
                POS systems and restaurant management platforms to
                government-grade travel authorization systems.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#475569",
                  marginBottom: "20px",
                }}
              >
                I've contributed to production applications serving multiple
                user roles, implemented real-time collaboration features, and
                worked with complex state management architectures. My
                experience includes integrating Firebase, Supabase, Stripe, and
                Socket.IO, as well as building pixel-perfect, responsive
                interfaces from Figma designs with full internationalization
                support.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#475569",
                  marginBottom: "20px",
                }}
              >
                What drives me is creating intuitive user experiences that solve
                real business problems. Whether it's optimizing authentication
                flows, implementing advanced data tables with search and
                filtering, or developing reusable component libraries, I focus
                on writing clean, maintainable, and scalable code.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#475569",
                  marginBottom: "0",
                }}
              >
                Currently seeking opportunities to contribute to innovative
                frontend products where I can leverage my expertise in the React
                ecosystem, modern frontend architecture, and collaborative
                development practices to build exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
