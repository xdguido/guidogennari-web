import { Fragment } from 'react';
import Button from '@ui/Button';
import ThemeToggler from '@ui/ThemeToggler';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Menu, Transition } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

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
                ' z-40 fixed inset-x-0 top-0 print:hidden',
                !top &&
                    'bg-gray-50 md:bg-opacity-90 md:backdrop-blur-sm border-b border-b-gray-300 dark:bg-black dark:md:bg-opacity-90 dark:border-b-gray-500'
            )}
        >
            <div className="mx-auto flex flex-1 justify-between max-w-5xl 2xl:max-w-6xl px-6 py-4 lg:py-5">
                <h1 className="font-semibold leading-6 text-2xl">
                    GUIDO
                    <br />
                    <span className=" font-light">GENNARI</span>
                </h1>
                <Menu as="div" className=" z-50 block sm:hidden relative text-left">
                    {({ open, close }) => (
                        <>
                            <div className="inline-flex justify-center text-sm">
                                <Menu.Button className="p-2 group inline-flex justify-center items-center">
                                    {open ? (
                                        <XMarkIcon
                                            className="h-7 w-7 flex-shrink-0 text-base-content"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="h-7 w-7 flex-shrink-0 text-base-content"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-2 p-4 w-40 origin-top-right rounded-lg bg-white dark:bg-black border shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div
                                        onClick={() => {
                                            close();
                                        }}
                                        className="pb-2 mb-2 border-b border-b-slate-200 dark:border-b-slate-400"
                                    >
                                        <Menu.Item>
                                            <Button
                                                href={'/#work'}
                                                colorScheme="black"
                                                style="link"
                                                square
                                            >
                                                WORK
                                            </Button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Button
                                                href={'/resume'}
                                                colorScheme="black"
                                                style="link"
                                                square
                                            >
                                                RESUME
                                            </Button>
                                        </Menu.Item>
                                    </div>
                                    <div
                                        id="socials"
                                        className="flex justify-center font-extrabold tracking-tight text-3xl  "
                                    >
                                        <Menu.Item>
                                            <Button
                                                colorScheme="black"
                                                style="link"
                                                square
                                                title="GitHub"
                                                target="_blank"
                                                href="https://github.com/xdguido"
                                                rel="noopener noreferrer"
                                            >
                                                <FaGithub className="h-5 w-5" />
                                            </Button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Button
                                                colorScheme="black"
                                                style="link"
                                                square
                                                title="LinkedIn"
                                                target="_blank"
                                                href="https://www.linkedin.com/in/guido-gennari/"
                                                rel="noopener noreferrer"
                                            >
                                                <FaLinkedinIn className="h-5 w-5" />
                                            </Button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <ThemeToggler />
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
                <div className="hidden sm:flex items-center">
                    <ul id="nav" className="flex sm:gap-3">
                        <li className="">
                            <Button
                                className="font-normal"
                                href={'/#work'}
                                colorScheme="black"
                                style="link"
                                square
                            >
                                WORK
                            </Button>
                        </li>
                        <li className="">
                            <Button
                                className="font-normal"
                                href={'/resume'}
                                colorScheme="black"
                                style="link"
                                square
                            >
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
            </div>
        </header>
    );
}
