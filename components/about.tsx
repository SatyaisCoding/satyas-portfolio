"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 px-4 mx-auto relative z-[1]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="bg-white/50 backdrop-blur-sm dark:bg-white/5 rounded-2xl p-6 sm:p-8 shadow-lg border border-black/5 dark:border-white/10 mx-auto">
        <p className="mb-4 text-gray-800 dark:text-gray-200 text-left sm:text-center">
          I am a{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            Java Developer with nearly 2 years of official industry experience
          </span>{" "}
          and a{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            full-stack developer by choice
          </span>
          . I&apos;m deeply passionate about problem-solving and the thrill of mastering new technologies—there&apos;s
          nothing more satisfying than turning those red squiggly lines into clean, working code.
        </p>

        <p className="mb-4 text-gray-800 dark:text-gray-200 text-left sm:text-center">
          My professional experience is centered around{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            Java-based backend development
          </span>
          , while my full-stack expertise comes from hands-on personal projects built using the{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">MERN stack and Next.js</span>. I&apos;m
          steadily moving toward AI-driven systems and Web3 technologies, and with a strong appetite for learning I
          continuously push myself to explore new tools and broaden my technical horizons. Although I am currently
          employed as a developer, I&apos;m actively seeking new opportunities that offer greater challenges, growth, and
          meaningful impact.
        </p>

        <p className="text-gray-800 dark:text-gray-200 text-left sm:text-center">
          <span className="italic">Outside of coding and documentation,</span> I enjoy staying active through gym
          workouts, cricket, and badminton, and I love experimenting in the kitchen. My greatest passion beyond tech is
          trekking in the mountains and traveling, which helps me reset, gain perspective, and stay inspired.
        </p>
      </div>
    </motion.section>
  );
}