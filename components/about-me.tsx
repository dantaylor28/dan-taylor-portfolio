import React from "react";
import PageHeading from "./page-heading";

export default function AboutMe() {
  return (
    <div className="flex w-[100%] justify-center items-center bg-cyan-800 mt-10 border-y-2 border-cyan-50">
      <section className="my-28 max-w-[50rem] text-center text-cyan-50 px-4 leading-8">
        <div className="flex items-center py-4 mb-8">
          <div className="flex-grow h-px bg-cyan-50 opacity-40"></div>
          <PageHeading>about me</PageHeading>
          <div className="flex-grow h-px bg-cyan-50 opacity-40"></div>
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
        <p className="font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          expedita, consectetur explicabo corporis tempora odio beatae
          repudiandae quos aliquid eaque magni nam voluptatum, accusamus, iure
          repellat excepturi ab minus perferendis.
        </p>
      </section>
    </div>
  );
}
