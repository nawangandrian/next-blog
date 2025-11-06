// app/layout.tsx
import './globals.css';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'News NawDev',
  description: 'Berita dan Artikel Teknologi Terkini oleh NawDev',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
