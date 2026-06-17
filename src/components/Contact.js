import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('service_h19h3jv', 'template_cn12cgu', form.current, 'i6T1ZXXgP2G1TQXjC')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container" data-aos="fade-up">
        
        <div className="section-title">
          <div className="section-badge-row">
            <div className="section-badge-icon contact">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <span className="section-badge-text">Contact</span>
          </div>
          <h2>Let's work <span className="gradient-together">together</span></h2>
          <p>Get in touch for collaborations, opportunities, or questions</p>
        </div>

        <div className="contact-grid-modern">
          {/* Left Column - Contact Details */}
          <div className="contact-info-card" data-aos="fade-right">
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className="contact-info-details">
                <h4>Address</h4>
                <p>Rawalpindi, Pakistan</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="contact-info-details">
                <h4>Call</h4>
                <p>+92 303 5562974</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="contact-info-details">
                <h4>Email</h4>
                <p style={{ fontSize: '13px' }}>talhakhalil974@gmail.com</p>
              </div>
            </div>

          </div>

          {/* Right Column - Form */}
          <div className="contact-form-card" data-aos="fade-left">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                
                <div className="col-md-6 contact-form-group">
                  <input 
                    type="text" 
                    name="from_name" 
                    className="contact-form-control" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                
                <div className="col-md-6 contact-form-group">
                  <input 
                    type="email" 
                    name="from_email" 
                    className="contact-form-control" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>

                <div className="col-md-12 contact-form-group">
                  <input 
                    type="text" 
                    name="from_subject" 
                    className="contact-form-control" 
                    placeholder="Subject" 
                    required 
                  />
                </div>

                <div className="col-md-12 contact-form-group">
                  <textarea 
                    name="message" 
                    className="contact-form-control" 
                    rows="6" 
                    placeholder="Message" 
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center mt-3">
                  <button 
                    type="submit" 
                    disabled={isLoading} 
                    className="btn-premium-primary"
                    style={{ minWidth: '160px', justifyContent: 'center' }}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <i className="bi bi-send-fill" style={{ fontSize: '12px' }}></i>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
