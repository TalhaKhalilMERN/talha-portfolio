import NextPOSImg from "../components/assets/projects-dp/nextpos.png";
import NextEatsImg from "../components/assets/projects-dp/nexteats.png";
import UKEtaImg from "../components/assets/projects-dp/uk-eta.png";
import NextSprintImg from "../components/assets/projects-dp/nextsprint.png";
import FundingImg from "../components/assets/projects-dp/funding.png";
import WaisPropertyImg from "../components/assets/projects-dp/waisproperty.png";
import ElevaiytImg from "../components/assets/projects-dp/elevaiyt.png";
import AmigoalImg from "../components/assets/projects-dp/amigoal.png";
import LevyGarageImg from "../components/assets/projects-dp/levy-garage.png";
import ElawsImg from "../components/assets/projects-dp/elaws.png";

export const projectsData = [
  {
    id: 1,
    slug: "nextpos",
    name: "NextPOS",
    tagline: "Cloud-Based POS & Business Management System",
    domain: "POS & Retail",
    color: "#3B82F6",
    image: NextPOSImg,
    techStack: ["React", "Redux", "Firebase", "Stripe", "Node.js"],
    oneLiner:
      "Enterprise POS platform with AI insights, FBR tax compliance, and inventory management for Pakistani retail businesses.",
    liveLinks: [
      {
        label: "Production Platform",
        url: "https://next-pos-beta.web.app/",
      },
    ],
    overview:
      "A production-ready POS and business management system designed for retail businesses in Pakistan. The platform handles sales processing, inventory management, customer analytics, and FBR tax compliance in one unified system. Features include an AI-powered business advisor that provides actionable insights, automated customer segmentation using RFM analysis, and real-time analytics dashboards. The system supports multiple user roles with granular permissions, customizable receipt templates, and comprehensive reporting tools to help businesses make data-driven decisions.",
    features: [
      {
        icon: "bi-cart-check",
        title: "Point of Sale Interface",
        description:
          "Real-time sales processing with barcode scanning, customer selection, discount application, kiosk mode, and 5 customizable receipt templates with QR/barcode generation.",
      },
      {
        icon: "bi-box-seam",
        title: "Inventory Management",
        description:
          "Stock tracking, low-stock alerts, category management, and bulk item uploads via CSV with FBR PCT tariff code mapping.",
      },
      {
        icon: "bi-robot",
        title: "AI Business Advisor",
        description:
          "Conversational AI chatbot providing sales insights, inventory recommendations, and business analytics with session-based chat history.",
      },
      {
        icon: "bi-people",
        title: "Customer Segmentation",
        description:
          "Automated RFM analysis classifying customers into VIP Regulars, Weekend Shoppers, Occasional, At-Risk, and New Customers with purchase behavior analytics.",
      },
      {
        icon: "bi-file-earmark-text",
        title: "FBR Tax Compliance",
        description:
          "Pakistan Federal Board of Revenue integration with PCT code search, tax-inclusive/exclusive pricing calculations, and compliant invoice generation.",
      },
      {
        icon: "bi-graph-up",
        title: "Analytics Dashboard",
        description:
          "Real-time charts for weekly/monthly/daily sales, profit-loss tracking, peak hour analysis, and staff performance monitoring.",
      },
    ],
    contributions: [
      "Owned the full POS interface including sales flow, cart management, discount logic, and kiosk mode.",
      "Built a real-time analytics dashboard with daily, weekly, and monthly sales charts, profit tracking, and peak hour analysis.",
      "Designed the customer segmentation module with automated RFM classification and purchase behavior insights.",
      "Delivered the complete subscription and billing UI with Stripe.js integration for plan selection, card management, and invoice history.",
    ],
    techStackDetailed: {
      frontend: [
        "React 16",
        "Redux + Redux Thunk",
        "React Router",
        "Reactstrap",
        "Bootstrap 4",
      ],
      backend: ["Node.js REST API", "Firebase Hosting", "Firebase Firestore"],
      integrations: [
        "Stripe",
        "Chart.js",
        "ApexCharts",
        "Recharts",
        "jsPDF",
        "jsbarcode",
        "qrcode",
      ],
    },
    scale: [
      { label: "User Roles", value: "10+" },
      { label: "Receipt Templates", value: "5" },
      { label: "Permission Types", value: "15+" },
      { label: "Integrations", value: "Stripe, Firebase, OpenAI" },
    ],
  },
  {
    id: 2,
    slug: "waisproperty",
    name: "Wais Property",
    tagline: "Full-Featured Real Estate Marketplace",
    domain: "Real Estate",
    color: "#0EA5E9",
    image: WaisPropertyImg,
    techStack: ["React 19", "TypeScript", "Firebase", "Stripe", "Zustand"],
    oneLiner:
      "Property listing platform with subscription plans, advanced search, service provider directory, and admin dashboard.",
    liveLinks: [
      {
        label: "Live Website",
        url: "https://wais-property.web.app/",
      },
    ],
    overview:
      "A comprehensive real estate marketplace platform for property listings, rentals, sales, and service provider directories. I engineered and shipped over 85% of this platform's frontend, establishing the design system, state management flows, and responsive layouts. The client-facing experience features an interactive 5-step wizard with client-side photo processing and location lookup, alongside a highly advanced query system for listings. The payment infrastructure supports Stripe-based subscription plan tiers with dynamic quota thresholds and one-time feature upgrades. I also built a robust admin dashboard interface to monitor system payments, listings approvals, and user accounts.",
    features: [
      {
        icon: "bi-house-door",
        title: "Property Listings",
        description:
          "Create, edit, delete listings with photo uploads, pricing, location, and status tracking (active/pending/rejected) via a 5-step creation wizard.",
      },
      {
        icon: "bi-wallet2",
        title: "Subscription & Quota System",
        description:
          "Stripe-integrated plans with quota management (max properties, photos per ad), one-time photo add-ons, and card management.",
      },
      {
        icon: "bi-search-heart",
        title: "Advanced Search",
        description:
          "Debounced search with filters by location, price range, property type (detached, semi-detached, terraced, etc.), and listing type (buy/rent).",
      },
      {
        icon: "bi-tools",
        title: "Service Provider Directory",
        description:
          "Marketplace for contractors, agents, and providers with categories, profiles, ratings, and contact management.",
      },
      {
        icon: "bi-gear",
        title: "Admin Dashboard",
        description:
          "Comprehensive panel for managing users, listings, services, payments, subscriptions, and activity logs with role-based access.",
      },
      {
        icon: "bi-bell",
        title: "Property Alerts",
        description:
          "Email notification system for users when new properties matching their saved criteria are listed.",
      },
    ],
    contributions: [
      "Led and executed 85% of the frontend engineering of the platform, translating complex Figma mockups into a responsive, type-safe React 19 application.",
      "Designed and built the core 5-step property wizard listing flow, incorporating dynamic image compression and upload progress indicators with Firebase Storage.",
      "Developed the advanced search engine dashboard with debounced queries, location coordinates mapping, and multiple category/price filters.",
      "Implemented the complete Stripe-integrated billing workspace, including automated subscription quota-enforcement layouts, plan modifiers, and transaction invoices.",
      "Built the administrative dashboard layout featuring statistical summary charts (Recharts) and structured list tables for listing reviews, approvals, and user accounts.",
    ],
    techStackDetailed: {
      frontend: [
        "React 19.2",
        "TypeScript",
        "Vite 7.3",
        "Tailwind CSS 4.2",
        "Shadcn/UI",
        "Radix UI",
      ],
      backend: [
        "Firebase (Firestore, Auth, Storage, Functions)",
        "Zustand 5.0",
      ],
      integrations: [
        "Stripe",
        "TanStack React Query 5.83",
        "React Hook Form 7.71",
        "Zod",
        "Recharts",
      ],
    },
    scale: [
      { label: "Application Pages", value: "26" },
      { label: "User Roles", value: "5" },
      { label: "Creation Steps", value: "5" },
      { label: "Integrations", value: "Firebase, Stripe, Zustand" },
    ],
  },
  {
    id: 3,
    slug: "nexteats",
    name: "Nexteats",
    tagline: "Multi-Role Cloud Restaurant Management Platform",
    domain: "Restaurant SaaS",
    color: "#F97316",
    image: NextEatsImg,
    techStack: ["React", "Firebase", "Stripe", "Algolia", "Node.js"],
    oneLiner:
      "Full-featured restaurant SaaS with real-time order tracking, QR dine-in ordering, and multi-role staff management.",
    liveLinks: [
      {
        label: "Customer Portal",
        url: "https://nexteats-staging.web.app/",
      },
      {
        label: "Admin Portal",
        url: "https://nexteats-staging-admin.web.app/auth/login",
      },
    ],
    overview:
      "A comprehensive cloud-based restaurant management SaaS platform supporting multiple restaurants, order types (dine-in, pickup, delivery), and staff roles. The system provides real-time order tracking with live status updates, QR code-based contactless ordering for dine-in customers, and Algolia-powered search across all restaurant data. Features include role-based dashboards for super admins, restaurant admins, kitchen staff, waiters, drivers, and customers, along with integrated payment processing through Stripe and PayPal. The platform includes detailed analytics for revenue tracking, best-selling items, peak hours analysis, and customer demographics.",
    features: [
      {
        icon: "bi-person-badge",
        title: "Multi-Role System",
        description:
          "Super Admin, Restaurant Admin, Kitchen Staff (Cook/Waiter/Admin), Drivers, and Customers — each with granular role-based permissions and custom dashboards.",
      },
      {
        icon: "bi-clock-history",
        title: "Real-Time Order Management",
        description:
          "Live order tracking with status transitions (pending → processing → served → completed), waiter-specific order views, and real-time updates.",
      },
      {
        icon: "bi-qr-code",
        title: "QR Code Dine-In Ordering",
        description:
          "Table-specific QR codes for contactless customer ordering with table assignment and waiter-to-table mapping.",
      },
      {
        icon: "bi-credit-card",
        title: "Payment Processing",
        description:
          "Stripe and PayPal integration with refund capabilities, multiple payment methods, and subscription management for restaurant access tiers.",
      },
      {
        icon: "bi-search",
        title: "Algolia Search",
        description:
          "Real-time search across users, orders, items, categories, menus, labels, add-ons, and offers with automatic sync.",
      },
      {
        icon: "bi-bar-chart",
        title: "Analytics & Reporting",
        description:
          "Revenue tracking, best/worst sellers, peak hours, customer demographics, and visit tracking with time-series aggregation.",
      },
    ],
    contributions: [
      "Built the complete waiter role experience including order views, menu browsing, and table management UI.",
      "Developed the order lifecycle UI with real-time status transitions and role-based screen rendering.",
      "Implemented the payment collection flow for waiters with receipt generation and table clearance on checkout.",
    ],
    techStackDetailed: {
      frontend: [
        "React 18",
        "Redux",
        "React Router",
        "Reactstrap",
        "Bootstrap 4",
        "Ant Design",
      ],
      backend: [
        "Firebase Cloud Functions",
        "Express.js",
        "Node.js 20",
        "Firebase Firestore",
        "Firebase Auth",
      ],
      integrations: [
        "Algolia",
        "Stripe",
        "PayPal",
        "Firebase Storage",
        "FCM",
        "Nodemailer",
        "Chart.js",
        "Sentry",
      ],
    },
    scale: [
      { label: "User Roles", value: "10+" },
      { label: "Order Types", value: "3" },
      { label: "Search Indices", value: "8+" },
      { label: "Integrations", value: "Firebase, Stripe, PayPal, Algolia" },
    ],
  },
  {
    id: 4,
    slug: "uk-eta",
    name: "UK ETA Platform",
    tagline: "Government-Grade Travel Authorization System",
    domain: "Gov-Tech",
    color: "#8B5CF6",
    image: UKEtaImg,
    techStack: ["React", "TypeScript", "Firebase", "Tap Payments", "SendGrid"],
    oneLiner:
      "Secure multi-traveler ETA application platform with OTP verification, document uploads, and enterprise-level security middleware.",
    liveLinks: [
      {
        label: "Live Website",
        url: "https://ukev.com/",
      },
    ],
    overview:
      "A secure government-grade web application for processing UK Electronic Travel Authorization (ETA) applications. I architected and engineered 90% of the frontend application, managing the complete state flow, complex nested validations, and document uploading pipeline. The application handles applications for up to 50 travelers simultaneously, rendering dynamic forms, live upload status feeds, and input validations. Built with advanced security controls including request encryption and anti-injection protections, it incorporates secure SendGrid-based OTP authorization flows, Tap Payments integrations, and a custom administrative dashboard.",
    features: [
      {
        icon: "bi-people-fill",
        title: "Multi-Traveler Forms",
        description:
          "Accordion-based application interface supporting up to 50 travelers per submission with per-traveler document uploads and validation.",
      },
      {
        icon: "bi-shield-check",
        title: "OTP Email Verification",
        description:
          "Secure email verification with expiry-based OTP codes required before form submission, powered by SendGrid.",
      },
      {
        icon: "bi-lock-fill",
        title: "Enterprise Security",
        description:
          "6-layer security including request encryption, HMAC signature verification, XSS/SQL injection detection, DOMPurify sanitization, and rate limiting.",
      },
      {
        icon: "bi-credit-card-2-front",
        title: "Tap Payments Integration",
        description:
          "Secure payment processing with charge creation, webhook signature verification, and payment status redirect handling.",
      },
      {
        icon: "bi-speedometer2",
        title: "Admin Dashboard",
        description:
          "Application management with real-time Algolia-powered search, traveler status updates, and email log tracking.",
      },
      {
        icon: "bi-save",
        title: "Draft Save & Resume",
        description:
          "Automatic draft saving to localStorage with incomplete application recovery flow.",
      },
    ],
    contributions: [
      "Architected and engineered 90% of the platform's frontend application from scratch, translating complex compliance requirements into clean, reusable React components.",
      "Designed and implemented the core multi-step dynamic wizard interface supporting up to 50 concurrent travelers, utilizing accordion-based forms, nested Zod validation schema, and active document upload UI.",
      "Led the integration of the Tap Payments SDK, secure OTP SendGrid notification flows, and built the application draft auto-save/restore system using React state hook & client storage lifecycle APIs.",
      "Developed a custom administrative dashboard with Algolia-powered live search, advanced CSV query exports, and secure role-based dashboard layout routing.",
    ],
    techStackDetailed: {
      frontend: [
        "React 18",
        "TypeScript",
        "Vite",
        "React Router DOM",
        "Shadcn/UI",
        "Radix UI",
        "Tailwind CSS",
      ],
      backend: [
        "Firebase Cloud Functions",
        "Node.js 20",
        "Express.js",
        "Cloud Firestore",
        "Firebase Hosting",
      ],
      integrations: [
        "Tap Payments API",
        "SendGrid",
        "Algolia",
        "reCAPTCHA Enterprise",
        "TanStack React Query",
        "Zod",
      ],
    },
    scale: [
      { label: "Application Pages", value: "14" },
      { label: "Security Layers", value: "6" },
      { label: "Max Travelers", value: "50" },
      {
        label: "Integrations",
        value: "Firebase, Tap Payments, SendGrid, Algolia",
      },
    ],
  },
  {
    id: 5,
    slug: "nextsprint",
    name: "NextSprint",
    tagline: "Real-Time Collaborative Project Management Tool",
    domain: "Productivity",
    color: "#10B981",
    image: NextSprintImg,
    techStack: ["Next.js", "TypeScript", "Socket.IO", "Prisma", "Stripe"],
    oneLiner:
      "Full-stack Kanban board with live collaboration, drag-and-drop, AI assistant, and multi-organization workspace management.",
    overview:
      "A full-featured Kanban-style project management platform built for teams and organizations, modeled after Trello with enhanced capabilities. The platform features real-time collaboration through Socket.IO, allowing multiple users to work simultaneously on boards with instant updates. Includes comprehensive card management with rich text descriptions, file attachments, comments, checklists, labels, priorities, due dates, and member assignments. The system supports multi-organization workspaces with Clerk authentication, role-based access control, and subscription-based board limits. Features an integrated AI assistant powered by OpenAI for task management support, along with Unsplash integration for custom board backgrounds.",
    liveLinks: [
      {
        label: "Live Website",
        url: "https://nextsprint.nextpak.org/",
      },
    ],
    features: [
      {
        icon: "bi-broadcast",
        title: "Real-Time Collaboration",
        description:
          "Socket.IO client integration for live board updates, card changes, and list reordering across multiple concurrent users.",
      },
      {
        icon: "bi-card-checklist",
        title: "Advanced Card Management",
        description:
          "Rich descriptions (Quill editor), file attachments, comments, checklists, labels, priorities, due dates, and member assignments.",
      },
      {
        icon: "bi-building",
        title: "Multi-Organization Workspaces",
        description:
          "Clerk-powered authentication with organization-based data isolation, role-based access, and board limits per subscription tier.",
      },
      {
        icon: "bi-arrows-move",
        title: "Drag & Drop",
        description:
          "Smooth list and card reordering using @hello-pangea/dnd with optimistic UI updates and debounced mutations.",
      },
      {
        icon: "bi-chat-dots",
        title: "AI Chat Assistant",
        description:
          "OpenAI-powered task management assistant integrated into the board interface.",
      },
      {
        icon: "bi-star",
        title: "Stripe Subscriptions",
        description:
          "Free tier (limited boards) and Pro tier (unlimited boards) with subscription management.",
      },
    ],
    contributions: [
      "Built the full Kanban board UI with drag-and-drop lists and cards, real-time updates via Socket.IO client, and optimistic state management.",
      "Developed the card detail experience including rich text editing, checklists, file attachments, labels, due dates, and member assignments.",
      "Implemented multi-organization workspace UI with Clerk authentication and subscription-gated board access.",
    ],
    techStackDetailed: {
      frontend: [
        "Next.js 14 (App Router)",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/UI",
        "Radix UI",
      ],
      backend: [
        "Next.js API Routes",
        "Express.js",
        "MySQL",
        "Prisma ORM",
        "Clerk Auth",
      ],
      integrations: [
        "Socket.IO",
        "Stripe",
        "Firebase Storage",
        "OpenAI API",
        "Unsplash API",
        "Nodemailer",
        "Sentry",
      ],
    },
    scale: [
      { label: "Subscription Tiers", value: "2" },
      { label: "Organization Support", value: "Multi-Org" },
      { label: "Real-time Features", value: "Socket.IO" },
      { label: "Integrations", value: "Clerk, Stripe, Firebase, OpenAI" },
    ],
  },
  {
    id: 6,
    slug: "elevaiyt",
    name: "Elevaiyt",
    tagline: "Enterprise Risk Management & GRC Platform",
    domain: "Enterprise SaaS",
    color: "#8B5CF6",
    image: ElevaiytImg,
    techStack: ["React", "TypeScript", "Redux Toolkit", "Recharts", "Firebase"],
    oneLiner:
      "Comprehensive ERM and GRC platform for managing organizational risks, compliance audits, assessments, and reporting — with advanced CRUD modules and a real-time notifications system.",
    overview:
      "Elevaiyt is a comprehensive Enterprise Risk Management (ERM) and Governance, Risk & Compliance (GRC) platform built with modern web technologies. Designed to help organizations manage risks, assessments, compliance, audits, and reporting in a centralized system. I contributed 5 major feature modules — Industries, Risk Categories, Member Roles, Document Categories, and a full Notifications system — each with complete CRUD operations, advanced filtering, server-side pagination, and Redux state management.",
    features: [
      {
        icon: "bi-building",
        title: "Industries CRUD Module",
        description:
          "Full CRUD with server-side pagination, debounced search, sortable columns, Add/Edit/View modals, and Redux integration via industriesSlice.",
      },
      {
        icon: "bi-diagram-3",
        title: "Risk Categories Module",
        description:
          "Complex CRUD with multi-select subcategory management, filter by subcategory dropdown, dynamic badge display, and nested data structure handling.",
      },
      {
        icon: "bi-person-badge",
        title: "Member Roles Module",
        description:
          "Full CRUD for role titles and descriptions with server-side pagination, debounced search, sortable columns, and modal-based workflows.",
      },
      {
        icon: "bi-folder2-open",
        title: "Document Categories Module",
        description:
          "CRUD with DocumentSource enum-based categorization, source filter dropdown, Yup schema validation, and sortable columns.",
      },
      {
        icon: "bi-bell",
        title: "Notifications System",
        description:
          "Tab-based All/Read/Unread filtering, load-more pagination, mark-as-read (single & bulk), delete notifications, optimistic UI updates, and a custom useNotifications() hook.",
      },
      {
        icon: "bi-graph-up",
        title: "Charts & Reporting",
        description:
          "Risk dashboards powered by Recharts, ApexCharts, and Nivo with compliance KPIs, risk heatmaps, and audit trail reports.",
      },
    ],
    contributions: [
      "Built 4 complete CRUD admin modules (Industries, Risk Categories, Member Roles, Document Categories) with server-side pagination, debounced search, and Redux Toolkit state management.",
      "Developed a comprehensive Notifications system with tab-based filtering, optimistic UI updates, bulk actions, and a reusable useNotifications() custom hook.",
      "Integrated Risk Categories module with complex nested subcategory data structures, multi-select management, and dynamic badge rendering.",
      "Implemented Document Categories with DocumentSource enum filtering, Yup schema validation, and sortable column headers.",
    ],
    techStackDetailed: {
      frontend: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI"],
      backend: ["Firebase Deployment", "REST API (external)"],
      integrations: [
        "Redux Toolkit",
        "Redux Persist",
        "React Router DOM v6",
        "Axios",
        "React Hook Form",
        "Yup",
        "Zod",
        "Recharts",
        "ApexCharts",
        "Nivo",
        "jsPDF",
        "docx",
        "xlsx",
      ],
    },
    scale: [
      { label: "CRUD Modules", value: "5" },
      { label: "Notification Actions", value: "8" },
      { label: "Chart Libraries", value: "3" },
      { label: "Integrations", value: "Redux, Axios, Recharts, Firebase" },
    ],
  },
  {
    id: 7,
    slug: "fundflow",
    name: "FundFlow",
    tagline: "Dual-Sided Funding Marketplace Platform",
    domain: "Fintech",
    color: "#EF4444",
    image: FundingImg,
    techStack: ["React", "TypeScript", "Supabase", "Redux", "Stripe"],
    oneLiner:
      "Marketplace connecting businesses and investors with real-time chat, subscription tiers, and offer management workflows.",
    liveLinks: [
      {
        label: "Funder Dashboard",
        url: "https://funding-staging-platform.web.app/funder/dashboard",
      },
    ],
    overview:
      "A dual-sided fintech marketplace connecting business entrepreneurs with venture funders. I designed and engineered 85% of this platform's client-side architecture, establishing the secure routing systems, separate dashboard states, and cross-role layouts. Features include full Supabase Realtime-integrated messaging systems with document preview capabilities, step-by-step offer construction forms, and full Stripe paywall integrations for organization subscriptions. The entire system is built type-safe with TypeScript, optimized with React Query, and managed using Redux Toolkit.",
    features: [
      {
        icon: "bi-person-workspace",
        title: "Dual Role System",
        description:
          "Completely separate dashboards, workflows, and permissions for Business users and Funder users with role-based route protection.",
      },
      {
        icon: "bi-chat-left-text",
        title: "Real-Time Chat",
        description:
          "Full-featured messaging with file attachments (images, videos, documents), media viewer, read receipts, online presence indicators, and typing status via Supabase Realtime.",
      },
      {
        icon: "bi-file-earmark-check",
        title: "Offer Management",
        description:
          "Funders can send funding offers, track status (pending/accepted/declined/funded), schedule calls, and view full offer history.",
      },
      {
        icon: "bi-patch-check",
        title: "Business Verification",
        description:
          "Document upload, verification status tracking, profile completion indicators, and company metrics display.",
      },
      {
        icon: "bi-trophy",
        title: "Subscription Tiers",
        description:
          "Pro/Premium plans with monthly/annual billing, Stripe integration, offer limit enforcement, and subscription-based feature gating.",
      },
      {
        icon: "bi-funnel",
        title: "Advanced Search",
        description:
          "Filter businesses by industry, funding needs, location, and verification status with debounced queries.",
      },
    ],
    contributions: [
      "Architected and built the entire dual-sided frontend application, implementing separate dashboard experiences, custom navigation drawers, and context-dependent layouts for businesses and investors.",
      "Engineered the real-time chat interface from scratch using Supabase Realtime, incorporating instant message streaming, file attachment uploads, automatic media preview renders, and typing/online indicators.",
      "Designed the complete interactive offer negotiation workflow—enabling investors to construct, submit, and track funding offers with instant status updates and integrated scheduling forms.",
      "Built the subscription paywall and plan management flows using Stripe Elements, complete with quota-tracking badges and payment method update screens.",
    ],
    techStackDetailed: {
      frontend: [
        "React 18",
        "TypeScript",
        "Vite",
        "Radix UI",
        "Shadcn/UI",
        "Tailwind CSS",
      ],
      backend: ["Supabase (PostgreSQL + Realtime)", "Supabase Auth"],
      integrations: [
        "Stripe",
        "TanStack React Query v5",
        "Redux Toolkit",
        "Recharts",
        "React Hook Form",
        "Yup/Zod",
      ],
    },
    scale: [
      { label: "User Roles", value: "2" },
      { label: "Dashboard Types", value: "2" },
      { label: "Subscription Plans", value: "2" },
      { label: "Integrations", value: "Supabase, Stripe, Redux" },
    ],
  },
  {
    id: 8,
    slug: "garage-door",
    name: "Local Business SEO Sites",
    tagline:
      "SEO-Optimized Static Site Template — Replicated for 4-6 Businesses",
    domain: "SEO & Web",
    secondaryLabel: "Template",
    color: "#CA8A04",
    image: LevyGarageImg,
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Firebase"],
    oneLiner:
      "Built and deployed a reusable SEO-optimized React template for local service businesses, replicated across 4-6 clients with location-specific content and automated image generation.",
    liveLinks: [
      {
        label: "The Door Guys",
        url: "https://the-door-guys-co.web.app/",
      },
      {
        label: "Levy Garage",
        url: "https://levy-garage.web.app/",
      },
      {
        label: "Prestige Garage Repair",
        url: "https://prestige-garage-repair.web.app/",
      },
      {
        label: "BrightLift Garage",
        url: "https://brightlift-garage.web.app/",
      },
    ],
    overview:
      "An enterprise-level web presence and local SEO search optimization template framework. I solely designed, built, and launched 100% of this multi-tenant configuration system, enabling rapid development cycles across 4-6 business clients. The template incorporates local business SEO strategy schemas, automated location-based asset rendering, meta header tags, and dedicated landers. I built an automated asset pipeline with Node.js and structured site configuration layouts to handle local branding assets and deployment easily.",
    features: [
      {
        icon: "bi-search",
        title: "Local SEO Strategy",
        description:
          "Comprehensive Schema.org JSON-LD markup for local business, XML sitemap, Open Graph and Twitter Cards, canonical URLs, and location-specific meta tags via React Helmet Async.",
      },
      {
        icon: "bi-geo-alt",
        title: "Multi-Location Pages",
        description:
          "6 dedicated service area landing pages (Los Angeles, Beverly Hills, Santa Monica, Culver City, Inglewood, West Hollywood) each optimized for local search.",
      },
      {
        icon: "bi-image",
        title: "Automated Image Generation",
        description:
          "Node.js script using Sharp to auto-generate 36+ location-specific SEO images (6 services × 6 areas) with proper alt tags and metadata.",
      },
      {
        icon: "bi-arrow-repeat",
        title: "Reusable Template Architecture",
        description:
          "Centralized data structure for easy content swapping, modular component system, and environment-based config enabling rapid deployment for multiple business clients.",
      },
    ],
    contributions: [
      "Solely designed, engineered, and deployed 100% of this multi-tenant templating system from scratch, enabling fast website generation for local service clients.",
      "Configured a comprehensive frontend SEO framework using React Helmet Async, injecting custom Schema.org JSON-LD local business models, semantic sitemaps, and Open Graph tags.",
      "Wrote a custom Node.js automation pipeline utilizing Sharp to auto-generate, optimize, and bundle 36+ localized geo-targeted images with pre-loaded alt descriptions.",
      "Programmed modular configuration handlers, allowing non-technical developers to launch a fully customized website by modifying a single config file.",
    ],
    techStackDetailed: {
      frontend: [
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Shadcn/UI",
        "Radix UI",
      ],
      backend: ["Firebase Hosting", "Node.js (image pipeline)"],
      integrations: [
        "React Helmet Async",
        "Sharp",
        "React Hook Form",
        "Zod",
        "TanStack React Query",
        "Swiper",
      ],
    },
  },
  {
    id: 9,
    slug: "elaws",
    name: "E-Laws",
    tagline: "Swiss Legislative Management System",
    domain: "Gov-Tech",
    color: "#DC2626",
    image: ElawsImg,
    techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "i18next"],
    oneLiner:
      "Pixel-perfect Swiss legislative platform with multi-language support, complex data tables, and a hierarchical law structure viewer.",
    overview:
      "A legislative administrative application for managing the Swiss legislative catalog. I was the sole frontend engineer responsible for 90% of the client-side system, developing the responsive architecture, multi-language configurations, and core catalog viewer. Built to pixel-perfect Figma specifications, the platform features a complex nested node tree browser to navigate Swiss laws, advanced tabular interfaces with CSV export handlers, and JWT-authenticated session lifecycle interceptors.",
    features: [
      {
        icon: "bi-layout-text-sidebar",
        title: "Legislative Structure Viewer",
        description:
          "Interactive hierarchical browser for Swiss laws with node tree visualization, version management, and nested navigation across legislative levels.",
      },
      {
        icon: "bi-people",
        title: "User Management System",
        description:
          "Complete CRUD operations with user list, detail views, role management, activation/deactivation, and password reset flows.",
      },
      {
        icon: "bi-translate",
        title: "Multi-Language Support",
        description:
          "Full internationalization across English, French, German, and Italian — matching Switzerland's four official languages.",
      },
      {
        icon: "bi-table",
        title: "Advanced Data Tables",
        description:
          "Search, filtering, sorting, pagination, bulk selection, CSV export with column selection, and skeleton loading states.",
      },
      {
        icon: "bi-shield-lock",
        title: "Authentication & Authorization",
        description:
          "JWT-based auth with automatic token refresh via Axios interceptors, request queuing during refresh, and persistent session management.",
      },
      {
        icon: "bi-palette",
        title: "Pixel-Perfect UI",
        description:
          "Meticulously implemented to match Figma designs with exact spacing, typography, color palette, light/dark theme switching, and collapsible sidebar layout.",
      },
    ],
    contributions: [
      "Solely engineered 90% of the client-side system, developing the responsive architecture and routing structures using React, TypeScript, and Zustand.",
      "Built the legislative structure viewer with deep nested node-tree navigation hierarchies and local version tracking toolbar structures.",
      "Designed and implemented full multi-language support (English, French, German, Italian) utilizing i18next locales with automatic language-detection routing.",
      "Developed high-performance custom data tables equipped with advanced multi-column filters, bulk state actions, search pagination, and custom CSV exports.",
      "Configured Axios request/response interceptors to handle token refresh cycles seamlessly, preventing session drops.",
    ],
    techStackDetailed: {
      frontend: [
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Shadcn/UI",
        "Zustand",
        "React Router v6",
        "i18next",
      ],
      backend: ["Firebase Hosting", "REST API (external)"],
      integrations: [
        "Axios",
        "React Hook Form",
        "Zod",
        "Lucide React",
        "Vitest",
      ],
    },
  },
  {
    id: 10,
    slug: "amigoal",
    name: "Amigoal",
    tagline: "Football Club Management SaaS — Auth Optimization",
    domain: "Sports SaaS",
    secondaryLabel: "Contribution",
    color: "#16A34A",
    image: AmigoalImg,
    techStack: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
    ],
    oneLiner:
      "Contributed auth flow optimization and UX audit to a large-scale football club management platform with 14 user roles and AI-powered features.",
    liveLinks: [
      {
        label: "Live Website",
        url: "https://amigoal--host-only.us-east4.hosted.app/en",
      },
    ],
    overview:
      "Amigoal is a comprehensive SaaS platform for modern football club management, serving 14 distinct user roles including coaches, players, parents, sponsors, scouts, and federation staff. My contribution focused on diagnosing and resolving a critical authentication race condition where users were incorrectly redirected while profile data was still loading from Firestore. I also conducted a full audit of the login system, documenting UX issues across the complex multi-role authentication flow and reporting findings to the core team.",
    features: [
      {
        icon: "bi-diagram-3",
        title: "Multi-Role Architecture",
        description:
          "14 distinct user roles each with custom dashboards, permissions, and navigation — from Club Admin and Coach to Scout, Sponsor, and Federation Staff.",
      },
      {
        icon: "bi-robot",
        title: "AI-Powered Features",
        description:
          "124 AI flow modules for training suggestions, game analysis, and automated content generation using Google Genkit and Gemini AI.",
      },
      {
        icon: "bi-globe",
        title: "Multi-Language Platform",
        description:
          "Internationalized platform with locale-based routing supporting German and English for European club markets.",
      },
      {
        icon: "bi-shield-check",
        title: "Complex Auth System",
        description:
          "Firebase Auth with hierarchical role detection across Super Admin, Member, Club Admin, Provider, and Guest fallback states.",
      },
    ],
    contributions: [
      "Diagnosed and resolved a critical authentication race condition causing incorrect redirects while Firestore user profile data was still loading.",
      "Implemented proper loading state management in the useTeam hook to ensure dashboards wait for complete user role identification before rendering.",
      "Conducted a full walkthrough and audit of the multi-role login system, identifying UX issues across the complex authentication flow.",
      "Documented and reported findings to the core team with recommendations for simplifying the login experience across 14 user roles.",
    ],
    techStackDetailed: {
      frontend: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/UI",
        "Framer Motion",
        "GSAP",
      ],
      backend: ["Firebase (Auth, Firestore, Admin SDK)", "Google Genkit AI"],
      integrations: ["React Hook Form", "Zod", "React Google Maps", "Recharts"],
    },
  },
];
