import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-modern">
      <div className="container text-center">
        
        <h3 className="mb-3" style={{ fontSize: '24px', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
          Talha Khalil
        </h3>
        
        <p className="mb-4" style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '500px', margin: '0 auto 24px' }}>
          Frontend Developer specializing in building high-performance, modern, and user-centric web applications.
        </p>

        <div className="footer-socials">
          <a 
            href="https://www.facebook.com/share/sRoQaog92N8CyCPq/?mibextid=qi2Omg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn-modern"
            aria-label="Facebook Profile"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a 
            href="https://www.instagram.com/talhakhalil68?igsh=eDNsbm9wMmE3cmt2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn-modern"
            aria-label="Instagram Profile"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/talha-khalil-9415b02a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn-modern"
            aria-label="LinkedIn Profile"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <div style={{ color: 'var(--text-muted)', fontSize: '13px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '24px' }}>
          <p>© {currentYear} Talha Khalil. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
