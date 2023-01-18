import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import Button from '@ui/Button';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section id="hero" className="flex flex-col items-center text-center">
                <h1 className="font-neue tracking-tight text-6xl md:text-7xl lg:text-8xl mt-4 xl:mt-6">
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
            <section></section>
        </Layout>
    );
}
