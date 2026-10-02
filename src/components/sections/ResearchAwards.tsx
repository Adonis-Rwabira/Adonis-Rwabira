import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ConferenceAndAward } from '../../data/types';
import { Award, Trophy, Mic } from 'lucide-react';

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
        {awards.map(item => {
          let Icon;
          switch (item.badge) {
            case 'speaker':
              Icon = Mic;
              break;
            case 'winner':
              Icon = Trophy;
              break;
            default:
              Icon = Award;
          }

          return (
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
              <div className="rounded-xl border-2 border-amber-300 dark:border-amber-600/40 bg-gradient-to-b from-amber-50/50 to-orange-50/20 dark:from-slate-900 dark:to-slate-950 p-4 text-center space-y-2 relative overflow-hidden">
                <div className="text-[9px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">{t(item.organization)}</div>
                <div className="w-10 h-10 mx-auto rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg border border-amber-400/50">
                  <Icon />
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">{t('certificate')}</div>
                <img src={item.certificateImage} alt={`${item.title} certificate`} className="absolute inset-0 w-full h-full object-cover opacity-0"/>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResearchAwards;
