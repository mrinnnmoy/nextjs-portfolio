import React from "react";

import { MdExpandMore } from "react-icons/md";
import article1 from "../public/assets/blog/article1.jpg";
import article2 from "../public/assets/blog/article2.jpg";
import article3 from "../public/assets/blog/article3.jpg";
import article4 from "../public/assets/blog/article4.jpg";
import article5 from "../public/assets/blog/article5.jpg";
import article6 from "../public/assets/blog/article6.jpg";
import article7 from "../public/assets/blog/article7.jpg";
import article8 from "../public/assets/blog/article8.jpg";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "Monolithic & Microservices Architecture.",
            imageSrc: article2,
            url: "https://mrinnnmoy.hashnode.dev/monolithic-microservices-architecture",
        },
        {
            id: 2,
            title: "Getting started with Git & GitHub.",
            imageSrc: article3,
            url: "https://mrinnnmoy.hashnode.dev/getting-started-with-git-github",
        },
        {
            id: 3,
            title: "Advanced concepts on Git & GitHub.",
            imageSrc: article4,
            url: "https://mrinnnmoy.hashnode.dev/advanced-concepts-on-git-github",
        },
        {
            id: 4,
            title: "SOLID DESIGN",
            imageSrc: article6,
            src: "https://mrinnnmoy.hashnode.dev/solid-principles-for-programming-and-software-design",
        },
        {
            id: 5,
            title: "Introduction to HTML for beginners.",
            imageSrc: article7,
            src: "https://mrinnnmoy.hashnode.dev/introduction-to-html-for-beginners",
        },
        {
            id: 6,
            title: "Getting Started with CSS.",
            imageSrc: article8,
            src: "https://mrinnnmoy.hashnode.dev/getting-started-with-css",
        },
    ];

    return (
        <div id="blog" className="w-full">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
                    Blog
                </h2>
                <p className="py-4 max-w-lg">
                    I love documenting my learnings and these are few articles that i have written on my personal blog using Hashnode.
                </p>

                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                    {blogs.map(({ id, title, imageSrc, url }) => (
                        <Link key={id} href={`${url}`}>
                            <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                                <Image
                                    src={imageSrc}
                                    loading="lazy"
                                    alt={title}
                                    className="rounded-md duration-200 
                  hover:scale-110"
                                />
                                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                                    {title}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center justify-center">
                    <Link href="https://mrinnnmoy.hashnode.dev/">
                        <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                            all articles
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

export default Blog;