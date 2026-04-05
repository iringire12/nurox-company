import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import blogImg1 from '../assets/blog_post_1.png';
import FinalCTA from '../components/FinalCTA';

const shareLinks = [
  { id: 'facebook', label: 'f', href: 'https://facebook.com' },
  { id: 'twitter', label: 'x', href: 'https://twitter.com' },
  { id: 'instagram', label: 'ig', href: 'https://instagram.com' },
  { id: 'youtube', label: 'yt', href: 'https://youtube.com' }
];

const articleParagraphs = [
  'Lorem ipsum odor amet, consectetuer adipiscing elit. Purus maximus tristique habitasse tristique turpis fames efficitur proin. Ullamcorper hendrerit ac primis quam metus justo varius. Tellus viverra curabitur ipsum consequat fermentum nostra. Erat blandit lacinia aptent hendrerit integer vel. Augue nostra ornare tempor; placerat eleifend et quam class egestas. Pellentesque amet diam libero laoreet phasellus commodo rhoncus turpis',
  'Magna commodo nec nibh volutpat donec sociosqu vivamus lacinia. Interdum porta habitant orci etiam himenaeos faucibus justo. Aptent aliquet venenatis sodales orci faucibus accumsan. Fermentum morbi nostra placerat penatibus ipsum. Diam elit a ac porta mauris dapibus. Etiam congue ligula luctus nostra vivamus congue habitant venenatis. Ullamcorper libero a varius congue egestas dis taciti',
  'Sem et quam vestibulum eu interdum hendrerit gravida auctor? Ultrices quis nulla eu dignissim hac congue. Nulla bibendum proin felis integer adipiscing porta vivamus! Volutpat mauris cras interdum ornare porta. Rutrum phasellus in primis tincidunt magna, venenatis nibh? Nullam habitant nulla metus mus ultrices pulvinar viverra vestibulum.'
];

const featureList = [
  'Sed platea pharetra phasellus platea parturient hendrerit primis',
  'Consectetur habitant ad dapibus consequat ex',
  'Parturient iaculis ornare nam eleifend ante conubia dignissim.',
  'Quis maximus vulputate sem risus efficitur tellus iaculis.'
];

const closingParagraphs = [
  'Sem et quam vestibulum eu interdum hendrerit gravida auctor? Ultrices quis nulla eu dignissim hac congue. Nulla bibendum proin felis integer adipiscing porta vivamus! Volutpat mauris cras interdum ornare porta. Rutrum phasellus in primis tincidunt magna, venenatis nibh? Nullam habitant nulla metus mus ultrices pulvinar viverra vestibulum.',
  'Vestibulum luctus lacinia lectus vivamus commodo. Eros quis amet etiam iaculis per velit volutpat. Cursus porttitor tortor quisque; dis fames nostra litora. Vitae efficitur etiam litora pulvinar pharetra gravida dictum. Nunc metus per scelerisque elementum nec. Sed nec potenti donec erat tempus sociosqu. Tempor quis enim iaculis, per sapien'
];

const featuredQuote = {
  quote:
    'Automation is not the future. It’s the standard - and the companies who adopt it now will lead tomorrow.',
  author: 'Kyla Pascall'
};

