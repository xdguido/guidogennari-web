import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section id="hero" className="flex flex-col items-center text-center">
                <h1 className="font-header font-bold tracking-tight text-7xl md:text-8xl lg:text-9xl mb-2 lg:mb-1">
                    Guido Gennari
                </h1>
                <p className="text-gray-900 lg:text-lg">
                    Web developer. Building freelance projects with React ✨
                </p>
                <Image
                    priority
                    src="/images/profile.jpg"
                    className="rounded-full mt-6 mb-3"
                    height={166}
                    width={166}
                    alt="main pic"
                />
                <div className="mt-8">
                    <button
                        type="button"
                        className="mr-3 inline-block px-6 py-2.5 bg-black text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Work
                    </button>
                    <button className="inline-block px-6 py-2 border-2 border-black  font-medium text-sm leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 hover:border-blue-600 hover:text-blue-600 transition duration-150 ease-in-out">
                        Contact me
                    </button>
                </div>
            </section>
        </Layout>
    );
}
