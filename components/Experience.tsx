
import React from 'react';
import { Experience, ThemeColor } from '../types';
import { COLOR_MAP } from '../constants';

interface ExperienceProps {
  experience: Experience[];
  theme: ThemeColor;
}

const ExperienceList: React.FC<ExperienceProps> = ({ experience, theme }) => {
  const colors = COLOR_MAP[theme];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">Professional Experience</h2>
          <div className={`w-20 h-1.5 rounded-full ${colors.primary}`}></div>
        </div>

        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-slate-200">
              <div className={`absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full ${colors.primary}`}></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold font-outfit">{exp.role}</h3>
                  <p className={`font-semibold ${colors.text}`}>{exp.company}</p>
                </div>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceList;
