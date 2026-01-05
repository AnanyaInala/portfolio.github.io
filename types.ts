
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'technical' | 'database' | 'tools' | 'other';
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  education: Education[];
  certifications: Certification[];
}

export enum ThemeColor {
  Indigo = 'indigo',
  Emerald = 'emerald',
  Rose = 'rose',
  Amber = 'amber',
  Sky = 'sky'
}
