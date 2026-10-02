import React from 'react';
import { useTranslation } from 'react-i18next';
import type { SkillCategory } from '../../data/types';
import { Server, Code, BrainCircuit, Database, Smartphone, ShieldCheck } from 'lucide-react';

interface SkillsMatrixProps {
  skills: SkillCategory[];
}

const iconMap: { [key: string]: React.ElementType } = {
  architectures: Server,
  backend: Code,
  ai_ml: BrainCircuit,
  data_streaming: Database,
  frontend: Smartphone,
  devops_security: ShieldCheck,
};

const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ skills }) => {
  const { t } = useTranslation();

  return (
    <section id="competences" className="space-y-8">
      <div>
        <div className="flex items-center space-x-3 text-blue-600 dark:text-sky-400 font-mono text-xs font-bold uppercase tracking-widest">
          <span>{t('skills_section.title')}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
          {t('skills_section.subtitle')}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(skillCategory => {
          const Icon = iconMap[skillCategory.category.toLowerCase().replace(/ & /g, '_').replace(/\s/g, '_')];
          return (
            <div key={skillCategory.category} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-3 shadow-sm">
              <div className="flex items-center space-x-2 text-blue-600 dark:text-sky-400">
                {Icon && <Icon className="w-5 h-5" />}
                <h3 className="font-bold text-sm tracking-wide uppercase font-mono">{t(skillCategory.category)}</h3>
              </div>
              <ul className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                {skillCategory.skills.map(skill => (
                  <li key={skill.name}>{t(skill.name)} {skill.level && `(${t(skill.level)})`}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsMatrix;
