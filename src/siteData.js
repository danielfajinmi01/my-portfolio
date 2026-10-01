import accessBankPreview from './assets/access-bank-live.png'
import mixlrPreview from './assets/mixlr-live.png'
import moovablePreview from './assets/moovable-preview.png'

// We will use standard assets for new projects
import royalNotePreview from './assets/royal-note-preview.png'
import royalNotesIcon from './assets/royal-notes-icon.png'
import royalNotesLogo from './assets/royal-notes-logo.png'
import royalPayPreview from './assets/royal-pay-preview.png'
import royalCarePreview from './assets/royal-care-preview.png'
import igceNetworkPreview from './assets/igce-network-preview.png'
import sotaBenchmarkPreview from './assets/sota-benchmark-preview.svg'

export const SITE_DATA = {
  name: "Obaloluwa Kolade Fajinmi",
  nickname: "Obaloluwa",
  initials: "OKF",
  title: "Software Engineer",
  roles: ["Software Engineer"],
  secondaryRoles: [
    "building frontend systems",
    "shipping full-stack products",
    "engineering mobile experiences",
    "turning product ideas into products"
  ],
  email: "danielfajinmi19@gmail.com",
  location: "Lagos, Nigeria",
  bio: "Frontend-specialized software engineer building polished web and mobile products from interface to deployment.",
  tagline: "Available for remote contracts",
  socialLinks: {
    github: "https://github.com/danielfajinmi01",
    linkedin: "https://www.linkedin.com/in/obaloluwa-fajinmi/",
    x: "https://x.com/danielfajinmi19",
    upwork: "https://www.upwork.com/freelancers/~0175bbe1f12ba830c4?mp_source=share"
  },
  stats: {
    yearsExperience: 2,
    projectsCompleted: 16,
    deployedProjects: 6
  },
  heroStats: [
    { value: "2+", label: "Years", detail: "Building" },
    { value: "Production", label: "Experience", detail: "Frontend delivery" },
    { value: "Web + Mobile", label: "Delivery", detail: "Interface to release" }
  ]
}

