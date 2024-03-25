"use client";

import Image from "next/image";
import React from "react";
import HeroImg from "@/public/hero_img.png";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/contexts/active-section-context";
import { HiChevronDown } from "react-icons/hi2";
import { useScroll } from "@/contexts/scroll-to-top-context";
import BackgroundStyle from "@/components/background-style";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import qrCode from "@/public/qr-code.png";

export default function Introduction() {
  const [text] = useTypewriter({
    words: [
      "Hey, I'm Dan Taylor",
      "food-lover-and-world-traveller.js",
      "<WithAPassionForCoding />",
    ],
    loop: true,
    typeSpeed: 115,
    deleteSpeed: 60,
  });

  const { ref } = useSectionInView("Home");
  const { setActiveSection, setLastHeaderClick } = useActiveSectionContext();
  const { isVisible, scrollDown } = useScroll();

  return (
    <div className="flex flex-col items-center justify-center sm:mt-10">
      <BackgroundStyle />
      <section
        id="home"
        className="flex flex-col max-w-[50rem] text-center px-4 md:mb-16 mb-0 scroll-mt-[100rem] h-screen"
        ref={ref}
      >
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.6,
                delay: 1.5,
              }}
            >
              <Image
                src={HeroImg}
                alt="Dan portrait"
                width="252"
                height="252"
                quality={99}
                priority={true}
                className="h-44 w-44 sm:h-56 sm:w-56 rounded-full object-cover border-[0.05rem] border-white shadow-xl dark:border-cyan-800"
              />
            </motion.div>
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.6,
            delay: 1.5,
          }}
          className="uppercase opacity-50 pt-5 text-xs sm:text-sm tracking-[13px] sm:tracking-[15px] dark:text-white dark:opacity-70 z-10"
        >
          software engineer
        </motion.h2>

        <motion.h1
          className="mt-8 mb-5 px-4 text-[24px] sm:text-[34px] text-cyan-800 dark:text-cyan-50 z-10"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.8,
            duration: 0.3,
          }}
        >
          <span className="font-serif dark:opacity-90">{text}</span>
          <Cursor cursorStyle="_" />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.9,
            duration: 0.3,
          }}
        >
          <h2 className="!leading-[1.5] text-[16px] font-light mb-7 sm:text-[20px] sm:max-w-xl tracking-wider opacity-80 z-10">
            I&apos;m a{" "}
            <span className="font-medium">Full-Stack Software Developer</span>{" "}
            with a passion for all things tech, based out of Gothenburg, Sweden.
            🇸🇪
          </h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2,
              duration: 0.3,
            }}
          >
            <Link
              href="#contactme"
              className="px-5 py-2.5 relative rounded-full group overflow-hidden bg-slate-100 text-black flex items-center gap-2 active:scale-105 border border-black/20 hover:border-cyan-700 dark:bg-slate-950/80 dark:text-white/80 dark:border-white/20 dark:hover:border-cyan-950"
              onClick={() => {
                setActiveSection("Contact Me");
                setLastHeaderClick(Date.now());
              }}
            >
              <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-500 ease-out transform translate-x-0 bg-cyan-700 group-hover:w-full opacity-90 dark:bg-cyan-950"></span>
              <span className="relative group-hover:text-white group-hover:duration-500 tracking-wider font-normal">
                Let&apos;s Talk
              </span>
              <BsArrowRight className="group-hover:text-white group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.1,
              duration: 0.3,
            }}
          >
            <a
              href="/Dan_Taylor_CV.pdf"
              target="_blank"
              className="px-5 py-2.5 relative rounded-full group overflow-hidden bg-slate-100 text-black flex items-center gap-2 active:scale-105 border border-black/20 hover:border-cyan-700 dark:bg-slate-950/80 dark:text-white/80 dark:border-white/20 dark:hover:border-cyan-950"
            >
              <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-500 ease-out transform translate-x-0 bg-cyan-700 group-hover:w-full opacity-90 dark:bg-cyan-950"></span>
              <span className="relative group-hover:text-white group-hover:duration-500 tracking-wider font-normal">
                Download CV
              </span>
              <BsDownload className="group-hover:text-white group-hover:translate-y-1 transition" />
            </a>
          </motion.div>
        </div>

        <div className="flex items-center justify-center text-[28px] text-cyan-800/90 pt-5 gap-6 lg:hidden z-10">
          <motion.a
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.2,
              duration: 0.3,
            }}
            href="https://github.com/dantaylor28"
            target="_blank"
            className="border border-black/10 rounded-full p-2 bg-slate-100 hover:text-cyan-700 hover:bg-slate-50 dark:bg-slate-950 dark:border-white/20 dark:text-cyan-50/80 dark:hover:text-white"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.3,
              duration: 0.3,
            }}
            href="https://www.linkedin.com/in/dan-m-taylor/"
            target="_blank"
            className="border border-black/10 rounded-full p-2 bg-slate-100 hover:text-cyan-700 hover:bg-slate-50 dark:bg-slate-950 dark:border-white/20 dark:text-cyan-50/80 dark:hover:text-white"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.4,
              duration: 0.3,
            }}
            href="https://www.instagram.com/dantaylor93_/"
            target="_blank"
            className="border border-black/10 rounded-full p-2 bg-slate-100 hover:text-cyan-700 hover:bg-slate-50 dark:bg-slate-950 dark:border-white/20 dark:text-cyan-50/80 dark:hover:text-white"
          >
            <FaInstagram />
          </motion.a>
        </div>

        <motion.div
          className={`hidden sm:flex sm:justify-center sm:items-center mt-8 mb-10`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.225,
            duration: 0.2,
          }}
        >
          <a onClick={scrollDown}>
            <HiChevronDown
              className={`fixed bottom-3 z-10 animate-pulse h-12 w-12 text-cyan-600 dark:text-cyan-50 cursor-pointer ${
                isVisible ? "!opacity-0 pointer-events-none" : ""
              }`}
            />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
