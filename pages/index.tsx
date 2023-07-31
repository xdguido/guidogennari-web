import Button from '@ui/Button';
import { NextjsLogo, ReactLogo } from '@ui/TechLogo';
import Image from 'next/image';
import { FaExternalLinkAlt, FaArrowCircleRight, FaGithub } from 'react-icons/fa';
import Typed from 'react-typed';

export default function Home() {
    return (
        <>
            <div className="absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
                <div
                    className="pointer-events-none absolute inset-x-0 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-sky-500 to-violet-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                        }}
                    ></div>
                </div>
                <div
                    className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-sky-400 to-violet-800 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                        }}
                    ></div>
                </div>
            </div>
            <section
                id="hero"
                className="z-10 flex min-h-screen flex-col items-center justify-center  text-center"
            >
                <h1 className="mb-4 w-[290px] translate-x-4 text-left font-mono text-5xl font-bold tracking-tight sm:w-[340px] sm:text-7xl md:mb-6 md:w-[480px] md:text-8xl 2xl:w-[620px] 2xl:text-9xl">
                    guido.
                    <Typed
                        strings={['ts', 'js', 'tsx', 'json', 'html', 'css', 'yml']}
                        typeSpeed={150}
                        backSpeed={150}
                        loop
                    />
                </h1>
                <h1 className="z-10 mb-6 flex flex-wrap justify-center gap-2 p-2 text-base text-gray-600 dark:text-gray-400 sm:p-0 md:mb-8 lg:text-lg">
                    Full-stack web developer.<span>Building with React ✨</span>
                </h1>

                <div className="z-10 flex gap-4 lg:gap-6 ">
                    <Button href="/#work">Work</Button>
                    <Button href="/resume" styleScheme="link">
                        Resume
                    </Button>
                </div>
            </section>
            <section id="work" className="relative pt-[6rem] md:pt-[7rem]">
                <h2 className="mb-8 text-2xl font-semibold  text-blue-600">WORK</h2>
                <div className="flex flex-col items-center justify-center gap-20 lg:gap-28">
                    <div id="project-1" className="grid grid-cols-1 gap-10 md:grid-cols-6">
                        <div className="flex flex-col gap-4 md:col-span-4">
                            <h3 className="text-xl font-medium lg:text-2xl">
                                E-commerce Web Application
                            </h3>
                            <p className=" text-gray-600 dark:text-gray-400 lg:text-lg">
                                Developing a fully-functional E-commerce SPA Web Application for a
                                Furniture Factory. The application will feature an easy-to-use
                                interface where customers can browse products, add items to their
                                shopping cart, and complete their purchase securely.
                            </p>
                            <div className="flex justify-start gap-6">
                                <ReactLogo />
                                <NextjsLogo />
                            </div>
                            <div className="flex flex-col gap-4 md:flex-row">
                                <Button
                                    href={
                                        'https://guidogennari-shop.vercel.app/products/all-products/newest'
                                    }
                                    target="_blank"
                                    colorScheme="gray"
                                    styleScheme="outline"
                                >
                                    Live preview <FaExternalLinkAlt />
                                </Button>
                                <Button
                                    href={'https://github.com/xdguido/nextjs-prisma-ecommerce'}
                                    target="_blank"
                                    colorScheme="gray"
                                    styleScheme="outline"
                                >
                                    Code <FaGithub />
                                </Button>
                            </div>
                        </div>
                        <div className="relative aspect-square md:col-span-2">
                            <Image
                                className="rounded-lg object-cover shadow-md"
                                src="/images/banner2.png"
                                alt="Portfolio Image"
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                        </div>
                    </div>
                    <div id="project-2" className="grid grid-cols-1 gap-10 md:grid-cols-6">
                        <div className="flex flex-col gap-4 md:col-span-4">
                            <h3 className="text-xl font-medium lg:text-2xl">Landing pages</h3>
                            <p className=" text-gray-600 dark:text-gray-400 lg:text-lg">
                                Developing websites that are specifically tailored for a marketing
                                campaign or a particular product or service. The main objective of
                                this project is to create a website that can convert visitors into
                                customers by providing them with the necessary information and clear
                                calls-to-action.
                            </p>
                            <div className="flex justify-start gap-6">
                                <ReactLogo />
                                <NextjsLogo />
                            </div>
                            <div className="flex flex-col gap-4 md:flex-row">
                                <Button
                                    href={'https://landing-nextjs-template.vercel.app/'}
                                    target="_blank"
                                    colorScheme="gray"
                                    styleScheme="outline"
                                >
                                    Live preview <FaExternalLinkAlt />
                                </Button>
                                <Button
                                    href={'https://github.com/xdguido/nextjs-landing-template'}
                                    target="_blank"
                                    colorScheme="gray"
                                    styleScheme="outline"
                                >
                                    Code <FaGithub />
                                </Button>
                            </div>
                        </div>
                        <div className="relative aspect-square md:col-span-2">
                            <Image
                                className="rounded-lg object-cover shadow-md"
                                src="/images/banner.png"
                                alt="Portfolio Image"
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                        </div>
                    </div>

                    <a
                        href="https://github.com/xdguido"
                        className="mb-2 flex items-center gap-3 p-2 text-lg font-semibold text-gray-600 hover:text-blue-600 focus-visible:text-blue-600 active:text-blue-800 dark:text-slate-100"
                    >
                        More projects <FaArrowCircleRight className="h-4 w-4" />
                    </a>
                </div>
            </section>
        </>
    );
}
