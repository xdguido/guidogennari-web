import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section id="hero" className="flex flex-col items-center text-center">
                <Image
                    priority
                    src="/images/profile.jpg"
                    className="rounded-full mt-6 mb-3"
                    height={166}
                    width={166}
                    alt="main pic"
                />
                <h1 className="font-bold tracking-tight text-3xl mb-1">Web Developer</h1>
                <p className="text-gray-900">Currently building freelance projects with React ✨</p>
            </section>
        </Layout>
    );
}
