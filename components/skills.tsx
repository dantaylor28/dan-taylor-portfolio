import React from "react";
import PageHeading from "./page-heading";
import { Tooltip } from "./tooltip";

export default function Skills() {
  return (
    <section
      id="skills"
      className="text-center scroll-mt-28 max-w-[60rem] mb-28"
    >
      <PageHeading>technical skills</PageHeading>
      <div className="flex flex-wrap gap-8 mt-20 justify-center">
        <Tooltip text="React.js">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--react] text-[2.2rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="Next.js">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--nextjs-icon] text-[2.4rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="HTML5">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--html-5] text-[2.3rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="CSS3">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--css-3] text-[2.3rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="Python">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--python] text-[2.3rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="Docker">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--docker-icon] text-[2rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="Django">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--django-icon] text-[2rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="Bootstrap">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--bootstrap] text-[2rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="Node.js">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--nodejs-icon] text-[2.4rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="Typescript">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--typescript-icon] text-[2rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="TailwindCSS">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--tailwindcss-icon] text-[1.7rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="Git">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--git-icon] text-[2.5rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="PostgreSQL">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--postgresql] text-[2.2rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="MongoDB">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--mongodb-icon] text-[2.5rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="MySQL">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--mysql-icon] text-[2.1rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="VSCode">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--visual-studio-code] text-[2.2rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="Heroku">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--heroku-icon] text-[2rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="Prettier">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--prettier] text-[2rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="ESLint">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--eslint] text-[2.2rem]"></span>
          </div>
        </Tooltip>

        <Tooltip text="Xcode">
          <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
            <span className="icon-[logos--xcode] text-[2.3rem]"></span>
          </div>
        </Tooltip>
      </div>
    </section>
  );
}
