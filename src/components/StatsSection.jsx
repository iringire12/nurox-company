import React from 'react';
import { Hexagon, Ticket } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-12 relative w-full bg-[#03050a]">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Reliable Performance */}
          <div className="bg-[#070b15] border border-white/5 rounded-2xl p-10 flex flex-col h-full hover:border-blue-500/30 transition-colors duration-300">
            <div className="flex items-center gap-2 mb-10">
              <Hexagon className="text-blue-500" size={24} fill="currentColor" />
              <span className="text-2xl font-bold text-white tracking-widest uppercase">Nurox</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white tracking-tight">98</span>
                <span className="text-4xl font-bold text-blue-500">%</span>
              </div>
              <p className="text-gray-400 text-sm mt-3 font-medium">Reliable performance</p>
            </div>
            <div className="h-px bg-white/5 w-full mb-8 mt-auto"></div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Consistent, dependable operation ensuring smooth performance.
            </p>
          </div>

          {/* Card 2: Projects Completed */}
          <div className="bg-[#070b15] border border-white/5 rounded-2xl p-10 flex flex-col h-full hover:border-blue-500/30 transition-colors duration-300">
            <div className="flex -space-x-4 mb-10">
              <img className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" src="https://i.pravatar.cc/150?img=32" alt="Member" />
              <img className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" src="https://i.pravatar.cc/150?img=12" alt="Member" />
              <img className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" src="https://i.pravatar.cc/150?img=5" alt="Member" />
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white tracking-tight">15</span>
                <span className="text-4xl font-bold text-white">M</span>
              </div>
              <p className="text-gray-400 text-sm mt-3 font-medium">Projects completed</p>
            </div>
            <div className="h-px bg-white/5 w-full mb-8 mt-auto"></div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consec tetur Cursus purus parturient.
            </p>
          </div>

          {/* Card 3: Intuitive Design */}
          <div className="bg-[#070b15] border border-white/5 rounded-2xl p-10 flex flex-col h-full hover:border-blue-500/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                <Ticket size={20} />
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Help desk ticketing system</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white tracking-tight">43</span>
                <span className="text-4xl font-bold text-blue-500">+</span>
              </div>
              <p className="text-gray-400 text-sm mt-3 font-medium">Intuitive design</p>
            </div>
            <div className="h-px bg-white/5 w-full mb-8 mt-auto"></div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Serving users globally with accessible and reliable solutions worldwide.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
