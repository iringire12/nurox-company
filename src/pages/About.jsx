import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, User, Globe, Mail } from 'lucide-react';
import teamBanner from '../assets/team_office_banner_1775127306736.png';
import teamMember1 from '../assets/team_member_1.png';
import teamMember2 from '../assets/team_member_2.png';
import teamMember3 from '../assets/team_member_3.png';
import BlogSection from '../components/BlogSection';
import FinalCTA from '../components/FinalCTA';

const teamMembers = [
  {
    name: "Wilbur Twitty",
    role: "Chief Technology Officer",
    image: teamMember1,
    socials: [
      { icon: <User size={18} />, link: "#" },
      { icon: <Globe size={18} />, link: "#" },
      { icon: <Mail size={18} />, link: "#" }
    ]
  },
  {
    name: "Sadie Joseph",
    role: "AI/ML Engineer",
    image: teamMember2,
    socials: [
      { icon: <User size={18} />, link: "#" },
      { icon: <Globe size={18} />, link: "#" },
      { icon: <Mail size={18} />, link: "#" }
    ]
  },
  {
    name: "Clay Greenwood",
    role: "Data Scientist",
    image: teamMember3,
    socials: [
      { icon: <User size={18} />, link: "#" },
      { icon: <Globe size={18} />, link: "#" },
      { icon: <Mail size={18} />, link: "#" }
    ]
  }
];

const About = () => {
  return (
    <main className="bg-[#030816] min-h-screen">
      {/* Page Header Section */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        {/* Background Vertical Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: `${100 / 7}% 100%`
          }}
        />
        
        {/* Bottom Glow Effect */}
        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Breadcrumb Pill */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-[#070b15]/80 border border-white/10 rounded-full px-5 py-1.5 mb-8 backdrop-blur-md"
          >
            <span className="text-gray-400 text-xs font-medium tracking-wide">
              Home <span className="mx-2 text-gray-600">/</span> <span className="text-white">About</span>
            </span>
          </motion.div>

          {/* Page Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight"
          >
            About
          </motion.h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-[#030816]">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Section Subtitle */}
          <div className="text-center mb-12">
            <span className="text-gray-500 font-medium tracking-widest uppercase text-sm">Our Story</span>
          </div>
          

          {/* High-Impact Typography Paragraph */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 px-4"
          >
            <p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.3] md:leading-[1.4] text-gray-500">
              <span className="text-white">AI-powered SaaS solutions</span> are revolutionizing the way <span className="text-white">businesses</span> by providing <span className="text-white">intelligent automation</span>, <span className="text-white">data-driven insights</span>, and <span className="text-white">seamless cloud integration</span>. From optimizing workflows and <span className="text-white">enhancing customer</span>.
            </p>
          </motion.div>
          
          {/* Vision & Mission Grid */}
          <div className="pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-20">
            {/* Our Vision */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                To empower businesses worldwide through intelligent, scalable, and human-centered AI solutions.
              </p>
            </motion.div>

            {/* Our Mission */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Deliver cutting-edge AI tools that solve real-world business problems with simplicity and precision.
              </p>
            </motion.div>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {/* Card 1: Performance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#070b15]/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-500"
            >
              
              <div className="flex items-center gap-3 mb-10">
                <Hexagon className="text-blue-500" size={24} fill="currentColor" strokeWidth={1} />
                <span className="text-white font-semibold text-lg">Nurox</span>
              </div>
              <div className="mb-6">
                <h4 className="text-5xl font-bold text-white mb-2">98 <span className="text-blue-500">%</span></h4>
                <p className="text-gray-400 font-medium">Reliable performance</p>
              </div>
              <div className="w-1/2 h-px bg-white/5 mb-8" />
              <p className="text-gray-500 text-sm leading-relaxed">
                Consistent, dependable operation ensuring smooth performance.
              </p>
            </motion.div>

            {/* Card 2: Projects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#070b15]/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex items-center -space-x-3 mb-10">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i + 10}`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-[#030816] object-cover"
                  />
                ))}
              </div>
              <div className="mb-6">
                <h4 className="text-5xl font-bold text-white mb-2">15 M</h4>
                <p className="text-gray-400 font-medium">Projects completed</p>
              </div>
              <div className="w-1/2 h-px bg-white/5 mb-8" />
              <p className="text-gray-500 text-sm leading-relaxed">
                Helping businesses grow with scaled digital solutions and AI integration.
              </p>
            </motion.div>

            {/* Card 3: Design */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#070b15]/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <span className="text-blue-500 text-xl font-bold">🎯</span>
                </div>
                <span className="text-white font-semibold text-sm">Help desk ticketing system</span>
              </div>
              <div className="mb-6">
                <h4 className="text-5xl font-bold text-white mb-2">43 <span className="text-blue-500">+</span></h4>
                <p className="text-gray-400 font-medium">Intuitive design</p>
              </div>
              <div className="w-1/2 h-px bg-white/5 mb-8" />
              <p className="text-gray-500 text-sm leading-relaxed">
                Serving users globally with accessible and reliable solutions worldwide.
              </p>
            </motion.div>
          </div>
          {/* Learn More Button */}
          <div className="flex justify-center">
            <button className="bg-[#051125] text-white px-8 py-3 rounded-lg border border-blue-600/50 text-sm font-semibold hover:bg-blue-600 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Team Banner Image Section */}
      <section className="pb-32 bg-[#030816]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.1)] group"
          >
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030816]/60 via-transparent to-transparent z-10 pointer-events-none" />
            
            <img 
              src={teamBanner} 
              alt="Nurox Team Office Banner" 
              className="w-full h-[450px] md:h-[600px] object-cover transform scroll-smooth transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Corner Accent Detail */}
            <div className="absolute bottom-6 right-6 z-20 hidden md:block">
              <div className="bg-[#070b15]/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-white/70 text-xs font-medium tracking-tight">Nurox HQ – Collaboration in Progress</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-[#030816]">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-4 inline-block"
            >
              Our Team
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Experts in Tech, Leaders in <br className="hidden md:block" /> Transformation
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg"
            >
              We are engineers, product thinkers, data scientists, and creatives
            </motion.p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group"
              >
                {/* Member Image Container */}
                <div className="relative mb-8 rounded-[2rem] overflow-hidden aspect-[4/5] bg-gray-900 border border-white/5 transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.1)]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Member Info */}
                <div className="text-center space-y-2 mb-6">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{member.name}</h3>
                  <p className="text-gray-500 font-medium text-sm">{member.role}</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {member.socials.map((social, sIdx) => (
                    <a 
                      key={sIdx}
                      href={social.link}
                      className="w-10 h-10 rounded-lg bg-[#070b15] border border-white/5 flex items-center justify-center text-blue-500 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-sm"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog & News Section */}
      <BlogSection />

      <FinalCTA />
    </main>
  );
};

export default About;
