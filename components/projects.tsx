import React from "react";
import PageHeading from "./page-heading";
import Image from "next/image";
import ProjectImg from "../public/project_img.png";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

export default function Projects() {
  return (
    <div className="flex w-[100%] justify-center items-center mt-10">
      <section className="my-28 text-center px-4 leading-8 max-w-[80rem]">
        <div className="flex items-center py-4 mb-8">
          <div className="flex-grow h-px bg-slate-950 opacity-40"></div>
          <PageHeading>my projects</PageHeading>
          <div className="flex-grow h-px bg-slate-950 opacity-40"></div>
        </div>

        <div className="flex flex-col md:flex-row md:h-[35rem] overflow-hidden">
          <div className="flex items-end justify-center bg-slate-200 rounded-md md:w-1/2">
            <Image
              src={ProjectImg}
              alt="project I coded"
              quality={95}
              className="md:w-[28.5rem] md:h-[32rem] rounded-sm shadow-2xl"
            />
          </div>

          <div className="flex flex-col items-start justify-center text-left pl-32 md:w-1/2">
            <h3 className="text-3xl font-normal capitalize mb-10">
              project title
            </h3>
            <p className="font-light mb-12">
              project description Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Magnam ratibutone enim qui rerum architecto quod
              reiciendis, iusto et maiores placeat ut odit mollitia. Aspernatur
              eos suscipit natus veniam? Laudantium, magnam.
            </p>
            <div className="flex gap-8 capitalize font-medium">
              <a className="group bg-cyan-50 text-cyan-800 flex items-center gap-2 hover:bg-cyan-600 hover:text-cyan-50 duration-300 border border-black/10 py-2 px-6 rounded cursor-pointer">
                live site
                <BsBoxArrowUpRight className="group-hover:text-cyan-50 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
              </a>
              
              <a className="group bg-cyan-50 text-cyan-800 flex items-center gap-2 hover:bg-cyan-600 hover:text-cyan-50 duration-300 border border-black/10 py-2 px-6 rounded cursor-pointer">
                github link
                <BsGithub className="group-hover:text-cyan-50 group-hover:translate-x-1 transition"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
