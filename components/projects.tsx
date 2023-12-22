import React from "react";
import PageHeading from "./page-heading";
import Image from "next/image";
import ProjectImg from "../public/project_img.png";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

export default function Projects() {
  return (
    <div className="flex w-[100%] justify-center items-center">
      <section className="my-28 text-center px-4 leading-8 max-w-[80rem]">
        <div className="flex items-center py-4 mb-8">
          <div className="md:hidden flex-grow h-px bg-slate-950 opacity-40"></div>
          <PageHeading>my projects</PageHeading>
          <div className="md:hidden flex-grow h-px bg-slate-950 opacity-40"></div>
        </div>

        <div className="flex flex-col md:flex-row md:h-[35rem] overflow-hidden">
          <div className="flex items-end justify-center bg-slate-200 rounded-md md:w-1/2 md:h-[30rem] lg:h-[35rem] md:mt-10 lg:mt-0">
            <Image
              src={ProjectImg}
              alt="project I coded"
              quality={95}
              className="md:w-[20.5rem] md:h-[24rem] lg:w-[28.5rem] lg:h-[32rem] rounded-sm shadow-2xl"
            />
          </div>

          <div className="flex flex-col md:items-start justify-center text-left md:ml-10 lg:ml-32 md:w-1/2 mt-10 md:mt-0 md:border-y border-black/20">
            <h3 className="text-3xl font-normal capitalize mb-10 pl-5 md:pl-0">
              project title
            </h3>
            <p className="font-extralight mb-12 pl-5 md:pl-0">
              project description Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Magnam ratibutone enim qui rerum architecto quod
              reiciendis, iusto et maiores placeat ut odit mollitia. Aspernatur
              eos suscipit natus veniam? Laudantium, magnam.
            </p>

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
      </section>
    </div>
  );
}
