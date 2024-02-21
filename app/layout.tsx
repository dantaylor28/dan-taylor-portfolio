import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/contexts/active-section-context";
import { Toaster } from "react-hot-toast";
import ColorTheme from "@/components/color-theme";
import ColorThemeContextProvider from "@/contexts/color-theme-context";
import ScrollToTopContextProvider from "@/contexts/scroll-to-top-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dan Taylor | Portfolio",
  description:
    "Dan Taylor is a junior full-stack software developer, with knowledge in Javascript(React.js, Next.js, vanilla), Python(Django, Rest API), HTML and CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-100 text-slate-950 relative pt-28 sm:pt-36 dark:bg-slate-950 dark:text-slate-50`}
      >
        {/* <div
          className="bg-[#ffedd5] absolute -z-10 top-[-6rem] right-[4rem] h-[31.25rem] w-[31.25rem]
        rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-slate-950"
        ></div>
        <div
          className="bg-[#fee2e2] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem]
        rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-cyan-950"
        ></div>
        <div
          className="bg-[#f7fee7] absolute -z-10 top-[30rem] left-[-35rem] h-[31.25rem] w-[50rem]
        rounded-full blur-[10rem] sm:w-[79.25rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-slate-950"
        ></div> */}

        <ScrollToTopContextProvider>
          <ColorThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Toaster position="top-right" />
              <ColorTheme />
            </ActiveSectionContextProvider>
          </ColorThemeContextProvider>
        </ScrollToTopContextProvider>
      </body>
    </html>
  );
}
