"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Hero() {
  return (
    <div className="relative">
      <div className="glow-gradient animate-pulseGlow" />
      <Navbar />
      <section className="container-max pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs mb-6">Tech-driven. Futuristic. Reliable.</span>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Chowdhury Global Solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-tech-mint">WordPress & E?commerce Experts</span>
          </h1>
          <p className="mt-5 text-white/80 max-w-2xl mx-auto">We build fast, secure, and scalable websites using WordPress and WooCommerce, with managed domain, hosting, and maintenance ? so you can focus on growth.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="#services" className="btn-ghost">Explore Services</Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 card p-6"
        >
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <Feature title="WordPress Development" desc="Custom, secure, and lightning fast." />
            <Feature title="WooCommerce" desc="Conversion-focused online stores." />
            <Feature title="Hosting & Care" desc="Managed hosting and ongoing maintenance." />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
      <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-tech-blue to-tech-mint mb-3 animate-float" />
      <div className="font-medium">{title}</div>
      <div className="text-white/70 mt-1">{desc}</div>
    </div>
  );
}
