import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import {
    FaBars,
    FaTimes,
    FaGithub,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import { SiHashnode } from "react-icons/si";

const Navbar = () => {
    const [navigation, setNavigation] = useState(false);
    const [pageScroll, setPageScroll] = useState(false);

    useEffect(() => {
        const sub = window.addEventListener("scroll", () =>
            setPageScroll(window.scrollY >= 90)
        );

        return sub;
    }, []);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "experience",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "blog",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    return (
        <div className={`w-full h-20 z-10 fixed bg-slate-900 text-white duration-300 ease-in ${pageScroll && "bg-slate-800 text-white"
            }`}>
            <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
                <Link href="/#home">
                    <h1 className="text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">Mrinmoy</h1>
                </Link>
                <div>
                    <ul className="hidden md:flex">
                        {links.map(({ id, link }) => (
                            <Link key={id} href={`/#${link}`}>
                                <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                                    {link}
                                </li>
                            </Link>
                        ))}
                    </ul>

                    {!navigation && (
                        <div className="md:hidden cursor-pointer" onClick={() => setNavigation(true)}>
                            <FaBars size={30} />
                        </div>
                    )}
                </div>
            </div>

            <div className={
                navigation
                    ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
                    : ""
            }>
                <div className={
                    navigation
                        ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500"
                        : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
                }>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href="/#home">
                                <h2 onClick={() => setNavigation(false)}
                                    className="text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">Mrinmoy</h2>
                            </Link>
                            <div onClick={() => setNavigation(false)}
                                className="p-3 cursor-pointer">
                                <FaTimes size={30} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 flex flex-col h-fit gap-20">
                        <ul className="uppercase">
                            {links.map(({ id, link }) => (
                                <Link key={id} href={`/#${link}`}>
                                    <li onClick={() => setNavigation(false)}
                                        className="py-4 text-2xl tracking-wider cursor-pointer"
                                    >
                                        {link}
                                    </li>
                                </Link>
                            ))}
                        </ul>

                        <div>
                            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                                    <Link href="https://www.linkedin.com/in/mrinnnmoy/" target="_blank">
                                        <FaLinkedin size={25} />
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                                    <Link href="http://twitter.com/mrinnnmoy" target="_blank">
                                        <FaTwitter size={25} />
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                                    <Link href="https://mrinnnmoy.hashnode.dev/" target="_blank">
                                        <SiHashnode size={25} />
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                                    <Link href="https://github.com/mrinnnmoy" target="_blank">
                                        <FaGithub size={25} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;