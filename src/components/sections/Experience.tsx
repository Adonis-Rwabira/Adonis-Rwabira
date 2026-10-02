import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ExperienceItem } from '../../data/types';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="space-y-8">
      <div>
        <div className="flex items-center space-x-3 text-blue-600 dark:text-sky-400 font-mono text-xs font-bold uppercase tracking-widest">
          <span>{t('experience_section.title')}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
          {t('experience_section.subtitle')}
        </h2>
      </div>
      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            <div className={`absolute -left-[32px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 group-hover:scale-125 transition-transform ${exp.isCurrent ? 'bg-blue-600 dark:bg-sky-500' : 'bg-slate-400 dark:bg-slate-700'}`}></div>
            <div className="space-y-1 bg-white dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{t(exp.role)}</h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-sky-500/10 text-blue-700 dark:text-sky-400 font-semibold">{t(exp.period)}</span>
              </div>
              <p className="text-xs font-mono text-slate-500">{t(exp.company)} • {t(exp.location)}</p>
              <ul className="text-sm text-slate-700 dark:text-slate-300 pt-1 leading-relaxed list-disc list-inside">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{t(achievement)}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
