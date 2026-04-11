import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hexagon, ChevronDown } from 'lucide-react';

import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const isActive = (path) => location.pathname === path;
  const isServicesActive =
    location.pathname === '/services' || location.pathname === '/services-detail';
  const isPagesActive = [
    '/team',
    '/pricing',
    '/testimonials',
    '/faq',
    '/404',
    '/coming-soon'
  ].includes(location.pathname);
  const isBlogActive = location.pathname.startsWith('/blog');

  return (
    <nav className="absolute top-0 left-0 w-full z-50 border-b border-white/5 bg-transparent">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo - Pushed Left */}
        <Link to="/" className="flex items-center gap-2 w-1/4">
          <Hexagon className="text-blue-500" size={32} fill="currentColor" strokeWidth={1} />
          <span className="text-2xl font-semibold text-white tracking-wide">Nurox</span>
        </Link>
        
        {/* Links - Pushed Dead Center */}
        <div className="hidden lg:flex items-center justify-center gap-9 w-2/4">
          <Link to="/" className={`text-[15px] font-medium tracking-wide transition-colors ${isActive('/') ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Home</Link>
          <Link to="/about" className={`text-[15px] font-medium tracking-wide transition-colors ${isActive('/about') ? 'text-white' : 'text-gray-400 hover:text-white'}`}>About</Link>
          <div
            className={`group relative flex items-center gap-1 cursor-pointer text-[15px] font-medium tracking-wide transition-colors ${
              isServicesActive ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Link to="/services">Services</Link>
            <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />
            
            {/* Dropdown Menu */}
            <div className="absolute top-[calc(100%+0.5rem)] left-0 w-48 bg-[#050811] border border-white/5 rounded-xl shadow-2xl py-3 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100] backdrop-blur-xl">
              <div className="flex flex-col gap-3">
                <Link to="/services" className="text-[15px] text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
                <Link to="/services-detail" className="text-[15px] text-gray-400 hover:text-white transition-colors">
                  Services Detail
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`group relative flex items-center gap-1 cursor-pointer text-[15px] font-medium tracking-wide transition-colors ${
              isPagesActive ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <span>Pages</span>
            <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />

            {/* Pages Dropdown */}
            <div className="absolute top-[calc(100%+0.5rem)] left-0 w-52 bg-[#050811] border border-white/5 rounded-xl shadow-2xl py-3 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100] backdrop-blur-xl">
              <div className="flex flex-col gap-3">
                <Link to="/team" className="text-[15px] text-gray-400 hover:text-white transition-colors">Our Team</Link>
                <Link to="/pricing" className="text-[15px] text-gray-400 hover:text-white transition-colors">Pricing</Link>
                <Link to="/testimonials" className="text-[15px] text-gray-400 hover:text-white transition-colors">Testimonials</Link>
                <Link to="/faq" className="text-[15px] text-gray-400 hover:text-white transition-colors">FAQ</Link>
                <Link to="/404" className="text-[15px] text-gray-400 hover:text-white transition-colors">404 Page</Link>
                <Link to="/coming-soon" className="text-[15px] text-gray-400 hover:text-white transition-colors">Coming Soon</Link>
              </div>
            </div>
          </div>
          <div
            className={`group relative flex items-center gap-1 cursor-pointer text-[15px] font-medium tracking-wide transition-colors ${
              isBlogActive ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Link to="/blog">Blog</Link>
            <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />

            {/* Blog Dropdown */}
            <div className="absolute top-[calc(100%+0.5rem)] left-0 w-48 bg-[#050811] border border-white/5 rounded-xl shadow-2xl py-3 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100] backdrop-blur-xl">
              <div className="flex flex-col gap-3">
                <Link to="/blog" className="text-[15px] text-gray-400 hover:text-white transition-colors">Blog</Link>
                <Link to="/blog-detail" className="text-[15px] text-gray-400 hover:text-white transition-colors">Blog Detail</Link>
              </div>
            </div>
          </div>
          <Link to="/contact" className={`text-[15px] font-medium tracking-wide transition-colors ${isActive('/contact') ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Contact</Link>
        </div>

        {/* Action - Pushed Right */}
        <div className="hidden lg:flex justify-end items-center gap-3 w-1/4">
          {isAuthenticated ? (
            <>
              <Link
                to="/add-service"
                className="rounded-md border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
              >
                Add Service
              </Link>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm">
                {user?.name}
              </div>
              <button
                type="button"
                onClick={logout}
                className="rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`text-sm font-semibold transition-colors ${
                  isActive('/login') ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-[#051125] text-white px-6 py-2.5 rounded-md border border-blue-600/50 text-sm font-semibold hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.15)]"
              >
                Start Free Trial
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
