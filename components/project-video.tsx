"use client";

import type { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

type ProjectVideoProps = {
  src: string;
  poster: StaticImageData | string;
  title: string;
};

export default function ProjectVideo({
  src,
  poster,
  title,
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay can be blocked by browser
          });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.7 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      loop
      preload="none"
      poster={typeof poster === "string" ? poster : poster.src}
      width={1280}
      height={720}
      className="aspect-video block w-full h-full rounded-lg object-contain"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
