import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'About', path: '/about' },
      { name: 'Features', path: '/services' },
      { name: 'Services', path: '/services' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact', path: '/contact' }
    ],
    support: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Term & Conditions', path: '/terms' },
      { name: 'Help Center', path: '/help' },
      { name: 'Feature Request', path: '/request' },
      { name: 'Online Support', path: '/support' }
    ],
    followUs: [
      { name: 'Instagram', path: 'https://instagram.com' },
      { name: 'Facebook', path: 'https://facebook.com' },
      { name: 'Youtube', path: 'https://youtube.com' },
      { name: 'Twitter', path: 'https://twitter.com' }
    ]
  };

  return (
    <footer className="bg-[#030816] pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Branding Section */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <Hexagon className="text-blue-500" size={32} fill="currentColor" strokeWidth={1} />
              <span className="text-3xl font-bold text-white tracking-tight">Nurox</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs transition-colors hover:text-gray-300">
              Leveraging cutting-edge AI technologies into your workflow, driving efficiency, innovation, and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:ml-auto">
            <h4 className="text-white font-bold text-lg mb-8 tracking-tight">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors text-[15px]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-3 md:ml-auto">
            <h4 className="text-white font-bold text-lg mb-8 tracking-tight">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors text-[15px]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="md:col-span-2 md:ml-auto">
            <h4 className="text-white font-bold text-lg mb-8 tracking-tight">Follow Us</h4>
            <ul className="space-y-4">
              {footerLinks.followUs.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors text-[15px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} Nurox AI SaaS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
