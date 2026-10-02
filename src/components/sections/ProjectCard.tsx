import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectItem } from '../../data/types';

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-400/50 transition-all shadow-md">
      <div className="space-y-4">
        <span className={`px-2.5 py-1 text-xs font-mono font-semibold rounded ${project.category === 'AI_RESEARCH' ? 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/30' : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30'}`}>
          {t(project.category)}
        </span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {t(project.title)}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {t(project.shortDescription)}
        </p>
        <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-400">
          {project.technologies.map(tech => (
            <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">{tech}</span>
          ))}
        </div>
      </div>
      <div className="pt-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 mt-4 text-xs font-mono">
        <span className="text-slate-500">{t(project.role)}</span>
        <a href={project.liveUrl || project.githubUrl} target="_blank" className="text-indigo-600 dark:text-sky-400 font-semibold hover:underline">{t('details')} →</a>
      </div>
    </div>
  );
};

export default ProjectCard;
