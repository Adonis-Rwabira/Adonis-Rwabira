import React from 'react';
import { useTranslation } from 'react-i18next';
import { Identity } from '../../data/types';
import { ArrowDown, GraduationCap, Code, Star, Cpu, ShieldCheck } from 'lucide-react';

interface HeroProps {
  identity: Identity;
}

const Hero: React.FC<HeroProps> = ({ identity }) => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-4 md:pt-8" id="vision">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Colonne de gauche */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-slate-900 border border-blue-200 dark:border-sky-500/40 text-xs font-mono text-blue-700 dark:text-sky-300 shadow-sm">
            <Code className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 animate-pulse" />
            <span className="font-semibold">{t('hero.badge')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
            {t('hero.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 dark:from-sky-400 dark:via-indigo-400 dark:to-blue-500">{t('hero.titleHighlight')}</span> {t('hero.titleEnd')}
          </h1>
          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-600/40 flex items-center space-x-3 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-medium">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex-shrink-0 flex items-center justify-center font-bold">
              <GraduationCap />
            </div>
            <span><strong>{t('hero.degree')}</strong> | {t('hero.promotion')}</span>
          </div>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-medium text-sm transition-all shadow-lg shadow-blue-500/20 flex items-center space-x-2" href="#projets">
              <span>{t('hero.ctaProjects')}</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 text-xs font-mono text-slate-600 dark:text-slate-400">
            <a className="hover:text-blue-600 dark:hover:text-sky-400 flex items-center space-x-1.5" href={identity.socials.github} target="_blank" rel="noopener noreferrer">
              <span>{identity.socials.github.replace('https://', '')}</span>
            </a>
            <span>•</span>
            <a className="hover:text-blue-600 dark:hover:text-sky-400 flex items-center space-x-1.5" href={identity.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <span>{identity.socials.linkedin.replace('https://www.linkedin.com/in/', '')}</span>
            </a>
            <span>•</span>
            <a className="hover:text-blue-600 dark:hover:text-sky-400" href={`mailto:${identity.email}`}>
              <span>{identity.email}</span>
            </a>
          </div>
        </div>

        {/* Colonne de droite - Carte de profil */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <div className="w-full max-w-[420px] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative">
            <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400"></div>
            <div className="p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-900 via-blue-950 to-indigo-900 border-2 border-sky-400/80 p-1 flex items-center justify-center shadow-lg">
                      <img src={identity.profilePhoto} alt={identity.fullName} className="rounded-xl w-full h-full object-cover"/>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">{identity.fullName}</h3>
                    <p className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold">{t(identity.headline)}</p>
                    <p className="text-[11px] text-slate-500 font-mono">{identity.location}</p>
                  </div>
                </div>
                <span className="flex-shrink-0 px-2 py-1 text-[10px] font-mono font-bold rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-600/40">ULPGL 2026</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3.5 space-y-3 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold text-center">{t('hero.key_skills')}</h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 shadow-sm">
                        <Star className="w-5 h-5 mx-auto text-amber-500" />
                        <p className="text-[10px] font-semibold mt-1">{t('hero.skill_ai')}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 shadow-sm">
                        <Cpu className="w-5 h-5 mx-auto text-sky-500" />
                        <p className="text-[10px] font-semibold mt-1">{t('hero.skill_backend')}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 shadow-sm">
                        <ShieldCheck className="w-5 h-5 mx-auto text-emerald-500" />
                        <p className="text-[10px] font-semibold mt-1">{t('hero.skill_security')}</p>
                    </div>
                </div>
              </div>
               <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">{t('hero.tech_stack')}</span>
                <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-blue-800 font-medium">Neuro-Symbolic AI</span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-medium">NestJS</span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-medium">Google OR-Tools</span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 font-medium">FastAPI</span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-medium">Forensic C#</span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-medium">PostgreSQL 16</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800/80 px-6 py-2.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-600 dark:text-slate-400">Campus ULPGL • Promotion 2026</span>
                <span className="text-blue-600 dark:text-sky-400 font-bold">100% Vérifiable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
