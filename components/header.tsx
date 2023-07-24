import { Fragment } from 'react';
import Link from 'next/link';
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
                ' fixed inset-x-0 top-0 z-40 print:hidden',
                !top &&
                    'border-b border-b-gray-300 bg-gray-50 dark:border-b-gray-500 dark:bg-black md:bg-opacity-90 md:backdrop-blur-sm dark:md:bg-opacity-90'
            )}
        >
            <div className="mx-auto flex max-w-5xl flex-1 justify-between px-6 py-4 lg:py-5 2xl:max-w-6xl">
                <h1 className="text-2xl font-semibold leading-6 tracking-tighter">
                    <Link href="/">
                        <span className="font-light">GUIDO</span>
                        <br />
                        GENNARI
                    </Link>
                </h1>
                <Menu as="div" className=" relative z-50 block text-left sm:hidden">
                    {({ open, close }) => (
                        <>
                            <div className="inline-flex justify-center text-sm">
                                <Menu.Button className="group inline-flex items-center justify-center p-2">
                                    {open ? (
                                        <XMarkIcon
                                            className="text-base-content h-7 w-7 flex-shrink-0"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="text-base-content h-7 w-7 flex-shrink-0"
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
                                <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-lg border bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-black">
                                    <div
                                        onClick={() => {
                                            close();
                                        }}
                                        className="mb-2 border-b border-b-slate-200 pb-2 dark:border-b-slate-400"
                                    >
                                        <Menu.Item>
                                            <Button
                                                href={'/#work'}
                                                colorScheme="black"
                                                styleScheme="link"
                                                square
                                            >
                                                WORK
                                            </Button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Button
                                                href={'/resume'}
                                                colorScheme="black"
                                                styleScheme="link"
                                                square
                                            >
                                                RESUME
                                            </Button>
                                        </Menu.Item>
                                    </div>
                                    <div
                                        id="socials"
                                        className="flex justify-center text-3xl font-extrabold tracking-tight  "
                                    >
                                        <Menu.Item>
                                            <Button
                                                colorScheme="black"
                                                styleScheme="link"
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
                                                styleScheme="link"
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
                <div className="hidden items-center sm:flex">
                    <ul id="nav" className="flex sm:gap-3">
                        <li className="">
                            <Button
                                className="font-normal"
                                href={'/#work'}
                                colorScheme="black"
                                styleScheme="link"
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
                                styleScheme="link"
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
                        className="ml-3 hidden border-l border-l-slate-200 pl-3  text-3xl font-extrabold tracking-tight dark:border-l-slate-400 sm:ml-5 sm:flex sm:pl-5 "
                    >
                        <li>
                            <Button
                                colorScheme="black"
                                styleScheme="link"
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
                                styleScheme="link"
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
                    <div className="flex items-center justify-center  ">
                        <ThemeToggler />
                    </div>
                </div>
            </div>
        </header>
    );
}