export const PROJECTS = [
  {
    id: "moovable",
    title: "Moovable",
    type: "Logistics Technology Platform",
    status: "in-development",
    statusLabel: "Private Build",
    contextLabel: "PROFESSIONAL EXPERIENCE",
    description: "A private logistics platform focused on responsive operator workflows, identity-aware interfaces, and production-ready frontend implementation.",
    longDescription: "Frontend Engineer: Responsive logistics dashboards, production UI implementation, and API-connected workflows.",
    image: moovablePreview,
    technologies: ["React", "Next.js", "TypeScript", "REST API", "Auth"],
    features: ["Responsive logistics dashboards", "Identity-aware user states", "Figma to Web conversion", "Client-side service integration"],
    github: null,
    liveUrl: "https://getmoovable.com/",
    actionLabel: "Live Site",
    featured: true,
    completionPercentage: 100,
    role: "Frontend Engineer",
    duration: "Contract"
  },
  {
    id: "igcenetwork",
    title: "IGCE Network",
    type: "Telecommunications Web App",
    status: "deployed",
    statusLabel: "Deployed",
    contextLabel: "PROFESSIONAL WORK",
    description: "A modern broadband telecommunications platform for IGCE Network Limited, featuring high-speed internet subscription plans, service coverage maps, and online onboarding.",
    longDescription: "Full Stack Developer: Broadband product experiences, service interfaces, and application integration.",
    image: igceNetworkPreview,
    technologies: ["React", "Tailwind CSS", "REST API", "GSAP"],
    features: ["Broadband subscription plan showcases", "Interactive coverage area lookup", "Figma to Web conversion", "Client signup & account onboarding"],
    github: null,
    liveUrl: "https://igecnet.com",
    featured: true,
    completionPercentage: 100,
    role: "Full Stack Developer",
    duration: "Completed"
  },
  {
    id: "sota-benchmark",
    title: "SOTA Engineering & Benchmarking",
    type: "Engineering Research",
    status: "in-development",
    statusLabel: "Selective Disclosure",
    contextLabel: "ENGINEERING RESEARCH",
    description: "Engineering problem solving, benchmark workflow validation, and implementation review where public details are intentionally limited.",
    longDescription: "Software Engineer: Technical validation, benchmark workflows, and implementation quality checks without exposing protected material.",
    image: sotaBenchmarkPreview,
    technologies: ["React", "JavaScript", "Playwright", "Git"],
    features: ["Benchmark workflow design", "Repeatable browser checks", "Performance-minded implementation", "Private source handling"],
    github: null,
    liveUrl: null,
    actionLabel: "Details Limited",
    featured: true,
    completionPercentage: 60,
    role: "Software Engineer",
    duration: "Ongoing"
  },
  {
    id: "royalnote",
    title: "Royal Note",
    type: "Mobile App",
    status: "deployed",
    statusLabel: "Android APK Available",
    contextLabel: "MOBILE PRODUCT",
    description: "A published Android note-taking application for capturing, organizing, and styling personal logs with offline-first behavior.",
    longDescription: "Mobile Developer: Android note-taking product delivery, offline-first storage, writing workflows, and ongoing iOS release preparation.",
    image: royalNotePreview,
    icon: royalNotesIcon,
    logo: royalNotesLogo,
    apkUrl: "/downloads/RoyalNotes.apk",
    technologies: ["React Native", "Expo", "AsyncStorage", "Mobile Release"],
    features: ["Markdown text formatting support", "Dynamic UI theme customizations", "Offline-first local storage", "iOS release preparation"],
    github: null,
    liveUrl: null,
    featured: true,
    completionPercentage: 100,
    role: "Mobile Developer",
    duration: "Completed"
  },
  {
    id: "royalpay",
    title: "Royal Pay",
    type: "Fintech Web App",
    status: "deployed",
    statusLabel: "Deployed",
    contextLabel: "INDEPENDENT PRODUCT",
    description: "A financial payment web application built with Firebase-backed data flows, wallet balances, and transaction logs.",
    longDescription: "Full Stack Developer: Firebase-backed product flows, account ledger updates, and payment interface implementation.",
    image: royalPayPreview,
    technologies: ["React", "Firebase BaaS", "Firestore DB", "Tailwind CSS", "Cloud Functions"],
    features: ["Real-time transaction wallet ledger", "Secure user login authentication", "Deposit/withdrawal operations", "Interactive financial analytics charts"],
    github: null,
    liveUrl: "https://royal-pay.netlify.app",
    featured: true,
    completionPercentage: 100,
    role: "Full Stack Developer",
    duration: "Completed"
  },
  {
    id: "royalcare",
    title: "Royal Care (Body Flow)",
    type: "Mobile App",
    status: "in-development",
    statusLabel: "In Development",
    contextLabel: "INDEPENDENT PRODUCT",
    description: "An intuitive tracker application designed for women's health and period monitoring. Includes cycle predictions, health tracking logs, symptom logs, and educational resources.",
    longDescription: "Designed to provide a secure and supportive platform for tracking period cycles, forecasting ovulation dates, and keeping personal logs of daily health symptoms.",
    image: royalCarePreview,
    technologies: ["React Native", "Expo", "AsyncStorage", "react-native-chart-kit"],
    features: ["Interactive cycle history calendar", "Ovulation & next period predictor calculations", "Detailed physical symptom logs", "Secure on-device storage encryption"],
    github: null,
    liveUrl: null,
    featured: true,
    completionPercentage: 45,
    role: "Full Stack Developer",
    duration: "Ongoing"
  },
  {
    id: "accessbank",
    title: "Access Bank Clone",
    type: "Web App",
    status: "deployed",
    contextLabel: "LEARNING PROJECT",
    description: "A frontend learning project recreating Access Bank's corporate site with responsive layout, custom navigation controls, and optimized layout assets.",
    longDescription: "A frontend replica of the Access Bank corporate banking platform, emphasizing responsive UI designs, navigation accessibility, and interactive elements. Implemented complex nested dropdown navigation flows.",
    image: accessBankPreview,
    technologies: ["React", "Tailwind CSS", "Custom Hooks", "Responsive UI"],
    features: ["Responsive dropdown navigation menus", "Accessibility-compliant layouts", "Custom responsive hooks", "Pixel-perfect styling replications"],
    github: "https://github.com/danielfajinmi01/access-bank-frontend-project",
    liveUrl: "https://access-bank-frontend-project.vercel.app",
    featured: true,
    completionPercentage: 100,
    role: "Frontend Developer",
    duration: "2 weeks"
  },
  {
    id: "mixlr",
    title: "Mixlr Clone",
    type: "Web App",
    status: "deployed",
    contextLabel: "LEARNING PROJECT",
    description: "A frontend learning project recreating Mixlr's audio broadcasting site with careful layout fidelity, responsive grids, and reusable media components.",
    longDescription: "Achieved a pixel-perfect layout that matched the original audio platform's complex grid structures and responsive details, focusing on reusability and components optimization.",
    image: mixlrPreview,
    technologies: ["React", "Tailwind CSS", "CSS Grid", "Flexbox"],
    features: ["Advanced CSS Grid configurations", "Responsive audio layout panels", "Modular card components", "Fluid mobile scaling"],
    github: "https://github.com/danielfajinmi01/live-coding-mixlr",
    liveUrl: "https://live-coding-mixlr-qxdap1i4j-danielfajinmi01s-projects.vercel.app/",
    featured: true,
    completionPercentage: 100,
    role: "Frontend Developer",
    duration: "3 weeks"
  }
]

