"use client";

import type { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const [showPoster, setShowPoster] = useState(true);

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
          setShowPoster(true);
        }
      },
      { threshold: 0.9 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-sm">
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        preload="none"
        poster={typeof poster === "string" ? poster : poster.src}
        width={1280}
        height={720}
        onPlay={() => setShowPoster(false)}
        className="absolute inset-0 block w-full h-full rounded-lg object-contain"
      >
        <source src={src} type="video/mp4" />
      </video>

      {showPoster && (
        <img
          src={typeof poster === "string" ? poster : poster.src}
          alt={`${title} video preview`}
          className="absolute inset-0 w-full h-full object-contain"
        />
      )}
    </div>
  );
}
