import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardMockup from './DashboardMockup';

const Hero = () => {
  return (
    <section className="relative w-full pt-40 pb-32 flex flex-col items-center justify-center z-10 text-center">
      
      {/* Abstract Background Glow (to match the slight blue burst in the center of the image) */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Pill Badge */}
      <div className="flex items-center rounded-full bg-[#080d1a] border border-white/5 p-1 pr-4 mb-10 w-fit mx-auto cursor-pointer hover:border-blue-500/50 transition-colors">
        <span className="bg-[#0b2866] text-blue-200 border border-blue-500/30 text-[11px] font-bold px-3 py-1 rounded-full mr-3 shadow-[0_0_10px_rgba(37,99,235,0.2)]">
          New
        </span>
        <span className="text-[13px] text-gray-300 font-medium">New Introducing Nurox 2.0</span>
        <ArrowUpRight size={14} className="text-gray-400 ml-3" />
      </div>

      {/* Huge Centered Headline */}
      <h1 className="text-5xl md:text-[76px] font-bold text-white leading-[1.1] mb-8 max-w-4xl tracking-tight">
        Transform Your Business <br className="hidden md:block"/> With Smarter Tech
      </h1>

      {/* Subheadline text */}
      <p className="text-[17px] text-gray-400 max-w-[650px] mx-auto mb-12 leading-relaxed">
        Empower your team with AI-driven tools that automate workflows, analyze data, 
        and drive smarter decisions—faster than ever.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full mb-24">
        <Link to="/contact" className="bg-[#051125] text-white px-8 py-3.5 rounded-lg border border-blue-600 font-semibold hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
          Get Started
        </Link>
        <Link to="/about" className="bg-transparent text-white px-8 py-3.5 rounded-lg border border-white/10 font-semibold hover:bg-white/5 transition-colors">
          Learn More
        </Link>
      </div>

      {/* Partner Logos Strip (Static) */}
      <div className="w-full max-w-6xl mx-auto border-t border-white/5 pt-10">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 opacity-60">
          
          {/* Logo 1 */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <span className="text-xl font-bold text-white tracking-tight">logo<span className="font-light">ipsum</span></span>
          </div>

          {/* Logo 2 */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
             <span className="text-lg font-bold text-white tracking-widest uppercase">Logoipsum</span>
          </div>

          {/* Logo 3 */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            <span className="text-xl font-bold text-white tracking-tight">logoipsum</span>
          </div>

          {/* Logo 4 */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            <span className="text-xl font-bold text-white tracking-tight">logoipsum</span>
          </div>

          {/* Logo 5 */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M2 12h4l2-2 4 4 4-4 4 4h4"/><path d="M2 18h4l2-2 4 4 4-4 4 4h4"/></svg>
             <span className="text-xl font-bold text-black tracking-tight">logoipsum</span>
          </div>
          
        </div>
      </div>

      {/* Hero Dashboard Preview */}
      <DashboardMockup />

    </section>
  );
};

export default Hero;
