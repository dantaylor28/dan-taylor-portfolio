import React from "react";
import Video from "next-video";
import HarryPotterMp3 from "@/videos/HarryPotterMp3.mov";

export default function ProjectVideo() {
  return <Video src={HarryPotterMp3} />;
}
