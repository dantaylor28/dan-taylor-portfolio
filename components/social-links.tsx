"use client";

import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{
        type: "tween",
        delay: 0.5,
        duration: 1,
      }}
      className="items-center justify-center fixed top-6 right-0 z-[999]"
    >
      <div className="hidden lg:flex items-center justify-center text-[28px] text-cyan-800 gap-4 pt-3 xl:hidden z-[999] dark:text-cyan-50/80">
        <a href="https://github.com/dantaylor28" target="_blank">
          <FaGithub className="hover:text-cyan-700 dark:hover:text-white transition" />
        </a>
        <a href="https://www.linkedin.com/in/dan-m-taylor/" target="_blank">
          <FaLinkedin className="hover:text-cyan-700 dark:hover:text-white transition" />
        </a>
        <a href="https://www.instagram.com/dantaylor93_/" target="_blank">
          <FaInstagram className="hover:text-cyan-700 dark:hover:text-white transition" />
        </a>
      </div>
      <div
        className="hidden xl:flex items-center justify-center h-[3.25rem] w-[10rem] rounded-full border border-white border-opacity-40
    bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] text-[28px] text-cyan-800 dark:bg-slate-950 dark:bg-opacity-80
    dark:border-white/20 dark:text-cyan-50/80"
      >
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            delay: 1.3,
            duration: 0.4,
          }}
        >
          <a
            href="https://github.com/dantaylor28"
            target="_blank"
            className="hover:text-cyan-700 dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dan-m-taylor/"
            target="_blank"
            className="hover:text-cyan-700 dark:hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/dantaylor93_/"
            target="_blank"
            className="hover:text-cyan-700 dark:hover:text-white transition"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
