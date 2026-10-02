import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ConferenceAndAward } from '../../data/types';

interface ResearchAwardsProps {
  awards: ConferenceAndAward[];
}

const ResearchAwards: React.FC<ResearchAwardsProps> = ({ awards }) => {
  const { t } = useTranslation();

  return (
    <section id="recherche" className="space-y-8">
      <div>
        <div className="flex items-center space-x-3 text-blue-600 dark:text-sky-400 font-mono text-xs font-bold uppercase tracking-widest">
          <span>{t('research_section.title')}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
          {t('research_section.subtitle')}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map(item => (
            <div key={item.title} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 flex flex-col justify-between space-y-4 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-sky-400">{t(item.badge)}</span>
                  <span className="text-xs font-mono text-slate-500">{t(item.date)}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{t(item.title)}</h4>
                <ul className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                  {item.description.map(d => (
                    <li key={d}>{t(d)}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md group relative">
                <img src={item.certificateImage} alt={`${t(item.title)} ${t('certificate')}`} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-xs font-bold">{t(item.organization)}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ResearchAwards;
