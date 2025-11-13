import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MaintenanceService() {
  return (
    <main>
      <Navbar />
      <section className="container-max pt-16 pb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">Website Maintenance</h1>
        <p className="text-white/80 mt-3 max-w-2xl">Keep your site fast, secure, and up-to-date with proactive maintenance and support.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {['Core & plugin updates', 'Security scans', 'Performance tuning', 'Content edits', 'Accessibility improvements', 'Monthly reports'].map((t) => (
            <div key={t} className="card p-5">{t}</div>
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/contact" className="btn-primary">Request proposal</Link>
          <Link href="/services" className="btn-ghost">Back to services</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
