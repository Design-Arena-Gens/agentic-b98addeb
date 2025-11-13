"use client";
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Amina R.', role: 'Founder, BoutiqueBrand', quote: 'CGS transformed our site speed and checkout UX. Sales are up 38%.' },
  { name: 'Jason K.', role: 'COO, TechParts', quote: 'Rock-solid hosting and proactive maintenance ? truly set-and-forget.' },
  { name: 'Sanjay P.', role: 'CEO, EduWave', quote: 'From discovery to launch, a smooth and collaborative process.' },
];

export default function Testimonials() {
  return (
    <section className="container-max py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Trusted by growing teams</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="card p-5 text-sm"
          >
            <p className="text-white/90">?{t.quote}?</p>
            <footer className="mt-3 text-white/60">{t.name} ? {t.role}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
