'use client';
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import profilex from '../public/main_image.jpg';
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';


import { ArrowDownToLineIcon, ArrowRight, GithubIcon,  LinkedinIcon, Twitter } from "lucide-react";
import GitHubStats from "./github-stats";


export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center mt-8 sm:mt-12 sm:mb-0 relative z-[1] scroll-mt-[100rem] px-4 mx-auto'>
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
                            className="h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
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
                className="mb-10 mt-5 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">
                    Hello, I&apos;m <span className="text-gradient">Satya Prakash</span> —
                </span>{" "}
                a <span className="font-bold text-gradient">Java developer by chance</span> and a{" "}
                <span className="font-bold text-gradient">full-stack developer by choice</span>. I&apos;m passionate
                about learning new technologies and enjoy building{" "}
                <span className="italic text-gradient">modern, scalable web applications</span>. My primary focus is
                mastering <span className="underline decoration-2 decoration-purple-500">Web 2</span>, while steadily
                moving toward <span className="text-gradient">AI-driven systems</span> and{" "}
                <span className="text-gradient">Web 3</span>.
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
            >
                <Link
                    href="#contact"
                    className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:from-purple-700 hover:to-pink-700 active:scale-105 transition shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70"
                    onClick={() => {
                        setActiveSection("Contact")
                        setTimeOfLastClick(Date.now())
                    }}
                >
                    Contact me here{" "}
                    <ArrowRight className="opacity-90 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white/80 backdrop-blur-sm px-7 py-3 gap-2 flex items-center justify-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10 dark:backdrop-blur-md hover:bg-white dark:hover:bg-white/20 shadow-md"
                    href="/Resume_Satyaa.pdf"
                    target='_blank'
                    download
                >
                    Download CV{" "}
                    <ArrowDownToLineIcon className="opacity-70 group-hover:translate-y-1 transition" />
                </a>

                <div className="flex items-center justify-center gap-2">
                    <a
                        href="https://www.linkedin.com/in/satyaprakash2913/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="bg-white/80 backdrop-blur-sm p-4 text-gray-700 gap-2 flex items-center justify-center rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-gray-300 hover:bg-white dark:hover:bg-white/20 shadow-md hover:shadow-lg"
                    >
                        <LinkedinIcon size={19} />
                    </a>

                    <a
                        href="https://github.com/SatyaisCoding"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="bg-white/80 backdrop-blur-sm p-4 text-gray-700 gap-2 flex items-center justify-center rounded-full text-[1.15rem] focus:scale-[1.10] hover:scale-[1.10] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-gray-300 hover:bg-white dark:hover:bg-white/20 shadow-md hover:shadow-lg"
                    >
                        <GithubIcon size={19} />
                    </a>
                    <a
                        href="https://twitter.com/SatyaisCoding"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter Profile"
                        className="bg-white/80 backdrop-blur-sm p-4 text-gray-700 gap-2 flex items-center justify-center rounded-full text-[1.15rem] focus:scale-[1.10] hover:scale-[1.10] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-gray-300 hover:bg-white dark:hover:bg-white/20 shadow-md hover:shadow-lg"
                    >
                        <Twitter size={19} />
                    </a>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
            >
                <GitHubStats />
            </motion.div>
        </section>
    )
}
