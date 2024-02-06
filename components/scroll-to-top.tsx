"use client";

import { useScroll } from "@/contexts/scroll-to-top-context";

import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
  const { isVisible, scrollUp } = useScroll();
  return (
    <button
      className={`fixed bottom-5 left-5 dark:text-white ${
        isVisible ? "opacity-1" : "hidden cursor-none"
      }`}
      onClick={scrollUp}
    >
      <FaArrowCircleUp />
    </button>
  );
}
