"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoImg from "@/public/logo.png";

export default function Logo() {
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
      className="hidden absolute top-5 left-8 lg:flex items-center justify-center font-mono z-[999] border border-cyan-950/20 dark:border-white/30 h-16 w-16"
    >
      <Image src={LogoImg} alt="Dan Taylor Logo" height="50" width="50" />
    </motion.div>
  );
}
