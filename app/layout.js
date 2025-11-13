import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chowdhury Global Solutions (CGS) ? WordPress & E?commerce Experts',
  description: 'Modern IT services: WordPress development, WooCommerce, Domain & Hosting, and Website Maintenance. Tech-driven, professional, and reliable.',
  metadataBase: new URL('https://agentic-b98addeb.vercel.app'),
  openGraph: {
    title: 'Chowdhury Global Solutions (CGS)',
    description: 'Your reliable digital partner for WordPress, WooCommerce, Hosting, and Maintenance',
    url: 'https://agentic-b98addeb.vercel.app',
    siteName: 'CGS',
    images: ['/og.png'],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>        
        {children}
      </body>
    </html>
  );
}
