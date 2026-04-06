import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide mb-2">
              Next-Gen Infrastructure
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Unleash the full potential of your data with Nurox
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Stop relying on outdated architecture. Our custom-built neural engines 
              integrate seamlessly into your stack, delivering sub-millisecond latency 
              and hyper-accurate predictive modeling out of the box.
            </p>

            <ul className="space-y-4">
              {[
                "Deploy proprietary models with zero config",
                "Bank-grade security and localized edge compute",
                "Real-time analytics and workflow automation"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-blue-400" />
                  </div>
                  <span className="text-gray-300 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors">
                Discover How It Works
                <ArrowRight size={18} className="text-blue-400" />
              </Link>
            </div>
          </div>

          {/* Image Asset Area */}
          <div className="w-full lg:w-1/2 relative">
             {/* Decorative glow behind image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-[100px] -z-10" />
             
             {/* The Generated 3D Asset */}
             <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 bg-[#050810] shadow-[0_0_50px_rgba(37,99,235,0.15)] aspect-square lg:aspect-auto">
               <img 
                 src="/assets/ai_neural_orb.png" 
                 alt="Nurox Neural Network Rendering" 
                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
               />
               
               {/* Floating Overlay Badge (SaaS Detail) */}
               <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-xl">
                 <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.6)]">
                   <div className="w-4 h-4 bg-white rounded-full animate-ping opacity-75 absolute"></div>
                   <div className="w-4 h-4 bg-white rounded-full relative z-10"></div>
                 </div>
                 <div>
                   <p className="text-white text-sm font-bold">Latency Active</p>
                   <p className="text-blue-400 text-xs">0.4 ms execution</p>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
