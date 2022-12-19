import React from "react";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/tailwind.png";
import node from "../public/assets/experience/node.png";
import github from "../public/assets/experience/github.png";
import sass from "../public/assets/experience/sass.png";
import git from "../public/assets/experience/git.png";
import npm from "../public/assets/experience/npm.png";
import java from "../public/assets/experience/java.png";
import Image from 'next/image';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Git",
            src: git,
        },
        {
            id: 2,
            title: "GitHub",
            src: github,
        },
        {
            id: 3,
            title: "HTML",
            src: html,
        },
        {
            id: 4,
            title: "CSS",
            src: css,
        },
        {
            id: 5,
            title: "JavaScript",
            src: javascript,
        },
        {
            id: 6,
            title: "Node JS",
            src: node,
        },
        {
            id: 7,
            title: "React JS",
            src: reactImage,
        },
        {
            id: 8,
            title: "Next JS",
            src: nextjs,
        },
        {
            id: 9,
            title: "Tailwind CSS",
            src: tailwind,
        },
        {
            id: 9,
            title: "Sass",
            src: sass,
        },
        {
            id: 10,
            title: "npm",
            src: npm,
        },
        {
            id: 10,
            title: "Java",
            src: java,
        },
    ];

    return (
        <div id="experience" className="w-full">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
                    experience
                </h2>
                <p className="py-4 max-w-lg">
                    To me life is all about overcoming problems and taking on new challenges.
                    Currently, polishing my skills on web development (MERN), DSA, and writing
                    tech articles. And hope to make a significant contribution to technological
                    advancements in the future.
                </p>

                <div className="grid lg:grid-cols-4 gap-8">
                    {experiences.map(({ id, title, src }) => (
                        <div
                            key={id}
                            className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400">
                            <Image src={src} height={400} width={40} alt={title} />
                            <h3 className="font-light">{title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;