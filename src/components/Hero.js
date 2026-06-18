import React, { useRef, useEffect } from 'react';
import MyProfile from "./assets/img/MyProfile.jpg";
import Typed from 'typed.js';

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Frontend Developer',
        'React.js Developer',
        'Next.js Developer',
        'UI Developer',
        'Web Developer'
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="hero-modern">
      <div className="container d-flex flex-column align-items-center">
        
        {/* Avatar Wrapper with Pulsing Wave */}
        <div className="hero-avatar-wrapper" data-aos="scale-in">
          <img src={MyProfile} alt="Talha Khalil" className="hero-avatar" />
          <div className="hero-wave">👋</div>
        </div>

        {/* Sub-Badge */}
        <div className="hero-badge" data-aos="fade-up" data-aos-delay="100">
          <span>Creating dynamic, user-centric web applications</span>
        </div>

        {/* Title */}
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
          Hi, I am <span style={{ color: '#fff', fontWeight: '800' }}>Talha Khalil</span>
        </h1>

        {/* Subtitle with typing cursor */}
        <div className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
          <span ref={typedRef} style={{ color: 'var(--text-secondary)', fontWeight: '500' }}></span>
        </div>

        {/* Action Buttons */}
        <div className="hero-ctas" data-aos="fade-up" data-aos-delay="400">
          <a href="#contact" onClick={handleScrollToContact} className="btn-premium-primary">
            Let's Talk <i className="bi bi-chat-text-fill" style={{ fontSize: '14px' }}></i>
          </a>
          <a href="/Resume.pdf" download className="btn-premium-secondary">
            Download CV <i className="bi bi-download" style={{ fontSize: '14px' }}></i>
          </a>
        </div>

        {/* Social Grid */}
        <div className="hero-socials" data-aos="fade-up" data-aos-delay="500">
          <a 
            href="https://github.com/TalhaKhalilMERN" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-social-btn"
            aria-label="GitHub Profile"
          >
            <i className="bi bi-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/talha-khalil-9415b02a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-social-btn"
            aria-label="LinkedIn Profile"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;