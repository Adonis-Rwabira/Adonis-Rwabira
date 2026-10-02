import React from 'react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../data/portfolioData';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="space-y-8">
      <div>
        <div className="flex items-center space-x-3 text-blue-600 dark:text-sky-400 font-mono text-xs font-bold uppercase tracking-widest">
          <span>{t('contact_section.title')}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
          {t('contact_section.subtitle')}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <a href={`mailto:${portfolioData.identity.email}`} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-sky-500/50 transition-all flex flex-col items-center justify-center">
          <Mail className="w-10 h-10 mb-3 text-sky-500" />
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t('contact_section.email.title')}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{portfolioData.identity.email}</p>
        </a>
        <a href={portfolioData.identity.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-sky-500/50 transition-all flex flex-col items-center justify-center">
          <Linkedin className="w-10 h-10 mb-3 text-sky-500" />
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t('contact_section.linkedin.title')}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{portfolioData.identity.socials.linkedin.replace('https://linkedin.com/in/', '')}</p>
        </a>
        <a href={portfolioData.identity.socials.github} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-sky-500/50 transition-all flex flex-col items-center justify-center">
          <Github className="w-10 h-10 mb-3 text-sky-500" />
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t('contact_section.github.title')}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{portfolioData.identity.socials.github.replace('https://github.com/', '')}</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
