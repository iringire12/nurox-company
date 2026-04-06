import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-b border-white/5 last:border-0 transition-all duration-300 ${isOpen ? 'bg-white/[0.02]' : ''}`}>
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left hover:text-blue-400 transition-colors group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-8">
          {question}
        </span>
        <span className="text-2xl font-light text-gray-500 shrink-0">
          {isOpen ? '—' : '+'}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 leading-relaxed max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is included in the free trial?",
      answer: "Our free trial gives you access to core AI tools, dashboards, and limited usage so you can explore the platform before upgrading."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can change your plan at any time from your account settings. Changes will be applied at the start of your next billing cycle."
    },
    {
      question: "Do I need coding skills to use the platform?",
      answer: "No coding skills are required to use our core features. However, we offer an API for developers who want to integrate Nurox into their own applications."
    },
    {
      question: "Is my data secure with your platform?",
      answer: "We take security seriously. All data is encrypted at rest and in transit, and we are committed to industry-standard compliance."
    },
    {
      question: "Can I integrate your tools with my existing software?",
      answer: "Yes, we support integrations with popular platforms like Slack, Salesforce, and GitHub, along with a robust REST API for custom workflows."
    }
  ];

  return (
    <section className="py-24 bg-[#030816] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Centered Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            We're here to help
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
            Got questions? We've got answers. Explore common queries about our platform, pricing, features, and support.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-[#070b15]/50 border border-white/5 rounded-3xl p-4 md:p-8 backdrop-blur-sm shadow-2xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

      </div>

      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default FAQ;
