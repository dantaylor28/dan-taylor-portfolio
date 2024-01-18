import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type ExperienceElementProps = {
  item: {
    title: string;
    location: string;
    description: string;
  };
};

export default function ExperienceElement({ item }: ExperienceElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });
  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement visible={inView}>
        <h1>{item.title}</h1>
        <p>{item.location}</p>
        <p>{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
}
