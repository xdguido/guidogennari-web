/* eslint-disable react/no-unescaped-entities */
import Button from '@ui/Button';
import { NextSeo } from 'next-seo';
import { PrinterIcon } from '@heroicons/react/24/outline';
import { FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

export default function Resume() {
  return (
    <>
      <NextSeo title="Guido Gennari | Resume" />
      <div className="pt-[5rem] print:pt-0">
        <Button className="ml-auto print:hidden" styleScheme="link" onClick={() => window.print()}>
          Print <PrinterIcon className="h-5 w-5" />
        </Button>
        <div
          id="resume"
          className="relative flex flex-col gap-8 p-6 text-sm print:text-black"
          style={{
            // A4 size
            width: '8.27in',
            height: '11.69in'
          }}
        >
          <h1 className="text-5xl font-bold">
            Hi,
            <br /> I{"'"}m Guido Gennari.
          </h1>
          <p className="text-xl tracking-tight text-gray-400">Frontend developer</p>
          <section id="about" className="flex flex-col">
            <p className="text-justify ">
              I{"'"}m a frontend web developer with strong knowledge of backend. I have expertise in
              building web sites and full stack web applications, currently working with React.
              Focusing on UI dev, web perf and accessibility.
            </p>
          </section>
          <div className="flex flex-row gap-8">
            <div className="basis-1/3">
              <section id="stack" className="mb-4 flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-blue-600">Skills</h2>
                <p className="my-2 font-bold">Tech Stack:</p>
                <ul className="ml-5 list-disc ">
                  <li className="mb-1">
                    <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                      JavaScript
                    </a>{' '}
                    /
                    <a
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TypeScript
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                      React.js
                    </a>{' '}
                    /
                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                      Next.js
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                      TailwindCSS
                    </a>{' '}
                    /
                    <a
                      href="https://styled-components.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Styled components
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://tanstack.com/query/latest"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TanStack Query
                    </a>{' '}
                    /
                    <a href="https://swr.vercel.app/" target="_blank" rel="noopener noreferrer">
                      SWR
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                      Python
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                      Node.js
                    </a>{' '}
                    /
                    <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                      Express.js
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer">
                      Prisma
                    </a>{' '}
                    /
                    <a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer">
                      Sequelize
                    </a>{' '}
                    /
                    <a href="https://mongoosejs.com/" target="_blank" rel="noopener noreferrer">
                      Mongoose
                    </a>
                  </li>
                </ul>
                <p className="my-2 font-bold">Tools:</p>
                <ul className="ml-5 list-disc ">
                  <li className="mb-1">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>{' '}
                    /
                    <a
                      href="https://github.com/features/actions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Actions
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
                      Jest
                    </a>{' '}
                    /
                    <a
                      href="https://testing-library.com/docs/react-testing-library/intro/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React Testing Library
                    </a>{' '}
                    /
                    <a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer">
                      Cypress
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">
                      ESLint
                    </a>{' '}
                    /
                    <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">
                      Prettier
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
                      Docker
                    </a>
                  </li>
                </ul>
              </section>
              <section id="soft-skills" className="mb-4 flex flex-col gap-2 ">
                <h2 className="text-xl font-semibold text-blue-600    ">Soft Skills</h2>
                <ul className="ml-5 list-disc">
                  <li className="mb-1">Self-taught</li>
                  <li className="mb-1">Problem solving</li>
                  <li className="mb-1">Attention to detail</li>
                  <li className="mb-1">Adaptability</li>
                </ul>
              </section>
              <section id="contact" className="mb-4 flex flex-col gap-2 ">
                <h2 className="text-xl font-semibold text-blue-600">Contact</h2>
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2">
                    <FiMail className="h-5 w-5" />
                    <a href="mailto:" target="_blank" rel="noopener noreferrer">
                      guidogennari95@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiLinkedin className="h-5 w-5" />
                    <a
                      href="https://www.linkedin.com/in/guido-gennari/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin/guido-gennari
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiMapPin className="h-5 w-5" />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.google.com/maps/place/Neuquen,+Neuqu%C3%A9n+Province/@-38.941072,-68.1979739,19449m/data=!3m2!1e3!4b1!4m6!3m5!1s0x960a33ba35eb8e35:0x6220acb810e3e2f5!8m2!3d-38.9516784!4d-68.0591888!16zL20vMDJ0YmZn?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D"
                    >
                      Neuquen (city), Argentina
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="basis-2/3">
              <section id="experience" className="mb-4 flex flex-col gap-2 ">
                <h2 className="text-xl font-semibold text-blue-600  ">Experience</h2>
                <span className="text-gray-400">Aug 2023 - Present | London - UK | Remote</span>
                <p className="">
                  <span className="font-semibold">Frontend developer at ClimateScience.</span>
                </p>
                <p>
                  I have been developing and mantaining several products, ranging from complete
                  website redesigns, full-stack products, new features and bug fixes, with strong
                  focus on UI/UX, web perf and accessibility, using Next.js (React), Radix UI
                  components, Storybook.
                </p>
              </section>
              <section id="courses" className="mb-4 flex flex-col gap-2 ">
                <h2 className="text-xl font-semibold text-blue-600">Courses</h2>
                <span className="text-gray-400">2023 | Cordoba - Argentina | Remote</span>
                <p className="">
                  <span className="font-semibold">Software development</span> at Technology with
                  Purpose Foundation.
                </p>
                <p>
                  Give hands-on experience in building a production web application in a team
                  environment.
                </p>
              </section>
              <section id="education" className="mb-4 flex flex-col gap-2 ">
                <h2 className="text-xl font-semibold text-blue-600  ">Education</h2>
                <span className="text-gray-400">2014 - 2019 | Neuquen - Argentina</span>
                <p className="">
                  <span className="font-semibold">Engineering</span> at National University of
                  Comahue.
                </p>
                <span className="text-gray-400">2009 - 2013 | Neuquen - Argentina</span>
                <p className="">
                  Biology <span className="font-semibold">Bachelor of Science</span>.
                </p>
              </section>
              <section id="languages" className="mb-4 flex flex-col gap-2 ">
                <h2 className="text-xl font-semibold text-blue-600  ">Languages</h2>
                <p>
                  <ul className="ml-5  list-disc">
                    <li className="mb-1">Spanish (native)</li>
                    <li className="mb-1">English</li>
                  </ul>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
