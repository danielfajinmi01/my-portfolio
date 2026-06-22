import accessBankPreview from './assets/access-bank-live.png'
import mixlrPreview from './assets/mixlr-live.png'

// We will use standard assets for new projects
import royalNotePreview from './assets/royal-note-preview.png'
import royalPayPreview from './assets/royal-pay-preview.png'
import royalCarePreview from './assets/royal-care-preview.png'

export const SITE_DATA = {
  name: "Obaloluwa Kolade Fajinmi",
  nickname: "Obaloluwa",
  initials: "OKF",
  title: "Full Stack Developer",
  roles: ["Full Stack Developer", "Backend Engineer", "Frontend Developer", "Problem Solver", "Tech Enthusiast"],
  email: "danielfajinmi19@gmail.com",
  location: "Lagos, Nigeria",
  bio: "Crafting digital experiences through innovative design and robust development. Passionate about creating solutions that bridge the gap between user needs and business objectives with clean, efficient code. I specialize in building modern web and mobile applications that deliver exceptional user experiences.",
  tagline: "Available for remote contracts",
  socialLinks: {
    github: "https://github.com/danielfajinmi01",
    linkedin: "https://www.linkedin.com/in/obaloluwa-fajinmi/",
    x: "https://x.com/danielfajinmi19",
    upwork: "https://www.upwork.com/freelancers/~0175bbe1f12ba830c4?mp_source=share"
  },
  stats: {
    yearsExperience: 2,
    projectsCompleted: 15,
    deployedProjects: 4
  }
}

export const PROJECTS = [
  {
    id: "accessbank",
    title: "Access Bank Clone",
    type: "Web App",
    status: "deployed",
    description: "A frontend clone of Access Bank's corporate site with responsive layout and interactive components. Features accurate styling, custom navigation controls, and optimized layout assets.",
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
    description: "A frontend replica of the Mixlr audio broadcasting site, focusing on layout fidelity, responsive grid structure, and media component structures.",
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
  },
  {
    id: "royalnote",
    title: "Royal Note",
    type: "Mobile App",
    status: "in-development",
    statusLabel: "In Development",
    description: "A customizable React Native notes application designed for capturing, organizing, and styling personal logs. Features markdown editing, custom tags, themes, and robust local search capabilities.",
    longDescription: "Royal Note provides a highly customizable writing and note-taking experience on mobile. Users can categorize their thoughts with tags, apply dynamic visual themes, and store details securely using offline-first SQLite storage.",
    image: royalNotePreview,
    technologies: ["React Native", "Expo", "SQLite", "AsyncStorage", "Paper UI"],
    features: ["Markdown text formatting support", "Dynamic UI theme customizations", "Hierarchical tag folder systems", "Full-text offline search logs"],
    github: null,
    liveUrl: null,
    featured: true,
    completionPercentage: 75,
    role: "Mobile Developer",
    duration: "Ongoing"
  },
  {
    id: "royalpay",
    title: "Royal Pay",
    type: "Fintech Web App",
    status: "in-development",
    statusLabel: "In Development",
    description: "A modern financial payment web application built with a Firebase Backend-as-a-Service (BaaS). Supports secure transactions, account ledger updates, wallet balances, and user logs.",
    longDescription: "A fintech dashboard build utilizing Firebase for real-time transactional storage and user authentication. Supports wallet deposits, ledger transfers, and dynamic payment link creations.",
    image: royalPayPreview,
    technologies: ["React", "Firebase BaaS", "Firestore DB", "Tailwind CSS", "Cloud Functions"],
    features: ["Real-time transaction wallet ledger", "Secure user login authentication", "Deposit/withdrawal operations", "Interactive financial analytics charts"],
    github: null,
    liveUrl: null,
    featured: true,
    completionPercentage: 60,
    role: "Full Stack Developer",
    duration: "Ongoing"
  },
  {
    id: "royalcare",
    title: "Royal Care (Body Flow)",
    type: "Mobile App",
    status: "in-development",
    statusLabel: "In Development",
    description: "An intuitive tracker application designed for women's health and period monitoring. Includes cycle predictions, health tracking logs, symptom logs, and educational resources.",
    longDescription: "Designed to provide a secure and supportive platform for tracking period cycles, forecasting ovulation dates, and keeping personal logs of daily health symptoms.",
    image: royalCarePreview,
    technologies: ["React", "Tailwind CSS", "LocalForage", "Framer Motion", "Chart.js"],
    features: ["Interactive cycle history calendar", "Ovulation & next period predictor calculations", "Detailed physical symptom logs", "Secure local browser storage encryption"],
    github: null,
    liveUrl: null,
    featured: true,
    completionPercentage: 45,
    role: "Full Stack Developer",
    duration: "Ongoing"
  }
]

