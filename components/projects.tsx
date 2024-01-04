"use client";

import React, { useEffect } from "react";
import PageHeading from "./page-heading";
import { projectData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/contexts/active-section-context";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.30,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView]);

  return (
    <div
      id="projects"
      className="flex w-[100%] justify-center items-center scroll-mt-20"
      ref={ref}
    >
      <section className="my-16 text-center px-4 leading-8 max-w-[80rem]">
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
