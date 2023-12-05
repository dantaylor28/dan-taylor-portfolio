"use client";

import Image from "next/image";
import React from "react";
import HeroImg from "@/public/hero_img.png";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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
    })

  return (
    <section className="mb-28 max-w-[50rem] text-center px-4 sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          transition={{
            type: "tween",
            duration: 0.3,
          }}>
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

      <motion.h1 className="mt-8 mb-10 px-4 text-2xl sm:text-4xl"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}>
        Hi, I'm <span className="text-cyan-800">{text}</span>
        <Cursor cursorStyle="_" cursorColor="#155e75"/>
      </motion.h1>

      <h2>
        <span className="font-bold">Hey, I'm Dan</span>. I'm a junior{" "}
        <span className="font-bold">full-stack developer</span> with a passion
        for <span className="font-bold">technological innovation</span> and
        development. I enjoy creating{" "}
        <span className="italic">modern websites & applications</span>. My focus
        is currently on gaining a deeper understanding of {" "}
        <span className="italic">React & other JS frameworks</span>.
      </h2>
    </section>
  );
}
