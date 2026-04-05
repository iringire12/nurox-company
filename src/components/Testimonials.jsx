import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nurox has drastically reduced our content generation time. We've scaled our operations 10x without adding any extra headcount.",
    name: "Sarah Jenkins",
    role: "VP of Engineering at CloudScale",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    quote: "The seamless API integration and predictive engines are a game changer. It feels like magic, but it's just really good engineering.",
    name: "David Chen",
    role: "Founder & CEO, DataFlow",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "We switched from a competitor to Nurox six months ago and the difference in latency and model accuracy is staggering.",
    name: "Elena Rodriguez",
    role: "Lead Data Scientist, Nexus",
    avatar: "https://i.pravatar.cc/150?img=44"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050510]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by Industry Leaders</h2>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
             Don't just take our word for it. See what top engineers and founders are saying about the power of Nurox.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors relative group">
              <Quote size={40} className="text-blue-500/20 absolute top-6 right-6 group-hover:text-blue-500/40 transition-colors" />
              
              <div className="flex text-blue-500 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 mb-8 pt-4 leading-relaxed line-clamp-4 relative z-10">
                "{test.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full border border-blue-500/30" />
                <div>
                  <h4 className="text-white font-bold text-sm">{test.name}</h4>
                  <p className="text-blue-400 text-xs">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
