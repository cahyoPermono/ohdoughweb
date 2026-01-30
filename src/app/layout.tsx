import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OhDough Jombang - Artisan Bakery & Japanese Milk Bread',
  description: 'Premium Bomboloni and Japanese Soft Milk Bread in Jombang. Freshly crafted, purely OhDough. Order via WhatsApp.',
  keywords: 'Toko Roti Jombang, OhDough, Bomboloni Jombang, Japanese Milk Bread, Kuliner Jombang',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