const BlogDetail = () => {
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

        <div className="container mx-auto flex min-h-[520px] flex-col items-center justify-center px-6 pt-28 pb-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-base font-medium text-white shadow-[0_20px_70px_rgba(5,17,37,0.35)] backdrop-blur-md"
          >
            <Link to="/" className="text-white/90 transition-colors hover:text-white">
              Home
            </Link>
            <span className="mx-1.5 text-white/40">/</span>
            <Link to="/blog" className="text-white transition-colors hover:text-white/80">
              Blog
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-8 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-[4.35rem] md:leading-[1.15]"
          >
            7 Real-World Use Cases of
            <br className="hidden md:block" /> AI for Small Businesses
          </motion.h1>
        </div>
      </section>

      <section className="relative -mt-20 pb-24">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="overflow-hidden rounded-[2rem] border border-blue-500/30 bg-[#07101f] shadow-[0_30px_90px_rgba(3,8,22,0.45)]"
          >
            <img
              src={blogImg1}
              alt="7 Real-World Use Cases of AI for Small Businesses"
              className="block h-auto w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-8 flex flex-col gap-5 text-white md:flex-row md:items-center md:justify-between"
          >
            <p className="text-xl font-semibold">Share This:</p>

            <div className="flex items-center gap-3">
              {shareLinks.map(({ id, label, href }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-blue-500/35 bg-[#0b2d66] text-white transition-all duration-300 hover:bg-blue-600"
                >
                  <span className="text-xs font-bold uppercase tracking-wide">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-8 border-t border-white/10 pt-10"
          >
            <div className="space-y-10">
              <p className="text-xl leading-relaxed text-slate-400 md:text-[1.7rem] md:leading-[1.6]">
                {articleParagraphs[0]}
              </p>

              <div className="space-y-8">
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-[3.6rem]">
                  From marketing automation to customer support
                </h2>

                <p className="text-xl leading-relaxed text-slate-400 md:text-[1.7rem] md:leading-[1.6]">
                  {articleParagraphs[1]}
                </p>

                <div className="space-y-5 pl-4 md:pl-8">
                  {featureList.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center text-blue-500">
                        <Check size={20} strokeWidth={3} />
                      </span>
                      <span className="text-xl leading-relaxed text-slate-300 md:text-[1.5rem]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <h2 className="pt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-[3.6rem] md:leading-[1.2]">
                  Discover how even small teams can leverage AI
                  <br className="hidden md:block" /> for big impact.
                </h2>

                <div className="space-y-8">
                  <p className="text-xl leading-relaxed text-slate-400 md:text-[1.7rem] md:leading-[1.6]">
                    {closingParagraphs[0]}
                  </p>

                  <div className="space-y-6 py-2">
                    <blockquote className="max-w-5xl text-3xl font-medium leading-[1.45] tracking-tight text-white md:text-[3rem] md:leading-[1.4]">
                      &ldquo;{featuredQuote.quote}&rdquo;
                    </blockquote>
                    <p className="text-2xl font-bold text-white md:text-[2.2rem]">
                      {featuredQuote.author}
                    </p>
                  </div>

                  <p className="text-xl leading-relaxed text-slate-400 md:text-[1.7rem] md:leading-[1.6]">
                    {closingParagraphs[1]}
                  </p>
                </div>
              </div>

              <p className="text-xl leading-relaxed text-slate-400 md:text-[1.7rem] md:leading-[1.6]">
                {articleParagraphs[2]}
              </p>
            </div>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="mt-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-[3.4rem]">
              Leave a Reply
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-400 md:text-[1.45rem]">
              Your email address will not be published. Required fields are marked *
            </p>

            <form className="mt-10 space-y-7">
              <div>
                <label className="mb-3 block text-xl font-semibold text-white">
                  Comment *
                </label>
                <textarea
                  rows="8"
                  className="w-full rounded-[1.6rem] border border-white/12 bg-transparent px-6 py-5 text-lg text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="mb-3 block text-xl font-semibold text-white">
                  Name *
                </label>
                <input
                  type="text"
                  className="w-full rounded-full border border-white/12 bg-transparent px-6 py-4 text-lg text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="mb-3 block text-xl font-semibold text-white">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full rounded-full border border-white/12 bg-transparent px-6 py-4 text-lg text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="mb-3 block text-xl font-semibold text-white">
                  Website
                </label>
                <input
                  type="text"
                  className="w-full rounded-full border border-white/12 bg-transparent px-6 py-4 text-lg text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none transition-colors"
                />
              </div>

              <label className="flex items-start gap-3 text-lg leading-relaxed text-white">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 rounded border-white/20 bg-transparent accent-blue-600"
                />
                <span>
                  Save my name, email, and website in this browser for the next time I
                  comment.
                </span>
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl border border-blue-500/80 bg-[#0057d8]/30 px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_24px_rgba(37,99,235,0.3)]"
              >
                Post Comment
              </button>
            </form>
          </motion.section>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
};

export default BlogDetail;
