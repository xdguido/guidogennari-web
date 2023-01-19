import Head from 'next/head';
import Link from 'next/link';
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
                className={clsx('flex flex-col items-center text-center pt-[7rem] min-h-screen')}
            >
                <h1 className="font-neue tracking-tight text-6xl md:text-7xl lg:text-8xl">
                    Guido Gennari
                </h1>
                <p className="text-gray-900 lg:text-lg">
                    Web developer. Building freelance projects with React ✨
                </p>
                <div className="relative aspect-square w-[11rem] lg:w-[15rem] my-11 lg:my-12 xl:my-16">
                    <Image
                        priority
                        src="/images/example1.jpg"
                        className="rounded-full"
                        fill
                        alt="main pic"
                    />
                </div>
                <div className="flex gap-4 lg:gap-6 ">
                    <Button href="/" children="Work" />
                    <Button
                        href="mailto:guidogennari95@gmail.com"
                        children="Contact me"
                        style="outline"
                    />
                </div>
            </section>
            <section
                id="work"
                className={clsx('relative flex flex-col justify-center items-center')}
            >
                <h2 className="absolute inset-x-0 -top-16 font-neue text-4xl text-blue-600">
                    Work
                </h2>
                <div
                    id="item-1"
                    className="flex flex-col items-center mb-[6rem] lg:mb-[10rem] lg:flex-row lg:items-start"
                >
                    <div className="p-2 mb-3 lg:w-[26rem] lg:mr-12">
                        <div className="text-xl font-medium mb-2 lg:text-2xl">Landing Pages</div>
                        <div className=" text-gray-600 lg:text-lg">
                            Modern and SEO optimized pages for business.
                        </div>
                        <div className="flex mt-4 gap-6  ">
                            <Button children="Live preview" />
                            <Button children="Details" style="outline" />
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
                        <div className="flex mt-4 gap-6  ">
                            <Button children="Live preview" />
                            <Button children="Details" style="outline" />
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
            </section>
        </Layout>
    );
}
