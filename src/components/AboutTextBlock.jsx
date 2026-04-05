import React from 'react';
import { Link } from 'react-router-dom';

const AboutTextBlock = () => {
  return (
    <section className="py-24 relative w-full bg-[#03050a] overflow-hidden">
      {/* Subtle bottom-right blue glow to match the image */}
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Subtitle */}
        <span className="text-gray-500 text-sm font-medium tracking-wide mb-8 inline-block">
          About us
        </span>

        {/* Large Typographic Block */}
        <h2 className="text-3xl md:text-[44px] leading-[1.3] md:leading-[1.4] font-normal mb-12 max-w-5xl">
          <span className="text-white font-medium">AI-powered SaaS solutions</span>
          <span className="text-gray-500 text-opacity-80"> are revolutionizing the way </span>
          <span className="text-white font-medium">businesses</span>
          <span className="text-gray-500 text-opacity-80"> by providing </span>
          <span className="text-white font-medium">intelligent automation</span>
          <span className="text-gray-500 text-opacity-80">, data-driven insights, and </span>
          <span className="text-white font-medium">seamless</span>
          <span className="text-gray-500 text-opacity-80"> cloud integration. From optimizing workflows and </span>
          <span className="text-white font-medium">enhancing customer.</span>
        </h2>

        {/* Action Button */}
        <Link 
          to="/about"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#00183f] text-white text-sm font-bold border border-blue-600/40 hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.2)]"
        >
          Learn More
        </Link>
        
      </div>
    </section>
  );
};

export default AboutTextBlock;
