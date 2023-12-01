import Image from "next/image";
import React from "react";
import HeroImg from "@/public/hero_img.png";

export default function Introduction() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src={HeroImg}
            alt="Dan portrait"
            width={252}
            height={252}
            quality={95}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
