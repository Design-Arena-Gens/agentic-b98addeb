"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="container-max flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-tech-blue to-tech-mint" />
          <span className="font-semibold">CGS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">Get a Quote</Link>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="container-max py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="py-2 text-white/90" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setOpen(false)}>Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
