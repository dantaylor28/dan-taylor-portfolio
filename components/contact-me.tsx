"use client";

import React from "react";
import PageHeading from "./page-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmailData } from "@/actions/sendEmailData";
import toast from "react-hot-toast";
import { PiPaperPlaneTilt } from "react-icons/pi";

export default function ContactMe() {
  const { ref } = useSectionInView("Contact Me", 0.5);
  return (
    // <section
    //   id="contactme"
    //   className="flex flex-col items-center justify-center scroll-mt-28 text-center w-full bg-slate-200"
    //   ref={ref}
    // >
    //   <div className="my-28">
    //     <PageHeading>contact me</PageHeading>
    //     <div className="flex items-center justify-center w-[60rem] bg-black/10 mt-12 px-20 py-10">
    //       <form
    //         action={async (formData) => {
    //           const { data, error } = await sendEmailData(formData);

    //           if (error) {
    //             toast.error(error);
    //             return;
    //           }
    //           toast.success("Message sent successfully!");
    //         }}
    //         className="flex flex-col w-[30rem]"
    //       >
    //         <input
    //           type="name"
    //           name="name"
    //           className="h-14 px-4 rounded-lg"
    //           placeholder="Name"
    //           required
    //           maxLength={300}
    //         />
    //         <input
    //           type="email"
    //           name="email"
    //           className="my-3"
    //           placeholder="Email"
    //           required
    //           maxLength={500}
    //         />
    //         <textarea
    //           name="message"
    //           className=""
    //           placeholder="Message"
    //           required
    //           maxLength={5000}
    //         />
    //         <button type="submit">Send Message</button>
    //       </form>
    //     </div>
    //   </div>
    // </section>

    <div
      id="contactme"
      ref={ref}
      className="scroll-mt-28 flex w-[100%] justify-center items-center bg-cyan-800"
    >
      <section className="text-center my-28 px-4 text-cyan-50 w-[min(100%,55rem)]">
        <PageHeading>get in touch</PageHeading>
        <p className="mt-10">
          Fill in the below form with any questions/requests
        </p>
        <p>
          Alternatively you can reach me here{" "}
          <span className="font-semibold">dan.taylor1493@gmail.com</span>
        </p>
        <form
          action=""
          className="flex flex-col items-center justify-center mt-10"
        >
          <div className="flex items-center justify-center gap-10 flex-col md:flex-row">
            <input
              type="name"
              name="name"
              className="h-12 w-[20rem] px-4 rounded-md bg-cyan-700 text-cyan-50 outline-none focus:outline-white/30 min-[400px]:w-[23rem] sm:w-[32.5rem] md:w-[20rem] lg:w-[23rem]"
              placeholder="Name"
              required
              maxLength={300}
            />
            <input
              type="email"
              name="email"
              className="h-12 w-[20rem] px-4 rounded-md bg-cyan-700 text-cyan-50 outline-none focus:outline-white/30 min-[400px]:w-[23rem] sm:w-[32.5rem] md:w-[20rem] lg:w-[23rem]"
              placeholder="Email"
              required
              maxLength={500}
            />
          </div>
          <textarea
            name="message"
            className="my-10 h-52 w-[20rem] rounded-md py-4 px-4 bg-cyan-700 text-cyan-50 outline-none focus:outline-white/30 min-[400px]:w-[23rem] sm:w-[32.5rem] md:w-[42.5rem] lg:w-[48.5rem]"
            placeholder="Ask Me Anything"
            required
            maxLength={5000}
          />
          <button
            type="submit"
            className="group bg-cyan-50 text-cyan-800 px-5 py-3 rounded-full flex items-center gap-2 hover:bg-cyan-500 hover:text-white transition duration-300 hover:scale-105"
          >
            Send
            <PiPaperPlaneTilt className="group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
          </button>
        </form>
      </section>
    </div>
  );
}
