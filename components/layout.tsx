import Header from './header';

import { Inter } from '@next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

export const siteTitle = 'Guido Gennari - Web Development';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={`flex flex-col min-h-screen bg-slate-50 dark:bg-black dark:text-gray-100 ${inter.variable} font-sans`}
        >
            <Header />
            <main className="mx-auto max-w-5xl 2xl:max-w-6xl px-6 pb-6">{children}</main>
            {/* <footer className="flex items-center justify-between bg-black dark:bg-gray-300 h-[8rem] p-4 lg:p-5">
                <h1 className="font-semibold text-white dark:text-black leading-6 text-xl">
                    GUIDO GENNARI
                </h1>
            </footer> */}
        </div>
    );
}