export const TIMELINE = [
  {
    year: "2024",
    title: "BA in History and International Studies",
    description: "Graduated from Ekiti State University, Ado Ekiti, Nigeria, combining analytical research skills with a global perspective.",
    type: "education",
    icon: "book",
    achievements: [
      "Completed degree program",
      "Developed strong analytical research skills",
      "Enhanced written and verbal communication",
      "Demonstrated ability to manage complex information"
    ]
  },
  {
    year: "2024",
    title: "Web Development Foundations",
    description: "Began journey in software development focusing on frontend core technologies: HTML5, CSS3, JavaScript, and Git. Focused on mastering structural design, layouts, and responsive styles.",
    type: "education",
    icon: "book",
    achievements: [
      "Mastered HTML5 & CSS3 layouts",
      "Gained JavaScript ES6+ proficiency",
      "Learned responsive design principles",
      "Adopted Git version control workflows"
    ]
  },
  {
    year: "2024",
    title: "Modern Frontend Systems",
    description: "Transitioned to building single page applications using React and Tailwind CSS. Built complex responsive clones, including Access Bank and Mixlr, optimizing layouts and reusability.",
    type: "project",
    icon: "code",
    achievements: [
      "Mastered React component architecture",
      "Implemented advanced Tailwind CSS configurations",
      "Designed pixel-perfect bank clones",
      "Designed responsive grids and media containers"
    ]
  },
  {
    year: "2025",
    title: "SQI Professional Diploma in Software Engineering",
    description: "Completed an intensive program at SQI College of ICT focusing on the MERN Stack, Data Structures, Firebase, Tailwind CSS, Bootstrap, Next.js, HTML & CSS.",
    type: "education",
    icon: "book",
    achievements: [
      "Mastered MERN Stack technologies",
      "Learned advanced Data Structures",
      "Integrated Next.js and Firebase",
      "Developed robust web applications"
    ]
  },
  {
    year: "2025",
    title: "Backend Integrations & Databases",
    description: "Expanded skills to fullstack engineering by learning Node.js, Express, MongoDB, and Firebase. Implemented robust RESTful APIs, user auth flows, and integrated Firebase services.",
    type: "skill",
    icon: "server",
    achievements: [
      "Built server APIs with Express",
      "Learned MongoDB schema designs & queries",
      "Integrated Firebase Authentication & Firestore",
      "Built ledger systems in Royal Pay web application"
    ]
  },
  {
    year: "2026",
    title: "Mobile App Development",
    description: "Built mobile products with React Native/Expo and Flutter/Dart, including Android deployment through Google Play while iOS release work remains in progress.",
    type: "skill",
    icon: "mobile",
    achievements: [
      "Built with React Native, Expo, Flutter and Dart",
      "Designed mobile-first interaction screens",
      "Deployed a Flutter application to Google Play",
      "Continuing iOS deployment preparation"
    ]
  },
  {
    year: "Ongoing",
    title: "Product Engineering & Delivery",
    description: "Focused on bridging technical delivery with clean UX styling. Continually exploring advanced optimization, deployment setups, and looking for challenging engineering opportunities.",
    type: "milestone",
    icon: "rocket",
    achievements: [
      "Refining product designs in Figma and frontend",
      "Optimizing database and server APIs query times",
      "Focusing on accessibility standards (WCAG)",
      "Open to remote contracts and developer roles"
    ]
  }
]

export const SKILLS_CATEGORIES = [
  {
    icon: "code",
    tab: "frontend",
    title: "Frontend Engineering",
    description: "Polished, responsive interfaces and product experiences.",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "GSAP", "Three.js"]
  },
  {
    icon: "server",
    tab: "backend",
    title: "Backend & Data",
    description: "APIs, backend services, authentication and application data.",
    technologies: ["Django", "Node.js", "Express", "Firebase", "MongoDB"]
  },
  {
    icon: "smartphone",
    tab: "mobile",
    title: "Mobile Engineering",
    description: "Cross-platform mobile products from development to release.",
    technologies: ["Flutter", "Dart", "React Native", "Expo"],
  },
  {
    icon: "cloud",
    tab: "cloud",
    title: "Cloud & Deployment",
    description: "Web hosting, backend deployment and mobile release workflows.",
    technologies: ["Vercel", "Heroku", "Google Play"]
  },
  {
    icon: "wrench",
    tab: "workflow",
    title: "Testing & Workflow",
    description: "Testing, debugging, version control and API validation.",
    technologies: ["Playwright", "Git", "GitHub", "Postman"]
  }
]

export const CURRENTLY_EXPLORING = ["Supabase", "Render"]

export const AI_ASSISTED_ENGINEERING = {
  tools: ["Antigravity", "Codex", "Gemini"],
  description: "Agent-assisted development, debugging and technical research."
}

export const EXPERIENCE = [
  {
    company: "Moovable",
    role: "Frontend Engineer",
    label: "Professional Experience",
    bullets: [
      "Production frontend implementation",
      "Responsive logistics/operator product interfaces",
      "API-integrated workflows",
      "Interface delivery from product designs"
    ]
  }
]

export const HOBBIES = [
  { icon: "gamepad", title: "Gaming", description: "Enthusiastic about strategic, sandbox, and competitive games" },
  { icon: "pen", title: "Writing", description: "Putting thoughts into words, from technical notes to personal reflections" },
  { icon: "music", title: "Music", description: "Listening to rock, indie, and ambient electronic beats" },
  { icon: "book", title: "Reading", description: "Keeping up with tech journals, manga, and sci-fi books" },
  { icon: "mountain", title: "Exploration", description: "Exploring outdoor locations, landscapes, and getting nature walks" },
  { icon: "film", title: "Cinema & Anime", description: "Watching quality movies and creative anime stories" }
]
