import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import hrmImg from "@/public/hrms.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  {
    title: "Bachelors, KNRR Engineering College",
    location: "Hyderabad, India",
    description:
      "I graduated in Computer Science and Engineering with a  CGPA of 7.6",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
  {
    title: "Graduated Bootcamp",
    location: "Hyderabad, India",
    description:
      "Before graduating, I spent 6 months studying and immediately began developing a social media platform. Using a tech stack of Angular, Django Rest API, MySQL, and WebSocket, I also upskilled to full-stack development during this time.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Hyderabad, India",
    description:
      "I'm now a full-stack developer working at Medplus(Optival) Software Soltiona. My stack includes React.js, Django, MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Open HRMS",
    description:
      "As a Python full-stack developer, I’ve spent two years building and designing the backend and UI/UX for key HRMS modules, including Attendance, Timesheet, Activity Logs, and Self-Onboarding",
    tags: ["React.js", "Django", "MySQl", "Redis", "Celery", "AWS S3", "Bootstrap", "Webpack"],
    imageUrl: hrmImg,
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MySQL",
  "Redux Toolkit",
  "Python",
  "Django",
  "Rest API",
  "Redis",
  "Celery",
  "Webpack",
  "Routing",
  "AWS S3",
  "Bootstrap",
  "Redux",
  "Docker",
  "React Testing Library",
  "Framer Motion",
  "Session & Token Authentication",
  "Capacitor.js",
  "JQuery",
  "Babel"
] as const;