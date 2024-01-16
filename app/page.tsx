import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Introduction from "@/components/introduction";
import PageScroll from "@/components/page-scroll";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return <main className="flex flex-col items-center">
    <Introduction />
    <PageScroll />
    <AboutMe />
    <Projects />
    <Skills />
    <Experience />
  </main>;
}
