"use client";

import React from "react";
import { motion } from "framer-motion";

function BackgroundStyle() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 2.5, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative top-52 sm:top-40 flex justify-center items-center"
    >
      <div className="absolute border border-cyan-900/20 dark:border-[#334155] h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] rounded-full mt-52 animate-ping" />
      <div className="absolute border border-slate-700/5 dark:border-[#0f172a] h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full mt-52" />
      <div className="absolute border border-slate-700/5 dark:border-[#0f172a] h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full mt-52" />
      <div className="absolute border border-cyan-900/20 dark:border-[#334155] dark:opacity-5 h-[400px] w-[400px] sm:h-[650px] sm:w-[650px] rounded-full mt-52 animate-pulse" />
      <div className="absolute border border-slate-700/5 dark:border-[#0f172a] h-[500px] w-[500px] sm:h-[800px] sm:w-[800px] rounded-full mt-52" />
    </motion.div>
  );
}

export default BackgroundStyle;
