import React from 'react';
import { Settings, Activity, Cloud, MessageCircle, Shield, Laptop, Share2 } from 'lucide-react';

const features = [
  {
    icon: <Settings size={24} />,
    title: "Smart Automation",
    desc: "Automatically handles repetitive tasks to save time and reduce errors."
  },
  {
    icon: <Activity size={24} />,
    title: "Real-Time Analytics",
    desc: "Gives instant insights from your data to help make better decisions fast."
  },
  {
    icon: <Cloud size={24} />,
    title: "Scalable Cloud Solutions",
    desc: "Easily grow your tools and storage as your business grows — no extra hardware needed."
  },
  {
    icon: <MessageCircle size={24} />,
    title: "AI-Powered Chatbots",
    desc: "Answer customer questions 24/7 using intelligent virtual assistants."
  },
  {
    icon: <Shield size={24} />,
    title: "Data Security & Privacy",
    desc: "Protects your business data with top-level encryption and compliance features."
  },
  {
    icon: <Laptop size={24} />,
    title: "Customizable Dashboards",
    desc: "Create your own visual dashboard to track what matters most to your team."
  },
  {
    icon: <Share2 size={24} />,
    title: "Easy Integration",
    desc: "Works smoothly with tools you already use, like CRM, marketing, or e-commerce apps."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-[#030816] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight max-w-2xl">
            Smart Tools to Drive <br /> Your Digital Growth
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Our feature set adapts to your needs — securely and efficiently.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#070b15]/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group flex flex-col"
            >
              <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="bg-[#070b15]/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm flex items-center justify-center text-center">
            <h3 className="text-xl font-bold text-white leading-tight">
              More Features <br /> Coming Soon
            </h3>
          </div>
        </div>
      </div>

      {/* Decorative gradients */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default Features;
