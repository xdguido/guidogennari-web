import NavLink from '@ui/NavLink';
import { useRouter } from 'next/router';
import en from '../lib/about/en';
import es from '../lib/about/es';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;
  return (
    <>
      <div className="absolute left-0 top-0 z-0 hidden h-full w-full overflow-hidden sm:block">
        <div
          className="pointer-events-none absolute inset-x-0 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-sky-500 to-violet-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          ></div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-sky-400 to-violet-800 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          ></div>
        </div>
      </div>
      <section className="relative z-10 w-full space-y-8 rounded-lg bg-slate-50 p-8 text-sm leading-5 dark:bg-black sm:border sm:border-gray-400/90 sm:p-16 sm:shadow-md dark:sm:border-gray-600/90">
        <h1 className="text-2xl font-bold">{t.title}</h1>
        <p>{t.paragraph1}</p>
        <p>{t.paragraph2}</p>
        <p>{t.paragraph3}</p>
        <div className="w-full border-b border-b-gray-500">{/* separator */}</div>
        <ul className="flex">
          <li>
            <NavLink href="https://www.instagram.com/gennariguido/">Instagram</NavLink>
          </li>
          <li>
            <NavLink href="https://www.linkedin.com/in/guido-gennari/">Linkedin</NavLink>
          </li>
          <li>
            <NavLink href="https://github.com/xdguido">GitHub</NavLink>
          </li>
          <li>
            <NavLink href="mailto:guidogennari95@gmail.com">email@me</NavLink>
          </li>
        </ul>
      </section>
    </>
  );
}
