import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://ohdoughbakery.com'),
  title: 'OhDough Jombang - Toko Roti & Bomboloni Enak Viral',
  description: 'Temukan Bomboloni lumer, Roti Sobek Japanese Milk Bread lembut, dan oleh-oleh kekinian khas Jombang di OhDough. Halal, fresh made, dan harga mulai 8 ribuan. Kuliner wajib Jombang 2026!',
  keywords: [
    'Roti Jombang', 'Bakery Jombang', 'Donut Jombang', 'Bomboloni Jombang', 'Oleh-oleh Jombang',
    'Toko roti enak di Jombang', 'Bakery di Jombang', 'Jual roti Jombang',
    'Kuliner Jombang terbaru 2026', 'Oleh-oleh khas Jombang kekinian',
    'Jual Bomboloni lumer Jombang', 'Roti sobek manis lembut Jombang',
    'Japanese milk bread Jombang', 'Japanese sweet buns Jombang',
    'Roti gembong/sobek premium Jombang', 'Roti enak murah di Jombang',
    'Roti harga 8 ribuan Jombang', 'Bakery murah Jombang halal',
    'Snack box Jombang murah enak', 'Jajanan CFD Jombang',
    'Kuliner Alun-alun Jombang', 'Roti viral Jombang'
  ],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
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
