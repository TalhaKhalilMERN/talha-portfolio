import React from 'react';

function Stats() {
  const statsList = [
    { value: '20+', label: 'Projects Delivered' },
    { value: '2300+', label: 'Hours of Development' },
    { value: '20+', label: 'Technologies Mastered' }
  ];

  return (
    <section id="stats" className="section">
      <div className="container" data-aos="fade-up">
        
        <div className="stats-grid-modern">
          {statsList.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card-modern"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;