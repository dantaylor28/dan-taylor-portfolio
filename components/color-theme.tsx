"use client";

import React from "react";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/color-theme-context";

export default function ColorTheme() {
  const { theme, switchTheme } = useTheme();
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -500,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="fixed bottom-5 left-5 overflow-hidden flex w-fit items-center rounded-full bg-white shadow-2xl z-[100]"
    >
      <button
        className={`text-xs sm:text-sm font-light flex items-center gap-2 px-3 transition-colors relative ${
          theme === "dark" ? "text-white" : "text-slate-950"
        }`}
        onClick={switchTheme}
      >
        <BsMoonStars className="relative z-10 text-md" />
        <span className="relative z-10">Dark</span>
      </button>
      <button
        className={`text-xs sm:text-sm font-light flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-2 md:py-2 transition-colors relative z-10 ${
          theme === "light" ? "text-white" : "text-slate-950"
        }`}
        onClick={switchTheme}
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
    </motion.div>
  );
}
