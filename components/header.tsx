"use client";

import { links } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "@/contexts/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setLastHeaderClick } =
    useActiveSectionContext();
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full
        rounded-none border-b sm:border border-white border-opacity-40
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
        backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full dark:bg-slate-950 dark:bg-opacity-80 dark:border-white/20 dark:sm:border-white/20"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{
          type: "tween",
          delay: 0.5,
          duration: 1,
        }}
      ></motion.div>
      <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2
      py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1
        text-[0.9rem] font-medium text-gray-500 sm:w-[40rem] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hashtag}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                delay: 1.3,
                duration: 0.4,
              }}
            >
              <Link
                href={link.hashtag}
                onClick={() => {
                  setActiveSection(link.name);
                  setLastHeaderClick(Date.now());
                }}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-white",
                  {
                    "text-gray-950 dark:text-white":
                      activeSection === link.name,
                  }
                )}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="bg-cyan-600/20 rounded-full -z-10 absolute inset-0 dark:bg-cyan-800/40"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
