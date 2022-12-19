import React from "react";

import { MdExpandMore } from "react-icons/md";

import automart from "../public/assets/portfolio/automart.jpg";
import urbanash from "../public/assets/portfolio/urbanash.jpg";
import fitclub from "../public/assets/portfolio/fitclub.jpg";
import weatherapp from "../public/assets/portfolio/weather-app.jpg";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            title: "AutoMart",
            imageSrc: automart,
            url: "https://mrinnnmoy.github.io/AutoMart/",
        },
        {
            id: 2,
            title: "UrbanAsh",
            imageSrc: urbanash,
            url: "https://mrinnnmoy.github.io/urbanAsh-frontend/",
        },
        {
            id: 3,
            title: "Fitclub",
            imageSrc: fitclub,
            url: "https://getfitclub.netlify.app/",
        },
        {
            id: 4,
            title: "LiveSky",
            imageSrc: weatherapp,
            url: "https://livesky.netlify.app/",
        },
    ];

    return (
        <div id="portfolio" className="w-full bg-slate-900">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
                    portfolio
                </h2>
                <p className="py-4 max-w-full text-white text-xl mx-auto">
                    My portfolio is a representation of all my works that I've learned and 
                    accomplished as a software developer in the last 6 months.
                </p>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {portfolios.map(({ id, title, imageSrc, url }) => (
                        <Link key={id} href={`${url}`}>
                            <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    className="rounded-md duration-200 
                  hover:scale-110"
                                />
                                <h2 className="text-center text-base capitalize my-4 font-light text-white duration-200 group-hover:underline underline-offset-4">
                                    {title}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center justify-center">
                    <Link href="https://github.com/mrinnnmoy/" target="_blank">
                        <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                            all projects
                            <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                                <MdExpandMore size={25} />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;