"use client";

import { experienceData } from "@/lib/data";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PageHeading from "./page-heading";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";

type ExperienceElementProps = {
  item: {
    title: string;
    location: string;
    description: string;
  };
};

const ExperienceElement = ({ item }: ExperienceElementProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });
  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement visible={inView}>
        <h1>{item.title}</h1>
        <p>{item.location}</p>
        <p>{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
};

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
