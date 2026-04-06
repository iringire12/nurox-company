import React from 'react';
import { Wand2, CloudCog, TrendingUp } from 'lucide-react';

const transformData = [
  {
    icon: <Wand2 size={24} />,
    title: "Custom AI Solutions",
    desc: "Build intelligent systems that are specifically designed to solve your business challenges—efficient, scalable, and made just for you."
  },
  {
    icon: <CloudCog size={24} />,
    title: "Seamless AI Integration",
    desc: "Easily connect AI into your current tools, apps, and workflows—no technical headaches, just powerful automation."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Scale Your Business Smarter",
    desc: "Use AI to uncover new opportunities, optimize operations, and make smarter decisions that drive your business forward."
  }
];

const TransformFeatures = () => {
  return (
    <section className="py-24 relative z-10 w-full bg-[#03050a]">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-gray-500 font-medium text-sm tracking-wide mb-4 inline-block">Transform</span>
          <h2 className="text-3xl md:text-[42px] font-bold text-white mb-6 leading-tight">
            Unlocking the Power of AI<br className="hidden md:block"/> Innovation
          </h2>
          <p className="text-gray-400 text-[15px] leading-relaxed">
            Powering your digital transformation with intelligent solutions.
          </p>
        </div>

        {/* 3 Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {transformData.map((item, index) => (
            <div
              key={index}
              className="bg-[#070b15] border border-blue-900/20 p-8 rounded-2xl flex flex-col min-h-[320px] transition-all duration-300 hover:bg-[#0a101d] hover:border-blue-800/40"
            >
              <div className="flex justify-end mb-auto w-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                  {item.icon}
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-[22px] font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TransformFeatures;
