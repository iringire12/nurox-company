import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FolderPlus, LoaderCircle } from 'lucide-react';

import { apiRequest } from '../config/api';
import { useAuth } from '../context/AuthContext';

const initialForm = {
  title: '',
  category: '',
  summary: '',
  description: '',
  price: '',
  deliveryTime: '',
};

const AddServicePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, token, user } = useAuth();
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      setIsSubmitting(true);

      await apiRequest('/services', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      setSuccess('Service added successfully. It now appears on the Services page.');
      setFormData(initialForm);
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030816]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 15% 18%, rgba(17, 88, 189, 0.22) 0%, transparent 28%), radial-gradient(circle at 85% 20%, rgba(6, 182, 212, 0.12) 0%, transparent 22%), radial-gradient(circle at 50% 75%, rgba(3, 8, 22, 0.3) 0%, rgba(3, 8, 22, 1) 65%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.85) 1px, transparent 1px)',
          backgroundSize: `${100 / 7}% 100%`,
        }}
      />

      <section className="container relative z-10 mx-auto px-6 pb-20 pt-36">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[2rem] border border-white/10 bg-[#07101f]/88 p-8 shadow-[0_30px_90px_rgba(3,8,22,0.4)] md:p-10"
          >
            <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
                  <FolderPlus size={14} />
                  Add Service
                </span>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Publish a new service
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                  Create a service that will be stored in MongoDB and displayed on the Services page.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300">
                Signed in as <span className="font-semibold text-white">{user?.name}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                    Service title
                  </label>
                  <input
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="AI Workflow Automation"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#06101f] px-5 py-4 text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                    Category
                  </label>
                  <input
                    name="category"
                    type="text"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Automation"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#06101f] px-5 py-4 text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                    Price
                  </label>
                  <input
                    name="price"
                    type="text"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="$499 / month"
                    className="w-full rounded-2xl border border-white/10 bg-[#06101f] px-5 py-4 text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                    Delivery time
                  </label>
                  <input
                    name="deliveryTime"
                    type="text"
                    value={formData.deliveryTime}
                    onChange={handleChange}
                    placeholder="2 weeks"
                    className="w-full rounded-2xl border border-white/10 bg-[#06101f] px-5 py-4 text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                  Short summary
                </label>
                <textarea
                  name="summary"
                  rows="3"
                  value={formData.summary}
                  onChange={handleChange}
                  placeholder="A short overview users will see on the services grid."
                  required
                  maxLength={220}
                  className="w-full rounded-2xl border border-white/10 bg-[#06101f] px-5 py-4 text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                  Full description
                </label>
                <textarea
                  name="description"
                  rows="7"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe what this service does, who it helps, and what clients should expect."
                  required
                  maxLength={2500}
                  className="w-full rounded-2xl border border-white/10 bg-[#06101f] px-5 py-4 text-white placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none"
                />
              </div>

              {error && (
                <div className="rounded-2xl border border-red-500/35 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-2xl border border-emerald-500/35 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                  {success}
                </div>
              )}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-blue-500/70 bg-[#0057d8]/30 px-7 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_24px_rgba(37,99,235,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle size={18} className="animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      Save Service
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AddServicePage;
