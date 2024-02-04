import { useTheme } from "@/contexts/color-theme-context";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type ExperienceElementProps = {
  item: {
    title: string;
    location: string;
    description: string;
    date: string;
    icon: React.ReactNode;
  };
};

export default function ExperienceElement({ item }: ExperienceElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });
  const { theme } = useTheme();
  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: theme === "light" ? "#ecfeff" : "#083344",
          border: theme === "light" ? "1px solid rgba(21,94,117, 0.1)" : "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "none",
          borderRadius: "0.4rem",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: theme === "light" ? "0.5rem solid rgba(21,94,117, 0.8)" : "0.5rem solid rgba(255, 255, 255, 0.8)",
        }}
        date={item.date}
        dateClassName="xl:border-y xl:border-black/10 xl:mx-5 dark:xl:border-white/20 dark:text-white"
        icon={item.icon}
        iconStyle={{
          fontSize: "2rem",
          background: theme === "light" ? "white" : "#0f172a",
          border: theme === "light" ? "1px solid rgba(21, 94, 117, 0.2)" : "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "none",
          color: theme === "light" ? "#64748b" : "rgba(255, 255, 255, 0.8)",
        }}
      >
        <h1 className="font-medium capitalize text-lg text-cyan-900 dark:text-white">
          {item.title}
        </h1>
        <p className="!mt-0 !font-light text-gray-600 dark:text-white/50">{item.location}</p>
        <p className="!font-normal text-gray-700 dark:text-white/80">{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
}
