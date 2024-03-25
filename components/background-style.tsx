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
      <div className="absolute border border-cyan-800 opacity-[0.2] dark:opacity-[0.3] dark:border-[#334155] h-[175px] w-[175px] sm:h-[200px] sm:w-[200px] rounded-full mt-52 animate-ping" />
      <div className="absolute border border-slate-700/10 opacity-[0.5] dark:border-white/5 h-[275px] w-[275px] sm:h-[300px] sm:w-[300px] rounded-full mt-52" />
      <div className="absolute border border-slate-700/10 opacity-[0.5] dark:border-white/5 h-[375px] w-[375px] sm:h-[500px] sm:w-[500px] rounded-full mt-52" />
      <div className="absolute border border-cyan-800/[0.25] dark:border-[#ecfeff]/[0.15] h-[475px] w-[475px] sm:h-[650px] sm:w-[650px] rounded-full mt-52 animate-pulse" />
      <div className="absolute border border-slate-700/10 opacity-[0.5] dark:border-white/5 h-[575px] w-[575px] sm:h-[800px] sm:w-[800px] rounded-full mt-52" />
    </motion.div>
  );
}

export default BackgroundStyle;
