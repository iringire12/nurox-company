import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, LockKeyhole, Mail, UserRound } from 'lucide-react';

import { useAuth } from '../context/AuthContext';

const initialForm = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const AuthPage = ({ mode = 'login' }) => {
  const isLogin = mode === 'login';
  const navigate = useNavigate();
  const { login, register, isAuthenticated, isLoading } = useAuth();
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      setIsSubmitting(true);

      if (isLogin) {
        await login({
          email: formData.email,
          password: formData.password,
        });
      } else {
        await register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }

      navigate('/', { replace: true });
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const alternatePath = isLogin ? '/register' : '/login';
  const alternateLabel = isLogin ? 'Create an account' : 'Sign in';

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030816]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(17, 88, 189, 0.28) 0%, transparent 30%), radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.14) 0%, transparent 24%), radial-gradient(circle at 50% 70%, rgba(3, 8, 22, 0.32) 0%, rgba(3, 8, 22, 1) 65%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: `${100 / 7}% 100%`,
        }}
      />
      <div className="absolute top-24 left-[10%] h-72 w-72 rounded-full bg-blue-500/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-8rem] right-[5%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none" />

      <section className="container relative z-10 mx-auto flex min-h-screen items-center px-6 pt-32 pb-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-200 backdrop-blur-md">
              Secure access for your Nurox workspace
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-[5rem]">
              {isLogin ? 'Welcome back.' : 'Create your account.'}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
              {isLogin
                ? 'Sign in to access your account and continue using the Nurox platform.'
                : 'Register in seconds and start using your MongoDB-backed Nurox account right away.'}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                'Encrypted password storage with bcrypt',
                'Persistent sign-in with JSON Web Tokens',
                'MongoDB user records ready for growth',
                'Clean React flow tied into your site',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 shadow-[0_18px_45px_rgba(3,8,22,0.25)] backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="rounded-[2rem] border border-blue-500/30 bg-[#07101f]/95 p-8 shadow-[0_34px_100px_rgba(3,8,22,0.45)] backdrop-blur-sm md:p-10"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">
                  {isLogin ? 'Login' : 'Register'}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  {isLogin ? 'Sign in to Nurox' : 'Join Nurox today'}
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/35 bg-blue-500/10 text-blue-200">
                {isLogin ? <LockKeyhole size={22} /> : <UserRound size={22} />}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {!isLogin && (
                <div>
                  <label className="mb-3 block text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                    Full name
                  </label>
                  <div className="flex items-center rounded-2xl border border-white/10 bg-[#06101f] px-5">
                    <UserRound size={18} className="text-slate-500" />
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="w-full bg-transparent px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="mb-3 block text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                  Email address
                </label>
                <div className="flex items-center rounded-2xl border border-white/10 bg-[#06101f] px-5">
                  <Mail size={18} className="text-slate-500" />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-transparent px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                  Password
                </label>
                <div className="flex items-center rounded-2xl border border-white/10 bg-[#06101f] px-5">
                  <LockKeyhole size={18} className="text-slate-500" />
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="At least 6 characters"
                    required
                    minLength={6}
                    className="w-full bg-transparent px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none"
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="mb-3 block text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                    Confirm password
                  </label>
                  <div className="flex items-center rounded-2xl border border-white/10 bg-[#06101f] px-5">
                    <LockKeyhole size={18} className="text-slate-500" />
                    <input
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Repeat your password"
                      required
                      minLength={6}
                      className="w-full bg-transparent px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {error && (
                <div className="rounded-2xl border border-red-500/35 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-blue-500/70 bg-[#0057d8]/30 px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_24px_rgba(37,99,235,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Please wait...' : isLogin ? 'Sign in' : 'Create account'}
                {!isSubmitting && <ArrowRight size={18} />}
              </button>
            </form>

            <p className="mt-6 text-sm text-slate-400">
              {isLogin ? 'New to Nurox?' : 'Already have an account?'}{' '}
              <Link to={alternatePath} className="font-semibold text-blue-300 hover:text-white">
                {alternateLabel}
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AuthPage;
