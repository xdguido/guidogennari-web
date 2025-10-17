import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import enAbout from '../lib/about/en';
import esAbout from '../lib/about/es';
import enResume from '../lib/resume/en';
import esResume from '../lib/resume/es';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const ta = locale === 'en' ? enAbout : esAbout;
  const tr = locale === 'en' ? enResume : esResume;
  return (
    <div className="min-h-screen">
      <NextSeo title={tr.title} />
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
        {/* Header */}
        <header className="mb-16">
          <h1 className="mb-1 text-xl font-normal">{ta.title}</h1>
          <p className="mb-1 text-sm text-neutral-600 dark:text-neutral-400">{tr.profession}</p>
          <a
            href="https://www.linkedin.com/in/guido-gennari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text6sm inline-flex items-center gap-1 text-neutral-800 underline-offset-4 transition-all hover:text-white hover:underline dark:text-neutral-400"
          >
            {tr.linkedin}
            <ArrowUpRightIcon className="h-3 w-3" />
          </a>
        </header>

        {/* About */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-normal">{tr.aboutHeading}</h2>
          <div className="space-y-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{ta.paragraph1}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{ta.paragraph2}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{ta.paragraph3}</p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="mb-6 text-sm font-normal">{tr.experience}</h2>
          <div className="grid grid-cols-[140px_1fr] gap-x-8 gap-y-6">
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              Aug 2023 — {tr.now}
            </div>
            <div>
              <p className="mb-2 inline-flex items-center gap-1 text-sm font-normal">
                {tr.frontendDeveloper}
              </p>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {tr.experienceDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="mb-6 text-sm font-normal">{tr.projects}</h2>
          <div className="grid grid-cols-[140px_1fr] gap-x-8 gap-y-6">
            <div className="text-sm text-neutral-600 dark:text-neutral-400">{tr.ongoing}</div>
            <div>
              <a
                href="https://github.com/xdguido"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 inline-flex items-center gap-1 text-sm font-normal underline-offset-4 transition-all hover:underline"
              >
                github.com/xdguido
                <ArrowUpRightIcon className="h-3 w-3" />
              </a>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {tr.projectsDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="mb-6 text-sm font-normal">{tr.contact}</h2>
          <div className="grid grid-cols-[140px_1fr] gap-x-8 gap-y-4">
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Instagram</div>
            <a
              href="https://www.instagram.com/gennariguido/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm underline-offset-4 transition-all hover:underline"
            >
              @gennariguido
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">{tr.linkedinLabel}</div>
            <a
              href="https://www.linkedin.com/in/guido-gennari/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm underline-offset-4 transition-all hover:underline"
            >
              {tr.linkedin}
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">GitHub</div>
            <a
              href="https://github.com/xdguido"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm underline-offset-4 transition-all hover:underline"
            >
              github.com/xdguido
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">{tr.emailLabel}</div>
            <a
              href={`mailto:${tr.email}`}
              className="inline-flex items-center gap-1 text-sm underline-offset-4 transition-all hover:underline"
            >
              {tr.email}
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">{tr.locationLabel}</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Neuquen,+Neuqu%C3%A9n+Province/@-38.941072,-68.1979739,19449m/data=!3m2!1e3!4b1!4m6!3m5!1s0x960a33ba35eb8e35:0x6220acb810e3e2f5!8m2!3d-38.9516784!4d-68.0591888!16zL20vMDJ0YmZn?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D"
              className="inline-flex items-center gap-1 text-sm underline-offset-4 transition-all hover:underline"
            >
              {tr.location}
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              {ta.links.photography}
            </div>
            <a
              href="https://guido-ph.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm underline-offset-4 transition-all hover:underline"
            >
              {ta.links.photography}
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
