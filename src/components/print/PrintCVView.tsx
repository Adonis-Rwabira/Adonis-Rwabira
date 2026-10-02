import React from 'react';
import { useTranslation } from 'react-i18next';
import type { PortfolioData } from '../../data/types';
import { Mail, Phone, MapPin } from 'lucide-react';

const PrintCVView: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const { t } = useTranslation(['translation', 'print']);
  const { identity, experiences, projects, conferencesAndAwards, skills, references, languages, interests } = data;

  return (
    <div className="print-only max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">

      {/* Header */}
      <header className="bg-sky-950 text-white flex items-center">
        <div className="w-52 min-h-52 flex-shrink-0">
            <img src={identity.profilePhoto} alt={t('print:profile_alt')} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow p-4">
            <h1 className="text-4xl font-bold mb-2">{identity.fullName}</h1>
            <p className="text-blue-200 text-2xl mb-5 font-semibold">{t(identity.headline)}</p>
            <div className="text-blue-100 text-sm space-y-2">
                <p className="flex items-center"><Mail className="mr-3 w-5 text-center text-lg" /> {identity.email}</p>
                <p className="flex items-center"><Phone className="mr-3 w-5 text-center text-lg" /> {identity.phone}</p>
                <p className="flex items-center"><MapPin className="mr-3 w-5 text-center text-lg" /> {identity.location}</p>
            </div>
        </div>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-3 gap-10 p-10">

        {/* Main Column */}
        <div className="col-span-2">
          <section className="mb-10">
            <h2 className="text-xl font-bold text-sky-950 border-b-2 border-gray-200 pb-3 mb-6">{t('print:executive_summary_title')}</h2>
            <p className="text-justify">{t(identity.manifesto)}</p>
          </section>

          <section className="mb-10">
              <h2 className="text-xl font-bold text-sky-950 border-b-2 border-gray-200 pb-3 mb-6">{t('print:professional_experience_title')}</h2>
              <div className="space-y-6">
                  {experiences.map(exp => (
                      <div className="mb-8 pb-6 border-b border-dashed border-gray-200 last:border-b-0" key={exp.id}>
                          <h3 className="text-lg font-bold text-sky-950 mb-1">{t(exp.role)}</h3>
                          <p className="text-sm text-gray-600 font-medium mb-3">{t(exp.company)} | {t(exp.location)} | {t(exp.period)}</p>
                          <div className="text-sm text-gray-700 bg-gray-50 px-2 py-1 rounded-md inline-block mb-3">{t('print:technologies')}: {exp.technologies.join(', ')}</div>
                          <ul className="mt-3 space-y-2">
                              {exp.achievements.map((ach, i) => (
                                  <li className="relative pl-6 before:content-['\2022'] before:text-sky-950 before:font-bold before:absolute before:left-0 before:top-0" key={i}>{t(ach)}</li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </section>

          <section className="mb-10">
              <h2 className="text-xl font-bold text-sky-950 border-b-2 border-gray-200 pb-3 mb-6">{t('print:awards_and_conferences_title')}</h2>
              {conferencesAndAwards.map(cert => (
                  <div className="mb-10 pb-6 border-b border-dashed border-gray-200 last:border-b-0" key={cert.title}>
                      <div className="mb-4">
                          <h3 className="text-lg font-bold text-sky-950 mb-1">{t(cert.badge)}</h3>
                          <p className="text-sm text-gray-500 italic mb-3">{t(cert.title)} | {t(cert.date)}</p>
                          <ul className="ml-4 space-y-2">
                            {cert.description.map((desc, i) => (
                                <li className="relative pl-6 before:content-['\2022'] before:text-sky-950 before:font-bold before:absolute before:left-0 before:top-0" key={i}>{t(desc)}</li>
                            ))}
                          </ul>
                      </div>
                      <div className="w-full rounded-md overflow-hidden shadow-md border border-gray-200">
                          <img src={cert.certificateImage} alt={`${t(cert.title)} - ${t(cert.badge)}`} className="w-full h-auto block" />
                      </div>
                  </div>
              ))}
          </section>

          <section className="mb-8">
              <h2 className="text-xl font-bold text-sky-950 border-b-2 border-gray-200 pb-3 mb-6">{t('print:academic_projects_title')}</h2>
              <div className="space-y-6">
                  {projects.filter(p => p.featured).map(proj => (
                      <div className="mb-8 pb-6 border-b border-dashed border-gray-200 last:border-b-0" key={proj.id}>
                          <h3 className="text-lg font-bold text-sky-950 mb-1">{t(proj.title)}</h3>
                          <div className="text-sm text-gray-700 bg-gray-50 px-2 py-1 rounded-md inline-block mb-2">{t('print:domain')}: {t(proj.category)}</div>
                          <p className="text-justify mt-2">{t(proj.shortDescription)}</p>
                          {proj.githubUrl && 
                            <a href={proj.githubUrl} target="_blank" className="text-blue-700 font-semibold hover:underline break-all">{proj.githubUrl}</a>
                          }
                      </div>
                  ))}
              </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="col-span-1 border-l border-gray-200 pl-10">
            <section className="mb-8">
                <h2 className="text-xl font-bold text-sky-950 border-b-2 border-gray-200 pb-3 mb-6">{t('print:personal_information_title')}</h2>
                <div className="text-sm space-y-2">
                    <p><span>{t('print:birth_date')}:</span> {t(identity.birthDate)}</p>
                    <p><span>{t('print:nationality')}:</span> {t(identity.nationality)}</p>
                    <p><span>{t('print:marital_status')}:</span> {t(identity.maritalStatus)}</p>
                    <p className="flex items-start"><span>LinkedIn:</span> <a href={identity.socials.linkedin} target="_blank" className="text-blue-700 font-semibold hover:underline break-all ml-1">{identity.socials.linkedin.replace('https://','')}</a></p>
                    <p className="flex items-start"><span>GitHub:</span> <a href={identity.socials.github} target="_blank" className="text-blue-700 font-semibold hover:underline break-all ml-1">{identity.socials.github.replace('https://','')}</a></p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-sky-950 border-b-2 border-gray-200 pb-3 mb-6">{t('print:technical_skills_title')}</h2>
                {skills.map(skillCategory => (
                    <div className="mb-5" key={skillCategory.category}>
                        <h3 className="font-bold text-gray-800 mb-2 text-base">{t(skillCategory.category)}</h3>
                        <p className="text-sm text-gray-600">{skillCategory.skills.map(s => t(s.name)).join(', ')}</p>
                    </div>
                ))}
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-sky-950 border-b-2 border-gray-200 pb-3 mb-6">{t('print:education_title')}</h2>
                <div className="mb-4">
                    <h3 className="text-base font-bold text-gray-800">{t(identity.degree)}</h3>
                    <p className="text-sm text-gray-600 italic">{t('print:ongoing')}</p>
                    <p className="text-sm font-semibold mt-1">{t('print:university')}</p>
                    <p className="text-sm mt-2">{t('print:specialization')}</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-sky-950 border-b-2 border-gray-200 pb-3 mb-6">{t('print:languages_title')}</h2>
                <div className="text-sm space-y-2">
                    {languages.map(lang => (
                        <p key={lang.name}><strong className="text-gray-700">{t(lang.name)}:</strong> {t(lang.level)}</p>
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-sky-950 border-b-2 border-gray-200 pb-3 mb-6">{t('print:interests_title')}</h2>
                <ul className="ml-4 text-sm space-y-2">
                    {interests.map(interest => (
                        <li className="relative pl-6 before:content-['\2022'] before:text-sky-950 before:font-bold before:absolute before:left-0 before:top-0" key={interest}>{t(interest)}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-sky-950 border-b-2 border-gray-200 pb-3 mb-6">{t('print:references_title')}</h2>
                {references.map(ref => (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-sky-950" key={ref.name}>
                        <p className="font-bold text-gray-800 mb-1">{t(ref.name)}</p>
                        <p className="text-sm text-gray-600 italic mb-2">{t(ref.title)}</p>
                        <p className="text-sm text-gray-700 flex items-center mt-1"><Phone className="w-4 text-center text-sky-950" /><span className="ml-2">{ref.phone}</span></p>
                    </div>
                ))}
            </section>
        </div>
      </div>

      <footer className="p-8 mt-4 border-t border-gray-200 text-center">
          <div className="mb-4 flex justify-center">
              <img src={identity.signaturePhoto} alt={t('print:signature_alt')} className="h-16 opacity-80" />
          </div>
          <p className="text-sm text-gray-500 font-medium">{t('print:made_in')} {new Date().toLocaleDateString(t('print:locale'), { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      </footer>
    </div>
  );
};

export default PrintCVView;
