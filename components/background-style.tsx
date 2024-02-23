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
      className="relative top-80 sm:top-40 flex justify-center items-center -z-10
      "
    >
      <div className="absolute border border-cyan-900/20 dark:border-[#334155] h-[200px] w-[200px] rounded-full mt-52 animate-ping -z-10" />
      <div className="absolute border border-slate-700/5 dark:border-[#0f172a] h-[300px] w-[300px] rounded-full mt-52 -z-10" />
      <div className="absolute border border-slate-700/5 dark:border-[#0f172a] h-[500px] w-[500px] rounded-full mt-52 -z-10" />
      <div className="absolute border border-cyan-900/20 dark:border-[#334155] dark:opacity-5 h-[650px] w-[650px] rounded-full mt-52 animate-pulse -z-10" />
      <div className="absolute border border-slate-700/5 dark:border-[#0f172a] h-[800px] w-[800px] rounded-full mt-52 -z-10" />
    </motion.div>
  );
}

export default BackgroundStyle;
