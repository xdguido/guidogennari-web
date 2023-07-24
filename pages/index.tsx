import Button from '@ui/Button';
import { NextjsLogo, ReactLogo } from '@ui/TechLogo';
import Image from 'next/image';
import { FaExternalLinkAlt, FaArrowCircleRight, FaGithub } from 'react-icons/fa';
import Typed from 'react-typed';

export default function Home() {
    return (
        <>
            <section
                id="hero"
                className="flex min-h-screen flex-col items-center justify-center  text-center"
            >
                <div className="mb-10">
                    <h1 className=" mb-4 translate-x-4 font-mono text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                        guido.
                        <Typed
                            strings={[
                                'js',
                                'ts',
                                'jsx',
                                'tsx',
                                'json',
                                'html',
                                'css',
                                'sql',
                                'md',
                                'yml'
                            ]}
                            typeSpeed={150}
                            backSpeed={150}
                            loop
                        />
                    </h1>
                    <h1 className="p-2 text-base text-gray-600 dark:text-gray-400 sm:p-0 lg:text-lg">
                        Full-stack web developer. Building with React ✨
                    </h1>
                </div>
                <div className="flex gap-4 lg:gap-6 ">
                    <Button href="/#work">Work</Button>
                    <Button href="/resume" styleScheme="outline">
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
                                    href={'https://nextjs-prisma-ecommerce.vercel.app/products'}
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
