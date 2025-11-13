import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  { slug: 'wordpress', title: 'WordPress Development', bullets: ['Custom themes', 'Performance & SEO', 'Security & scalability'] },
  { slug: 'ecommerce', title: 'E-commerce (WooCommerce)', bullets: ['Product catalogs', 'Checkout UX', 'Payment & shipping'] },
  { slug: 'domain-hosting', title: 'Domain & Hosting', bullets: ['Managed DNS', 'Backups & SSL', 'Monitoring'] },
  { slug: 'maintenance', title: 'Website Maintenance', bullets: ['Updates & patches', 'Content edits', 'Ongoing optimization'] },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <section className="container-max pt-16 pb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">Services</h1>
        <p className="text-white/80 mt-2 max-w-2xl">Everything you need to launch and grow a modern web presence ? delivered with care and technical excellence.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {services.map((s) => (
            <div key={s.slug} className="card p-6">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-medium text-lg">{s.title}</h3>
                  <ul className="mt-2 text-sm text-white/80 list-disc list-inside">
                    {s.bullets.map((b) => (<li key={b}>{b}</li>))}
                  </ul>
                </div>
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-tech-blue to-tech-mint" />
              </div>
              <div className="mt-6 flex gap-3">
                <Link href={`/services/${s.slug}`} className="btn-ghost">Learn more</Link>
                <Link href="/contact" className="btn-primary">Get a quote</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
