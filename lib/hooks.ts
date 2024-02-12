import { useActiveSectionContext } from "@/contexts/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, lastHeaderClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - lastHeaderClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastHeaderClick, sectionName]);

  return {
    ref,
    inView,
  };
}

