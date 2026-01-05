
import React from 'react';
import { PortfolioData, ThemeColor } from '../types';
import { COLOR_MAP } from '../constants';

interface HeroProps {
  data: PortfolioData;
  theme: ThemeColor;
}

const Hero: React.FC<HeroProps> = ({ data, theme }) => {
  const colors = COLOR_MAP[theme];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-slate-50">
        <div className={`absolute top-0 right-0 w-96 h-96 ${colors.bgLight} rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 ${colors.bgLight} rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2`}></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <span className={`inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full ${colors.bgLight} ${colors.text}`}>
            Available for new projects
          </span>
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-6 leading-tight">
            I'm <span className={`bg-gradient-to-r ${colors.accent} bg-clip-text text-transparent`}>{data.name}</span>, <br />
            {data.title}
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            {data.bio}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className={`px-8 py-4 rounded-xl font-semibold text-white transition-all shadow-lg ${colors.primary} ${colors.hover} hover:scale-105`}
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
