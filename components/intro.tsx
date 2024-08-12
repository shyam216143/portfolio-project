"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import myProfileImg from "@/public/my_profile.jpg";
import { SiLeetcode } from "react-icons/si";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const {setActiveSection, setLastTimeClick} = useActiveSectionContext()

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] items-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={myProfileImg}
              alt="Shyam Portfolio"
              width={192}
              height={192}
              quality={95}
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
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mt-4 mb-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, <span className="font-bold">I'm Shyam Kumar, </span>a{" "}
        <span className="font-bold">Full Stack Developer</span> with over {" "}
        <span className="font-bold">two years</span> of experience. I specialize in
        building efficient and user-centric<span className="italic">sites & apps</span>. 
        I'm committed to transforming client visions into reality through innovative design solutions. 
        <p>
        For me, design isn't just about aesthetics; it's about creating intuitive interfaces that solve problems and delight users.
        </p>
      </motion.h1>
      <motion.div
        className="flex flex-col  sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-115 hover:scale-110 hover:bg-gray-950
          active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setLastTimeClick(Date.now());
          }}
        >
          {" "}
          Contact for me{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition opacity-80" />{" "}
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full 
          outline-none focus:scale-115 hover:scale-110
          active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/shyamkumarvennu.pdf"
          download
        >
          Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />
        </a>
        <div className="flex flex-row gap-2">
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15]
          hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/shyam-kumar-973b48199/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 text-[1.35rem] flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15]
          active:scale-105 transition cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/shyam216143"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-white p-4 text-gray-700 text-[1.35rem] flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15]
          active:scale-105 transition cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
          href="https://leetcode.com/vennushyamkumar/"
          target="_blank"
        >
          <SiLeetcode />
        </a>
        </div>
      </motion.div>
      
    </section>
  );
}
