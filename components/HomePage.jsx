import React from 'react';
import heroImage from "../public/assets/heroImage.png";
import { BiDownload } from "react-icons/bi";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
    return (
        <div id="home" className="h-screen w-full text-center bg-slate-900">
            <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
                <div className="w-64 h-64 mx-auto overflow-hidden rounded-xl">
                    <Image src={heroImage} alt="profileImg" />
                </div>

                <h1 className="uppercase font-bold text-6xl text-blue-500">
                    Frontend Developer
                </h1>

                <p className="text-white text-xl max-w-sm mx-auto">
                    Hi 👋, I am Mrinmoy Porel. I love building web application
                    using technologies like React JS, Next JS, Tailwind, Sass 
                    and Node JS.
                </p>

                <div className="flex items-center justify-center gap-10">
                    <Link href="/MrinmoyPorel_CV.pdf" download={true}>
                        <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                            Resume
                            <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-0">
                                <BiDownload size={25} />
                            </span>
                        </div>
                    </Link>

                    <Link href="/#portfolio">
                        <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                            My portfolio
                            <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-0">
                                <MdExpandMore size={25} />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;