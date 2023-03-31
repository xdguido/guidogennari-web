import Button from '@ui/Button';
import ThemeToggler from '@ui/ThemeToggler';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Header() {
    const [top, setTop] = useState(true);
    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <header
            className={clsx(
                'z-50 fixed inset-x-0 top-0 flex flex-1 items-center justify-between p-4 lg:p-5 print:hidden',
                !top &&
                    'bg-gray-50 md:bg-opacity-90 md:backdrop-blur-sm border-b border-b-gray-300 dark:bg-black dark:md:bg-opacity-90 dark:border-b-gray-500'
            )}
        >
            <h1 className="font-semibold leading-6 text-2xl">
                GUIDO <span className=" font-light">GENNARI</span>
            </h1>
            <div className="flex items-center">
                <ul id="nav" className="flex sm:gap-3">
                    <li className="">
                        <Button href={'/#work'} colorScheme="black" style="link" square>
                            WORK
                        </Button>
                    </li>
                    <li className="">
                        <Button href={'/resume'} colorScheme="black" style="link" square>
                            RESUME
                        </Button>
                    </li>
                    {/* <li className="">
                        <Button href={'/blog'} colorScheme="black" style="link" square>
                            BLOG
                        </Button>
                    </li> */}
                </ul>
                <ul
                    id="socials"
                    className="hidden sm:flex font-extrabold tracking-tight text-3xl  pl-3 ml-3 sm:pl-5 sm:ml-5 border-l border-l-slate-200 dark:border-l-slate-400 "
                >
                    <li>
                        <Button
                            colorScheme="black"
                            style="link"
                            square
                            title="GitHub"
                            target="_blank"
                            href="https://github.com/xdguido"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">GitHub page</span>
                            <FaGithub className="h-5 w-5" />
                        </Button>
                    </li>
                    <li>
                        <Button
                            colorScheme="black"
                            style="link"
                            square
                            title="LinkedIn"
                            target="_blank"
                            href="https://www.linkedin.com/in/guido-gennari/"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">LinkedIn page</span>
                            <FaLinkedinIn className="h-5 w-5" />
                        </Button>
                    </li>
                </ul>
                <div className="flex justify-center items-center  ">
                    <ThemeToggler />
                </div>
            </div>
        </header>
    );
}
