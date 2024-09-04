import Header from './header';

import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const siteTitle = 'Guido Gennari';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`flex min-h-screen flex-col bg-slate-50 dark:bg-black dark:text-gray-100 ${inter.variable} font-sans`}
    >
      <Header />
      <main className="mx-auto">{children}</main>
    </div>
  );
}
