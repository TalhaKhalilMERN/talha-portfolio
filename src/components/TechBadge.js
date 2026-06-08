import React from 'react';

const techLogoMap = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React 18': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React 19': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React 19.2': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React 16': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Next.js 14': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Node.js 20': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Tailwind CSS 4.2': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
  'Vite 7.3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
  'Webpack': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
  'Prisma': 'https://www.vectorlogo.zone/logos/prismaio/prismaio-icon.svg',
  'Supabase': 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg',
  'Stripe': 'https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg',
  'Socket.IO': 'https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg',
  'Algolia': 'https://www.vectorlogo.zone/logos/algolia/algolia-icon.svg',
  'i18next': 'https://www.vectorlogo.zone/logos/i18next/i18next-icon.svg',
  'Framer Motion': 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg',
  'Sharp': 'https://cdn.jsdelivr.net/gh/lovell/sharp@main/docs/image/sharp-logo.svg',
  'React Helmet': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Zustand': null, // Will use text badge
  'Zustand 5.0': null,
  'Tap Payments': null, // Will use emoji
  'SendGrid': 'https://www.vectorlogo.zone/logos/sendgrid/sendgrid-icon.svg'
};

function TechBadge({ tech, variant = 'light' }) {
  const logoUrl = techLogoMap[tech];
  
  const badgeClass = variant === 'dark' 
    ? 'tech-badge-dark' 
    : 'tech-badge';

  // Special handling for Zustand
  if (tech.includes('Zustand')) {
    return (
      <span className={`${badgeClass} zustand-badge`}>
        <span className="zustand-icon">Z</span>
        <span>{tech}</span>
      </span>
    );
  }

  // Special handling for Tap Payments
  if (tech.includes('Tap Payments')) {
    return (
      <span className={badgeClass}>
        <span style={{ fontSize: '14px' }}>💳</span>
        <span>{tech}</span>
      </span>
    );
  }

  return (
    <span className={badgeClass}>
      {logoUrl && (
        <img 
          src={logoUrl} 
          alt={tech} 
          width="16" 
          height="16"
          style={{ objectFit: 'contain' }}
          onError={(e) => {
            // Hide image if it fails to load
            e.target.style.display = 'none';
          }}
        />
      )}
      <span>{tech}</span>
    </span>
  );
}

export default TechBadge;
