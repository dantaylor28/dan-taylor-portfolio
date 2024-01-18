"use client";

import { experienceData } from "@/lib/data";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PageHeading from "./page-heading";
import { useSectionInView } from "@/lib/hooks";
import ExperienceElement from "./experience-element";

export default function experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  return (
    <section id="experience" ref={ref}>
      <PageHeading>my experience</PageHeading>
      <VerticalTimeline>
        {experienceData.map((item, index) => (
          <ExperienceElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
