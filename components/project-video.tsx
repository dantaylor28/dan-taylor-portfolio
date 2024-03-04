import React from "react";
import Video from "next-video";
// import HarryPotterMp3 from "@/videos/HarryPotterMp3.mov";
import getStarted from "@/videos/get-started.mp4"

export default function ProjectVideo() {
  return <Video src={getStarted} />;
}
