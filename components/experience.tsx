"use client";

import { experienceData } from "@/lib/data";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PageHeading from "./page-heading";
import { useSectionInView } from "@/lib/hooks";
import ExperienceElement from "./experience-element";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 text-center mb-24"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex items-center p-4"
      >
        <div className="md:hidden flex-grow h-px bg-slate-950 opacity-40 dark:bg-cyan-50"></div>
        <PageHeading>my experience</PageHeading>
        <div className="md:hidden flex-grow h-px bg-slate-950 opacity-40 dark:bg-cyan-50"></div>
      </motion.div>
      <VerticalTimeline lineColor="" className="!mt-20">
        {experienceData.map((item, index) => (
          <ExperienceElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
