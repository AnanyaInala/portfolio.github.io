
import React from 'react';
import { Project, ThemeColor } from '../types';
import { COLOR_MAP } from '../constants';

interface ProjectsProps {
  projects: Project[];
  theme: ThemeColor;
}

const Projects: React.FC<ProjectsProps> = ({ projects, theme }) => {
  const colors = COLOR_MAP[theme];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">Featured Projects</h2>
          <div className={`w-20 h-1.5 rounded-full ${colors.primary}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-white text-slate-500 border border-slate-100`}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-outfit font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {project.description}
              </p>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-sm font-bold uppercase tracking-widest ${colors.text} hover:underline`}
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
