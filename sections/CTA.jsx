import Link from 'next/link';

export default function CTA() {
  return (
    <section className="container-max py-20">
      <div className="card p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute -inset-10 opacity-40 blur-2xl bg-gradient-to-tr from-tech-blue to-tech-mint animate-pulseGlow" />
        <h3 className="relative text-2xl md:text-3xl font-semibold">Ready to build something great?</h3>
        <p className="relative mt-2 text-white/80">Tell us about your goals ? we?ll craft a plan and timeline.</p>
        <div className="relative mt-6">
          <Link href="/contact" className="btn-primary">Get a free quote</Link>
        </div>
      </div>
    </section>
  );
}
