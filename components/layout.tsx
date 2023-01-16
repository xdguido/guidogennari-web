import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Guido Gennari';
export const siteTitle = 'Guido Gennari - Web Development';

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
    return (
        <div className="flex flex-col min-h-screen bg-slate-100">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Web developer - React - JavaScript" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="relative flex justify-between p-4">
                <h1 className="font-extrabold tracking-tight text-3xl">{name}</h1>
                <ul id="socials" className="font-extrabold tracking-tight text-3xl flex">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </header>
            <main className="flex flex-auto justify-center p-4">{children}</main>
        </div>
    );
}
