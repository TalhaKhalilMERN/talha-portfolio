import React, { useEffect, useState } from 'react';
import styles from './assets/css/main.module.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = activeSection; // Keep track of the current section
  
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });
  
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
  
    window.addEventListener('scroll', handleScrollSpy);
  
    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, [activeSection]);
  
  useEffect(() => {
    const handleScroll = () => {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      
      if (window.scrollY > 100) {
        selectBody.classList.add('scrolled');
        setScrolled(true);
      } else {
        selectBody.classList.remove('scrolled');
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
      window.scrollTo({
        top: section.offsetTop - parseInt(scrollMarginTop, 10),
        behavior: 'smooth',
      });
    }
  
    if (mobileNavActive) {
      setMobileNavActive(false);
      document.body.classList.remove('mobile-nav-active');
    }
  };
  

  // Toggle mobile navigation
  const handleMobileNavToggle = () => {
    setMobileNavActive(!mobileNavActive);
    document.body.classList.toggle('mobile-nav-active');
  };

  return (
    <header id="header" className={`${styles.header} d-flex align-items-center sticky-top ${scrolled ? 'scrolled' : ''}`}>
      <div className={`container-fluid container-xl position-relative d-flex align-items-center justify-content-between`}>
        
        <a href="/" className={`${styles.logo} d-flex align-items-center`}>
          <h1 className={styles.sitename}>DevMERN</h1>
        </a>
        
        <div className={`${mobileNavActive ? `${styles['mobile-nav-active']}` : ''}`}>
          <nav id="navmenu" className={styles.navmenu}>
          <ul>
            <li>
              <a
                href="/"
                className={activeSection === 'hero' ? styles.active : ''}
                onClick={(e) => handleScrollToSection(e, 'hero')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className={activeSection === 'about' ? styles.active : ''}
                onClick={(e) => handleScrollToSection(e, 'about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className={activeSection === 'services' ? styles.active : ''}
                onClick={(e) => handleScrollToSection(e, 'services')}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/"
                className={activeSection === 'stats' ? styles.active : ''}
                onClick={(e) => handleScrollToSection(e, 'stats')}
              >
                Stats
              </a>
            </li>
            <li>
              <a
                href="/"
                className={activeSection === 'contact' ? styles.active : ''}
                onClick={(e) => handleScrollToSection(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
            {/* Mobile nav toggle button */}
            <i 
              className={`d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'} ${styles['mobile-nav-toggle']}`} 
              onClick={handleMobileNavToggle}
            ></i>
          </nav>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
