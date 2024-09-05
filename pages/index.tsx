export default function Home() {
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
      <section className="relative z-10 w-full space-y-8 rounded-md bg-slate-50 p-8 text-sm leading-5 dark:bg-black sm:border sm:border-gray-500 sm:p-16 sm:shadow-md">
        <h1 className="text-2xl font-bold">About</h1>
        <p>
          Hi! I&apos;m a web developer based in Argentina. Recently I joined ClimateScience as a
          frontend developer, where I work remotely on a variety of projects. I have wide range of
          interests, from web development and game design to photography and mountaineering.
        </p>
        <p>
          I&apos;ve always been interested in technology and computers. I used code extensively in
          statistical studies during my engineering career and games mod and server develop as a
          hobby. During the last years I learned web development and started working as a
          freelancer, spending significant time building web apps.
        </p>
        <p>
          For more information about me and my interests, feel free to contact me or explore my
          social media profiles.
        </p>
        <div className="w-full border-b border-b-gray-500">{/* separator */}</div>
        <ul className="flex gap-4">
          <li>
            <a
              className="underline hover:text-blue-600"
              href="https://www.instagram.com/gennariguido/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className="underline hover:text-blue-600"
              href="https://www.linkedin.com/in/guido-gennari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              className="underline hover:text-blue-600"
              href="https://github.com/xdguido"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="underline hover:text-blue-600"
              href="mailto:guidogennari95@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              email@me
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
