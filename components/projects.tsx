"use client";

import React from "react";
import PageHeading from "./page-heading";
import { projectData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <div
      id="projects"
      className="flex w-[100%] justify-center items-center scroll-mt-20"
      ref={ref}
    >
      <section className="mt-16 text-center px-4 leading-8 max-w-[80rem]">
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
