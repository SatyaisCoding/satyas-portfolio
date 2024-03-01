'use client';
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import profilex from '../public/main_image.jpg';
import Link from 'next/link';


import { ArrowDownToLineIcon, ArrowRight, GithubIcon,  LinkedinIcon, Twitter } from "lucide-react";


export default function Intro() {
    return (
        <section id='home' className='mb-28 max-w-[50rem] text-center mt-6 sm:mb-0 z-10 scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src={profilex}
                            alt="Satya Portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>
                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋🏻
                    </motion.span>
                </div>
            </div>
            <motion.h1
                className="mb-10 mt-5 px-4 text-2xl font-medium !leading-[1.4] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Satya Prakash.</span> I'm a{" "}
                <span className="font-bold">Full-Stack Developer</span> who is passionate
                about learning new Tech. I enjoy building{" "}
                <span className="italic">Web Apps</span>. Right now, my primary
                focus is <span className="underline">MERN Stack (Next.js)</span>.
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white flex items-center px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact")
                        setTimeOfLastClick(Date.now())
                    }}
                >
                    Contact me here{" "}
                    <ArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white  px-7 py-3 gap-2 flex items-center rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition borderBlack ml-2 dark:bg-white/10"
                    href="/Resume_Satyaa.pdf"
                    target='_blank'
                    download
                >
                    Download CV{" "}
                    <ArrowDownToLineIcon className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    href="https://www.linkedin.com/in/satyaprakash2913/"
                    target="_blank"
                    className="bg-white p-4 text-gray-700 gap-2 ml-2 flex items-center rounded-full focus:scale-110 hover:scale-110  active:scale-105 transition borderBlack"
                >
                    <LinkedinIcon size={19} />
                </a>

                <a
                    href="https://github.com/SatyaisCoding"
                    target="_blank"
                    className="bg-white p-4 text-gray-700 gap-2 flex items-center rounded-full text-[1.15rem] focus:scale-[1.10] hover:scale-[1.10] hover:text-gray-950 active:scale-105 transition borderBlack"
                >
                    <GithubIcon size={19} />
                </a>
                <a
                    href="https://twitter.com/SatyaisCoding"
                    target="_blank"
                    className="bg-white p-4 text-gray-700 gap-2 flex items-center rounded-full text-[1.15rem] focus:scale-[1.10] hover:scale-[1.10] hover:text-gray-950 active:scale-105 transition borderBlack"
                >
                    <Twitter size={19} />
                </a>
            </motion.div>
        </section>
    )
}
