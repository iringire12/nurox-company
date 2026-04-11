import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, FolderKanban, Sparkles } from 'lucide-react';

import { apiRequest } from '../config/api';
import { useAuth } from '../context/AuthContext';

const CreatedServicesSection = () => {
  const { isAuthenticated } = useAuth();
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await apiRequest('/services');
        setServices(data.services || []);
      } catch (requestError) {
        setError(requestError.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#030816] py-24">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_38%)]" />
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
              <Sparkles size={14} />
              User Services
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Services added by your team
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              Save custom services in MongoDB and surface them directly on the site.
            </p>
          </div>

          <Link
            to={isAuthenticated ? '/add-service' : '/login'}
            className="inline-flex items-center justify-center gap-3 self-start rounded-xl border border-blue-500/70 bg-[#0057d8]/25 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_24px_rgba(37,99,235,0.3)]"
          >
            {isAuthenticated ? 'Add Service' : 'Login to Add Service'}
            <ArrowRight size={16} />
          </Link>
        </div>

        {isLoading ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="h-72 animate-pulse rounded-[1.8rem] border border-white/8 bg-white/5"
              />
            ))}
          </div>
        ) : error ? (
          <div className="mt-10 rounded-[1.6rem] border border-red-500/25 bg-red-500/10 px-6 py-5 text-red-100">
            {error}
          </div>
        ) : services.length === 0 ? (
          <div className="mt-12 rounded-[2rem] border border-white/10 bg-[#07101f]/85 px-8 py-12 text-center shadow-[0_24px_70px_rgba(3,8,22,0.35)]">
            <h3 className="text-2xl font-semibold text-white">No saved services yet</h3>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Create the first service to start building a real service catalog for this site.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service._id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[1.8rem] border border-white/10 bg-[#07101f]/92 p-7 shadow-[0_24px_70px_rgba(3,8,22,0.35)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/25 bg-blue-500/10 text-blue-200">
                    <FolderKanban size={20} />
                  </div>
                  {service.price && (
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                      {service.price}
                    </span>
                  )}
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-blue-200/80">
                  {service.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{service.summary}</p>
                <p className="mt-5 text-sm leading-7 text-slate-500">
                  {service.description.length > 180
                    ? `${service.description.slice(0, 180)}...`
                    : service.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                    By {service.createdBy?.name || 'Unknown'}
                  </span>
                  {service.deliveryTime && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                      <Clock3 size={12} />
                      {service.deliveryTime}
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CreatedServicesSection;
