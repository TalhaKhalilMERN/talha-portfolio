import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScrollSpy = () => {
      if (location.pathname !== '/') return;
      const sections = document.querySelectorAll('section');
      let currentSection = activeSection;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Give a bit of buffer for active state detection
        if (rect.top <= 140 && rect.bottom >= 140) {
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
  }, [activeSection, location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
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
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }
  };

  const dockItems = [
    { id: 'hero', label: 'Home', icon: 'bi-house-door' },
    { id: 'about', label: 'About', icon: 'bi-person' },
    { id: 'resume', label: 'Resume', icon: 'bi-briefcase' },
    { id: 'skills', label: 'Skills', icon: 'bi-sliders' },
    { id: 'portfolio', label: 'Portfolio', icon: 'bi-grid' },
    { id: 'services', label: 'Services', icon: 'bi-code-slash' },
    { id: 'contact', label: 'Contact', icon: 'bi-envelope' }
  ];

  return (
    <>
      {/* Top Navbar: Brand & Status only */}
      <header className={`header-modern ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo-modern">
            Talha Khalil
          </Link>
          
          <div className="status-badge">
            <span className="dot"></span>
            <span>Available for projects</span>
          </div>
        </div>
      </header>

      {/* Floating Bottom Navigation Dock */}
      <div className="bottom-dock">
        {/* Dock Logo */}
        <div 
          className="dock-logo-container" 
          onClick={(e) => handleScrollToSection(e, 'hero')}
          title="Scroll to Top"
        >
          TK
        </div>
        
        <div className="dock-divider"></div>

        {/* Dock Items */}
        {dockItems.map((item) => (
          <div key={item.id} className="dock-item-wrapper">
            <button
              className={`dock-btn ${activeSection === item.id && location.pathname === '/' ? 'active' : ''}`}
              onClick={(e) => handleScrollToSection(e, item.id)}
              aria-label={item.label}
            >
              <i className={`bi ${item.icon}`}></i>
            </button>
            <span className="dock-tooltip">{item.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Header;
