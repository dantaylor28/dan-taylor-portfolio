"use client"

import React, { ReactNode, useState } from "react";

export const Tooltip = ({
  text,
  children,
}: {
  text: ReactNode;
  children: ReactNode;
}) => {
  const [display, setDisplay] = useState(false);
  return <div className="relative flex flex-col items-center group">
    <span className="flex justify-center" onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
        {children}
    </span>
    <div className={`absolute bottom-full flex flex-col items-center group-hover:flex ${!display ? "hidden" : null}`}>
        <span className="relative z-10 p-3 text-s leading-none text-white bg-cyan-800 shadow-lg rounded-md transition">
            {text}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-cyan-800" />
    </div>
  </div>
};
