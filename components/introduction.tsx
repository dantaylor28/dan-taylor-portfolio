"use client";

import Image from "next/image";
import React from "react";
import HeroImg from "@/public/hero_img.png";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Introduction() {
  const [text] = useTypewriter({
    words: [
      "Dan Taylor✌️",
      "a Software Developer💻",
      "an Adventurer🧳",
      "a Foodie🍴",
      "Dan Taylor✌️",
    ],
    loop: 1,
    typeSpeed: 115,
    deleteSpeed: 60,
  });

  return (
    <section className="mb-28 max-w-[50rem] text-center px-4 sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Image
              src={HeroImg}
              alt="Dan portrait"
              width="252"
              height="252"
              quality={99}
              priority={true}
              className="h-56 w-56 sm:h-72 sm:w-72 rounded-full object-cover border-[0.05rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mt-8 mb-10 px-4 text-[28px] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
        }}
      >
        Hi, I'm <span className="text-cyan-800">{text}</span>
        <Cursor cursorStyle="_" cursorColor="#155e75" />
      </motion.h1>

      <motion.h2
        className="!leading-[1.5] text-[18px] font-light mb-10 sm:text-[20px]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
        }}
      >
        <span className="font-semibold">Hey, I'm Dan</span>. I'm a junior{" "}
        <span className="font-semibold">full-stack developer</span> with a
        passion for <span className="italic">technological innovation</span> and
        development. I enjoy creating{" "}
        <span className="font-semibold">modern websites & applications</span>.
        My focus is currently on gaining a deeper understanding of{" "}
        <span className="italic">React & other JS frameworks</span>.
      </motion.h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
        <Link
          href="#contactme"
          className="px-5 py-2.5 relative rounded group overflow-hidden bg-cyan-800 text-cyan-50 flex items-center gap-2"
        >
          <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-500 ease-out transform translate-x-0 bg-cyan-600 group-hover:w-full opacity-90"></span>
          <span className="relative group-hover:text-white group-hover:duration-500">
            Get In Touch
          </span>
          <BsArrowRight className="group-hover:text-white group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </section>
  );
}
