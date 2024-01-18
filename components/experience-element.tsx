import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type ExperienceElementProps = {
  item: {
    title: string;
    location: string;
    description: string;
    date: string;
  };
};

export default function ExperienceElement({ item }: ExperienceElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });
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
        dateClassName="border-y border-black/10 mx-5"
      >
        <h1>{item.title}</h1>
        <p>{item.location}</p>
        <p>{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
}
