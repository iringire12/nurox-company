import React from 'react';
import { Activity, Headset, Settings, CornerDownLeft, ChevronDown } from 'lucide-react';

const ServicesShowcase = () => {
  return (
    <section className="py-24 bg-[#030816] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 px-4">
          <div className="text-left">
            <span className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-4 inline-block">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Powerful AI Services <br className="hidden md:block" /> Tailored to You
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Powering your digital transformation with intelligent solutions.
            </p>
          </div>
          
          <div className="pb-2">
            <button className="px-8 py-3 bg-[#051125] text-white border border-blue-600/50 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
              All Services
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Main Feature - Data Analysis */}
          <div className="bg-[#070b15]/50 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Content */}
              <div className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center">
                <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 mb-8">
                  <Activity size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Automated AI – Data Analysis</h3>
                <p className="text-gray-400 leading-relaxed mb-10">
                  Leverage artificial intelligence to collect, analyze, and visualize data trends, 
                  helping businesses make smarter, faster decisions.
                </p>
                <button className="w-fit bg-gradient-to-r from-[#0a1a3a] to-[#070b15] text-white border border-blue-500/30 px-8 py-3 rounded-lg font-medium hover:border-blue-500 transition-all duration-300">
                  Learn More
                </button>
              </div>

              {/* Right Content - Circular Gauge */}
              <div className="p-10 md:p-16 flex flex-col items-center justify-center bg-[#050914]/30">
                <div className="relative w-64 h-64 md:w-72 md:h-72">
                  <h4 className="absolute top-0 left-0 text-gray-300 font-semibold">Data Analysis</h4>
                  <div className="absolute top-0 right-0 text-gray-500">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* SVG Gauge */}
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-2xl">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1e293b" strokeWidth="4" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f8fafc" strokeWidth="4" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    
                    <circle cx="50" cy="50" r="32" fill="transparent" stroke="#1e293b" strokeWidth="4" />
                    <circle cx="50" cy="50" r="32" fill="transparent" stroke="#94a3b8" strokeWidth="4" strokeDasharray="201" strokeDashoffset="40" strokeLinecap="round" />

                    <circle cx="50" cy="50" r="24" fill="transparent" stroke="#1e293b" strokeWidth="4" />
                    <circle cx="50" cy="50" r="24" fill="transparent" stroke="#475569" strokeWidth="4" strokeDasharray="150.7" strokeDashoffset="15" strokeLinecap="round" />
                  </svg>

                  {/* Legend */}
                  <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex items-center gap-6 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <span className="text-xs text-gray-400">Completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <span className="text-xs text-gray-400">Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                      <span className="text-xs text-gray-400">Assigned</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Intelligent Customer Support */}
            <div className="bg-[#070b15]/50 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm flex flex-col shadow-xl">
              <div className="p-10 pb-6">
                <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 mb-8">
                  <Headset size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Intelligent Customer Support</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Enhance customer experiences with smart chatbots and virtual assistants. 
                  Deliver instant, 24/7 support.
                </p>
                <button className="w-fit bg-gradient-to-r from-[#0a1a3a] to-[#070b15] text-white border border-blue-500/30 px-8 py-3 rounded-lg font-medium hover:border-blue-500 transition-all duration-300 mb-8">
                  Learn More
                </button>
              </div>
              
              {/* Chat Simulation Visual */}
              <div className="mt-auto px-6 pb-10 flex flex-col items-center">
                <div className="w-full max-w-sm bg-[#050914]/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-[#161b2c] rounded-lg flex items-center justify-center text-white mb-6 border border-white/10 shadow-lg">
                    <Activity size={20} className="text-gray-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">How Can I Assist You?</h4>
                  <p className="text-gray-500 text-sm mb-8">Quickly find answers, get assistance, and explore AI-powered insights—all in one place</p>
                  
                  <div className="w-full relative mb-6">
                    <div className="bg-[#0a0f1d] border border-white/5 rounded-xl px-5 py-3 flex justify-between items-center text-gray-400 text-sm">
                      <span>write anything here</span>
                      <CornerDownLeft size={16} />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {['what is web 3?', 'where is anfield?', 'when is ww2 start?'].map((tag) => (
                      <div key={tag} className="bg-[#0a0f1d] border border-white/5 rounded-full px-4 py-1.5 text-xs text-gray-500 flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-blue-400" />
                         </div>
                         {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Predictive Maintenance Solutions */}
            <div className="bg-[#070b15]/50 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm flex flex-col shadow-xl">
              <div className="p-10 pb-6">
                <div className="w-12 h-12 bg-blue-600/10 border border-white/20 rounded-xl flex items-center justify-center text-blue-500 mb-8">
                  <Settings size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Predictive Maintenance Solutions</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Prevent failures before they happen using AI-driven monitoring tools. 
                  Track machine health, predict breakdowns, and reduce downtime.
                </p>
                <button className="w-fit bg-gradient-to-r from-[#0a1a3a] to-[#070b15] text-white border border-blue-500/30 px-8 py-3 rounded-lg font-medium hover:border-blue-500 transition-all duration-300 mb-8">
                  Learn More
                </button>
              </div>

              {/* Line Chart Visual */}
              <div className="mt-auto px-6 pb-10 flex items-center justify-center">
                <div className="w-full max-w-sm bg-[#050914]/40 border border-white/5 rounded-2xl p-8 relative overflow-hidden h-[300px]">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-gray-300 font-semibold text-sm">Maintain Solutions</h4>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 bg-[#0a0f1d] border border-white/5 rounded-md px-2 py-0.5 text-[10px] text-gray-400">
                        This Week <ChevronDown size={10} />
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="relative h-40 mt-10">
                    <svg viewBox="0 0 400 150" className="w-full h-full text-blue-500/20">
                      {/* Grid Lines */}
                      {[0, 1, 2, 3, 4, 5, 6].map(i => (
                        <line key={i} x1={i * 60 + 20} y1="0" x2={i * 60 + 20} y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                      ))}
                      
                      {/* Main Path */}
                      <path
                        d="M0,120 Q50,80 100,120 T200,80 T300,100 T400,60"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeOpacity="0.6"
                      />
                      
                      {/* Highlight Point */}
                      <g transform="translate(260, 92)">
                        <circle r="6" fill="#030816" stroke="white" strokeWidth="2" />
                        <rect x="-20" y="-70" width="40" height="50" rx="4" fill="#0A0F1D" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
                        <text x="0" y="-50" textAnchor="middle" fill="white" className="text-[10px] font-bold">6</text>
                        <text x="0" y="-35" textAnchor="middle" fill="gray" className="text-[8px]">Task</text>
                      </g>
                    </svg>
                  </div>

                  {/* Day Labels */}
                  <div className="flex justify-between mt-4 px-2">
                    {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, i) => (
                      <div key={day} className="flex flex-col items-center gap-1">
                        <div className={`text-[8px] font-bold ${i === 4 ? 'text-white' : 'text-gray-500'}`}>{i === 4 ? '24' : ''}</div>
                        <div className={`text-[8px] font-medium ${i === 4 ? 'text-white' : 'text-gray-600'}`}>{day}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default ServicesShowcase;
