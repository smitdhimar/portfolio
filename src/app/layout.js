import { Inter } from 'next/font/google';
import './globals.css';
import { userDetails } from '../../config';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: `Portfolio | ${userDetails?.name}`,
  description: 'Full-stack developer portfolio showcasing projects and skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}