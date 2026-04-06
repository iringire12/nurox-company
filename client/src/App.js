import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServicesDetail from './pages/ServicesDetail';
import PricingPage from './pages/PricingPage';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ComingSoon from './pages/ComingSoon';
import TeamPage from './pages/TeamPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQPage from './pages/FAQPage';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import AuthPage from './pages/AuthPage';
import { AuthProvider } from './context/AuthContext';

function AppLayout() {
  const location = useLocation();
  const hideFooter = ['/coming-soon', '/login', '/register'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col text-white font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-detail" element={<ServicesDetail />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/login" element={<AuthPage mode="login" />} />
          <Route path="/register" element={<AuthPage mode="register" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
