import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="bg-[#030816] py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-500/35 bg-[#071a34] px-6 py-20 shadow-[0_30px_90px_rgba(3,8,22,0.45)] md:px-10 md:py-24">
          <div
            className="absolute inset-0 opacity-[0.14] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.75) 1px, transparent 1px)',
              backgroundSize: `${100 / 7}% 100%`
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.16),transparent_42%)] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Unlock the Power of AI
              <br className="hidden md:block" /> for Your Business
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-relaxed">
              Tap into cutting-edge SaaS tools powered by artificial intelligence.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-w-[170px] items-center justify-center rounded-xl border border-blue-500/80 bg-[#0057d8]/30 px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_24px_rgba(37,99,235,0.3)]"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-w-[170px] items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
