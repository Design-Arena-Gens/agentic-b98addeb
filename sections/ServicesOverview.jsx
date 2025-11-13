"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    slug: 'wordpress',
    title: 'WordPress Development',
    desc: 'High-performance websites tailored to your brand and goals.',
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce (WooCommerce)',
    desc: 'Scalable online stores optimized for conversions and growth.',
  },
  {
    slug: 'domain-hosting',
    title: 'Domain & Hosting',
    desc: 'Managed domains, secure hosting, backups, and monitoring.',
  },
  {
    slug: 'maintenance',
    title: 'Maintenance Care',
    desc: 'Updates, security, and continuous improvements handled for you.',
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="container-max py-20">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
        <Link href="/services" className="text-tech-mint hover:opacity-80">View all</Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, idx) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: idx * 0.05 }}
            className="card p-5 flex flex-col"
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-tech-blue to-tech-mint mb-4" />
            <div className="font-medium">{s.title}</div>
            <p className="text-sm text-white/70 mt-1 flex-1">{s.desc}</p>
            <Link href={`/services/${s.slug}`} className="btn-ghost mt-4">Learn more</Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
