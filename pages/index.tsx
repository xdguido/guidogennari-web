import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import clsx from 'clsx';
import Button from '@ui/Button';
import { FaArrowCircleRight } from 'react-icons/fa';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section
                id="hero"
                className={clsx(
                    'flex flex-col items-center text-center pt-[6rem] md:pt-[7rem] min-h-screen bg-gradient-to-t from-gray-400 via-slate-50'
                )}
            >
                <h1 className="font-neue tracking-tight text-6xl md:text-7xl lg:text-8xl">
                    Guido Gennari
                </h1>
                <p className="text-gray-900 lg:text-lg">
                    Web developer. Building freelance projects with React ✨
                </p>
                <div className="relative aspect-square w-[11rem] lg:w-[15rem] my-8 md:my-11 lg:my-12 xl:my-16">
                    <Image
                        priority
                        src="/images/example1.jpg"
                        className="rounded-full"
                        fill
                        alt="main pic"
                    />
                </div>
                <div className="flex gap-4 lg:gap-6 ">
                    <Button href="#work" children="Work" uppercase={true} />
                    <Button
                        href="mailto:guidogennari95@gmail.com"
                        children="Contact me"
                        style="outline"
                        uppercase={true}
                    />
                </div>
            </section>
            <section id="work" className="relative pt-[6rem] md:pt-[7rem]">
                <h2 className="font-neue text-4xl text-blue-600 mb-8 px-6">Work</h2>
                <div className="flex flex-col justify-center items-center">
                    <div
                        id="item-1"
                        className="flex flex-col items-center mb-[6rem] lg:mb-[10rem] lg:flex-row lg:items-start"
                    >
                        <div className="p-2 mb-3 lg:w-[26rem] lg:mr-12">
                            <div className="text-xl font-medium mb-2 lg:text-2xl">
                                Landing Pages
                            </div>
                            <div className=" text-gray-600 lg:text-lg">
                                Modern and SEO optimized pages for business.
                            </div>
                            <div className="flex justify-center md:justify-start mt-4 gap-6  ">
                                <Button children="Live preview" intent="secondary" />
                                <Button children="Details" intent="secondary" style="outline" />
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
                                Full-stack Library App
                            </div>
                            <div className=" text-gray-600 lg:text-lg">
                                Build and share your favourites book lists.
                            </div>
                            <div className="flex justify-center md:justify-start mt-4 gap-6  ">
                                <Button children="Live preview" intent="secondary" />
                                <Button children="Details" intent="secondary" style="outline" />
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
                    <div>
                        <button className="flex items-center gap-3 text-lg font-semibold text-gray-600 hover:text-blue-600 focus-visible:text-blue-600 active:text-blue-800 p-2">
                            More projects <FaArrowCircleRight className="" />
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
