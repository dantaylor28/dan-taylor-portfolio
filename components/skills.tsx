import React from "react";
import PageHeading from "./page-heading";
import { skillsData } from "@/lib/data";
import Skill from "./skill";

export default function Skills() {
  return (
    <section
      id="skills"
      className="text-center scroll-mt-28 max-w-[60rem] mb-28"
    >
      <PageHeading>technical skills</PageHeading>

      <div className="flex flex-wrap gap-8 mt-20 justify-center">
        {skillsData.map((skill, index) => (
          <React.Fragment key={index}>
            <Skill {...skill} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
