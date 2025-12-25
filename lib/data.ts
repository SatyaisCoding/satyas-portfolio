'use client'
import React from "react";

import Paka from "@/public/paka.png";
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
    name: "Experience",
    hash: "#experience",
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
    title: "0-100 Full Stack Web Development Course",
    links:"",
    tech:"Full Stack Web Development",
    description:
      "100xdevs comprehensive Full Stack Web Development course by Harkirat Singh, covering modern web technologies and best practices.",
    icon: React.createElement(Code2),
    date: "Dec 2024",
  },
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
    title: "Paka",
    description:
      " An AI-powered personal assistant that unifies tasks, notes, emails, and reminders for instant, context-aware productivity.",
    tags: ["Next.js", "WebSockets", "Vector Database","LLM Models", "Cloud Deployment"],
    imageUrl: Paka,
    links: 'https://github.com/SatyaisCoding/paka',
    demoUrl: 'https://paka-app.vercel.app/', // Add your live demo URL here
  },
  {
    title: "StudyNotion",
    description:
      "Developed StudyNotion, a fully functional ed-tech platform using the MERN Stack, enabling content creation, consumption and rating Educational Content.",
    tags: ["React", "ExpressJS", "NodeJS", "Tailwind", "MongoDB"],
    imageUrl: StudyNotion,
    links: 'https://github.com/SatyaisCoding/StudyNotion_An-Edu-Tech-Platform',
    demoUrl: '', // Add your live demo URL here if available
  },
  {
    title: "Insight-Xplorer",
    description:
      "Developed a SAAS product with an AI-powered chatbot enabling seamless interaction with PDFs through questions, providing insightful answers.",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "tRPC"],
    imageUrl: InsightXplorer,
    links: 'https://github.com/SatyaisCoding/Insight-Xplorer',
    demoUrl: '', // Add your live demo URL here if available
  },
] as const;

export const skillsData = [
  // Programming Languages
  { name: "Java", icon: "☕", level: 90, category: "Programming" },
  { name: "Rust", icon: "🦀", level: 65, category: "Programming" },
  { name: "JavaScript", icon: "⚡", level: 90, category: "Programming" },
  { name: "TypeScript", icon: "📘", level: 80, category: "Programming" },
  { name: "SQL", icon: "🗃️", level: 80, category: "Database" },

  // Frontend
  { name: "HTML", icon: "📄", level: 85, category: "Frontend" },
  { name: "CSS", icon: "🎨", level: 85, category: "Frontend" },
  { name: "ReactJS", icon: "⚛️", level: 88, category: "Frontend" },
  { name: "Next.js", icon: "▲", level: 85, category: "Frontend" },
  { name: "TailwindCSS", icon: "💨", level: 90, category: "Frontend" },
  { name: "shadcn/ui", icon: "🎯", level: 85, category: "Frontend" },
  { name: "Framer Motion", icon: "✨", level: 80, category: "Frontend" },

  // Backend & APIs
  { name: "Node.js", icon: "🟢", level: 80, category: "Backend" },
  { name: "Express.js", icon: "🚀", level: 82, category: "Backend" },
  { name: "Spring Boot", icon: "🌱", level: 80, category: "Backend" },
  { name: "REST API", icon: "🌐", level: 85, category: "Backend" },
  { name: "tRPC", icon: "🔷", level: 75, category: "Backend" },
  { name: "WebSockets", icon: "🔌", level: 75, category: "Backend" },
  { name: "KindeAuth", icon: "🔐", level: 70, category: "Backend" },
  { name: "Kafka", icon: "📡", level: 75, category: "Backend" },

  // Databases
  { name: "MongoDB", icon: "🍃", level: 80, category: "Database" },
  { name: "PostgreSQL", icon: "🐘", level: 80, category: "Database" },
  { name: "Qdrant (Vector DB)", icon: "📊", level: 70, category: "Database" },
  { name: "Redis", icon: "🧠", level: 75, category: "Database" },
  { name: "Prisma", icon: "🗄️", level: 80, category: "Database" },

  // Tools & Platforms
  { name: "Git", icon: "🔀", level: 85, category: "Tools" },
  { name: "Docker", icon: "🐳", level: 80, category: "Tools" },
  { name: "SonarQube", icon: "📈", level: 75, category: "Tools" },
  { name: "Firebase", icon: "🔥", level: 75, category: "Tools" },
  { name: "Vercel", icon: "☁️", level: 80, category: "Tools" },
  { name: "Postman", icon: "📫", level: 85, category: "Tools" },
  { name: "Stripe", icon: "💳", level: 70, category: "Tools" },
  { name: "OpenAI API", icon: "🤖", level: 70, category: "Tools" },
] as const;

export const experienceData = [
  {
    title: "Developer - Java",
    location: "CyberEvolve Technologies Pvt. Ltd, New Delhi",
    description:
      "Working as a backend Java developer on SIEM and SOAR modules, designing and optimizing microservices using Spring Boot, JPA/Hibernate, SQL and Kafka. Built end-to-end playbooks and FortiGate firewall automations that reduce manual incident handling, integrated SonarQube into CI/CD for better code quality, and implemented multi-database support (MySQL/PostgreSQL) and rich notification/reporting workflows.",
    icon: React.createElement(Code2),
    date: "Apr 2024 - Present",
  },
  {
    title: "Student",
    location: "Kanpur Institute of Technology",
    description:
      "Pursuing B.Tech in Computer Science. Focused on Full-Stack Web Development, Data Structures & Algorithms, and modern web technologies.",
    icon: React.createElement(Network),
    date: "2020 - 2024",
  },
] as const;