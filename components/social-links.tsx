import React from "react";
import { FaLinkedin, FaSquareGithub, FaInstagram } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div
      className="fixed top-6 right-8 h-[3.25rem] w-[10rem] rounded-full border border-white border-opacity-40
    bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] flex items-center justify-center
    z-[999] text-[28px] gap-4 text-cyan-800 opacity-80"
    >
      <a href="https://github.com/dantaylor28" target="_blank">
        <FaSquareGithub />
      </a>
      <a href="https://www.linkedin.com/in/dan-m-taylor/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/dantaylor93_/" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
}
