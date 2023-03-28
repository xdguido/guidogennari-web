import Button from '@ui/Button';
import { NextjsLogo, ReactLogo } from '@ui/TechLogo';
import clsx from 'clsx';
import Image from 'next/image';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import Typed from 'react-typed';
import Layout from '../components/layout';

export default function Home() {
    return (
        <Layout>
            <section
                id="hero"
                className={clsx(
                    'flex flex-col justify-center items-center text-center  min-h-screen overflow-hidden'
                )}
            >
                <div className="mb-10">
                    <h1 className="font-mono font-bold tracking-tight text-7xl md:text-8xl lg:text-9xl mb-4 translate-x-4">
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
                    <h2 className="text-gray-900 dark:text-gray-400 text-lg lg:text-xl p-2 sm:p-0">
                        Software developer. Building freelance projects with React ✨
                    </h2>
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
                    <Button href="#work">Work</Button>
                    <Button href="mailto:guidogennari95@gmail.com" style="outline">
                        Contact me
                    </Button>
                </div>
            </section>
            <section id="work" className="relative pt-[6rem] md:pt-[7rem]">
                <h2 className="text-2xl font-semibold text-blue-600 dark:text-slate-100 mb-8 px-6">
                    WORK
                </h2>
                <div className="flex flex-col justify-center items-center">
                    <div
                        id="item-1"
                        className="flex flex-col items-center mb-[6rem] lg:mb-[10rem] lg:flex-row lg:items-start"
                    >
                        <div className="p-2 mb-3 lg:w-[26rem] lg:mr-12">
                            <div className="text-xl font-medium mb-2 lg:text-2xl">
                                Landing Websites
                            </div>
                            <div className=" text-gray-600 dark:text-gray-400 lg:text-lg">
                                Standalone web page designed specifically for a marketing campaign
                                or specific product/service. The goal is to convert visitors into
                                customers by providing relevant information and clear
                                calls-to-action.
                            </div>
                            <div className="flex justify-center md:justify-start my-5 gap-6">
                                <ReactLogo />
                                <NextjsLogo />
                            </div>
                            <div className="flex justify-center md:justify-start mt-4 gap-6">
                                <Button
                                    href={'https://landing-nextjs-template.vercel.app/'}
                                    target="_blank"
                                    colorScheme="gray"
                                >
                                    Live preview <FaExternalLinkAlt />
                                </Button>
                                <Button
                                    href={'https://github.com/xdguido/nextjs-landing-template'}
                                    target="_blank"
                                    colorScheme="gray"
                                    style="outline"
                                >
                                    Details <FaArrowRight />
                                </Button>
                            </div>
                        </div>
                        <div
                            className={clsx(
                                'relative w-[22rem] aspect-square',
                                'md:w-[25rem] lg:w-[30rem] xl:w-[36rem]'
                            )}
                        >
                            <Image
                                className="object-cover rounded-lg shadow-md"
                                src="/images/banner.png"
                                alt="Portfolio Image"
                                fill
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div
                        id="item-2"
                        className="flex flex-col items-center mb-[6rem] lg:flex-row lg:items-start"
                    >
                        <div className="p-2 mb-3 lg:w-[26rem] lg:mr-12">
                            <div className="text-xl font-medium mb-2 lg:text-2xl">
                                Ecommerce Web Application
                            </div>
                            <div className=" text-gray-600 dark:text-gray-400 lg:text-lg">
                                Full stack application for small business. It allows customers to
                                navigate through different products categories and create buy
                                orders.
                            </div>
                            <div className="flex justify-center md:justify-start my-5 gap-6">
                                <ReactLogo />
                                <NextjsLogo />
                            </div>
                            <div className="flex justify-center md:justify-start mt-4 gap-6">
                                <Button
                                    href={'https://nextjs-prisma-ecommerce.vercel.app/'}
                                    target="_blank"
                                    colorScheme="gray"
                                >
                                    Live preview <FaExternalLinkAlt />
                                </Button>
                                <Button
                                    href={'https://github.com/xdguido/nextjs-prisma-ecommerce'}
                                    target="_blank"
                                    colorScheme="gray"
                                    style="outline"
                                >
                                    Details <FaArrowRight />
                                </Button>
                            </div>
                        </div>
                        <div
                            className={clsx(
                                'relative w-[22rem] aspect-square',
                                'md:w-[25rem] lg:w-[30rem] xl:w-[36rem]'
                            )}
                        >
                            <Image
                                className="object-cover rounded-lg shadow-md"
                                src="/images/banner2.png"
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
        </Layout>
    );
}
