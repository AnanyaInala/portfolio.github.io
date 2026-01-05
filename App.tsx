
import React from 'react';
import { useState } from 'react';
import { ThemeColor } from './types';
import { INITIAL_DATA, COLOR_MAP } from './constants';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ExperienceList from './components/Experience';
import EducationList from './components/Education';

const App: React.FC = () => {
  const data = INITIAL_DATA;
  const [theme, setTheme] = useState<ThemeColor>(ThemeColor.Indigo);

  const colors = COLOR_MAP[theme];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-30 border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg ${colors.primary} rotate-12 flex items-center justify-center text-white font-bold`}>
              {data.name.charAt(0)}
            </div>
            <span className="font-outfit font-bold text-xl tracking-tight text-slate-900">{data.name}</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#education" className="hover:text-slate-900 transition-colors">Education</a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
          {/* Theme Switcher for the user to still enjoy customization */}
          <div className="flex gap-2 ml-4">
             {(Object.keys(COLOR_MAP) as ThemeColor[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setTheme(c)}
                  className={`w-6 h-6 rounded-full border border-white shadow-sm transition-transform hover:scale-110 ${theme === c ? 'ring-2 ring-slate-300 scale-110' : ''} ${COLOR_MAP[c].primary}`}
                  title={`Switch to ${c} theme`}
                />
              ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero data={data} theme={theme} />
        <ExperienceList experience={data.experience} theme={theme} />
        <Projects projects={data.projects} theme={theme} />
        <EducationList education={data.education} theme={theme} />
        <Skills skills={data.skills} theme={theme} />
        
        {/* Certifications Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">Certifications</h2>
              <div className={`w-20 h-1.5 rounded-full ${colors.primary}`}></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-xl border border-slate-100 bg-slate-50 shadow-sm transition-transform hover:-translate-y-1">
                  <div className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${colors.primary}`}></div>
                  <div>
                    <h4 className="font-bold text-slate-800 leading-tight">{cert.name}</h4>
                    <p className="text-sm text-slate-500 mt-1">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-20 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-outfit font-bold text-white mb-8">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
             <a 
               href={`mailto:${data.email}`} 
               className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-all border border-slate-700 shadow-lg"
             >
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
               {data.email}
             </a>
             {data.socials.linkedin && (
               <a 
                 href={`https://${data.socials.linkedin}`} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-all border border-slate-700 shadow-lg"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                 LinkedIn
               </a>
             )}
             {data.socials.github && (
               <a 
                 href={`https://${data.socials.github}`} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-all border border-slate-700 shadow-lg"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                 GitHub
               </a>
             )}
          </div>
          <div className="max-w-2xl mx-auto border-t border-slate-800 pt-8 mt-8">
             <p className="text-sm">
                © {new Date().getFullYear()} {data.name}. All Rights Reserved.
             </p>
             <p className="text-xs mt-2 opacity-50">{data.location} | {data.phone}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
