
import { PortfolioData } from './types';

export const INITIAL_DATA: PortfolioData = {
  name: "Ananya Inala",
  title: "AI & Machine Learning Enthusiast",
  bio: "Computer Science student passionate about leveraging AI/ML for real-world impact. From depression detection using EEG signals to brain tumor analysis with CNNs, I thrive on turning complex data into actionable insights and tools.",
  location: "Hyderabad, India",
  email: "inalaananya@gmail.com",
  phone: "+91 7842825731",
  socials: {
    github: "github.com/AnanyaInala",
    linkedin: "linkedin.com/in/ananya-inalaaaab73279",
  },
  experience: [
    {
      role: "AI intern",
      company: "Infosys Springboard",
      duration: "Present",
      description: [
        "Working on AI projects."
      ]
    },
    {
      role: "Artificial Intelligence & Machine Learning Intern",
      company: "AICTE – Edunet Foundation",
      duration: "June 2025 – July 2025",
      description: [
        "Acquired foundational knowledge of AI/ML with practical applications.",
        "Introduced to corporate work culture and professional practices."
      ]
    }
  ],
  skills: [
    { name: "Python", level: 90, category: 'technical' },
    { name: "Java", level: 85, category: 'technical' },
    { name: "ML", level: 65, category: 'technical' },
    { name: "CNN", level: 75, category: 'technical' },
    { name: "PostgreSQL", level: 80, category: 'database' },
    { name: "MySQL", level: 80, category: 'database' },
    { name: "GitHub", level: 85, category: 'tools' },
    { name: "Visual Studio Code", level: 90, category: 'tools' }
  ],
  education: [
    {
      degree: "Bachelor of Technology, Computer Science and Engineering",
      institution: "Malla Reddy Engineering College for Women",
      location: "Hyderabad",
      duration: "2023 – Present"
    },
    {
      degree: "Intermediate, MPC",
      institution: "Little Flower Junior College",
      location: "Hyderabad",
      duration: "2021 – 2023"
    },
    {
      degree: "ICSE",
      institution: "Sri Sai Public School",
      location: "Hyderabad",
      duration: "2021"
    }
  ],
  certifications: [
    { name: "Artificial Intelligence: Concepts and Techniques", issuer: "NPTEL" },
    { name: "Cyber Security Essentials", issuer: "Cisco Networking Academy" },
    { name: "Programming in Python Essentials", issuer: "Cisco Networking" },
    { name: "Cambridge Empower Advanced C1 Level", issuer: "Cambridge" },
    { name: "DSA Programming", issuer: "UDEMY" },
    { name: "Programming in Java Elite", issuer: "NPTEL" }
  ],
  projects: [
    {
      id: "1",
      title: "Depression Detection Using EEG & Survey",
      description: "Developed a system using EEG signals and survey data to detect depression symptoms, featuring a recommendation engine for mental health resources.",
      tags: ["AI/ML", "EEG", "Python", "Data Analysis"],
      imageUrl: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/AnanyaInala/Depression-detection"
    },
    {
      id: "2",
      title: "AI File Organizer",
      description: "Built a Tkinter-based desktop application that automatically sorts and organizes files using Ollama (LLM) for content-based classification.",
      tags: ["Python", "Ollama", "LLM", "Tkinter"],
      imageUrl: "https://images.unsplash.com/photo-1544391496-1ca7c9745748?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/AnanyaInala/AIFileOrganiser"
    },
    {
      id: "3",
      title: "Brain Tumor Detection",
      description: "Developed a high-accuracy CNN model for medical imaging analysis, hosted on Hugging Face for public accessibility.",
      tags: ["Computer Vision", "CNN", "Deep Learning", "Hugging Face"],
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
      link: "https://huggingface.co/spaces/AnanyaInala/brain_tumor_analysis"
    }
  ]
};

export const COLOR_MAP = {
  indigo: {
    primary: 'bg-indigo-600',
    text: 'text-indigo-600',
    border: 'border-indigo-600',
    hover: 'hover:bg-indigo-700',
    bgLight: 'bg-indigo-50',
    accent: 'from-indigo-600 to-violet-600'
  },
  emerald: {
    primary: 'bg-emerald-600',
    text: 'text-emerald-600',
    border: 'border-emerald-600',
    hover: 'hover:bg-emerald-700',
    bgLight: 'bg-emerald-50',
    accent: 'from-emerald-600 to-teal-600'
  },
  rose: {
    primary: 'bg-rose-600',
    text: 'text-rose-600',
    border: 'border-rose-600',
    hover: 'hover:bg-rose-700',
    bgLight: 'bg-rose-50',
    accent: 'from-rose-600 to-pink-600'
  },
  amber: {
    primary: 'bg-amber-600',
    text: 'text-amber-600',
    border: 'border-amber-600',
    hover: 'hover:bg-amber-700',
    bgLight: 'bg-amber-50',
    accent: 'from-amber-500 to-orange-600'
  },
  sky: {
    primary: 'bg-sky-600',
    text: 'text-sky-600',
    border: 'border-sky-600',
    hover: 'hover:bg-sky-700',
    bgLight: 'bg-sky-50',
    accent: 'from-sky-500 to-blue-600'
  }
};
