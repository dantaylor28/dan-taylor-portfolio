"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { projectData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectData)[number];

export default function Project({
  title,
  description,
  image,
  tags,
  liveUrl,
  repoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
      className="group/margin flex flex-col md:flex-row md:h-[35rem] overflow-hidden py-16 sm:p-0 border-b border-black/20 sm:border-none sm:mt-16 sm:mb-32 sm:last:mb-24 md:odd:flex-row-reverse "
    >
      <div className="group flex items-end justify-center bg-slate-200 rounded-md group md:w-1/2 md:h-[30rem] lg:h-[35rem] md:mt-10 lg:mt-0 hover:bg-slate-300 transition">
        <Image
          src={image}
          alt="project I coded"
          quality={95}
          className="md:w-[20.5rem] md:h-[24rem] lg:w-[28.5rem] lg:h-[32rem] rounded-sm shadow-2xl md:group-hover:scale-105 "
        />
      </div>

      <div className="flex flex-col md:items-start justify-center text-left md:ml-10 lg:ml-32 md:w-1/2 mt-10 md:mt-0 md:border-y border-black/20 group-odd/margin:ml-0 md:group-odd/margin:mr-10 lg:group-odd/margin:mr-32">
        <h3 className="text-3xl font-normal capitalize mb-10 pl-5 md:pl-0">
          {title}
        </h3>
        <p className="font-extralight pl-5 md:pl-0">{description}</p>
        <ul className="flex flex-wrap gap-2 mt-4 mb-14 pl-5 md:pl-0">
          {tags.map((tag, index) => (
            <li
              className="bg-cyan-800/90 px-4 py-[1px] text-[0.7rem] uppercase text-white rounded-3xl tracking-wider"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-8 capitalize font-normal">
          <a
            href={liveUrl}
            target="_blank"
            className="group bg-cyan-50 text-cyan-800 flex items-center gap-2 hover:bg-cyan-600 hover:text-cyan-50 duration-300 border border-black/10 py-2 px-6 rounded cursor-pointer"
          >
            live site
            <BsBoxArrowUpRight className="group-hover:text-cyan-50 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
          </a>

          <a
            href={repoUrl}
            target="_blank"
            className="group bg-cyan-50 text-cyan-800 flex items-center gap-2 hover:bg-cyan-600 hover:text-cyan-50 duration-300 border border-black/10 py-2 px-6 rounded cursor-pointer"
          >
            github link
            <BsGithub className="group-hover:text-cyan-50 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
