import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaDiscord } from 'react-icons/fa';
import ThemeToggler from '@ui/ThemeToggler';

export const siteTitle = 'Guido Gennari - Web Development';

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-black dark:text-slate-100">
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
            <header className="z-50 fixed inset-x-0 top-0 flex flex-1 items-center justify-between backdrop-blur-md border-b border-b-gray-300 dark:border-b-gray-500 p-4 lg:p-5">
                <h1 className="font-neue leading-6 tracking-tight text-xl">
                    Guido
                    <br />
                    Gennari
                </h1>
                <div className="flex gap-3">
                    <ThemeToggler />
                    <ul id="socials" className="font-extrabold tracking-tight text-3xl flex">
                        <li>
                            <a
                                title="GitHub"
                                target="_blank"
                                href="https://github.com/xdguido"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">GitHub page</span>
                                <div
                                    className="rounded hover:text-blue-600 focus-visible:text-blue-600 active:text-blue-600  p-1"
                                    aria-hidden="true"
                                >
                                    <FaGithub />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                title="Discord"
                                target="_blank"
                                href="https://discordapp.com/users/xdguido#4212"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">Discord profile</span>
                                <div
                                    className="rounded hover:text-blue-600 focus-visible:text-blue-600 active:text-blue-600  p-1"
                                    aria-hidden="true"
                                >
                                    <FaDiscord />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                title="Linkedin"
                                target="_blank"
                                href="https://www.linkedin.com/in/guido-gennari/"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">Linkedin page</span>
                                <div
                                    className="rounded hover:text-blue-600 focus-visible:text-blue-600 active:text-blue-600  p-1"
                                    aria-hidden="true"
                                >
                                    <FaLinkedinIn />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="flex flex-auto flex-col">{children}</main>
            <footer className="flex items-center justify-between bg-black dark:bg-gray-300 h-[8rem] p-4 lg:p-5">
                <h1 className="font-neue text-white dark:text-gray-900 leading-6 tracking-tight text-xl">
                    Guido
                    <br />
                    Gennari
                </h1>
            </footer>
        </div>
    );
}
