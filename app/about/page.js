import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="container-max pt-16 pb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">About CGS</h1>
        <p className="text-white/80 mt-3 max-w-3xl">Chowdhury Global Solutions (CGS) is a modern IT services company specializing in WordPress development, WooCommerce, hosting, and website maintenance. We combine technical excellence with a design-first mindset to deliver fast, secure, and scalable web experiences.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="card p-6">
            <div className="text-sm text-white/60">Focus</div>
            <div className="font-medium">Outcomes over outputs</div>
          </div>
          <div className="card p-6">
            <div className="text-sm text-white/60">Values</div>
            <div className="font-medium">Reliability, clarity, craftsmanship</div>
          </div>
          <div className="card p-6">
            <div className="text-sm text-white/60">Approach</div>
            <div className="font-medium">Iterative, data-informed, transparent</div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
