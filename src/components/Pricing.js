import React from 'react';
import { Link } from 'react-router-dom';
import styles from './assets/css/main.module.css';

function Pricing() {
  return (
    <section id="pricing" className={`${styles.pricing} ${styles.section}`}>
    
    <div className={`container ${styles['section-title']}`} data-aos="fade-up">
      <h2>Pricing</h2>
      <p>Transparent Rates for Quality Web Development Services</p>
    </div>
  
    <div className="container" data-aos="fade-up" data-aos-delay="100">
  
      <div className="row gy-4 gx-lg-5">
  
        <div className="col-lg-6">
          <div className={`${styles['pricing-item']} d-flex justify-content-between`}>
            <h3>Basic Website (Static)</h3>
            <h4>$500+</h4>
          </div>
        </div>
  
        <div className="col-lg-6">
          <div className={`${styles['pricing-item']} d-flex justify-content-between`}>
            <h3>Dynamic Website (MERN Stack)</h3>
            <h4>$1500+</h4>
          </div>
        </div>
  
        <div className="col-lg-6">
          <div className={`${styles['pricing-item']} d-flex justify-content-between`}>
            <h3>E-commerce Website</h3>
            <h4>$2000+</h4>
          </div>
        </div>
  
        <div className="col-lg-6">
          <div className={`${styles['pricing-item']} d-flex justify-content-between`}>
            <h3>Custom Web Application</h3>
            <h4>$3000+</h4>
          </div>
        </div>
  
        <div className="col-lg-6">
          <div className={`${styles['pricing-item']} d-flex justify-content-between`}>
            <h3>API Development</h3>
            <h4>$1000+</h4>
          </div>
        </div>
  
        <div className="col-lg-6">
          <div className={`${styles['pricing-item']} d-flex justify-content-between`}>
            <h3>Website Maintenance (Monthly)</h3>
            <h4>$200+</h4>
          </div>
        </div>
  
      </div>
  
    </div>
  
    <div className="container mt-4" data-aos="fade-up">
      <p className="text-center">
        Note: Prices are starting points and may vary based on project complexity and specific requirements. 
        Please contact me for a personalized quote tailored to your project needs.
      </p>
    </div>
  
  </section>
  );
}

export default Pricing;