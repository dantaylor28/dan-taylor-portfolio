"use client";

import React, { useEffect, useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

export default function ColorTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);
  return (
    <div className="fixed bottom-5 right-5 overflow-hidden flex w-fit items-center rounded-full bg-white shadow-2xl">
      <button
        className={`text-xs sm:text-sm font-light flex items-center gap-2 px-3 transition-colors relative z-10 ${
          theme === "dark" ? "text-white" : "text-slate-950"
        }`}
        onClick={() => {
          setTheme("dark");
          window.localStorage.setItem("theme", "dark");
        }}
      >
        <BsMoonStars className="relative z-10 text-md" />
        <span className="relative z-10">Dark</span>
      </button>
      <button
        className={`text-xs sm:text-sm font-light flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-2 md:py-2 transition-colors relative z-10 ${
          theme === "light" ? "text-white" : "text-slate-950"
        }`}
        onClick={() => {
          setTheme("light");
          window.localStorage.setItem("theme", "light");
        }}
      >
        <BsSun className="relative z-10 text-md" />
        <span className="relative z-10">Light</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          theme === "light" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-700"
        />
      </div>
    </div>
  );
}
