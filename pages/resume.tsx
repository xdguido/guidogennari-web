import { Button } from '@ui/Button';
import { NextSeo } from 'next-seo';
import { PrinterIcon } from '@heroicons/react/24/outline';
import { FiMapPin } from 'react-icons/fi';
import { SiLinkedin, SiMaildotru } from 'react-icons/si';
import { useRouter } from 'next/router';
import en from '../lib/resume/en';
import es from '../lib/resume/es';

export default function Resume() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;

  return (
    <>
      <NextSeo title={t.title} />
      <div className="relative mt-20 print:mt-0">
        <Button
          className="absolute right-4 top-4 z-10 print:hidden"
          variant="link"
          onClick={() => window.print()}
          title={t.print}
        >
          <span className="sr-only">{t.print}</span>
          <PrinterIcon className="h-5 w-5" />
        </Button>
        <div id="resume" className="relative flex flex-col gap-8 p-8 text-sm print:text-black">
          <h1 className="text-5xl font-bold">{t.greeting}</h1>
          <p className="text-xl tracking-tight text-gray-400">{t.profession}</p>
          <section id="about" className="flex flex-col">
            <p>{t.about}</p>
          </section>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:gap-8">
            <div className="basis-1/3">
              <section id="stack" className="mb-4 flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-accent-foreground">{t.skills}</h2>
                <p className="my-2 font-bold">{t.techStack}</p>
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
                <p className="my-2 font-bold">{t.tools}</p>
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
                <h2 className="text-xl font-semibold text-accent-foreground">{t.softSkills}</h2>
                <ul className="ml-5 list-disc">
                  {t.softSkillsList.map((skill, index) => (
                    <li key={index} className="mb-1">
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
              <section id="contact" className="mb-4 flex flex-col gap-2 ">
                <h2 className="text-xl font-semibold text-accent-foreground">{t.contact}</h2>
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2">
                    <SiMaildotru className="h-5 w-5" />
                    <a href="mailto:" target="_blank" rel="noopener noreferrer">
                      {t.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <SiLinkedin className="h-5 w-5" />
                    <a
                      href="https://www.linkedin.com/in/guido-gennari/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.linkedin}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiMapPin className="h-5 w-5" />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.google.com/maps/place/Neuquen,+Neuqu%C3%A9n+Province/@-38.941072,-68.1979739,19449m/data=!3m2!1e3!4b1!4m6!3m5!1s0x960a33ba35eb8e35:0x6220acb810e3e2f5!8m2!3d-38.9516784!4d-68.0591888!16zL20vMDJ0YmZn?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D"
                    >
                      {t.location}
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="basis-2/3">
              <section id="experience" className="mb-4 flex flex-col gap-2 ">
                <h2 className="text-xl font-semibold text-accent-foreground">{t.experience}</h2>
                <span className="text-gray-400">Aug 2023 - Present | London - UK | Remote</span>
                <p className="">
                  <span className="font-semibold">{t.frontendDeveloper}</span>
                </p>
                <p>{t.experienceDescription}</p>
              </section>
              <section id="courses" className="mb-4 flex flex-col gap-2 ">
                <h2 className="text-xl font-semibold text-accent-foreground">{t.courses}</h2>
                <span className="text-gray-400">2023 | Cordoba - Argentina | Remote</span>
                <p className="">
                  <span className="font-semibold">{t.softwareDevelopment}</span>
                </p>
                <p>{t.coursesDescription}</p>
              </section>
              <section id="education" className="mb-4 flex flex-col gap-2 ">
                <h2 className="text-xl font-semibold text-accent-foreground">{t.education}</h2>
                <span className="text-gray-400">2014 - 2019 | Neuquen - Argentina</span>
                <p className="">
                  <span className="font-semibold">{t.engineering}</span>
                </p>
                <span className="text-gray-400">2009 - 2013 | Neuquen - Argentina</span>
                <p className="">{t.biology}</p>
              </section>
              <section id="languages" className="mb-4 flex flex-col gap-2 ">
                <h2 className="text-xl font-semibold text-accent-foreground">{t.languages}</h2>
                <ul className="ml-5  list-disc">
                  <li className="mb-1">{t.spanish}</li>
                  <li className="mb-1">{t.english}</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
