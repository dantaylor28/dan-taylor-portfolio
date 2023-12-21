import React from "react";
import PageHeading from "./page-heading";
import Image from "next/image";
import ProjectImg from "../public/project_img.png";

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
          
          <div className="flex items-end justify-center bg-gray-200 rounded-sm md:w-1/2">
            <Image src={ProjectImg} alt="project I coded" quality={95}
            className="md:w-[28.5rem] md:h-[32rem] rounded-sm" />
          </div>

          <div className="flex flex-col items-start justify-center text-left pl-[8rem] md:w-1/2">
            <h3 className="text-3xl font-normal capitalize mb-10">project title</h3>
            <p className="font-light">
              project description Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Magnam ratibutone enim qui rerum architecto quod
              reiciendis, iusto et maiores placeat ut odit mollitia. Aspernatur
              eos suscipit natus veniam? Laudantium, magnam.
            </p>
            <div>
              <button>repo link</button>
              <button>live site</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
