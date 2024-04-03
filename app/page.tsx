import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact-me";
import Experience from "@/components/experience";
import Introduction from "@/components/introduction";
import Logo from "@/components/logo";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scroll-to-top";
import Skills from "@/components/skills";
import SocialLinks from "@/components/social-links";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Logo />
      <SocialLinks />
      <Introduction />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
      <ScrollToTop />
    </main>
  );
}
