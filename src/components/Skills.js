import React from 'react';
import TechBadge from './TechBadge';

function Skills() {
  const frontendSkills = [
    { name: 'React', category: 'Frameworks' },
    { name: 'Next.js', category: 'Frameworks' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'Tailwind CSS', category: 'Styling & UI' },
    { name: 'Bootstrap', category: 'Styling & UI' },
    { name: 'Redux', category: 'State Management' },
    { name: 'Zustand', category: 'State Management' },
    { name: 'Vite', category: 'Build Tools' },
    { name: 'Webpack', category: 'Build Tools' },
    { name: 'Firebase', category: 'Backend & Services' },
    { name: 'Supabase', category: 'Backend & Services' },
    { name: 'Stripe', category: 'Payments & APIs' },
    { name: 'Tap Payments', category: 'Payments & APIs' },
    { name: 'Socket.IO', category: 'Real-time & Local' },
    { name: 'i18next', category: 'Internationalization' },
    { name: 'Framer Motion', category: 'Animations' }
  ];

  // Get unique categories in custom ordered sequence
  const categoryOrder = [
    'Languages',
    'Frameworks',
    'State Management',
    'Styling & UI',
    'Backend & Services',
    'Build Tools',
    'Payments & APIs',
    'Real-time & Local',
    'Internationalization',
    'Animations'
  ];
  
  const categories = categoryOrder.filter(cat => 
    frontendSkills.some(skill => skill.category === cat)
  );

  return (
    <section id="skills" className="section">
      <div className="container" data-aos="fade-up">
        
        <div className="section-title">
          <div className="section-badge-row">
            <div className="section-badge-icon skills">
              <i className="bi bi-sliders"></i>
            </div>
            <span className="section-badge-text">Skills</span>
          </div>
          <h2>Technologies I <span className="gradient-use">use</span></h2>
          <p>My technical expertise and toolset for frontend engineering</p>
        </div>

        <div className="skills-grid-modern">
          {categories.map((category, idx) => (
            <div 
              key={idx} 
              className="skill-card-modern" 
              data-aos="fade-up" 
              data-aos-delay={80 * (idx + 1)}
            >
              <h4 className="skill-card-title">{category}</h4>
              <div className="skill-badges-modern">
                {frontendSkills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIdx) => (
                    <TechBadge key={skillIdx} tech={skill.name} />
                  ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
