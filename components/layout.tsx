import { Inter } from '@next/font/google';
import Header from './header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const siteTitle = 'Guido Gennari';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`flex min-h-screen flex-col bg-neutral-50 dark:bg-black dark:text-gray-100 ${inter.variable} font-sans`}
    >
      <Header />
      <main className="mx-auto max-w-[8.3in]">{children}</main>
    </div>
  );
}
