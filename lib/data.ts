import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hrmImg from "@/public/hrms.png";
import socialMediaImg from "@/public/socialMediaApp.png";

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  
  {
    title: "Full-Stack Developer",
    location: "Hyderabad, India",
    description:
      "I'm now a full-stack developer working at Medplus(Optival) Software Solutions Private Limited. I Worked on a Human Resources Management System(HRMS) with stack includes React.js, Django Rest Frame Work, MySQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Graduated Bootcamp",
    location: "Hyderabad, India",
    description:
      "Before graduating, I spent 6 months to  developing a social media Application. Using a tech stack of Angular, Django Rest API, MySQL, and WebSocket, I also upskilled to full-stack development during this time.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
] as const;

export const EducationData = [
  
  {
    title: "Bachelors of Technology in Computer Science",
    subtitle: "KNRR Engineering College. Hyderabad",
    location: "Hyderabad, India",
    description:
      "Relevant courses included Data Structures and Algorithms, Operating System, and Computer Network",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
  {
    title: "High School-MPC",
    subtitle: "Sri Chaitanya Junior Kalasala, Hyderabad",
    location: "Hyderabad, India",
    description:
      "I completed my high school with a 95% score, demonstrating my commitment to academic excellence and a strong foundation in the skills that drive my passion for technology ",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2018",
  },
] as const;

export const projectsData = [
  {
    title: "Open HRMS",
    description:
      "As a Python full-stack developer, I’ve spent two years building and designing the backend and UI/UX for HRMS Project which including Attendance, Timesheet, Activity Logs, and Self-Onboarding etc.",
    tags: ["React.js", "Django", "MySQL", "Redis", "Celery", "AWS S3", "Bootstrap", "Webpack", "Redux Toolkit"],
    imageUrl: hrmImg,
  },
  {
    title: "Social Media App",
    description:
      "As a Software Developer, I developed a project over six months that connects people and allows them to share happy moments.",
    tags: ["Angular", "Django Rest API", "MySQL", "Bootstrap", "websocket"],
    imageUrl: socialMediaImg,
  },
] as const;

export const skillsData = [
  "C",
  "Java",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "MySQL",
  "Django",
  "Rest API",
  "Redis",
  "Celery",
  "Webpack",
  "Routing",
  "AWS S3",
  "Bootstrap",
  "Docker",
  "Git",
  "Redux Toolkit",
  "Framer Motion",
  "Session & Token Authentication",
  "Capacitor.js",
  "JQuery",
  "Babel",
] as const;