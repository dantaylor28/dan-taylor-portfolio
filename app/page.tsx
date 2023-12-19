import AboutMe from "@/components/about-me";
import Introduction from "@/components/introduction";
import PageScroll from "@/components/page-scroll";
import Projects from "@/components/projects";

export default function Home() {
  return <main className="flex flex-col items-center">
    <Introduction />
    <PageScroll />
    <AboutMe />
    <Projects />
  </main>;
}
