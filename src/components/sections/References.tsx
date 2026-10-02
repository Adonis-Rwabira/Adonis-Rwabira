import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ReferenceItem } from '../../data/types';

interface ReferencesProps {
  references: ReferenceItem[];
}

const References: React.FC<ReferencesProps> = ({ references }) => {
  const { t } = useTranslation();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .slice(1) // On ignore le premier mot (ex: 'Ir', 'Mr')
      .map(n => n[0])
      .slice(0, 2) // On garde au maximum 2 initiales
      .join('');
  };

  return (
    <section id="references" className="space-y-8">
      <div>
        <div className="flex items-center space-x-3 text-blue-600 dark:text-sky-400 font-mono text-xs font-bold uppercase tracking-widest">
          <span data-t="references_section.title">{t('references_section.title')}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1" data-t="references_section.subtitle">
          {t('references_section.subtitle')}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {references.map(ref => (
          <div key={ref.name} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-2 shadow-sm">
            <div className="w-9 h-9 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs border border-blue-500/20">
              {getInitials(t(ref.name))}
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white" data-t={ref.name}>{t(ref.name)}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400" data-t={ref.title}>{t(ref.title)}</p>
            <p className="text-xs font-mono text-blue-600 dark:text-sky-400 pt-1 font-semibold">{ref.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References;
