"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Request failed');
      setStatus('success');
      setMessage('Thanks! We will be in touch within 1 business day.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
      setMessage(err.message || 'Something went wrong');
    }
  }

  return (
    <main>
      <Navbar />
      <section className="container-max pt-16 pb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">Let?s talk about your project</h1>
        <p className="text-white/80 mt-2 max-w-2xl">Share a bit about your goals and timeline. We?ll get back within 1 business day.</p>
        <form onSubmit={onSubmit} className="card p-6 mt-8 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input name="name" required className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-tech-blue" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" name="email" required className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-tech-blue" />
            </div>
          </div>
          <div>
            <label className="text-sm text-white/70">Service</label>
            <select name="service" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              <option>WordPress Development</option>
              <option>E-commerce (WooCommerce)</option>
              <option>Domain & Hosting</option>
              <option>Website Maintenance</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-white/70">Message</label>
            <textarea name="message" rows={5} className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
          </div>
          <button disabled={status==='loading'} className="btn-primary disabled:opacity-60">
            {status === 'loading' ? 'Sending?' : 'Send message'}
          </button>
          {message && (
            <div className={`text-sm ${status==='error' ? 'text-red-400' : 'text-tech-mint'}`}>{message}</div>
          )}
        </form>
      </section>
      <Footer />
    </main>
  );
}
