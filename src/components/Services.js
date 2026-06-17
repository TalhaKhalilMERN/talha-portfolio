import React from "react";

function Services() {
  const servicesList = [
    {
      icon: 'bi-code-slash',
      title: 'React.js & Next.js Dev',
      description: 'Build dynamic, high-performance single-page and server-side applications using React.js and Next.js with modern hooks, state management, and routing.'
    },
    {
      icon: 'bi-phone',
      title: 'Responsive Web Design',
      description: 'Create pixel-perfect, mobile-first responsive designs that work seamlessly across all screen sizes and resolutions using HTML5, CSS3, and Tailwind CSS.'
    },
    {
      icon: 'bi-palette',
      title: 'UI/UX Implementation',
      description: 'Transform complex designs (Figma, Adobe XD) into interactive, responsive, and accessible user interfaces with smooth micro-animations and layouts.'
    },
    {
      icon: 'bi-lightning-charge',
      title: 'Performance Optimization',
      description: 'Optimize web apps for speed, SEO, and responsiveness through bundle splitting, dynamic loading, asset optimization, and rendering best practices.'
    },
    {
      icon: 'bi-plug',
      title: 'API & Gateway Integration',
      description: 'Integrate third-party API gateways, payment systems (Stripe, Tap Payments), databases (Firestore, Supabase), and RESTful services with strict validation.'
    },
    {
      icon: 'bi-arrow-repeat',
      title: 'Support & Maintenance',
      description: 'Provide ongoing support, bug diagnostics and resolutions, performance enhancements, and system updates to keep your web applications secure.'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container" data-aos="fade-up">
        
        <div className="section-title">
          <div className="section-badge-row">
            <div className="section-badge-icon services">
              <i className="bi bi-code-slash"></i>
            </div>
            <span className="section-badge-text">Services</span>
          </div>
          <h2>Services I <span className="gradient-provide">provide</span></h2>
          <p>Crafting modern, scalable & user-centric web experiences</p>
        </div>

        <div className="services-grid-modern">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="service-card-modern"
              data-aos="fade-up"
              data-aos-delay={80 * (index + 1)}
            >
              <div className="service-icon-modern">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
