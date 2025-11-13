import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container-max py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-tech-blue to-tech-mint" />
            <span className="font-semibold">CGS</span>
          </div>
          <p className="text-sm text-white/70">Your reliable digital partner for WordPress, WooCommerce, Hosting, and Maintenance.</p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/services/wordpress" className="hover:text-white">WordPress Development</Link></li>
            <li><Link href="/services/ecommerce" className="hover:text-white">E-commerce (WooCommerce)</Link></li>
            <li><Link href="/services/domain-hosting" className="hover:text-white">Domain & Hosting</Link></li>
            <li><Link href="/services/maintenance" className="hover:text-white">Website Maintenance</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Get in touch</h4>
          <p className="text-sm text-white/80">Email: hello@cgs.example</p>
          <p className="text-sm text-white/80">Mon?Fri 9:00?17:00</p>
          <Link href="/contact" className="btn-primary mt-3 inline-flex">Request a Quote</Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">? {new Date().getFullYear()} Chowdhury Global Solutions. All rights reserved.</div>
    </footer>
  );
}
