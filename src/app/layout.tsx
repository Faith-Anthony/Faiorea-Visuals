import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Faiorea Visuals | Creative Media Studio',
  description: 'Videography, storytelling, and creative visuals for brands, creators, and unforgettable moments.',
  keywords: 'videography, video editing, creative studio, storytelling, events, content creation',
  authors: [{ name: 'Faiorea Visuals' }],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
