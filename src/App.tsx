import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navbar from './components/common/Navbar';
import AnimatedSection from './components/common/AnimatedSection';
import Hero from './components/sections/Hero';
import ProjectsGrid from './components/sections/ProjectsGrid';
import Experience from './components/sections/Experience';
import References from './components/sections/References';
import ResearchAwards from './components/sections/ResearchAwards';
import SkillsMatrix from './components/sections/SkillsMatrix';
import Contact from './components/sections/Contact';
import { portfolioData } from './data/portfolioData';
import PrintCVView from './components/print/PrintCVView';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="bg-slate-50 dark:bg-[#0B0F19] text-slate-800 dark:text-slate-300 transition-colors duration-200 antialiased selection:bg-sky-500 selection:text-white">
        <Navbar />
        <main className="web-interactive-only max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 space-y-24">
          <AnimatedSection><Hero identity={portfolioData.identity} /></AnimatedSection>
          <AnimatedSection><ProjectsGrid projects={portfolioData.projects} /></AnimatedSection>
          <AnimatedSection><Experience experiences={portfolioData.experiences} /></AnimatedSection>
          <AnimatedSection><ResearchAwards awards={portfolioData.conferencesAndAwards} /></AnimatedSection>
          <AnimatedSection><SkillsMatrix skills={portfolioData.skills} /></AnimatedSection>
          <AnimatedSection><References references={portfolioData.references} /></AnimatedSection>
          <AnimatedSection><Contact /></AnimatedSection>
        </main>
        <PrintCVView data={portfolioData} />
      </div>
    </I18nextProvider>
  );
}

export default App;
