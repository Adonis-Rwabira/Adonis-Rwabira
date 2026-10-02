
import React from 'react';
import { useTranslation } from 'react-i18next';
import type { PortfolioData } from '../../data/types';
import PrintFooter from './PrintFooter';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Linkedin, Github } from '../common/Icons';

const PrintCVView: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const { t } = useTranslation(['translation', 'print']);
  const { identity, experiences, projects, conferencesAndAwards, skills, references, languages, interests } = data;

  const getUsername = (url: string) => {
    if (!url) return '';
    return url.split('/').filter(Boolean).pop() || '';
  };

  return (
    <div className="print-only max-w-[1100px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-sm">

      {/* Header */}
      <header className="bg-sky-950 text-white flex items-center p-4">
        <img src={identity.profilePhoto} alt={t('print:profile_alt')} className="w-[150px] object-cover flex-shrink-0 rounded-md" />
        <div className="flex-grow pl-5">
            <h1 className="text-2xl font-bold">{identity.fullName}</h1>
            <p className="text-blue-200 text-base mb-2 font-semibold">{t(identity.headline)}</p>
            <div className="text-blue-100 text-xs space-y-1">
                <p className="flex items-center"><Mail className="mr-2 w-4 h-4" /> {identity.email}</p>
                <p className="flex items-center"><Phone className="mr-2 w-4 h-4" /> {identity.phone}</p>
                <p className="flex items-center"><MapPin className="mr-2 w-4 h-4" /> {identity.location}</p>
            </div>
        </div>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-12 gap-x-6 p-8">

        {/* Main Column */}
        <main className="col-span-7">
          <section className="mb-8">
            <h2 className="text-lg font-bold text-sky-950 border-b-2 border-gray-200 pb-2 mb-4">{t('print:executive_summary_title')}</h2>
            <p className="text-xs text-justify leading-relaxed">{t(identity.manifesto)}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-bold text-sky-950 border-b-2 border-gray-200 pb-2 mb-4">{t('print:professional_experience_title')}</h2>
            <div className="space-y-6">
              {experiences.map(exp => (
                <div key={exp.id} className="pb-6 border-b border-dashed border-gray-200 last:border-b-0 last:pb-0">
                  <h3 className="text-base font-bold text-sky-950">{t(exp.role)}</h3>
                  <p className="text-xs text-gray-500 font-medium mb-2">{t(exp.company)} | {t(exp.period)}</p>
                  <div className="text-xs italic text-gray-700 bg-gray-50 px-2 py-1 rounded-md inline-block mb-2"><span className='font-semibold not-italic'>{t('print:technologies')}:</span> {exp.technologies.join(', ')}</div>
                  <ul className="space-y-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="relative pl-4 text-xs leading-5 before:content-['\2022'] before:text-sky-950 before:font-bold before:absolute before:left-0">{t(ach)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
              <h2 className="text-lg font-bold text-sky-950 border-b-2 border-gray-200 pb-2 mb-4">{t('print:awards_and_conferences_title')}</h2>
              {conferencesAndAwards.map(cert => (
                  <div className="pb-6 mb-6 border-b border-dashed border-gray-200 last:border-b-0 last:pb-0 last:mb-0" key={cert.title}>
                      <div className="mb-3">
                          <h3 className="text-base font-bold text-sky-950">{t(cert.badge)}</h3>
                          <p className="text-xs text-gray-500 italic mb-2">{t(cert.title)} | {t(cert.date)}</p>
                          <ul className="space-y-1">
                            {cert.description.map((desc, i) => (
                                <li className="relative pl-4 text-xs leading-5 before:content-['\2022'] before:text-sky-950 before:font-bold before:absolute before:left-0" key={i}>{t(desc)}</li>
                            ))}
                          </ul>
                      </div>
                      <div className="w-full rounded-md overflow-hidden shadow-sm border border-gray-200">
                          <img src={cert.certificateImage} alt={`${t(cert.title)} - ${t(cert.badge)}`} className="w-full h-auto block" />
                      </div>
                  </div>
              ))}
          </section>

          <section className="mb-8">
              <h2 className="text-lg font-bold text-sky-950 border-b-2 border-gray-200 pb-2 mb-4">{t('print:academic_projects_title')}</h2>
              <div className="space-y-6">
                  {projects.map(proj => (
                      <div className="pb-4 border-b border-dashed border-gray-200 last:border-b-0 last:pb-0" key={proj.id}>
                          <h3 className="text-base font-bold text-sky-950">{t(proj.title)}</h3>
                           {(proj.githubUrl || proj.liveUrl) && (
                              <a href={proj.githubUrl || proj.liveUrl} target="_blank" className="text-blue-700 font-semibold hover:underline break-all text-xs">
                                {proj.githubUrl ? proj.githubUrl.replace("https://","") : proj.liveUrl?.replace("https://","")}
                              </a>
                            )}
                          <div className="text-xs italic text-gray-700 bg-gray-50 px-2 py-1 rounded-md inline-block my-2"><span className='font-semibold not-italic'>{t('print:domain')}:</span> {t(proj.category)}</div>
                          <p className="text-justify text-xs mt-2">{t(proj.shortDescription)}</p>
                      </div>
                  ))}
              </div>
          </section>
        </main>

        {/* Sidebar Column */}
        <aside className="col-span-5 pl-6 border-l border-gray-200">
            <section className="mb-6">
                <h2 className="text-lg font-bold text-sky-950 border-b-2 border-gray-200 pb-2 mb-4">{t('print:personal_information_title')}</h2>
                <div className="text-xs space-y-2">
                    <p><span className="font-semibold text-gray-600">{t('print:birth_date')}:</span> {t(identity.birthDate)}</p>
                    <p><span className="font-semibold text-gray-600">{t('print:nationality')}:</span> {t(identity.nationality)}</p>
                    <p><span className="font-semibold text-gray-600">{t('print:marital_status')}:</span> {t(identity.maritalStatus)}</p>
                    <p className="flex items-start"><span className="font-semibold text-gray-600 flex items-center"><Linkedin className="w-3 h-3 mr-1.5"/>{t('print:linkedin_label')}:</span> <a href={identity.socials.linkedin} target="_blank" className="text-blue-700 font-semibold hover:underline break-all ml-1">{getUsername(identity.socials.linkedin)}</a></p>
                    <p className="flex items-start"><span className="font-semibold text-gray-600 flex items-center"><Github className="w-3 h-3 mr-1.5"/>{t('print:github_label')}:</span> <a href={identity.socials.github} target="_blank" className="text-blue-700 font-semibold hover:underline break-all ml-1">{getUsername(identity.socials.github)}</a></p>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-lg font-bold text-sky-950 border-b-2 border-gray-200 pb-2 mb-4">{t('print:technical_skills_title')}</h2>
                {skills.map(skillCategory => (
                    <div className="mb-4" key={skillCategory.category}>
                        <h3 className="font-bold text-gray-800 mb-1 text-sm">{t(skillCategory.category)}</h3>
                        <p className="text-xs text-gray-600">{skillCategory.skills.map(s => t(s.name)).join(', ')}</p>
                    </div>
                ))}
            </section>
            
            <section className="mb-6">
                <h2 className="text-lg font-bold text-sky-950 border-b-2 border-gray-200 pb-2 mb-4">{t('print:education_title')}</h2>
                <div className="mb-4">
                    <h3 className="text-sm font-bold text-gray-800">{t(identity.degree)}</h3>
                    <p className="text-xs text-gray-600 italic">{t('print:ongoing')}</p>
                    <p className="text-xs font-semibold mt-1">{t('print:university')}</p>
                    <p className="text-xs mt-1">{t('print:specialization')}</p>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-lg font-bold text-sky-950 border-b-2 border-gray-200 pb-2 mb-4">{t('print:languages_title')}</h2>
                <div className="text-xs space-y-1">
                    {languages.map(lang => (
                        <p key={lang.name}><strong className="text-gray-700">{t(lang.name)}:</strong> {t(lang.level)}</p>
                    ))}
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-lg font-bold text-sky-950 border-b-2 border-gray-200 pb-2 mb-4">{t('print:interests_title')}</h2>
                <ul className="text-xs space-y-1">
                    {interests.map(interest => (
                        <li className="relative pl-4 leading-5 before:content-['\2022'] before:text-sky-950 before:font-bold before:absolute before:left-0" key={interest}>{t(interest)}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-bold text-sky-950 border-b-2 border-gray-200 pb-2 mb-4">{t('print:references_title')}</h2>
                {references.map(ref => (
                    <div className="p-3 mb-3 bg-gray-50 rounded-lg border-l-4 border-sky-950" key={ref.name}>
                        <p className="font-bold text-gray-800 text-sm">{t(ref.name)}</p>
                        <p className="text-xs text-gray-600 italic mb-1">{t(ref.title)}</p>
                        <p className="text-xs text-gray-700 flex items-center"><Phone className="w-3 h-3 text-center text-sky-950" /><span className="ml-2">{ref.phone}</span></p>
                        {ref.email && <p className="text-xs text-gray-700 flex items-center mt-1"><Mail className="w-3 h-3 text-center text-sky-950" /><span className="ml-2 text-xs">{ref.email}</span></p>}
                    </div>
                ))}
            </section>
        </aside>
      </div>

      <PrintFooter signatureUrl={identity.signaturePhoto} />
    </div>
  );
};

export default PrintCVView;
