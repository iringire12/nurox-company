import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter Plan',
    price: '29.9',
    description: 'Perfect for individuals & small teams getting started with AI.',
    features: [
      'Access to core AI tools',
      'Basic analytics dashboard',
      'Email support',
      'Up to 2 team members'
    ],
    popular: false
  },
  {
    name: 'Growth Plan',
    price: '59.9',
    description: 'For growing businesses ready to scale their AI capabilities.',
    features: [
      'Everything in Starter, plus:',
      'Advanced automation workflows',
      'Customizable dashboards',
      'API access',
      'Email support',
      'Up to 10 team members'
    ],
    popular: true
  },
  {
    name: 'Enterprise Plan',
    price: '129.9',
    description: 'Tailored AI solutions for large-scale operations.',
    features: [
      'All Pro features included',
      'Dedicated account management',
      'AI model training with your own data',
      'Priority support',
      'Custom SLA & deployment',
      'On-premise or private cloud support',
      'Unlimited team members'
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="relative overflow-hidden bg-[#030816] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_42%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block text-sm font-medium text-blue-100/75">
            Pricing
          </span>
          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Smart Pricing for
            <br className="hidden md:block" /> Smarter Solutions
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-2xl">
            Transparent, value-driven pricing for modern AI tools.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative overflow-hidden rounded-[2rem] border shadow-[0_28px_90px_rgba(3,8,22,0.35)] ${
                plan.popular
                  ? 'border-blue-500/45 bg-[#071525]'
                  : 'border-blue-500/30 bg-[#07101f]'
              }`}
            >
              {plan.popular && (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.45),transparent_38%)] pointer-events-none" />
                  <div className="absolute right-5 top-5 rounded-full border border-blue-400/50 bg-blue-500/25 px-4 py-1 text-sm font-semibold text-white shadow-[0_0_18px_rgba(37,99,235,0.35)]">
                    Popular
                  </div>
                </>
              )}

              <div className="relative z-10 border-b border-blue-500/20 px-8 pb-10 pt-8">
                <h3 className="text-2xl font-bold text-white md:text-[2rem]">
                  {plan.name}
                </h3>

                <div className="mt-6 flex items-end text-white">
                  <span className="text-3xl font-bold md:text-4xl">$</span>
                  <span className="text-5xl font-bold tracking-tight md:text-6xl">
                    {plan.price}
                  </span>
                  <span className="mb-1 ml-1 text-2xl text-slate-400">/Month</span>
                </div>

                <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-400 md:text-[1.6rem] md:leading-[1.45]">
                  {plan.description}
                </p>
              </div>

              <div className="relative z-10 flex h-full flex-col px-8 py-8">
                <h4 className="text-2xl font-bold text-white">Including:</h4>

                <div className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-blue-500">
                        <Check size={18} strokeWidth={3} />
                      </span>
                      <span className="text-lg leading-relaxed text-slate-300 md:text-[1.35rem]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-10 inline-flex min-h-[3.75rem] items-center justify-center rounded-xl border border-blue-500/80 bg-[#0057d8]/20 px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_24px_rgba(37,99,235,0.3)]"
                >
                  Select Plan
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
