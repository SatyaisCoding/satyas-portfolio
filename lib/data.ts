'use client'
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Genius from "@/public/genious.jpeg";
import StudyNotion from "@/public/StudyNotion.png";
import InsightXplorer from "@/public/Insightxplorer.jpg";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Genius",
    description:
      "I led a team to create an advanced AI platform with five tools. We used Next.js for smooth navigation and integrated Stripe for payments. Our tech mix included React, Tailwind, Prisma, MySQL, Clerk, and more, giving users rich learning experiences.",
    tags: ["React", "Next.js", "Stripe", "Tailwind", "Prisma"],
    imageUrl: Genius,
    links: 'https://github.com/SatyaisCoding/genius',
  },
  {
    title: "StudyNotion",
    description:
      "Developed StudyNotion, a fully functional ed-tech platform using the MERN Stack, enabling content creation, consumption, and rating, with proficiency in ReactJS, NodeJS, MongoDB, and ExpressJS, employing REST API design principles, deploying via Vercel, Render.com, and Railway.app, and integrating MongoDB Atlas for efficient database management.",
    tags: ["React", "ExpressJS", "NodeJS", "Tailwind", "MongoDB"],
    imageUrl: StudyNotion,
    links:'https://github.com/SatyaisCoding/StudyNotion_An-Edu-Tech-Platform',
  },
  {
    title: "Word Analytics",
    description:
      "Developed a SaaS product with an AI-powered chatbot for PDF interaction, utilizing PlanetScale MySQL, Prisma, trpc, Pinecone, Langchain, KindeAuth, and Stripe for secure user profiles, data transfer, optimization, authentication, and payments.",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "tRPC"],
    imageUrl: InsightXplorer,
    links:'https://github.com/SatyaisCoding/Insight-Xplorer',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;