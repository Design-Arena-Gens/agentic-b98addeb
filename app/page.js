import Hero from '@/sections/Hero';
import ServicesOverview from '@/sections/ServicesOverview';
import Process from '@/sections/Process';
import Testimonials from '@/sections/Testimonials';
import CTA from '@/sections/CTA';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Hero />
      <div className="bg-grid bg-gridSize opacity-10 absolute inset-0 pointer-events-none" />
      <ServicesOverview />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
