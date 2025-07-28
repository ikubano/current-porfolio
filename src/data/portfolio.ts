export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "/public/images/ecommerce.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/public/images/view-tasks2x.png",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
    demoUrl: "https://taskapp.example.com",
    githubUrl: "https://github.com/username/taskapp",
    featured: false
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather, forecasts, and interactive maps using weather APIs.",
    image: "/src/assets/project-weather.jpg",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS Grid"],
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/username/weather",
    featured: true
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and featuring smooth animations and interactive elements.",
    image: "/src/assets/project-portfolio.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/username/portfolio",
    featured: false
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "HTML5", level: 98, category: "frontend" },
  { name: "CSS3", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "Firebase", level: 85, category: "backend" },

  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Webpack", level: 75, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  // Design
  { name: "Figma", level: 80, category: "design" },
  { name: "Adobe XD", level: 75, category: "design" },
  { name: "UI/UX Design", level: 85, category: "design" }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/username",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "Linkedin"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/username",
    icon: "Twitter"
  },
  {
    name: "Email",
    url: "mailto:your.ianmwanzi0@gmail.com",
    icon: "Mail"
  }
];

export const personalInfo = {
  name: "Ian Mwanzi",
  title: "Software Developer",
  bio: "Passionate software developer with 2+ years of experience creating beautiful, functional web applications. I love turning complex problems into simple, elegant solutions.",
  location: "Nairobi, Kenya",
  email: "ianmwanzi0@gmail.com",
  phone: "+254757 767 215",
  resume: "/src/assets/Ian's resume 2025-26.pdf", // Replace with your actual resume path
};