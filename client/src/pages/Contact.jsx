import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Navigation } from 'lucide-react';

const socialLinks = ['f', 't', 'YT', 'p', 'Be'];

const Contact = () => {
  return (
    <main className="bg-[#030816] min-h-screen">
      <section className="relative min-h-[640px] overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 54%, rgba(16, 71, 150, 0.95) 0%, rgba(8, 30, 63, 0.95) 26%, rgba(4, 12, 29, 0.96) 48%, rgba(3, 8, 22, 1) 78%)'
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.9) 1px, transparent 1px)',
            backgroundSize: `${100 / 7}% 100%`
          }}
        />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/45 to-transparent pointer-events-none" />
        <div className="absolute bottom-[-8rem] left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[120px] pointer-events-none" />

        <div className="container mx-auto flex min-h-[640px] flex-col items-center justify-center px-6 pt-28 pb-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-base font-medium text-white shadow-[0_20px_70px_rgba(5,17,37,0.35)] backdrop-blur-md"
          >
            <Link to="/" className="text-white/90 transition-colors hover:text-white">
              Home
            </Link>
            <span className="mx-1.5 text-white/40">/</span>
            <span className="text-white">Contact</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-8 text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-[6.5rem]"
          >
            Contact
          </motion.h1>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] border border-blue-500/30 bg-[#07101f] shadow-[0_30px_90px_rgba(3,8,22,0.4)]"
        >
          <div className="grid lg:grid-cols-[0.95fr_1fr]">
            <div className="border-b border-white/10 p-8 md:p-12 lg:border-b-0 lg:border-r">
              <p className="text-xl text-blue-100/75">Contact us</p>
              <h2 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-7xl">
                Let&apos;s Get In Touch
              </h2>
              <p className="mt-10 max-w-2xl text-xl leading-relaxed text-slate-400 md:text-[2rem] md:leading-[1.45]">
                Have a question, idea, or need help getting started? Our team is here
                to support you. Drop us a message - we&apos;d love to hear from you!
              </p>

              <div className="mt-14 space-y-9">
                <div>
                  <h3 className="text-3xl font-bold text-white">Email:</h3>
                  <p className="mt-3 text-xl text-slate-400 md:text-2xl">
                    nurox@support.com
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">Phone:</h3>
                  <p className="mt-3 text-xl text-slate-400 md:text-2xl">
                    +0 (555) 123 45 67
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">Address:</h3>
                  <p className="mt-3 max-w-3xl text-xl leading-relaxed text-slate-400 md:text-2xl">
                    Callison Laney Buoy Building W 13th Parks Suite 559, Denver
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">Follow Us:</h3>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {socialLinks.map((label) => (
                      <button
                        key={label}
                        type="button"
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/45 bg-[#0b2d66] text-lg font-bold text-white transition-all duration-300 hover:bg-blue-600"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <form className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-xl font-medium text-white">
                      Full name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full rounded-2xl border border-white/12 bg-[#06101f] px-7 py-5 text-xl text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-xl font-medium text-white">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full rounded-2xl border border-white/12 bg-[#06101f] px-7 py-5 text-xl text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-xl font-medium text-white">
                    Subject <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full rounded-2xl border border-white/12 bg-[#06101f] px-7 py-5 text-xl text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-xl font-medium text-white">
                    Comments / Questions <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    rows="7"
                    placeholder="Write your question here."
                    className="w-full rounded-2xl border border-white/12 bg-[#06101f] px-7 py-5 text-xl text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-500/80 bg-[#0057d8]/30 px-10 py-4 text-2xl font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_24px_rgba(37,99,235,0.3)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-10 overflow-hidden rounded-[2rem] border border-blue-500/30 bg-[#07101f] shadow-[0_30px_90px_rgba(3,8,22,0.4)]"
        >
          <div className="relative h-[320px] md:h-[420px] lg:h-[500px]">
            <iframe
              title="Nurox Denver location map"
              src="https://www.google.com/maps?q=Denver,CO,USA&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />

            <div className="absolute left-4 top-4 rounded-[1.4rem] border border-black/5 bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.18)] backdrop-blur-sm md:left-6 md:top-6 md:min-w-[320px]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">Denver</h3>
                  <p className="mt-1 text-lg text-slate-500">Denver, CO, USA</p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Denver,CO,USA"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Denver,CO,USA"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700"
                  >
                    <Navigation size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="relative mt-10 overflow-hidden rounded-[2rem] border border-blue-500/35 bg-[#071a34] px-6 py-20 shadow-[0_30px_90px_rgba(3,8,22,0.45)] md:px-10 md:py-24"
        >
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
            <h3 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Unlock the Power of AI
              <br className="hidden md:block" /> for Your Business
            </h3>

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
        </motion.section>
      </div>
    </main>
  );
};

export default Contact;
