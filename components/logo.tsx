"use client";

import React from "react";
import { motion } from "framer-motion";

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
      className="hidden lg:inline-block absolute top-8 left-8 text-2xl font-mono z-[999]"
    >
      Dan Taylor
    </motion.div>
  );
}
