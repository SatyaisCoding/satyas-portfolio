"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "../customHooks/useSectionInView";


export default function About() {
//   const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
    //   ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a {" "}
        <span className="font-medium">final</span> year student pursuing B.tech in Computer Science from Kanpur Institute of Technology.{" "} I am deeply engaged in 
        <span className="font-medium"> Full MERN stack web development</span>.{" "}
        <span className="italic">My favourite aspect of programming</span> lies in problem-solving and the exhilaration of mastering new technologies.
        There's nothing quite like the satisfaction of resolving those pesky red squiggly lines!. My core stack comprises {" "}
        <span className="font-medium">
        React, Next.js, TailwindCSS, JavaScript, MongoDB, Node.js, Express.js, and Java ( Data Structures and Algorithms).
        </span>
        Additionally, I have a working knowledge of TypeScript.  I have an insatiable appetite for learning and constantly seek to broaden my technological horizons. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Software
        Developer.
      </p>

      <p>
        <span className="italic">Outside the realm of coding and poring over documentation,</span>, I find solace in physical activities like working out and jogging, as well as culinary pursuits such as cooking diverse cuisines.I am an avid consumer of{" "}
        <span className="font-medium">Standup Comedy Videos on YouTube</span> and relish opportunities to engage with new people and expand my knowledge across various domains.
           
      </p>
    </motion.section>
  );
}