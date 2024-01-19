import React from "react";
import PageHeading from "./page-heading";

export default function ContactMe() {
  return (
    <section id="contactme" className="min-w-[30rem] mb-28">
      <PageHeading>contact me</PageHeading>

      <form action="" className="mt-10 flex flex-col">
        <input type="name" className="mb-5" placeholder="Name"/>
        <input type="email" className="mb-5" placeholder="Email"/>
        <textarea className="mb-5" placeholder="Message"/>
        <button type="submit">
            Send Message
        </button>
      </form>
    </section>
  );
}
