import React from 'react';
import { useTranslation } from 'react-i18next';

const Architecture = () => {
  const { t } = useTranslation();

  return (
    <section id="architecture" className="space-y-10">
      <div>
        <div className="flex items-center space-x-3 text-blue-600 dark:text-sky-400 font-mono text-xs font-bold uppercase tracking-widest">
          <span>{t('architecture.title')}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
          {t('architecture.subtitle')}
        </h2>
      </div>
    </section>
  );
};

export default Architecture;
