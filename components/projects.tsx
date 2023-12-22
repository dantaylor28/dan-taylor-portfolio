import React from "react";
import PageHeading from "./page-heading";
import { projectData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <div className="flex w-[100%] justify-center items-center">
      <section className="my-28 text-center px-4 leading-8 max-w-[80rem]">
        <div className="flex items-center py-4 mb-8">
          <div className="md:hidden flex-grow h-px bg-slate-950 opacity-40"></div>
          <PageHeading>my projects</PageHeading>
          <div className="md:hidden flex-grow h-px bg-slate-950 opacity-40"></div>
        </div>

        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}
