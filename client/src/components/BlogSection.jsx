import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import blogImg1 from '../assets/blog_post_1.png';

const blogPosts = [
  {
    id: 1,
    title: "7 Real-World Use Cases of AI for Small Businesses",
    date: "July 22, 2025",
    image: blogImg1
  },
  {
    id: 2,
    title: "Why AI Adoption is No Longer Optional for SMEs",
    date: "July 21, 2025",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "5 Key Terms in AI Every Business Owner Should Know",
    date: "July 21, 2025",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  }
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-[#030816]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-4 inline-block"
            >
              Blog
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Latest Blog & News
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-lg"
            >
              Stay ahead of the curve with the latest AI innovations
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-3 bg-[#051125] text-white border border-blue-600/50 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
              All Blog
            </button>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#070b15] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.1)] h-full flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b15]/60 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <div className="mt-auto flex items-center gap-2 text-gray-500 text-sm">
                    <Clock size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
