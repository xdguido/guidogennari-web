import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import clsx from 'clsx';
import Button from '@ui/Button';

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
                    <Button children="Contact me" style="outline" />
                </div>
            </section>
            <section id="work" className={clsx('relative')}>
                <h2 className="absolute inset-x-0 -top-16 font-neue text-4xl text-blue-600">
                    Work
                </h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    <div
                        id="card"
                        className=" min-w-[25rem] max-w-[30rem] rounded-lg shadow-md overflow-hidden"
                    >
                        <div className="relative aspect-video">
                            <Image
                                className="object-cover"
                                src="/images/banner.png"
                                alt="Portfolio Image"
                                fill
                                loading="lazy"
                            />
                        </div>
                        <div className="px-6 py-4">
                            <div className=" text-xl font-medium">Landing Pages</div>
                            <div className=" text-gray-600">
                                Modern and SEO optimized pages for business.
                            </div>
                        </div>
                    </div>
                    <div
                        id="card"
                        className=" min-w-[25rem] max-w-[30rem] rounded-lg shadow-md overflow-hidden"
                    >
                        <div className="relative aspect-video ">
                            <Image
                                className="  object-cover transition duration-1000 ease-in-out"
                                src="/images/banner.png"
                                alt="Portfolio Image"
                                fill
                                loading="lazy"
                            />
                        </div>
                        <div className="px-6 py-4">
                            <div className=" text-xl font-medium">Full-stack Library App</div>
                            <div className=" text-gray-600">
                                Build and share your favourite book lists.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
