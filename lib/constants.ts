export const PERSONAL_INFO = {
  name: "Shibu J",
  title: "Front-End Developer",
  email: "jshibu779@gmail.com",
  phone: "+91 9487265142",
  location: "Nagercoil, Kanyakumari, India",
  website: "https://shibu-dev.vercel.app",
  github: "https://github.com/shibuDev1997",
  linkedin: "https://www.linkedin.com/in/shibuj1997",
} as const

export const EXPERIENCE = {
  years: "2+",
  projects: "15+",
  technologies: "10+",
} as const

export const SKILLS = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Language" },
  { name: "JavaScript", level: 95, category: "Language" },
  { name: "Tailwind CSS", level: 90, category: "Styling" },
] as const

export const TECHNOLOGIES = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Material UI",
  "Shadcn UI",
  "Redux",
  "Zustand",
  "TanStack Query",
  "React Hook Form",
  "Zod",
  "NextAuth.js",
  "Git",
  "GitHub",
  "RESTful APIs",
] as const

export const PROJECTS = [
  {
    id: 1,
    title: "The Neem Connect Dashboard",
    description:
      "A dynamic admin interface for a social media platform focused on job postings and user interaction. Built with Next.js App Router and modern React patterns.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "React", "TypeScript", "Shadcn UI", "TanStack Query", "NextAuth"],
    features: [
      "Internal chat system with real-time capabilities",
      "Media uploads to cloud storage",
      "Role-based access control",
      "Server-side rendering optimization",
    ],
    github: "https://github.com/shibuDev1997",
    demo: "#",
    category: "Admin Panel",
    gradient: "from-teal-600 via-emerald-600 to-green-600",
  },
  {
    id: 2,
    title: "The Legend New Saravana Stores",
    description:
      "Modern e-commerce solution with server-side rendering and secure payment integration. Features comprehensive product management and user authentication.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "React", "TypeScript", "Razorpay", "Shadcn UI", "NextAuth"],
    features: [
      "Server-side rendering for SEO optimization",
      "Secure payment integration with Razorpay",
      "Dynamic product filtering and search",
      "Responsive design for all devices",
    ],
    github: "https://github.com/shibuDev1997",
    demo: "#",
    category: "E-commerce",
    gradient: "from-blue-600 via-teal-600 to-emerald-600",
  },
  {
    id: 3,
    title: "Genlabib Static Website",
    description:
      "Complete static website built from concept to deployment, showcasing modern web development practices with responsive design and smooth animations.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "jQuery"],
    features: [
      "Fully responsive design",
      "Smooth animations and transitions",
      "Cross-browser compatibility",
      "Optimized performance",
    ],
    github: "https://github.com/shibuDev1997",
    demo: "#",
    category: "Static Site",
    gradient: "from-green-600 via-emerald-600 to-teal-600",
  },
  {
    id: 4,
    title: "Microsoft Pages Migration",
    description:
      "Comprehensive form-based web application for data collection and management at Accenture, focusing on user-friendly interfaces and robust validation.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "Form Validation"],
    features: [
      "Robust form validation mechanisms",
      "Responsive design implementation",
      "Data integrity and security",
      "Cross-device compatibility",
    ],
    github: "https://github.com/shibuDev1997",
    demo: "#",
    category: "Enterprise",
    gradient: "from-orange-600 via-yellow-600 to-lime-600",
  },
] as const

export const WORK_EXPERIENCE = [
  {
    company: "Capecom Solutions Pvt Ltd",
    role: "Front-End Developer",
    period: "Sep 2023 – Present",
    location: "Remote",
    description:
      "Leading front-end development for social media platform admin interface with focus on performance and user experience.",
    achievements: [
      "Architected client-side rendering strategy using Next.js App Router",
      "Built real-time chat system with media upload capabilities",
      "Implemented role-based access control and secure authentication",
      "Improved application performance by 40% through optimization",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Shadcn UI", "TanStack Query", "NextAuth"],
  },
  {
    company: "Accenture",
    role: "Web Developer",
    period: "Oct 2022 – Feb 2023",
    location: "Chennai, India",
    description:
      "Worked on Microsoft pages migration project, focusing on form-based applications and responsive design implementation.",
    achievements: [
      "Successfully migrated legacy Microsoft pages to modern web standards",
      "Implemented comprehensive form validation and data integrity measures",
      "Ensured cross-browser compatibility and responsive design",
      "Collaborated with international teams on enterprise-level projects",
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Form Validation"],
  },
] as const

export const EDUCATION = {
  degree: "Bachelor of Engineering in Computer Science",
  institution: "Hindustan Institute of Technology",
  period: "2015 - 2019",
  location: "Chennai, India",
} as const

export const NAVIGATION_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
] as const
