import '@/app/ui/global.css';
import { ReactNode } from 'react';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

/**
 * The metadata for the root layout.
 */
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

/**
 * Root layout component.
 * By adding Inter to the <body> element,
 * the font will be applied throughout your application.
 *
 * @param children - The content to be rendered inside the layout.
 * @returns The rendered layout component.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
