import '@/app/ui/global.css';
import { ReactNode } from 'react';
import { inter } from '@/app/ui/fonts';

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
