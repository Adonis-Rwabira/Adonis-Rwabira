import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  identity: {
    fullName: "Adonis Rwabira",
    headline: "identity.headline",
    subheadline: "identity.subheadline",
    email: "adonisbitigaywa@gmail.com",
    phone: "+243 999 794 391",
    location: "Goma, Nord-Kivu, RDC",
    nationality: "Congolaise (RDC)",
    maritalStatus: "identity.maritalStatus",
    birthDate: "identity.birthDate",
    degree: "identity.degree",
    profilePhoto: "/images/profile.jpg",
    signaturePhoto: "/images/signature.jpg",
    socials: {
      github: "https://github.com/Adonis-Rwabira",
      linkedin: "https://linkedin.com/in/adonis-rwabira-a615272a4",
      portfolio: "https://adonis-rwabira.github.io",
    },
    manifesto: "identity.manifesto",
  },
  experiences: [
    {
      id: "synoorg_academy",
      role: "experiences.synoorg_academy.role",
      company: "Synoorg Academy",
      location: "experiences.synoorg_academy.location",
      period: "experiences.synoorg_academy.period",
      technologies: ["NestJS", "TypeScript", "Redis Streams", "PostgreSQL", "Docker", "Clean Architecture"],
      achievements: [
        "experiences.synoorg_academy.achievements.0",
        "experiences.synoorg_academy.achievements.1"
      ],
      isCurrent: true
    },
    {
      id: "liegmann",
      role: "experiences.liegmann.role",
      company: "Groupe Scolaire LIEGMANN",
      location: "experiences.liegmann.location",
      period: "experiences.liegmann.period",
      technologies: ["Python", "Django REST Framework", "PostgreSQL", "React"],
      achievements: [
        "experiences.liegmann.achievements.0",
        "experiences.liegmann.achievements.1"
      ],
      isCurrent: true
    },
    {
      id: "wte",
      role: "experiences.wte.role",
      company: "Word Technology Expertise (WTE)",
      location: "experiences.wte.location",
      period: "experiences.wte.period",
      technologies: ["JavaScript", "Node.js", "React", "Vue", "PostgreSQL"],
      achievements: [
        "experiences.wte.achievements.0",
        "experiences.wte.achievements.1"
      ]
    },
    {
      id: "vzone",
      role: "experiences.vzone.role",
      company: "V-Zone Startup",
      location: "experiences.vzone.location",
      period: "experiences.vzone.period",
      technologies: ["Django", "Python", "PostgreSQL"],
      achievements: [
        "experiences.vzone.achievements.0",
        "experiences.vzone.achievements.1"
      ]
    },
    {
      id: "popolli",
      role: "experiences.popolli.role",
      company: "ONG POPOLLI Fratelli RDC",
      location: "experiences.popolli.location",
      period: "experiences.popolli.period",
      technologies: ["WordPress", "PHP", "MySQL"],
      achievements: [
        "experiences.popolli.achievements.0",
        "experiences.popolli.achievements.1"
      ]
    },
    {
      id: "synoorg_community",
      role: "experiences.synoorg_community.role",
      company: "Synoorg Community",
      location: "experiences.synoorg_community.location",
      period: "experiences.synoorg_community.period",
      technologies: ["PostgreSQL", "Redis"],
      achievements: [
        "experiences.synoorg_community.achievements.0"
      ]
    }
  ],
  projects: [
    {
      id: "muda",
      title: "projects.muda.title",
      subtitle: "projects.muda.subtitle",
      category: 'AI_RESEARCH',
      featured: true,
      period: "2024",
      role: "Concepteur & Développeur Principal",
      context: "Mémoire de Fin d'Études, ULPGL",
      shortDescription: "projects.muda.shortDescription",
      problemStatement: "projects.muda.problemStatement",
      architectureSolution: "projects.muda.architectureSolution",
      metrics: [
        { label: "projects.muda.metrics.0.label", value: '1 100' },
        { label: "projects.muda.metrics.1.label", value: '2m 16s' },
        { label: "projects.muda.metrics.2.label", value: '0,07 $' },
        { label: "projects.muda.metrics.3.label", value: '100%' },
      ],
      technologies: ["Gemini Flash", "Google OR-Tools", "Python", "FastAPI", "Markdown"],
      media: [
        { type: 'diagram', url: '/diagrams/muda-architecture.svg' }
      ],
      githubUrl: "https://github.com/Adonis-Rwabira/Muda"
    },
    {
      id: "synoorg",
      title: "projects.synoorg.title",
      subtitle: "projects.synoorg.subtitle",
      category: 'DISTRIBUTED_BACKEND',
      featured: false,
      period: "2024-Present",
      role: "Lead Développeur Backend",
      context: "Synoorg Academy",
      shortDescription: "projects.synoorg.shortDescription",
      problemStatement: "projects.synoorg.problemStatement",
      architectureSolution: "projects.synoorg.architectureSolution",
      metrics: [],
      technologies: ["NestJS", "TypeScript", "Redis Streams", "PostgreSQL", "Docker", "Clean Architecture"],
      media: [],
      liveUrl: "https://synoorg.com/"
    },
    {
      id: "antimayundo",
      title: "projects.antimayundo.title",
      subtitle: "",
      category: 'SYSTEMS_SECURITY',
      featured: false,
      period: "2023",
      role: "Développeur Principal",
      context: "Projet personnel, ULPGL",
      shortDescription: "projects.antimayundo.shortDescription",
      problemStatement: "",
      architectureSolution: "",
      metrics: [],
      technologies: ["C#", ".NET Framework", "Win32 API", "NTFS Forensics"],
      media: []
    },
    {
      id: "muhangiki",
      title: "projects.muhangiki.title",
      subtitle: "",
      category: 'FINTECH_DEVTOOLS',
      featured: false,
      period: "2024",
      role: "Développeur Fullstack",
      context: "V-Zone Startup",
      shortDescription: "projects.muhangiki.shortDescription",
      problemStatement: "",
      architectureSolution: "",
      metrics: [],
      technologies: ["Python", "Django REST", "PostgreSQL"],
      media: []
    },
    {
      id: "devsai",
      title: "projects.devsai.title",
      subtitle: "",
      category: 'FINTECH_DEVTOOLS',
      featured: false,
      period: "2023-Present",
      role: "Concepteur",
      context: "Projet de recherche personnel",
      shortDescription: "projects.devsai.shortDescription",
      problemStatement: "",
      architectureSolution: "",
      metrics: [],
      technologies: ["Multi-Agents", "Prompt Engineering", "LLMs", "Python"],
      media: [],
      githubUrl: "https://github.com/Adonis-Rwabira/Devs_AI_Agents"
    },
    {
      id: "tkinter",
      title: "projects.tkinter.title",
      subtitle: "",
      category: 'FINTECH_DEVTOOLS',
      featured: false,
      period: "2023",
      role: "Contributeur",
      context: "Projet Open Source",
      shortDescription: "projects.tkinter.shortDescription",
      problemStatement: "",
      architectureSolution: "",
      metrics: [],
      technologies: ["Python", "Tkinter", "AST"],
      media: []
    }
  ],
  conferencesAndAwards: [
    {
      title: "awards.colloque.title",
      organization: "ULPGL",
      date: "awards.colloque.date",
      badge: "awards.colloque.badge",
      description: ["awards.colloque.description"],
      certificateImage: "/images/cert-colloque.jpg"
    },
    {
      title: "awards.gesi.title",
      organization: "RTI Tech",
      date: "awards.gesi.date",
      badge: "awards.gesi.badge",
      description: ["awards.gesi.description"],
      certificateImage: "/images/cert-gesi.jpg"
    },
    {
      title: "awards.a2sv.title",
      organization: "A2SV, Google",
      date: "awards.a2sv.date",
      badge: "awards.a2sv.badge",
      description: ["awards.a2sv.description"],
      certificateImage: "/images/cert-a2sv.jpg"
    }
  ],
  skills: [
    {
      category: "skills.architecture.category",
      skills: [{ name: "skills.architecture.skills" }]
    },
    {
      category: "skills.backend.category",
      skills: [{ name: "skills.backend.skills" }]
    },
    {
      category: "skills.ai.category",
      skills: [{ name: "skills.ai.skills" }]
    },
    {
      category: "skills.data.category",
      skills: [{ name: "skills.data.skills" }]
    },
    {
      category: "skills.frontend.category",
      skills: [{ name: "skills.frontend.skills" }]
    },
    {
      category: "skills.devops.category",
      skills: [{ name: "skills.devops.skills" }]
    }
  ],
  references: [
    {
      name: "references.zelote.name",
      title: "references.zelote.title",
      organization: "ULPGL & WTE",
      phone: "+243 970 534 575"
    },
    {
      name: "references.rwabira.name",
      title: "references.rwabira.title",
      organization: "ONG POPOLLI Fratelli RDC",
      phone: "+243 994 628 899"
    },
    {
      name: "references.gregoire.name",
      title: "references.gregoire.title",
      organization: "Groupe Scolaire LIEGMANN",
      phone: "+243 859 131 494"
    },
    {
      name: "references.ajuamungu.name",
      title: "references.ajuamungu.title",
      organization: "Enseignement Supérieur",
      phone: "+243 997 841 542"
    }
  ],
  languages: [
      { name: "print:swahili", level: "print:swahili_level" },
      { name: "print:french", level: "print:french_level" },
      { name: "print:english", level: "print:english_level" },
  ],
  interests: ["interests.religion", "interests.tutoring", "interests.tech_watch", "interests.travel"]
};
