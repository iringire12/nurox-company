import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 190);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030816]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 58%, rgba(12, 52, 112, 0.82) 0%, rgba(7, 24, 53, 0.72) 30%, rgba(3, 8, 22, 1) 74%)'
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
      <div className="absolute bottom-[-10rem] left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[130px] pointer-events-none" />

      <section className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-base font-medium text-white shadow-[0_20px_70px_rgba(5,17,37,0.35)] backdrop-blur-md"
        >
          <span className="text-white/90">Home</span>
          <span className="mx-1.5 text-white/40">/</span>
          <span className="text-white">Coming Soon</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-14 grid w-full max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {units.map(({ label, value }) => (
            <div
              key={label}
              className="rounded-[1.8rem] border border-blue-500/35 bg-[#0b2346]/75 px-6 py-12 shadow-[0_24px_70px_rgba(3,8,22,0.3)] backdrop-blur-sm"
            >
              <div className="text-5xl font-bold tracking-tight text-white md:text-6xl tabular-nums">
                {value}
              </div>
              <div className="mt-4 text-xl tracking-[0.35em] text-slate-300">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mt-14 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-[5.4rem]"
        >
          Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mt-8 max-w-4xl text-xl leading-relaxed text-slate-400 md:text-[2rem]"
        >
          Our website is opening soon. please register to be the first to know
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="mt-12 w-full max-w-3xl"
        >
          {submitted ? (
            <div className="rounded-2xl border border-blue-500/40 bg-[#071a34] px-8 py-5 text-xl font-medium text-blue-100">
              You&apos;re on the list. We&apos;ll let you know when we launch.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:flex-row sm:items-stretch"
            >
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your Email Address"
                required
                className="min-w-0 flex-1 rounded-xl border border-blue-500/30 bg-[#0b2346]/70 px-8 py-4 text-xl text-white placeholder:text-slate-400 focus:border-blue-400 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-blue-500/80 bg-[#0057d8]/30 px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_24px_rgba(37,99,235,0.3)]"
              >
                <Mail size={20} />
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </main>
  );
};

export default ComingSoon;
