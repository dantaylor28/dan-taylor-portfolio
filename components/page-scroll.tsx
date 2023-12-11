"use client";

import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

export default function PageScroll() {
  return (
    <motion.div
      className="hidden sm:flex sm:justify-center sm:items-center mt-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.725,
      }}
    >
      <Link href="#aboutme">
        <IoIosArrowDown className="text-slate-400 h-12 w-12 animate-pulse hover:text-slate-500" />
      </Link>
    </motion.div>
  );
}
