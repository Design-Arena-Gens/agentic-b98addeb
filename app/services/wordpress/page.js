import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function WordPressService() {
  return (
    <main>
      <Navbar />
      <section className="container-max pt-16 pb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">WordPress Development</h1>
        <p className="text-white/80 mt-3 max-w-2xl">We design and develop high-performance WordPress sites that are fast, secure, and easy to manage.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {['Custom themes', 'Performance & SEO', 'Security & scalability', 'Gutenberg blocks', 'Headless options', 'Analytics setup'].map((t) => (
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
