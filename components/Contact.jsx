import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import contactus from "../public/assets/contact-us.jpg";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact" className="w-full bg-slate-900">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
                    contact
                </h2>

                <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-slate-800 rounded-3xl mt-4">
                    <div className="w-full md:w-1/2 h-full rounded-xl p-4">
                        <Image
                            src={contactus}
                            alt="man with laptop"
                            className="rounded-xl"
                        />
                        <p className="pt-2 pb-8 text-white text-base">
                            I am open to talk regarding freelancing or full-time
                            opportunities. Feel free to contact me using your preferred
                            medium.
                        </p>

                        <div className="grid grid-cols-3 mx-auto w-4/5 gap-10">
                            <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                                <Link href="https://linkedin.com/in/mrinnnmoy/" target="_blank">
                                    <FaLinkedin size={25} style={{color:"white"}}/>
                                </Link>
                            </div>
                            <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                                <Link href="https://twitter.com/mrinnnmoy/" target="_blank">
                                    <FaTwitter size={25} style={{color:"white"}}/>
                                </Link>
                            </div>
                            <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                                <Link href="https://github.com/mrinnnmoy/" target="_blank">
                                    <FaGithub size={25} style={{color:"white"}}/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* form stuff  */}
                    <div className="w-full md:w-1/2 h-full rounded-xl p-4">
                        <div className="p-4 text-left">
                            <form
                                action="https://getform.io/f/fc6ab614-5449-4b97-a1fa-33f184b3c2be"
                                method="POST"
                            >
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="capitalize text-sm py-2 text-white font-light">
                                            name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="capitalize text-sm py-2 text-white font-light">
                                            phone
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                                        />
                                    </div>

                                    <div className="flex flex-col col-span-2">
                                        <label className="capitalize text-sm py-2 text-white font-light">
                                            email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                                        />
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <label className="capitalize text-sm py-2 text-white font-light">
                                            message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows="5"
                                            className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <button className="my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                                        send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;