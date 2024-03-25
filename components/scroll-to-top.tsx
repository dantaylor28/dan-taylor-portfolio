"use client";

import { useScroll } from "@/contexts/scroll-to-top-context";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
  const { isVisible, scrollUp } = useScroll();
  return (
    <button
      className={`fixed bottom-5 right-8 text-white hover:animate-pulse z-[100] ${
        isVisible ? "opacity-1" : "hidden cursor-none"
      }`}
      onClick={scrollUp}
    >
      <FaArrowUp className="h-9 w-9 rounded-full p-2 bg-gradient-to-r from-cyan-500 to-cyan-700"/>
    </button>
  );
}
