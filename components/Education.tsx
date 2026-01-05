
import React from 'react';
import { Education, ThemeColor } from '../types';
import { COLOR_MAP } from '../constants';

interface EducationProps {
  education: Education[];
  theme: ThemeColor;
}

const EducationList: React.FC<EducationProps> = ({ education, theme }) => {
  const colors = COLOR_MAP[theme];

  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">Education</h2>
          <div className={`w-20 h-1.5 rounded-full ${colors.primary}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <span className={`text-xs font-bold uppercase tracking-widest ${colors.text} mb-2 block`}>
                {edu.duration}
              </span>
              <h3 className="text-xl font-bold font-outfit mb-2">{edu.degree}</h3>
              <p className="text-slate-700 font-medium mb-1">{edu.institution}</p>
              <p className="text-slate-500 text-sm">{edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationList;
