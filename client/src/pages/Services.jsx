 import React from 'react';
import { motion } from 'framer-motion';
import ServicesShowcase from '../components/ServicesShowcase';
import CreatedServicesSection from '../components/CreatedServicesSection';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

const Services = () => {
  return (
    <main className="bg-[#030816] min-h-screen">
      {/* Page Header Section */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        {/* Background Vertical Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: `${100 / 7}% 100%`
          }}
        />
        
        {/* Bottom Glow Effect */}
        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Breadcrumb Pill */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-[#070b15]/80 border border-white/10 rounded-full px-5 py-1.5 mb-8 backdrop-blur-md"
          >
            <span className="text-gray-400 text-xs font-medium tracking-wide">
              Home <span className="mx-2 text-gray-600">/</span> <span className="text-white">Services</span>
            </span>
          </motion.div>

          {/* Page Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight"
          >
            Services
          </motion.h1>
        </div>
      </section>

      {/* Services Showcase Section */}
      <ServicesShowcase />

      {/* Saved Services Section */}
      <CreatedServicesSection />

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final Call to Action Section */}
      <FinalCTA />
    </main>
  );
};

export default Services;
