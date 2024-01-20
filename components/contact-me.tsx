"use client";

import React from "react";
import PageHeading from "./page-heading";
import { useSectionInView } from "@/lib/hooks";

export default function ContactMe() {
  const { ref } = useSectionInView("Contact Me", 0.5);
  return (
    <section
      id="contactme"
      className="min-w-[30rem] mb-28 h-[50rem]"
      ref={ref}
    >
      <PageHeading>contact me</PageHeading>

      <form action="" className="mt-10 flex flex-col">
        <input type="name" className="mb-5" placeholder="Name" />
        <input type="email" className="mb-5" placeholder="Email" />
        <textarea className="mb-5" placeholder="Message" />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
