import React from "react";
import PageHeading from "./page-heading";

export default function Projects() {
  return (
    <div className="flex w-[100%] justify-center items-centermt-10">
      <section className="my-28 text-center px-4 leading-8 max-w-[80rem]">
        <div className="flex items-center py-4 mb-8">
          <div className="flex-grow h-px bg-slate-950 opacity-40"></div>
          <PageHeading>my projects</PageHeading>
          <div className="flex-grow h-px bg-slate-950 opacity-40"></div>
        </div>
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
