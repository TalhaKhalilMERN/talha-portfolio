export const projectsData = [
  {
    id: 1,
    slug: 'nextpos',
    name: 'NextPOS',
    tagline: 'Cloud-Based POS & Business Management System',
    domain: 'POS & Retail',
    color: '#3B82F6',
    techStack: ['React', 'Redux', 'Firebase', 'Stripe', 'Node.js'],
    oneLiner: 'Enterprise POS platform with AI insights, FBR tax compliance, and inventory management for Pakistani retail businesses.',
    liveLinks: [
      {
        label: 'Production Platform',
        url: 'https://next-pos-beta.web.app/'
      }
    ],
    overview: 'A production-ready POS and business management system designed for retail businesses in Pakistan. The platform handles sales processing, inventory management, customer analytics, and FBR tax compliance in one unified system. Features include an AI-powered business advisor that provides actionable insights, automated customer segmentation using RFM analysis, and real-time analytics dashboards. The system supports multiple user roles with granular permissions, customizable receipt templates, and comprehensive reporting tools to help businesses make data-driven decisions.',
    features: [
      {
        icon: 'bi-cart-check',
        title: 'Point of Sale Interface',
        description: 'Real-time sales processing with barcode scanning, customer selection, discount application, kiosk mode, and 5 customizable receipt templates with QR/barcode generation.'
      },
      {
        icon: 'bi-box-seam',
        title: 'Inventory Management',
        description: 'Stock tracking, low-stock alerts, category management, and bulk item uploads via CSV with FBR PCT tariff code mapping.'
      },
      {
        icon: 'bi-robot',
        title: 'AI Business Advisor',
        description: 'Conversational AI chatbot providing sales insights, inventory recommendations, and business analytics with session-based chat history.'
      },
      {
        icon: 'bi-people',
        title: 'Customer Segmentation',
        description: 'Automated RFM analysis classifying customers into VIP Regulars, Weekend Shoppers, Occasional, At-Risk, and New Customers with purchase behavior analytics.'
      },
      {
        icon: 'bi-file-earmark-text',
        title: 'FBR Tax Compliance',
        description: 'Pakistan Federal Board of Revenue integration with PCT code search, tax-inclusive/exclusive pricing calculations, and compliant invoice generation.'
      },
      {
        icon: 'bi-graph-up',
        title: 'Analytics Dashboard',
        description: 'Real-time charts for weekly/monthly/daily sales, profit-loss tracking, peak hour analysis, and staff performance monitoring.'
      }
    ],
    contributions: [
      'Owned the full POS interface including sales flow, cart management, discount logic, and kiosk mode.',
      'Built a real-time analytics dashboard with daily, weekly, and monthly sales charts, profit tracking, and peak hour analysis.',
      'Designed the customer segmentation module with automated RFM classification and purchase behavior insights.',
      'Delivered the complete subscription and billing UI with Stripe.js integration for plan selection, card management, and invoice history.'
    ],
    techStackDetailed: {
      frontend: ['React 16', 'Redux + Redux Thunk', 'React Router', 'Reactstrap', 'Bootstrap 4'],
      backend: ['Node.js REST API', 'Firebase Hosting', 'Firebase Firestore'],
      integrations: ['Stripe', 'Chart.js', 'ApexCharts', 'Recharts', 'jsPDF', 'jsbarcode', 'qrcode']
    },
    scale: [
      { label: 'User Roles', value: '10+' },
      { label: 'Receipt Templates', value: '5' },
      { label: 'Permission Types', value: '15+' },
      { label: 'Integrations', value: 'Stripe, Firebase, OpenAI' }
    ]
  },
  {
    id: 2,
    slug: 'nexteats',
    name: 'Nexteats',
    tagline: 'Multi-Role Cloud Restaurant Management Platform',
    domain: 'Restaurant SaaS',
    color: '#F97316',
    techStack: ['React', 'Firebase', 'Stripe', 'Algolia', 'Node.js'],
    oneLiner: 'Full-featured restaurant SaaS with real-time order tracking, QR dine-in ordering, and multi-role staff management.',
    liveLinks: [
      {
        label: 'Customer Portal',
        url: 'https://nexteats-staging.web.app/'
      },
      {
        label: 'Admin Portal',
        url: 'https://nexteats-staging-admin.web.app/auth/login'
      }
    ],
    overview: 'A comprehensive cloud-based restaurant management SaaS platform supporting multiple restaurants, order types (dine-in, pickup, delivery), and staff roles. The system provides real-time order tracking with live status updates, QR code-based contactless ordering for dine-in customers, and Algolia-powered search across all restaurant data. Features include role-based dashboards for super admins, restaurant admins, kitchen staff, waiters, drivers, and customers, along with integrated payment processing through Stripe and PayPal. The platform includes detailed analytics for revenue tracking, best-selling items, peak hours analysis, and customer demographics.',
    features: [
      {
        icon: 'bi-person-badge',
        title: 'Multi-Role System',
        description: 'Super Admin, Restaurant Admin, Kitchen Staff (Cook/Waiter/Admin), Drivers, and Customers — each with granular role-based permissions and custom dashboards.'
      },
      {
        icon: 'bi-clock-history',
        title: 'Real-Time Order Management',
        description: 'Live order tracking with status transitions (pending → processing → served → completed), waiter-specific order views, and real-time updates.'
      },
      {
        icon: 'bi-qr-code',
        title: 'QR Code Dine-In Ordering',
        description: 'Table-specific QR codes for contactless customer ordering with table assignment and waiter-to-table mapping.'
      },
      {
        icon: 'bi-credit-card',
        title: 'Payment Processing',
        description: 'Stripe and PayPal integration with refund capabilities, multiple payment methods, and subscription management for restaurant access tiers.'
      },
      {
        icon: 'bi-search',
        title: 'Algolia Search',
        description: 'Real-time search across users, orders, items, categories, menus, labels, add-ons, and offers with automatic sync.'
      },
      {
        icon: 'bi-bar-chart',
        title: 'Analytics & Reporting',
        description: 'Revenue tracking, best/worst sellers, peak hours, customer demographics, and visit tracking with time-series aggregation.'
      }
    ],
    contributions: [
      'Built the complete waiter role experience including order views, menu browsing, and table management UI.',
      'Developed the order lifecycle UI with real-time status transitions and role-based screen rendering.',
      'Implemented the payment collection flow for waiters with receipt generation and table clearance on checkout.'
    ],
    techStackDetailed: {
      frontend: ['React 18', 'Redux', 'React Router', 'Reactstrap', 'Bootstrap 4', 'Ant Design'],
      backend: ['Firebase Cloud Functions', 'Express.js', 'Node.js 20', 'Firebase Firestore', 'Firebase Auth'],
      integrations: ['Algolia', 'Stripe', 'PayPal', 'Firebase Storage', 'FCM', 'Nodemailer', 'Chart.js', 'Sentry']
    },
    scale: [
      { label: 'User Roles', value: '10+' },
      { label: 'Order Types', value: '3' },
      { label: 'Search Indices', value: '8+' },
      { label: 'Integrations', value: 'Firebase, Stripe, PayPal, Algolia' }
    ]
  },
  {
    id: 3,
    slug: 'uk-eta',
    name: 'UK ETA Platform',
    tagline: 'Government-Grade Travel Authorization System',
    domain: 'Gov-Tech',
    color: '#8B5CF6',
    techStack: ['React', 'TypeScript', 'Firebase', 'Tap Payments', 'SendGrid'],
    oneLiner: 'Secure multi-traveler ETA application platform with OTP verification, document uploads, and enterprise-level security middleware.',
    liveLinks: [
      {
        label: 'Live Website',
        url: 'https://ukev.com/'
      }
    ],
    overview: 'A secure web application for processing UK Electronic Travel Authorization (ETA) applications, enabling travelers from eligible countries to apply for 2-year, multiple-entry travel authorizations online. The platform supports up to 50 travelers per application with comprehensive document upload capabilities, step-by-step form guidance, and inline validation. Built with government-grade security featuring 6 layers of protection including encryption, HMAC verification, XSS/SQL injection detection, and rate limiting. The system includes OTP-based email verification, draft save functionality, integrated payment processing via Tap Payments, and an admin dashboard with Algolia-powered search for application management.',
    features: [
      {
        icon: 'bi-people-fill',
        title: 'Multi-Traveler Forms',
        description: 'Accordion-based application interface supporting up to 50 travelers per submission with per-traveler document uploads and validation.'
      },
      {
        icon: 'bi-shield-check',
        title: 'OTP Email Verification',
        description: 'Secure email verification with expiry-based OTP codes required before form submission, powered by SendGrid.'
      },
      {
        icon: 'bi-lock-fill',
        title: 'Enterprise Security',
        description: '6-layer security including request encryption, HMAC signature verification, XSS/SQL injection detection, DOMPurify sanitization, and rate limiting.'
      },
      {
        icon: 'bi-credit-card-2-front',
        title: 'Tap Payments Integration',
        description: 'Secure payment processing with charge creation, webhook signature verification, and payment status redirect handling.'
      },
      {
        icon: 'bi-speedometer2',
        title: 'Admin Dashboard',
        description: 'Application management with real-time Algolia-powered search, traveler status updates, and email log tracking.'
      },
      {
        icon: 'bi-save',
        title: 'Draft Save & Resume',
        description: 'Automatic draft saving to localStorage with incomplete application recovery flow.'
      }
    ],
    contributions: [
      'Designed and built the multi-traveler application form with step-by-step guidance, inline validation, and document upload UI.',
      'Implemented OTP email verification UI with expiry countdown and resend functionality.',
      'Built the admin dashboard UI for application management with Algolia-powered search and status filtering.',
      'Delivered the complete payment UI using the Tap Payments frontend SDK with redirect and confirmation handling.'
    ],
    techStackDetailed: {
      frontend: ['React 18', 'TypeScript', 'Vite', 'React Router DOM', 'Shadcn/UI', 'Radix UI', 'Tailwind CSS'],
      backend: ['Firebase Cloud Functions', 'Node.js 20', 'Express.js', 'Cloud Firestore', 'Firebase Hosting'],
      integrations: ['Tap Payments API', 'SendGrid', 'Algolia', 'reCAPTCHA Enterprise', 'TanStack React Query', 'Zod']
    },
    scale: [
      { label: 'Application Pages', value: '14' },
      { label: 'Security Layers', value: '6' },
      { label: 'Max Travelers', value: '50' },
      { label: 'Integrations', value: 'Firebase, Tap Payments, SendGrid, Algolia' }
    ]
  },
  {
    id: 4,
    slug: 'nextsprint',
    name: 'NextSprint',
    tagline: 'Real-Time Collaborative Project Management Tool',
    domain: 'Productivity',
    color: '#10B981',
    techStack: ['Next.js', 'TypeScript', 'Socket.IO', 'Prisma', 'Stripe'],
    oneLiner: 'Full-stack Kanban board with live collaboration, drag-and-drop, AI assistant, and multi-organization workspace management.',
    overview: 'A full-featured Kanban-style project management platform built for teams and organizations, modeled after Trello with enhanced capabilities. The platform features real-time collaboration through Socket.IO, allowing multiple users to work simultaneously on boards with instant updates. Includes comprehensive card management with rich text descriptions, file attachments, comments, checklists, labels, priorities, due dates, and member assignments. The system supports multi-organization workspaces with Clerk authentication, role-based access control, and subscription-based board limits. Features an integrated AI assistant powered by OpenAI for task management support, along with Unsplash integration for custom board backgrounds.',
    features: [
      {
        icon: 'bi-broadcast',
        title: 'Real-Time Collaboration',
        description: 'Socket.IO client integration for live board updates, card changes, and list reordering across multiple concurrent users.'
      },
      {
        icon: 'bi-card-checklist',
        title: 'Advanced Card Management',
        description: 'Rich descriptions (Quill editor), file attachments, comments, checklists, labels, priorities, due dates, and member assignments.'
      },
      {
        icon: 'bi-building',
        title: 'Multi-Organization Workspaces',
        description: 'Clerk-powered authentication with organization-based data isolation, role-based access, and board limits per subscription tier.'
      },
      {
        icon: 'bi-arrows-move',
        title: 'Drag & Drop',
        description: 'Smooth list and card reordering using @hello-pangea/dnd with optimistic UI updates and debounced mutations.'
      },
      {
        icon: 'bi-chat-dots',
        title: 'AI Chat Assistant',
        description: 'OpenAI-powered task management assistant integrated into the board interface.'
      },
      {
        icon: 'bi-star',
        title: 'Stripe Subscriptions',
        description: 'Free tier (limited boards) and Pro tier (unlimited boards) with subscription management.'
      }
    ],
    contributions: [
      'Built the full Kanban board UI with drag-and-drop lists and cards, real-time updates via Socket.IO client, and optimistic state management.',
      'Developed the card detail experience including rich text editing, checklists, file attachments, labels, due dates, and member assignments.',
      'Implemented multi-organization workspace UI with Clerk authentication and subscription-gated board access.'
    ],
    techStackDetailed: {
      frontend: ['Next.js 14 (App Router)', 'React 18', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Radix UI'],
      backend: ['Next.js API Routes', 'Express.js', 'MySQL', 'Prisma ORM', 'Clerk Auth'],
      integrations: ['Socket.IO', 'Stripe', 'Firebase Storage', 'OpenAI API', 'Unsplash API', 'Nodemailer', 'Sentry']
    },
    scale: [
      { label: 'Subscription Tiers', value: '2' },
      { label: 'Organization Support', value: 'Multi-Org' },
      { label: 'Real-time Features', value: 'Socket.IO' },
      { label: 'Integrations', value: 'Clerk, Stripe, Firebase, OpenAI' }
    ]
  },
  {
    id: 5,
    slug: 'fundflow',
    name: 'FundFlow',
    tagline: 'Dual-Sided Funding Marketplace Platform',
    domain: 'Fintech',
    color: '#EF4444',
    techStack: ['React', 'TypeScript', 'Supabase', 'Redux', 'Stripe'],
    oneLiner: 'Marketplace connecting businesses and investors with real-time chat, subscription tiers, and offer management workflows.',
    liveLinks: [
      {
        label: 'Funder Dashboard',
        url: 'https://funding-staging-platform.web.app/funder/dashboard'
      }
    ],
    overview: 'A dual-sided marketplace platform connecting businesses seeking funding with potential investors. The platform features completely separate user experiences for businesses and funders, each with custom dashboards, workflows, and permissions. Businesses can create verified profiles, upload documentation, and receive funding offers, while funders can browse businesses, send offers, and manage their investment portfolio. The system includes real-time chat with file sharing capabilities, media previews, read receipts, and online presence indicators powered by Supabase Realtime. Features subscription-based access tiers with offer limits, advanced search and filtering, and integrated Stripe payment processing for subscription management.',
    features: [
      {
        icon: 'bi-person-workspace',
        title: 'Dual Role System',
        description: 'Completely separate dashboards, workflows, and permissions for Business users and Funder users with role-based route protection.'
      },
      {
        icon: 'bi-chat-left-text',
        title: 'Real-Time Chat',
        description: 'Full-featured messaging with file attachments (images, videos, documents), media viewer, read receipts, online presence indicators, and typing status via Supabase Realtime.'
      },
      {
        icon: 'bi-file-earmark-check',
        title: 'Offer Management',
        description: 'Funders can send funding offers, track status (pending/accepted/declined/funded), schedule calls, and view full offer history.'
      },
      {
        icon: 'bi-patch-check',
        title: 'Business Verification',
        description: 'Document upload, verification status tracking, profile completion indicators, and company metrics display.'
      },
      {
        icon: 'bi-trophy',
        title: 'Subscription Tiers',
        description: 'Pro/Premium plans with monthly/annual billing, Stripe integration, offer limit enforcement, and subscription-based feature gating.'
      },
      {
        icon: 'bi-funnel',
        title: 'Advanced Search',
        description: 'Filter businesses by industry, funding needs, location, and verification status with debounced queries.'
      }
    ],
    contributions: [
      'Built separate dashboard experiences for Business and Funder user roles with distinct workflows and navigation.',
      'Developed the real-time chat UI with file sharing, media previews, read receipts, and online presence indicators using Supabase Realtime.',
      'Delivered the offer management workflow UI — sending, tracking, accepting, and declining funding offers.',
      'Implemented subscription and billing UI with Stripe.js for plan upgrades, payment methods, and cancellation flows.'
    ],
    techStackDetailed: {
      frontend: ['React 18', 'TypeScript', 'Vite', 'Radix UI', 'Shadcn/UI', 'Tailwind CSS'],
      backend: ['Supabase (PostgreSQL + Realtime)', 'Supabase Auth'],
      integrations: ['Stripe', 'TanStack React Query v5', 'Redux Toolkit', 'Recharts', 'React Hook Form', 'Yup/Zod']
    },
    scale: [
      { label: 'User Roles', value: '2' },
      { label: 'Dashboard Types', value: '2' },
      { label: 'Subscription Plans', value: '2' },
      { label: 'Integrations', value: 'Supabase, Stripe, Redux' }
    ]
  },
  {
    id: 6,
    slug: 'yooit',
    name: 'Wais Property',
    tagline: 'Full-Featured Real Estate Marketplace',
    domain: 'Real Estate',
    color: '#0EA5E9',
    techStack: ['React 19', 'TypeScript', 'Firebase', 'Stripe', 'Zustand'],
    oneLiner: 'Property listing platform with subscription plans, advanced search, service provider directory, and admin dashboard.',
    liveLinks: [
      {
        label: 'Live Website',
        url: 'https://wais-property.web.app/'
      }
    ],
    overview: 'A comprehensive real estate marketplace platform for property listings, rentals, sales, and service provider management. The platform serves property owners, buyers, renters, service providers, and administrators with a subscription-based listing system. Features include a 5-step property creation wizard with photo uploads and location mapping, advanced search with filters for location, price range, property type, and listing category. The system includes a service provider directory for contractors and agents, subscription plans with quota management for listing limits, and one-time add-ons for additional photos. Includes a full admin control panel for managing users, listings, payments, subscriptions, and platform activity, along with automated email notifications for property alerts.',
    features: [
      {
        icon: 'bi-house-door',
        title: 'Property Listings',
        description: 'Create, edit, delete listings with photo uploads, pricing, location, and status tracking (active/pending/rejected) via a 5-step creation wizard.'
      },
      {
        icon: 'bi-wallet2',
        title: 'Subscription & Quota System',
        description: 'Stripe-integrated plans with quota management (max properties, photos per ad), one-time photo add-ons, and card management.'
      },
      {
        icon: 'bi-search-heart',
        title: 'Advanced Search',
        description: 'Debounced search with filters by location, price range, property type (detached, semi-detached, terraced, etc.), and listing type (buy/rent).'
      },
      {
        icon: 'bi-tools',
        title: 'Service Provider Directory',
        description: 'Marketplace for contractors, agents, and providers with categories, profiles, ratings, and contact management.'
      },
      {
        icon: 'bi-gear',
        title: 'Admin Dashboard',
        description: 'Comprehensive panel for managing users, listings, services, payments, subscriptions, and activity logs with role-based access.'
      },
      {
        icon: 'bi-bell',
        title: 'Property Alerts',
        description: 'Email notification system for users when new properties matching their saved criteria are listed.'
      }
    ],
    contributions: [
      'Built the full property listing flow including a 5-step creation wizard with photo uploads, location input, and live preview.',
      'Developed advanced property search UI with filters for location, price range, type, and listing category.',
      'Implemented subscription UI with Stripe.js for plan selection, quota tracking, and one-time add-ons.',
      'Delivered the admin panel UI for managing users, listings, payments, and platform activity.'
    ],
    techStackDetailed: {
      frontend: ['React 19.2', 'TypeScript', 'Vite 7.3', 'Tailwind CSS 4.2', 'Shadcn/UI', 'Radix UI'],
      backend: ['Firebase (Firestore, Auth, Storage, Functions)', 'Zustand 5.0'],
      integrations: ['Stripe', 'TanStack React Query 5.83', 'React Hook Form 7.71', 'Zod', 'Recharts']
    },
    scale: [
      { label: 'Application Pages', value: '26' },
      { label: 'User Roles', value: '5' },
      { label: 'Creation Steps', value: '5' },
      { label: 'Integrations', value: 'Firebase, Stripe, Zustand' }
    ]
  },
  {
    id: 7,
    slug: 'elaws',
    name: 'E-Laws',
    tagline: 'Swiss Legislative Management System',
    domain: 'Gov-Tech',
    color: '#DC2626',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'i18next'],
    oneLiner: 'Pixel-perfect Swiss legislative platform with multi-language support, complex data tables, and a hierarchical law structure viewer.',
    overview: 'A modern web application for accessing and managing the Swiss legislative system, built to pixel-perfect Figma specifications. The platform provides administrators with tools to manage users, data sources, scraping jobs, and sync settings, while offering a comprehensive structure viewer for navigating Swiss laws hierarchically. Built with full internationalization supporting English, French, German, and Italian — reflecting Switzerland\'s four official languages.',
    features: [
      {
        icon: 'bi-layout-text-sidebar',
        title: 'Legislative Structure Viewer',
        description: 'Interactive hierarchical browser for Swiss laws with node tree visualization, version management, and nested navigation across legislative levels.'
      },
      {
        icon: 'bi-people',
        title: 'User Management System',
        description: 'Complete CRUD operations with user list, detail views, role management, activation/deactivation, and password reset flows.'
      },
      {
        icon: 'bi-translate',
        title: 'Multi-Language Support',
        description: 'Full internationalization across English, French, German, and Italian — matching Switzerland\'s four official languages.'
      },
      {
        icon: 'bi-table',
        title: 'Advanced Data Tables',
        description: 'Search, filtering, sorting, pagination, bulk selection, CSV export with column selection, and skeleton loading states.'
      },
      {
        icon: 'bi-shield-lock',
        title: 'Authentication & Authorization',
        description: 'JWT-based auth with automatic token refresh via Axios interceptors, request queuing during refresh, and persistent session management.'
      },
      {
        icon: 'bi-palette',
        title: 'Pixel-Perfect UI',
        description: 'Meticulously implemented to match Figma designs with exact spacing, typography, color palette, light/dark theme switching, and collapsible sidebar layout.'
      }
    ],
    contributions: [
      'Delivered pixel-perfect UI implementation across all screens, faithfully translating Figma designs into production-ready React components.',
      'Built the legislative structure viewer with hierarchical node tree navigation, version toolbar, and multi-level law browsing.',
      'Developed advanced data tables with search, filtering, sorting, pagination, bulk actions, and CSV export.',
      'Implemented full multi-language support across 4 languages with i18next, including language detection and complete translation coverage.'
    ],
    techStackDetailed: {
      frontend: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Shadcn/UI', 'Zustand', 'React Router v6', 'i18next'],
      backend: ['Firebase Hosting', 'REST API (external)'],
      integrations: ['Axios', 'React Hook Form', 'Zod', 'Lucide React', 'Vitest']
    }
  },
  {
    id: 8,
    slug: 'amigoal',
    name: 'Amigoal',
    tagline: 'Football Club Management SaaS — Auth Optimization',
    domain: 'Sports SaaS',
    secondaryLabel: 'Contribution',
    color: '#16A34A',
    techStack: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    oneLiner: 'Contributed auth flow optimization and UX audit to a large-scale football club management platform with 14 user roles and AI-powered features.',
    liveLinks: [
      {
        label: 'Live Website',
        url: 'https://amigoal--host-only.us-east4.hosted.app/en'
      }
    ],
    overview: 'Amigoal is a comprehensive SaaS platform for modern football club management, serving 14 distinct user roles including coaches, players, parents, sponsors, scouts, and federation staff. My contribution focused on diagnosing and resolving a critical authentication race condition where users were incorrectly redirected while profile data was still loading from Firestore. I also conducted a full audit of the login system, documenting UX issues across the complex multi-role authentication flow and reporting findings to the core team.',
    features: [
      {
        icon: 'bi-diagram-3',
        title: 'Multi-Role Architecture',
        description: '14 distinct user roles each with custom dashboards, permissions, and navigation — from Club Admin and Coach to Scout, Sponsor, and Federation Staff.'
      },
      {
        icon: 'bi-robot',
        title: 'AI-Powered Features',
        description: '124 AI flow modules for training suggestions, game analysis, and automated content generation using Google Genkit and Gemini AI.'
      },
      {
        icon: 'bi-globe',
        title: 'Multi-Language Platform',
        description: 'Internationalized platform with locale-based routing supporting German and English for European club markets.'
      },
      {
        icon: 'bi-shield-check',
        title: 'Complex Auth System',
        description: 'Firebase Auth with hierarchical role detection across Super Admin, Member, Club Admin, Provider, and Guest fallback states.'
      }
    ],
    contributions: [
      'Diagnosed and resolved a critical authentication race condition causing incorrect redirects while Firestore user profile data was still loading.',
      'Implemented proper loading state management in the useTeam hook to ensure dashboards wait for complete user role identification before rendering.',
      'Conducted a full walkthrough and audit of the multi-role login system, identifying UX issues across the complex authentication flow.',
      'Documented and reported findings to the core team with recommendations for simplifying the login experience across 14 user roles.'
    ],
    techStackDetailed: {
      frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Framer Motion', 'GSAP'],
      backend: ['Firebase (Auth, Firestore, Admin SDK)', 'Google Genkit AI'],
      integrations: ['React Hook Form', 'Zod', 'React Google Maps', 'Recharts']
    }
  },
  {
    id: 9,
    slug: 'garage-door',
    name: 'Local Business SEO Sites',
    tagline: 'SEO-Optimized Static Site Template — Replicated for 4-6 Businesses',
    domain: 'SEO & Web',
    secondaryLabel: 'Template',
    color: '#CA8A04',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Firebase'],
    oneLiner: 'Built and deployed a reusable SEO-optimized React template for local service businesses, replicated across 4-6 clients with location-specific content and automated image generation.',
    liveLinks: [
      {
        label: 'The Door Guys',
        url: 'https://the-door-guys-co.web.app/'
      },
      {
        label: 'Levy Garage',
        url: 'https://levy-garage.web.app/'
      },
      {
        label: 'Prestige Garage Repair',
        url: 'https://prestige-garage-repair.web.app/'
      },
      {
        label: 'BrightLift Garage',
        url: 'https://brightlift-garage.web.app/'
      }
    ],
    overview: 'A professional, SEO-optimized web presence template built for local home service businesses — specifically garage door companies across multiple US locations. The architecture was designed for rapid replication, allowing the same codebase to be customized and deployed for 4-6 different businesses. The project focused heavily on local SEO strategy including Schema.org structured data, automated location-specific image generation, dynamic meta tags, and multi-location service area pages — all aimed at maximizing search visibility for local businesses.',
    features: [
      {
        icon: 'bi-search',
        title: 'Local SEO Strategy',
        description: 'Comprehensive Schema.org JSON-LD markup for local business, XML sitemap, Open Graph and Twitter Cards, canonical URLs, and location-specific meta tags via React Helmet Async.'
      },
      {
        icon: 'bi-geo-alt',
        title: 'Multi-Location Pages',
        description: '6 dedicated service area landing pages (Los Angeles, Beverly Hills, Santa Monica, Culver City, Inglewood, West Hollywood) each optimized for local search.'
      },
      {
        icon: 'bi-image',
        title: 'Automated Image Generation',
        description: 'Node.js script using Sharp to auto-generate 36+ location-specific SEO images (6 services × 6 areas) with proper alt tags and metadata.'
      },
      {
        icon: 'bi-arrow-repeat',
        title: 'Reusable Template Architecture',
        description: 'Centralized data structure for easy content swapping, modular component system, and environment-based config enabling rapid deployment for multiple business clients.'
      }
    ],
    contributions: [
      'Architected a reusable React + TypeScript template enabling rapid deployment for multiple local service business clients.',
      'Implemented comprehensive local SEO strategy including Schema.org structured data, XML sitemap, Open Graph, and dynamic meta tags.',
      'Built an automated image generation pipeline using Node.js and Sharp to produce location-specific SEO images at scale.',
      'Developed 6 geo-targeted service area landing pages with location-specific content optimized for local search ranking.'
    ],
    techStackDetailed: {
      frontend: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Shadcn/UI', 'Radix UI'],
      backend: ['Firebase Hosting', 'Node.js (image pipeline)'],
      integrations: ['React Helmet Async', 'Sharp', 'React Hook Form', 'Zod', 'TanStack React Query', 'Swiper']
    }
  }
];
