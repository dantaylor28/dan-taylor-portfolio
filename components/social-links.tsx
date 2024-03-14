import React from "react";
import { FaLinkedin, FaSquareGithub, FaInstagram } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div
      className="fixed top-6 right-8 h-[3.25rem] w-[10rem] rounded-full border border-white border-opacity-40
    bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] flex items-center justify-center
    z-[999] text-[28px] gap-4 text-cyan-800 dark:bg-slate-950 dark:bg-opacity-80 dark:border-white/20 dark:text-cyan-50/80"
    >
      <a
        href="https://github.com/dantaylor28"
        target="_blank"
        className="hover:text-cyan-700 dark:hover:text-white transition"
      >
        <FaSquareGithub />
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
    </div>
  );
}
