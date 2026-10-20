"use client";

import { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

type ProjectVideoProps = {
  src: string;
  poster: any;
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
      { threshold: 0.5 },
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
      poster={poster}
      width={1280}
      height={720}
      className="aspect-video w-full rounded-lg object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
