"use client";

import React from "react";
import PageHeading from "./page-heading";
import { useSectionInView } from "@/lib/hooks";

export default function AboutMe() {
  const { ref } = useSectionInView("About Me");

  return (
    <div
      id="aboutme"
      className="flex w-[100%] justify-center items-center bg-cyan-800 mt-10 border-y-2 border-cyan-50 scroll-mt-20 dark:border-t dark:border-t-cyan-950 dark:border-b-slate-950 dark:bg-gradient-to-b from-cyan-950 to-slate-950"
      ref={ref}
    >
      <section className="my-28 max-w-[50rem] text-center text-cyan-50 px-4 leading-8">
        <div className="flex items-center py-4 mb-8">
          <div className="flex-grow h-px bg-cyan-50 opacity-40"></div>
          <PageHeading>about me</PageHeading>
          <div className="flex-grow h-px bg-cyan-50 opacity-40"></div>
        </div>
        <p className="font-light">
        <span className="font-semibold">Hey, I'm Dan</span>. I'm a junior{" "}
        <span className="font-semibold">full-stack developer</span> with a
        passion for <span className="italic">technological innovation</span> and
        development. I enjoy creating{" "}
        <span className="font-semibold">modern websites & applications</span>.
        My focus is currently on gaining a deeper understanding of{" "}
        <span className="italic">React & other JS frameworks</span>.
        </p>
        <p className="mb-3 font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos odio,
          enim autem nihil itaque a non quia iusto cupiditate vitae fuga! Quos
          ad ipsam consequuntur repellat nulla vitae animi quis! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quis labore corporis
          pariatur aspernatur adipisci inventore, ratione recusandae deleniti,
          veritatis consequuntur fugit provident commodi expedita ipsa
          voluptates odio quo rem harum?
        </p>
      </section>
    </div>
  );
}
