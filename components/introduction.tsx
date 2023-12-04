import Image from "next/image";
import React from "react";
import HeroImg from "@/public/hero_img.png";

export default function Introduction() {
  return (
    <section className="mb-28 max-w-[50rem] text-center px-4 sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src={HeroImg}
            alt="Dan portrait"
            width="252"
            height="252"
            quality={99}
            priority={true}
            className="h-56 w-56 sm:h-72 sm:w-72 rounded-full object-cover border-[0.05rem] border-white shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
