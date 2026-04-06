import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const faqSections = [
  {
    category: "General Questions",
    items: [
      {
        question: "What is included in the free trial?",
        answer: "Our free trial gives you access to core AI tools, dashboards, and limited usage so you can explore the platform before upgrading.",
      },
      {
        question: "How long does the free trial last?",
        answer: "The free trial lasts 14 days with no credit card required. You can cancel or upgrade at any time.",
      },
      {
        question: "Is Nurox suitable for small businesses?",
        answer: "Absolutely. Nurox is designed to scale with you — from solo founders to enterprise teams. Our Starter plan is purpose-built for smaller teams.",
      },
      {
        question: "Do I need technical experience to use Nurox?",
        answer: "No deep technical knowledge is needed. Our platform is designed for both developers and non-technical users, with intuitive dashboards and guided setup flows.",
      },
    ],
  },
  {
    category: "Billing & Plans",
    items: [
      {
        question: "Can I switch plans at any time?",
        answer: "Yes. You can upgrade, downgrade, or cancel your subscription at any time from your account settings. Changes take effect at the start of the next billing cycle.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, Amex), as well as PayPal and wire transfers for annual enterprise contracts.",
      },
      {
        question: "Are there any hidden fees?",
        answer: "None. The price you see is the price you pay. All features within your plan tier are included with no surprise charges.",
      },
    ],
  },
  {
    category: "Integrations & API",
    items: [
      {
        question: "Does Nurox integrate with third-party tools?",
        answer: "Yes. Nurox offers native integrations with Slack, Zapier, Salesforce, HubSpot, and many more. A full integration marketplace is available in your dashboard.",
      },
      {
        question: "Is there a public API available?",
        answer: "Yes. Our REST API is fully documented and available to all paid plan users. API rate limits scale with your plan tier.",
      },
      {
        question: "Can I build custom integrations?",
        answer: "Absolutely. Our developer-friendly API and webhook system allow you to build custom integrations tailored to your workflow.",
      },
    ],
  },
  {
    category: "Security & Privacy",
    items: [
      {
        question: "How is my data secured?",
        answer: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We comply with SOC 2 Type II, GDPR, and CCPA standards.",
      },
      {
        question: "Do you sell or share my data?",
        answer: "Never. Your data belongs to you. We do not sell, share, or use your data to train models without your explicit consent.",
      },
    ],
  },
];

const AccordionItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? 'bg-[#070d1e] border-blue-500/20' : 'bg-[#070b15]/60 hover:bg-[#070b15]'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-7 py-5 text-left"
      >
        <span className={`font-semibold text-[15px] transition-colors ${open ? 'text-white' : 'text-gray-200'}`}>
          {question}
        </span>
        <span className={`ml-4 flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-colors ${open ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400'}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm leading-relaxed px-7 pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage = () => {
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
              <span className="text-white">FAQ</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight"
          >
            FAQ
          </motion.h1>
        </div>
      </section>

      {/* ── FAQ Sections ─────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          {faqSections.map((section, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sIdx * 0.05 }}
              className="mb-14"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                {section.category}
              </h2>

              <div className="flex flex-col gap-3">
                {section.items.map((item, iIdx) => (
                  <AccordionItem
                    key={iIdx}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <FinalCTA />
    </main>
  );
};

export default FAQPage;
