import React from 'react';
import TechBadge from './TechBadge';
import '../components/assets/css/Skills.css';

function Skills() {
  const frontendSkills = [
    { name: 'React', category: 'Framework' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Bootstrap', category: 'Styling' },
    { name: 'Redux', category: 'State Management' },
    { name: 'Zustand', category: 'State Management' },
    { name: 'Vite', category: 'Build Tool' },
    { name: 'Webpack', category: 'Build Tool' },
    { name: 'Firebase', category: 'Backend Service' },
    { name: 'Supabase', category: 'Backend Service' },
    { name: 'Stripe', category: 'Payment' },
    { name: 'Tap Payments', category: 'Payment' },
    { name: 'Socket.IO', category: 'Real-time' },
    { name: 'i18next', category: 'Internationalization' },
    { name: 'Framer Motion', category: 'Animation' }
  ];

  const categories = [...new Set(frontendSkills.map(skill => skill.category))];

  return (
    <section id="skills" className="skills-section section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills & Technologies</h2>
        <p>Frontend Development Expertise</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="skills-grid">
          {categories.map((category, idx) => (
            <div key={idx} className="skill-category" data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
              <h4 className="category-title">{category}</h4>
              <div className="skill-badges">
                {frontendSkills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIdx) => (
                    <div key={skillIdx} className="skill-badge-wrapper">
                      <TechBadge tech={skill.name} />
                    </div>
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
