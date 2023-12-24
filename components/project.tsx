import React from "react";
import Image from "next/image";
import ProjectImg from "../public/project_img.png";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { projectData } from "@/lib/data";

type ProjectProps = (typeof projectData)[number];

export default function Project({
  title,
  description,
  image,
  tags,
}: ProjectProps) {
  return (
    <div className="flex flex-col md:flex-row md:h-[35rem] overflow-hidden py-16 sm:p-0 border-b border-black/20 sm:border-none sm:mt-16">
      <div className="flex items-end justify-center bg-slate-200 rounded-md group md:w-1/2 md:h-[30rem] lg:h-[35rem] md:mt-10 lg:mt-0 hover:bg-slate-300 transition">
        <Image
          src={image}
          alt="project I coded"
          quality={95}
          className="md:w-[20.5rem] md:h-[24rem] lg:w-[28.5rem] lg:h-[32rem] rounded-sm shadow-2xl group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col md:items-start justify-center text-left md:ml-10 lg:ml-32 md:w-1/2 mt-10 md:mt-0 md:border-y border-black/20">
        <h3 className="text-3xl font-normal capitalize mb-10 pl-5 md:pl-0">
          {title}
        </h3>
        <p className="font-extralight mb-12 pl-5 md:pl-0">{description}</p>

        <div className="flex items-center justify-center gap-8 capitalize font-normal">
          <a className="group bg-cyan-50 text-cyan-800 flex items-center gap-2 hover:bg-cyan-600 hover:text-cyan-50 duration-300 border border-black/10 py-2 px-6 rounded cursor-pointer">
            live site
            <BsBoxArrowUpRight className="group-hover:text-cyan-50 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
          </a>

          <a className="group bg-cyan-50 text-cyan-800 flex items-center gap-2 hover:bg-cyan-600 hover:text-cyan-50 duration-300 border border-black/10 py-2 px-6 rounded cursor-pointer">
            github link
            <BsGithub className="group-hover:text-cyan-50 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}
