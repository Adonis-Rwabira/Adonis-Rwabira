import React from 'react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { portfolioData } from '../../data/portfolioData';
import { Github } from './Icons';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const sectionIds = ['vision', 'projets', 'experience', 'recherche', 'competences', 'references'];
  const activeId = useScrollSpy(sectionIds.map(id => `#${id}`), { rootMargin: '-50% 0px -50% 0px' });

  const navLinks = [
    { href: '#vision', label: 'nav.vision' },
    { href: '#projets', label: 'nav.projects' },
    { href: '#experience', label: 'nav.experience' },
    { href: '#recherche', label: 'nav.research' },
    { href: '#competences', label: 'nav.skills' },
    { href: '#references', label: 'nav.contact' },
  ];

  return (
    <header className="no-print sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-[#0B0F19]/90 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-indigo-600 to-sky-500 p-0.5 shadow-md shadow-blue-500/10 flex items-center justify-center">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-mono font-bold text-sky-400 text-sm tracking-tighter">
              {portfolioData.identity.profilePhoto ? (
                <img src={portfolioData.identity.profilePhoto} alt="Adonis Rwabira" className="rounded-[10px]" />
              ) : (
                'AR'
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-900 dark:text-slate-100 text-sm tracking-tight">Adonis Rwabira</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium hidden sm:inline-block">{t('status')}</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-xs uppercase tracking-wider font-mono font-semibold">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href} 
              className={`transition-colors ${activeId === link.href.substring(1) ? 'text-sky-500' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400'}`}>
              {t(link.label)}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-2.5">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800/90 p-0.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-mono font-semibold">
            <button onClick={() => i18n.changeLanguage('fr')} className={`px-2 py-0.5 rounded-md transition-all ${i18n.language.startsWith('fr') ? 'bg-white dark:bg-sky-500 text-slate-900 dark:text-white shadow-sm font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>FR</button>
            <button onClick={() => i18n.changeLanguage('en')} className={`px-2 py-0.5 rounded-md transition-all ${i18n.language.startsWith('en') ? 'bg-white dark:bg-sky-500 text-slate-900 dark:text-white shadow-sm font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>EN</button>
          </div>
          <ThemeToggle />
          <a href="https://github.com/Adonis-Rwabira" rel="noopener noreferrer" target="_blank" title={t('nav.githubTitle')} className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 rounded-lg transition-colors border border-slate-200 dark:border-slate-700/60">
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
