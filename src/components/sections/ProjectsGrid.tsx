import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ProjectItem } from '../../data/types';
import ProjectCard from './ProjectCard';

interface ProjectsGridProps {
  projects: ProjectItem[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const { t } = useTranslation();

  return (
    <section id="projets" className="space-y-10">
      <div>
        <div className="flex items-center space-x-3 text-blue-600 dark:text-sky-400 font-mono text-xs font-bold uppercase tracking-widest">
          <span>{t('projects_section.title')}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
          {t('projects_section.subtitle')}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          {t('projects_section.description')}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
