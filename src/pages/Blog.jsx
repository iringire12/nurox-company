import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import blogImg1 from '../assets/blog_post_1.png';

const blogCards = [
  {
    id: 1,
    title: 'Why AI Adoption is No Longer Optional for SMEs',
    date: 'July 21, 2025',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: '5 Key Terms in AI Every Business Owner Should Know',
    date: 'July 21, 2025',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'How Machine Learning Enhances Business Automation',
    date: 'July 21, 2025',
    image:
      'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&q=80&w=1200'
  }
];

const Blog = () => {
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
            <span className="text-white">Blog</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-8 text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-[6.5rem]"
          >
            Blog
          </motion.h1>
        </div>
      </section>

      <section className="bg-[#030816] py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-lg text-blue-100/80">Blog</p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Latest Blog & News
            </h2>
            <p className="mt-8 max-w-2xl text-lg text-slate-400 md:text-[1.65rem] md:leading-relaxed">
              Stay ahead of the curve with the latest AI innovations
            </p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="overflow-hidden rounded-[2rem] border border-blue-500/30 bg-[#07101f] shadow-[0_30px_90px_rgba(3,8,22,0.45)]"
          >
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <div className="flex flex-col justify-center p-10 md:p-14">
                <h3 className="max-w-lg text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  7 Real-World Use Cases of AI for Small Businesses
                </h3>

                <div className="mt-6 inline-flex items-center gap-2 text-2xl text-blue-100/90">
                  <Clock size={20} className="text-slate-300" />
                  <span className="text-xl md:text-2xl">July 22, 2025</span>
                </div>

                <p className="mt-10 max-w-xl text-lg leading-9 text-slate-400 md:text-[1.9rem] md:leading-[1.75]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi...
                </p>

                <div className="mt-12">
                  <Link
                    to="/blog-detail"
                    className="inline-flex rounded-xl border border-blue-500/70 bg-[#0057d8]/30 px-9 py-4 text-2xl font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_24px_rgba(37,99,235,0.3)]"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[340px] lg:min-h-full">
                <img
                  src={blogImg1}
                  alt="AI blog post"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#07101f]/10 via-transparent to-[#0a2d67]/15" />
              </div>
            </div>
          </motion.article>

          <div className="mt-10 grid gap-9 md:grid-cols-2 xl:grid-cols-3">
            {blogCards.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + index * 0.08 }}
                className="group overflow-hidden rounded-[1.75rem] border border-blue-500/30 bg-[#07101f] shadow-[0_24px_80px_rgba(3,8,22,0.35)]"
              >
                <div className="aspect-[1.15/0.9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-[2rem]">
                    {post.title}
                  </h3>

                  <div className="mt-5 inline-flex items-center gap-2 text-lg text-blue-100/80">
                    <Clock size={18} className="text-slate-400" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="relative mt-16 overflow-hidden rounded-[2rem] border border-blue-500/35 bg-[#071a34] px-6 py-20 shadow-[0_30px_90px_rgba(3,8,22,0.45)] md:px-10 md:py-24"
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
      </section>
    </main>
  );
};

export default Blog;
