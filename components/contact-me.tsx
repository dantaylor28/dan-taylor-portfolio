"use client";

import React from "react";
import PageHeading from "./page-heading";
import { useSectionInView } from "@/lib/hooks";

export default function ContactMe() {
  const { ref } = useSectionInView("Contact Me", 0.5);
  return (
    <section
      id="contactme"
      className="min-w-[30rem] mb-28 scroll-mt-28 h-[50rem]"
      ref={ref}
    >
      <PageHeading>contact me</PageHeading>

      <form
        action={(FormData) => {
          console.log(FormData.get("name"));
          console.log(FormData.get("email"));
          console.log(FormData.get("message"));
        }}
        className="mt-10 flex flex-col"
      >
        <input
          type="name"
          name="name"
          className="mb-5"
          placeholder="Name"
          required
          maxLength={300}
        />
        <input
          type="email"
          name="email"
          className="mb-5"
          placeholder="Email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="mb-5"
          placeholder="Message"
          required
          maxLength={5000}
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
