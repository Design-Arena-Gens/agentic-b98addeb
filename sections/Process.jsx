"use client";
import { motion } from 'framer-motion';

const steps = [
  { title: 'Discover', desc: 'We understand your goals, users, and constraints.' },
  { title: 'Design', desc: 'We wireframe and craft sleek, on-brand interfaces.' },
  { title: 'Develop', desc: 'We build fast, accessible, SEO-friendly experiences.' },
  { title: 'Deliver', desc: 'We launch, monitor, and iterate based on data.' },
];

export default function Process() {
  return (
    <section className="container-max py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">How we work</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="card p-5"
          >
            <div className="text-sm text-white/60">Step {idx + 1}</div>
            <div className="font-medium mt-1">{s.title}</div>
            <p className="text-sm text-white/70 mt-1">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
