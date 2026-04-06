import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Code2, Zap, BarChart2, LayoutDashboard, Activity, GitMerge } from 'lucide-react';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

const tags = [
  { icon: <Database size={11} />, label: "Data Collection" },
  { icon: <Code2 size={11} />, label: "Algorithm Selection" },
  { icon: <Zap size={11} />, label: "Action" },
];

const solutions = [
  { icon: <Database size={15} />, label: "Smart Data Processing" },
  { icon: <Activity size={15} />, label: "AI-Powered Insights" },
  { icon: <LayoutDashboard size={15} />, label: "Customizable Dashboards" },
  { icon: <BarChart2 size={15} />, label: "Predictive & Prescriptive Analytics" },
  { icon: <GitMerge size={15} />, label: "Seamless Integration" },
];

const DonutChart = () => {
  const size = 220;
  const cx = size / 2;
  const cy = size / 2;
  const rings = [
    { r: 80, stroke: '#4B5563', dashArray: '350 502', dashOffset: 0, opacity: 1 },
    { r: 60, stroke: '#6B7280', dashArray: '260 377', dashOffset: 60, opacity: 0.75 },
    { r: 40, stroke: '#9CA3AF', dashArray: '160 251', dashOffset: 30, opacity: 0.5 },
  ];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {rings.map((ring, i) => (
        <circle
          key={i}
          cx={cx} cy={cy} r={ring.r}
          fill="none"
          stroke={ring.stroke}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={ring.dashArray}
          strokeDashoffset={ring.dashOffset}
          style={{ opacity: ring.opacity, transform: 'rotate(-90deg)', transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
    </svg>
  );
};

const ServicesDetail = () => {
  return (
    <main className="bg-[#030816] min-h-screen">

      {/* ── Hero / Page Header ───────────────────────────────────────── */}
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
              <span className="text-white">Services Detail</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight"
          >
            Services Detail
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto"
          >
            Explore the full depth of each AI service we offer — built to scale, designed to perform.
          </motion.p>
        </div>
      </section>

      {/* ── Automated AI – Data Analysis ─────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#070b15]/70 border border-white/5 rounded-3xl p-10 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left — text content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Automated AI – Data Analysis
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 bg-blue-600/10 border border-blue-500/20 text-blue-300 text-xs font-medium px-3 py-1.5 rounded-lg"
                  >
                    {tag.icon}
                    {tag.label}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                convallis. Tempus leo eu aenean sed diam urna tempor.
              </p>

              {/* CTA */}
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] mb-10">
                Learn More
                <ArrowRight size={16} />
              </button>

              {/* Solution list */}
              <div>
                <p className="text-white font-bold mb-4">A comprehensive solution :</p>
                <div className="space-y-3">
                  {solutions.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-blue-400 flex-shrink-0">{item.icon}</span>
                      <span className="text-gray-300 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Data Analysis chart card */}
            <div className="bg-[#050811] border border-white/5 rounded-2xl p-8 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-4">
                <span className="text-white font-bold text-lg">Data Analysis</span>
                <span className="text-gray-500 text-xl tracking-widest">···</span>
              </div>

              <div className="my-4">
                <DonutChart />
              </div>

              {/* Legend */}
              <div className="flex items-center gap-6 mt-4">
                {[
                  { color: 'bg-gray-400', label: 'Completed' },
                  { color: 'bg-gray-500', label: 'Active' },
                  { color: 'bg-gray-600', label: 'Assigned' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${item.color} inline-block`} />
                    <span className="text-gray-400 text-xs">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <FAQ />

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <FinalCTA />
    </main>
  );
};

export default ServicesDetail;
