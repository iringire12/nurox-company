import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link2, X as XIcon } from 'lucide-react';
import teamMember1 from '../assets/team_member_1.png';
import teamMember2 from '../assets/team_member_2.png';
import teamMember3 from '../assets/team_member_3.png';
import FinalCTA from '../components/FinalCTA';

const teamMembers = [
  {
    name: "Wilbur Twitty",
    role: "Chief Technology Officer",
    bio: "Leads our engineering teams with 15+ years in AI systems architecture and scalable cloud infrastructure.",
    image: teamMember1,
    socials: [
      { icon: <Link2 size={16} />, link: "#" },
      { icon: <XIcon size={16} />, link: "#" },
      { icon: <Mail size={16} />, link: "#" },
    ],
  },
  {
    name: "Sadie Joseph",
    role: "AI/ML Engineer",
    bio: "Specializes in building predictive models and deploying large-scale machine learning pipelines.",
    image: teamMember2,
    socials: [
      { icon: <Link2 size={16} />, link: "#" },
      { icon: <XIcon size={16} />, link: "#" },
      { icon: <Mail size={16} />, link: "#" },
    ],
  },
  {
    name: "Clay Greenwood",
    role: "Data Scientist",
    bio: "Transforms complex datasets into actionable intelligence that drives product decisions.",
    image: teamMember3,
    socials: [
      { icon: <Link2 size={16} />, link: "#" },
      { icon: <XIcon size={16} />, link: "#" },
      { icon: <Mail size={16} />, link: "#" },
    ],
  },
  {
    name: "Aria Bennett",
    role: "Product Designer",
    bio: "Crafts beautiful, user-centered experiences that make complex AI tools feel intuitive.",
    image: "https://i.pravatar.cc/400?img=47",
    socials: [
      { icon: <Link2 size={16} />, link: "#" },
      { icon: <XIcon size={16} />, link: "#" },
      { icon: <Mail size={16} />, link: "#" },
    ],
  },
  {
    name: "Marcus Lane",
    role: "Backend Engineer",
    bio: "Builds robust APIs and microservices that power Nurox's real-time AI processing capabilities.",
    image: "https://i.pravatar.cc/400?img=15",
    socials: [
      { icon: <Link2 size={16} />, link: "#" },
      { icon: <XIcon size={16} />, link: "#" },
      { icon: <Mail size={16} />, link: "#" },
    ],
  },
  {
    name: "Priya Nair",
    role: "Head of Research",
    bio: "Drives breakthrough research in NLP and generative AI, publishing at top ML conferences globally.",
    image: "https://i.pravatar.cc/400?img=45",
    socials: [
      { icon: <Link2 size={16} />, link: "#" },
      { icon: <XIcon size={16} />, link: "#" },
      { icon: <Mail size={16} />, link: "#" },
    ],
  },
];

const TeamPage = () => {
  return (
    <main className="bg-[#030816] min-h-screen">
      {/* ── Hero / Page Header ─────────────────────────── */}
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
          {/* Breadcrumb Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-[#070b15]/80 border border-white/10 rounded-full px-5 py-1.5 mb-8 backdrop-blur-md"
          >
            <span className="text-gray-400 text-xs font-medium tracking-wide">
              Home <span className="mx-2 text-gray-600">/</span>{' '}
              <span className="text-white">Team</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight"
          >
            Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto"
          >
            Meet the passionate people building the future of AI at Nurox.
          </motion.p>
        </div>
      </section>

      {/* ── Team Grid ──────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-4 inline-block">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              The People Behind Nurox
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-[#070b15]/60 border border-white/5 rounded-3xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Portrait */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b15] via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{member.bio}</p>

                  {/* Social links */}
                  <div className="flex items-center gap-3">
                    {member.socials.map((social, sIdx) => (
                      <a
                        key={sIdx}
                        href={social.link}
                        className="w-8 h-8 bg-white/5 hover:bg-blue-600/20 border border-white/5 hover:border-blue-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────── */}
      <FinalCTA />
    </main>
  );
};

export default TeamPage;
