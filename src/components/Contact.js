import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './assets/css/main.module.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h19h3jv', 'template_cn12cgu', form.current, 'i6T1ZXXgP2G1TQXjC')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
    
    e.target.reset(); 
  };

  return (
    <section id="contact" className={styles.contact}>

      <div className={`container ${styles['section-title']}`} data-aos="fade-up">
        <h2>Contact</h2>
        <p>Get in Touch for Collaboration</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className={styles['info-wrap']} data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className={`${styles['info-item']} d-flex align-items-center`}>
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Rawalpindi, Punjab, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className={`${styles['info-item']} d-flex align-items-center`}>
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+92 303 5562974</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className={`${styles['info-item']} d-flex align-items-center`}>
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>talhakhalil974@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className={styles['php-email-form']} data-aos="fade-up" data-aos-delay="300">
          <div className="row gy-4">
            <div className="col-md-6">
              <input type="text" name="from_name" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 ">
              <input type="email" className="form-control" name="from_email" placeholder="Your Email" required />
            </div>
            <div className="col-md-12">
              <input type="text" className="form-control" name="from_subject" placeholder="Subject" required />
            </div>
            <div className="col-md-12">
              <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
            </div>
            <div className="col-md-12 text-center">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>

      </div>
    </section>
  );
}

export default Contact;
