/* eslint-disable react/no-unescaped-entities */
import Button from '@ui/Button';
import { NextSeo } from 'next-seo';
import { PrinterIcon } from '@heroicons/react/24/outline';
export default function Resume() {
    return (
        <>
            <NextSeo title="Guido Gennari | Resume" />
            <div
                id="resume"
                className="relative flex min-h-screen flex-col gap-20 pt-[12rem] print:gap-2 print:pt-8 print:text-black md:pt-[8rem] lg:gap-24 lg:pt-[13rem]"
            >
                <div className="flex flex-col gap-3">
                    <h1 className="items-baseline gap-x-10 lg:grid lg:grid-cols-4">
                        <span className="-ml-1 text-right  text-5xl tracking-tighter print:text-xl sm:text-7xl">
                            GUIDO
                        </span>
                        <span className="text-5xl font-bold tracking-tighter print:text-xl sm:text-7xl lg:-ml-2">
                            GENNARI
                        </span>
                    </h1>
                    <div className="items-baseline gap-x-10 lg:grid lg:grid-cols-4">
                        <h2 className="col-span-2 col-start-2 text-xl tracking-tight text-gray-400">
                            Frontend web developer
                        </h2>
                        <div className="col-start-4 ml-auto">
                            <Button
                                className="ml-auto print:hidden"
                                styleScheme="link"
                                onClick={() => window.print()}
                            >
                                Print <PrinterIcon className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
                <section id="about" className="flex flex-col gap-6 print:gap-4">
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <h3 className="text-2xl font-semibold text-blue-600 print:text-base lg:col-start-2">
                            Summary
                        </h3>
                    </div>
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <p className="mb-2 text-justify print:col-span-3 sm:text-sm lg:col-span-3 lg:col-start-2">
                            I{"'"}m a frontend web developer with expertise in building web sites
                            and web applications, currently working with React.
                        </p>
                    </div>
                </section>
                <section id="experience" className="flex flex-col gap-6 print:gap-4">
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <h3 className="text-2xl font-semibold text-blue-600 print:text-base lg:col-start-2">
                            Experience
                        </h3>
                    </div>
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <div className=" lg:text-right">
                            <span className="text-sm text-gray-400">Aug 2023 - Present</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            <h2 className="mb-2 ">
                                <span className="font-semibold">
                                    Frontend developer at ClimateScience
                                </span>
                            </h2>
                            <ul className="ml-5  list-disc sm:text-sm">
                                <li className="mb-1 text-justify">
                                    Write components libraries for different products using Radix
                                    primitives.
                                </li>
                                <li className="mb-1 text-justify">
                                    Develop React components following the design guidelines,
                                    ensuring proper UX and accessibility.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <div className=" lg:text-right">
                            <span className="text-sm text-gray-400">May 2023 - Aug 2023</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            <h2 className="mb-2 ">
                                <span className=" font-semibold">Fullstack developer</span>
                            </h2>
                            <p className="mb-2 text-justify sm:text-sm">
                                Developing a e-commerce app. The application will feature an
                                easy-to-use interface where customers can browse products, add items
                                to their shopping cart, and complete their purchase securely.
                            </p>
                            <ul className="ml-5 list-disc sm:text-sm">
                                <li className="mb-1 text-justify">
                                    Designed and developed frontend using Next.js, TailwindCSS and
                                    React headless components.
                                </li>
                                <li className="mb-1 text-justify">
                                    Designed and developed Backend and Data Base using Next.js API
                                    Routes, Prisma and PosgreSQL.
                                </li>
                                <li className="mb-1">
                                    Integrated User Authentication and Purchase Order Gateways.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="education" className="flex flex-col gap-6 print:gap-4 ">
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <h3 className="text-2xl font-semibold text-blue-600 print:text-base lg:col-start-2">
                            Education
                        </h3>
                    </div>
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <div className=" lg:text-right">
                            <span className="text-sm text-gray-400">Mar 2023 - Present</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            <h2 className="mb-2 text-lg sm:text-base">
                                <span className="font-semibold">
                                    Software development & IT mentoring program
                                </span>{' '}
                                at Technology with Purpose Foundation
                            </h2>
                            <p className="mb-2 sm:text-sm">This program is designed to:</p>
                            <ul className="ml-5  list-disc sm:text-sm">
                                <li className="mb-1 text-justify">
                                    Give hands-on experience in building a production web
                                    application in a team environment.
                                </li>
                                <li className="mb-1 text-justify">
                                    Learn how to collaborate with others, use industry-standard
                                    tools and practices, and deliver a working product that provides
                                    value to the community.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <div className=" lg:text-right">
                            <span className="text-sm text-gray-400">Dec 2021 - Present</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            <h2 className="mb-2 text-lg sm:text-base">
                                <span className="font-semibold">Software development </span>
                                as self-taught student
                            </h2>
                            <p className="mb-2 text-justify sm:text-sm">
                                I started studying at open-source academies such as freeCodeCamp,
                                where I learned the basics. I continued with more code challenges,
                                gaining experience in building production-grade software through
                                this process.
                            </p>
                            <ul className="ml-5  list-disc sm:text-sm">
                                <li className="mb-1">
                                    Software development environment and version control
                                </li>
                                <li className="mb-1">JavaScript Algorithms and Data Scructures</li>
                                <li className="mb-1">Fullstack web development</li>
                                <li className="mb-1">Databases</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <div className=" lg:text-right">
                            <span className="text-sm text-gray-400">Mar 2015 - Dic 2020</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            <h2 className="mb-2 text-lg sm:text-base">
                                <span className="font-semibold">Engineer{"'"}s degree </span>
                                in agriculture at National University of Comahue
                            </h2>
                            <p className="mb-2 sm:text-sm">
                                Unfinished. Participated in several fieldworks including:
                            </p>
                            <ul className="ml-5  list-disc sm:text-sm">
                                <li className="mb-1">
                                    Development of Water Distribution Plan for the inhabitants of
                                    Cerro Saturnino in Mallin Ahogado, Rio Negro
                                </li>
                                <li className="mb-1">
                                    Modeling infections of Strawberry in nearby crops
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <div className=" lg:text-right">
                            <span className="text-sm text-gray-400">Mar 2011 - Mar 2015</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            <h2 className="mb-2 text-lg sm:text-base">
                                <span className="font-semibold">English </span>
                                lessons at SELC Language Institute
                            </h2>
                            <p className="mb-2 sm:text-sm">
                                I received a B1 grade on the First Certificate of English exam from
                                the University of Cambridge.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="stack" className="flex flex-col gap-6 print:gap-4">
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <h3 className="text-2xl font-semibold text-blue-600 print:col-span-3 print:text-base lg:col-span-3 lg:col-start-2">
                            Skills and Tech Stack
                        </h3>
                    </div>
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <div className="print:col-span-3 lg:col-span-3 lg:col-start-2">
                            <h2 className="my-2 font-bold">Tech Stack:</h2>
                            <ul className="ml-5 list-disc sm:text-sm ">
                                <li className="mb-1">JavaScript / TypeScript</li>
                                <li className="mb-1">React.js / Next.js</li>
                                <li className="mb-1">TanStack Query / SWR</li>
                                <li className="mb-1">Node.js / Express.js</li>
                                <li className="mb-1">Prisma / Sequelize / Mongoose</li>
                                <li className="mb-1">TailwindCSS / Styled components</li>
                            </ul>
                            <h2 className="my-2 font-bold">Tools:</h2>
                            <ul className="ml-5 list-disc sm:text-sm ">
                                <li className="mb-1">GitHub / GitHub Actions</li>
                                <li className="mb-1">Jest / React Testing Library / Cypress</li>
                                <li className="mb-1">ESLint / Prettier</li>
                                <li className="mb-1">Docker</li>
                            </ul>
                            <h2 className="my-2 font-bold">Skills:</h2>
                            <ul className="ml-5 list-disc sm:text-sm ">
                                <li className="mb-1">Native Spanish and advanced English</li>
                                <li className="mb-1">Leadership</li>
                                <li className="mb-1">Problem-solving</li>
                                <li className="mb-1">Attention to detail</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="contact" className="flex flex-col gap-6 print:gap-4">
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <h3 className="text-2xl font-semibold text-blue-600 print:col-span-3 print:text-base lg:col-span-3 lg:col-start-2">
                            Contact
                        </h3>
                    </div>
                    <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
                        <ul className="ml-5 list-disc print:col-span-3 sm:text-sm lg:col-span-3 lg:col-start-2">
                            <li className="mb-1">
                                Personal Website:{' '}
                                <a
                                    className="font-semibold"
                                    target={'_blank'}
                                    href="https://guidogennari.vercel.app/"
                                    rel="noreferrer"
                                >
                                    guidogennari.vercel.app
                                </a>
                            </li>
                            <li className="mb-1">
                                LinkedIn:{' '}
                                <a
                                    className="font-semibold"
                                    target={'_blank'}
                                    href="https://www.linkedin.com/in/guido-gennari/"
                                    rel="noreferrer"
                                >
                                    linkedin.com/in/guido-gennari/
                                </a>
                            </li>
                            <li className="mb-1">
                                GitHub:{' '}
                                <a
                                    className="font-semibold"
                                    target={'_blank'}
                                    href="https://github.com/xdguido"
                                    rel="noreferrer"
                                >
                                    github.com/xdguido
                                </a>
                            </li>
                            <li className="mb-1">
                                Location: Neuquen, Argentina (open to relocation)
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}
