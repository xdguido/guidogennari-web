import Button from '@ui/Button';
import { NextjsLogo, ReactLogo } from '@ui/TechLogo';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Typed from 'react-typed';

export default function Home() {
    return (
        <>
            <section
                id="hero"
                className="flex flex-col justify-center items-center text-center  min-h-screen"
            >
                <div className="mb-10">
                    <h1 className=" font-mono font-bold tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 translate-x-4">
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
                    <h1 className="text-gray-900 dark:text-gray-400 text-base lg:text-lg p-2 sm:p-0">
                        Freelance web developer. Building with React ✨
                    </h1>
                </div>
                {/* <div className="relative aspect-square w-[13rem] lg:w-[16rem] my-[6vh]">
                    <Image
                        priority
                        src="/images/example1.jpg"
                        className="rounded-full"
                        fill
                        alt="main pic"
                    />
                </div> */}
                <div className="flex gap-4 lg:gap-6 ">
                    <Button href="/#work">Work</Button>
                    <Button href="/resume" style="outline">
                        Resume
                    </Button>
                </div>
            </section>
            <section id="work" className="relative pt-[6rem] md:pt-[7rem]">
                <h2 className="text-2xl font-semibold text-blue-600  mb-8">WORK</h2>
                <div className="flex flex-col gap-20 lg:gap-28 justify-center items-center">
                    <div id="project-1" className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-medium lg:text-2xl">
                                E-commerce Web Application
                            </h3>
                            <p className=" text-gray-600 dark:text-gray-400 lg:text-lg">
                                Full-stack application for small business. It allows customers to
                                navigate through different products categories and create purchase
                                orders.
                            </p>
                            <div className="flex justify-start gap-6">
                                <ReactLogo />
                                <NextjsLogo />
                            </div>
                            <div className="flex flex-col gap-4">
                                <Button
                                    href={'https://nextjs-prisma-ecommerce.vercel.app/products'}
                                    target="_blank"
                                    colorScheme="gray"
                                    style="outline"
                                >
                                    Live preview <FaExternalLinkAlt />
                                </Button>
                                <Button
                                    href={'https://github.com/xdguido/nextjs-prisma-ecommerce'}
                                    target="_blank"
                                    colorScheme="gray"
                                    style="outline"
                                >
                                    Details <FaExternalLinkAlt />
                                </Button>
                            </div>
                        </div>
                        <div className="md:col-span-2 relative aspect-square">
                            <Image
                                className="object-cover rounded-lg shadow-md"
                                src="/images/banner2.png"
                                alt="Portfolio Image"
                                fill
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div id="project-2" className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-medium lg:text-2xl">Landing Websites</h3>
                            <p className=" text-gray-600 dark:text-gray-400 lg:text-lg">
                                Standalone web page designed specifically for a marketing campaign
                                or specific product/service. The goal is to convert visitors into
                                customers by providing relevant information and clear
                                calls-to-action.
                            </p>
                            <div className="flex justify-start gap-6">
                                <ReactLogo />
                                <NextjsLogo />
                            </div>
                            <div className="flex flex-col gap-4">
                                <Button
                                    href={'https://landing-nextjs-template.vercel.app/'}
                                    target="_blank"
                                    colorScheme="gray"
                                    style="outline"
                                >
                                    Live preview <FaExternalLinkAlt />
                                </Button>
                                <Button
                                    href={'https://github.com/xdguido/nextjs-landing-template'}
                                    target="_blank"
                                    colorScheme="gray"
                                    style="outline"
                                >
                                    Details <FaExternalLinkAlt />
                                </Button>
                            </div>
                        </div>
                        <div className="md:col-span-2 relative aspect-square">
                            <Image
                                className="object-cover rounded-lg shadow-md"
                                src="/images/banner.png"
                                alt="Portfolio Image"
                                fill
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* <div>
                        <button className="flex items-center gap-3 text-lg font-semibold dark:text-slate-100 text-gray-600 hover:text-blue-600 focus-visible:text-blue-600 active:text-blue-800 p-2 mb-2">
                            More projects <FaArrowCircleRight className="" />
                        </button>
                    </div> */}
                </div>
            </section>
        </>
    );
}
