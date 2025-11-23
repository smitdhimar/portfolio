import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const name = process.env.NEXT_PUBLIC_NAME;
export const metadata = {
  title: `Portfolio | ${name}`,
  description: 'Full-stack developer portfolio showcasing projects and skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}