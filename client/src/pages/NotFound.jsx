import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <main className="bg-[#030816] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: `${100 / 7}% 100%`,
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[10rem] md:text-[14rem] font-black text-white/5 leading-none select-none mb-[-2rem]">
            404
          </h1>
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Page Not Found
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/10 transition-all duration-300"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
