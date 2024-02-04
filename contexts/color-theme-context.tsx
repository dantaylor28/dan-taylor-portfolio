"use client";

import React, { useState, useEffect, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ColorThemeContextProviderProps = {
  children: React.ReactNode;
};

type ColorThemeContextType = {
  theme: Theme;
  switchTheme: () => void;
};

const ColorThemeContext = createContext<ColorThemeContextType | null>(null);

export default function ColorThemeContextProvider({
  children,
}: ColorThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <ColorThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ColorThemeContext);

  if (context === null) {
    throw new Error(
      "useTheme must be used within a ColorThemeContextProvider."
    );
  }
  return context;
}
