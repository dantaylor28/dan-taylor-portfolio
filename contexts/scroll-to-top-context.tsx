"use client";

import React, { useState, useEffect, createContext, useContext } from "react";

type ScrollToTopContextProviderProps = {
  children: React.ReactNode;
};

type ScrollToTopContextType = {
  isVisible: Boolean;
  scrollUp: () => void
  scrollDown: () => void;
};

const ScrollToTopContext = createContext<ScrollToTopContextType | null>(null);

export default function ScrollToTopContextProvider({
  children,
}: ScrollToTopContextProviderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollUp = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };
  return (
    <ScrollToTopContext.Provider
      value={{
        isVisible,
        scrollDown,
        scrollUp,
      }}
    >
      {children}
    </ScrollToTopContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollToTopContext);

  if (context === null) {
    throw new Error(
      "useScroll must be used within a ScrollToTopContextProvider."
    );
  }
  return context;
}
