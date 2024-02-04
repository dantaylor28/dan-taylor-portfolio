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
          background: "#ecfeff",
          border: "1px solid rgba(21,94,117, 0.1)",
          boxShadow: "none",
          borderRadius: "0.4rem",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.5rem solid rgba(21,94,117, 0.8)",
        }}
        date={item.date}
        dateClassName="xl:border-y xl:border-black/10 xl:mx-5"
        icon={item.icon}
        iconStyle={{
          fontSize: "2rem",
          background: "white",
          border: "1px solid rgba(21, 94, 117, 0.2)",
          boxShadow: "none",
          color: "#64748b",
        }}
      >
        <h1 className="font-medium capitalize text-lg text-cyan-900">
          {item.title}
        </h1>
        <p className="!mt-0 !font-light text-gray-600">{item.location}</p>
        <p className="!font-normal text-gray-700">{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
}
