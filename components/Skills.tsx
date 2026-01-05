
import React from 'react';
import { Skill, ThemeColor } from '../types';
import { COLOR_MAP } from '../constants';

interface SkillsProps {
  skills: Skill[];
  theme: ThemeColor;
}

const Skills: React.FC<SkillsProps> = ({ skills, theme }) => {
  const colors = COLOR_MAP[theme];

  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">Technical Expertise</h2>
          <div className={`mx-auto w-20 h-1.5 rounded-full ${colors.primary}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map(cat => (
            <div key={cat} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold font-outfit mb-6 capitalize">{cat}</h3>
              <div className="space-y-6">
                {skills.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className={`text-sm font-bold ${colors.text}`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${colors.primary} transition-all duration-1000`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
