// Use this file to keep the fonts that will be used throughout your application.
// Add the font to the <body> element in /app/layout.tsx:

import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
