import React from 'react';
import Hero from '../components/Hero';
import TransformFeatures from '../components/TransformFeatures';
import AboutTextBlock from '../components/AboutTextBlock';
import StatsSection from '../components/StatsSection';
import ServicesShowcase from '../components/ServicesShowcase';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  return (
    <main className="w-full">
      <Hero />

      {/* 3 Column Transformer Flow */}
      <TransformFeatures />

      {/* Typographic About Block */}
      <AboutTextBlock />

      {/* Stats Section with Cards */}
      <StatsSection />

      {/* Services Showcase Section */}
      <ServicesShowcase />

      {/* Smart Tools Features Section */}
      <Features />

      {/* Pricing Section on Homepage */}
      <Pricing />

      {/* Social Proof */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />


      {/* Final Call to Action */}
      <FinalCTA />
    </main>
  );
};

export default Home;
