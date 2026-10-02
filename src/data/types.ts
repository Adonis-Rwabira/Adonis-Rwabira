export type ProjectCategory = 
  | 'AI_RESEARCH' 
  | 'DISTRIBUTED_BACKEND' 
  | 'SYSTEMS_SECURITY' 
  | 'FINTECH_DEVTOOLS';

export interface MediaSlot {
  type: 'image' | 'video' | 'diagram';
  url: string;
  thumbnailUrl?: string;
  caption?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  featured: boolean;
  period: string;
  role: string;
  context: string; // ex: "Mémoire d'Ingénieur ULPGL" ou "Client Startup V-Zone"
  shortDescription: string;
  problemStatement: string;
  architectureSolution: string;
  metrics: MetricItem[];
  technologies: string[];
  media: MediaSlot[];
  githubUrl?: string;
  liveUrl?: string;
  documentUrl?: string; // Lien mémoire / doc technique
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
  achievements: string[];
  isCurrent?: boolean;
}

export interface ReferenceItem {
  name: string;
  title: string;
  organization: string;
  phone: string;
  email?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface ConferenceAndAward {
    title: string;
    organization: string;
    date: string;
    badge: string;
    description: string[];
    certificateImage: string;
}

export interface SkillCategory {
    category: string;
    skills: { name: string; level?: string }[];
}

export interface Identity {
  fullName: string;
  headline: string;
  subheadline: string;
  email: string;
  phone: string;
  location: string;
  nationality: string;
  maritalStatus: string;
  birthDate: string;
  degree: string;
  profilePhoto: string;
  signaturePhoto: string;
  socials: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
  manifesto: string;
}

export interface PortfolioData {
  identity: Identity;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  conferencesAndAwards: ConferenceAndAward[];
  skills: SkillCategory[];
  references: ReferenceItem[];
  languages: LanguageItem[];
  interests: string[];
}