export const TIMELINE = [
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
    title: "Backend Integrations & Databases",
    description: "Expanded skills to fullstack engineering by learning Node.js, Express, MongoDB, and Firebase. Implemented robust RESTful APIs, user auth flows, and integrated Firebase services.",
    type: "skill",
    icon: "server",
    achievements: [
      "Built scalable server APIs with Express",
      "Learned MongoDB schema designs & queries",
      "Integrated Firebase Authentication & Firestore",
      "Built ledger systems in Royal Pay web application"
    ]
  },
  {
    year: "2026",
    title: "Mobile App Development",
    description: "Acquired mobile capabilities using React Native and Expo. Developed offline-first capabilities using SQLite and AsyncStorage, implementing note customization layouts in Royal Note.",
    type: "skill",
    icon: "mobile",
    achievements: [
      "Mastered React Native & Expo frameworks",
      "Designed mobile-first interaction screens",
      "Built local storage sync with SQLite databases",
      "Created customizable theme modules for notes app"
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
    title: "Frontend Development",
    description: "Crafting beautiful, responsive user interfaces with modern frameworks. Focus on clean layout, accessibility, and high performance.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Vite", "HTML5/CSS3"],
    highlights: ["Responsive layouts", "Custom hooks & hooks flows", "Pixel-perfect mockups", "DOM accessibility standards"]
  },
  {
    icon: "server",
    title: "Backend Development",
    description: "Building resilient server layers, RESTful APIs, and cloud services. Implementing secure authentication and database schemas.",
    technologies: ["Node.js", "Express", "MongoDB", "Firebase BaaS", "RESTful APIs"],
    highlights: ["API design & middleware functions", "Database schema queries", "NoSQL integrations", "User logins & sessions"]
  },
  {
    icon: "smartphone",
    title: "Mobile Development",
    description: "Developing cross-platform mobile apps with React Native. Structuring offline storage modules and clean UX layouts.",
    technologies: ["React Native", "Expo", "SQLite", "AsyncStorage", "React Navigation"],
    highlights: ["Cross-platform builds (iOS/Android)", "SQLite offline storages", "Theme customizers", "Native performance layouts"]
  },
  {
    icon: "wrench",
    title: "Workflow & Tools",
    description: "Structuring clean versioning, continuous builds, and workflow automation. Using collaborative code tools.",
    technologies: ["Git & GitHub", "Postman", "npm/yarn", "Vercel", "Vite Build"],
    highlights: ["Git branches & pull requests", "API testing with Postman", "Deployment pipelines", "Vite configurations"]
  }
]

export const HOBBIES = [
  { icon: "gamepad", title: "Gaming", description: "Enthusiastic about strategic, sandbox, and competitive games" },
  { icon: "crown", title: "Chess", description: "Exercising strategic thinking and tactical planning" },
  { icon: "music", title: "Music", description: "Listening to rock, indie, and ambient electronic beats" },
  { icon: "book", title: "Reading", description: "Keeping up with tech journals, manga, and sci-fi books" },
  { icon: "mountain", title: "Exploration", description: "Exploring outdoor locations, landscapes, and getting nature walks" },
  { icon: "film", title: "Cinema & Anime", description: "Watching quality movies and creative anime stories" }
]
