'use client'
import React from "react";

import Genius from "@/public/genious.jpeg";
import StudyNotion from "@/public/StudyNotion.png";
import InsightXplorer from "@/public/Insightxplorer.jpg";
import { Network, Code2 } from "lucide-react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const certificationsData = [
  {
    title: "Data Structure & Algorithm with Java",
    links:"https://drive.google.com/file/d/1U0tBYKUvJcsgFNPG_xrmJFn_sJW83rc3/view?usp=drive_link",
    tech:"Java",
    description:
      "Apna College's Data Structures and Algorithms with Java course by Shraddha Khapra.",
    icon: React.createElement(Network),
    date: "2023",
  },
  {
    title: "WEB Development [MERN Stack]",
    links:"https://github.com/SatyaisCoding/StudyNotion_An-Edu-Tech-Platform",
    tech:"MERN Stack",
    description:
      "CodeHelp by Love Babbar is a insightful online course that provides a comprehensive guide to mastering Web Development using MERN Stack.",
    icon: React.createElement(Code2),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Genius",
    description:
      " I created a groundbreaking SaaS AI Platform that transforms text into diverse content, revolutionizing content creation with unmatched efficiency.",
    tags: ["React", "Next.js", "Stripe", "Tailwind", "Prisma"],
    imageUrl: Genius,
    links: 'https://github.com/SatyaisCoding/genius',
  },
  {
    title: "StudyNotion",
    description:
      "Developed StudyNotion, a fully functional ed-tech platform using the MERN Stack, enabling content creation, consumption and rating Educational Content.",
    tags: ["React", "ExpressJS", "NodeJS", "Tailwind", "MongoDB"],
    imageUrl: StudyNotion,
    links: 'https://github.com/SatyaisCoding/StudyNotion_An-Edu-Tech-Platform',
  },
  {
    title: "Insight-Xplorer",
    description:
      "Developed a SAAS product with an AI-powered chatbot enabling seamless interaction with PDFs through questions, providing insightful answers.",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "tRPC"],
    imageUrl: InsightXplorer,
    links: 'https://github.com/SatyaisCoding/Insight-Xplorer',
  },
] as const;

export const skillsData = [
  "Java (DSA)",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Git",
  "Tailwind",
  "KindeAuth",
  "tRPC",
  "Stripe",
  "Prisma",
  "MongoDB",
  "shadcn/ui",
  "Express",



  "Framer Motion",
] as const;