import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HostingService() {
  return (
    <main>
      <Navbar />
      <section className="container-max pt-16 pb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">Domain & Hosting</h1>
        <p className="text-white/80 mt-3 max-w-2xl">We manage domains and provide secure, optimized hosting with backups, SSL, and monitoring.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {['Managed DNS', 'SSL & backups', 'Uptime monitoring', 'Staging environments', 'CDN & caching', 'Security hardening'].map((t) => (
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
