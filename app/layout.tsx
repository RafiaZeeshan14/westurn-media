import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Westurn Media',
  description: 'Westurn Media creates considered, unforgettable live experiences.',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['400', '500', '600', '700', '800'] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${poppins.variable} font-sans antialiased`}>{children}</body></html>;
}
