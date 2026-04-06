import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const testimonials = [
  {
    quote: "Nurox has drastically reduced our content generation time. We've scaled our operations 10x without adding any extra headcount.",
    name: "Sarah Jenkins",
    role: "VP of Engineering at CloudScale",
    avatar: "https://i.pravatar.cc/150?img=32",
    stars: 5,
  },
  {
    quote: "The seamless API integration and predictive engines are a game changer. It feels like magic, but it's just really good engineering.",
    name: "David Chen",
    role: "Founder & CEO, DataFlow",
    avatar: "https://i.pravatar.cc/150?img=11",
    stars: 5,
  },
  {
    quote: "We switched from a competitor to Nurox six months ago and the difference in latency and model accuracy is staggering.",
    name: "Elena Rodriguez",
    role: "Lead Data Scientist, Nexus",
    avatar: "https://i.pravatar.cc/150?img=44",
    stars: 5,
  },
  {
    quote: "The onboarding experience was flawless and the support team went above and beyond. Nurox is now central to our entire data pipeline.",
    name: "James Park",
    role: "CTO, Brightwave AI",
    avatar: "https://i.pravatar.cc/150?img=60",
    stars: 5,
  },
  {
    quote: "I was skeptical at first, but Nurox delivered measurable ROI within the first two weeks. The analytics module alone is worth the price.",
    name: "Amara Osei",
    role: "Head of Product, Finova",
    avatar: "https://i.pravatar.cc/150?img=47",
    stars: 5,
  },
  {
    quote: "Nurox's chatbot integration saved our support team 40+ hours per week. Our CSAT scores have never been higher.",
    name: "Lucas Müller",
    role: "Customer Success Lead, Orbis",
    avatar: "https://i.pravatar.cc/150?img=53",
    stars: 5,
  },
];

const StarRow = ({ count = 5 }) => (
  <div className="flex gap-1 text-blue-500 mb-6">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const TestimonialsPage = () => {
  return (
    <main className="bg-[#030816] min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: `${100 / 7}% 100%`,
          }}
        />
        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-[#070b15]/80 border border-white/10 rounded-full px-5 py-1.5 mb-8 backdrop-blur-md"
          >
            <span className="text-gray-400 text-xs font-medium tracking-wide">
              Home <span className="mx-2 text-gray-600">/</span>{' '}
              <span className="text-white">Testimonials</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight"
          >
            Testimonials
          </motion.h1>
        </div>
      </section>

      {/* ── Testimonials Grid ────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm block mb-3">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
              What Our Clients Are Saying
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl leading-relaxed">
              Don't just take our word for it. See what top engineers and founders are saying about the power of Nurox.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-blue-500/20 transition-all duration-300 relative group flex flex-col"
              >
                <Quote size={40} className="text-blue-500/20 absolute top-6 right-6 group-hover:text-blue-500/40 transition-colors" />

                <StarRow count={t.stars} />

                <p className="text-gray-300 leading-relaxed mb-8 flex-1 relative z-10">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border border-blue-500/30 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.name}</h4>
                    <p className="text-blue-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <FinalCTA />
    </main>
  );
};

export default TestimonialsPage;
