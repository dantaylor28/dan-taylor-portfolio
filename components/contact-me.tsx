"use client";

import React from "react";
import PageHeading from "./page-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmailData } from "@/actions/sendEmailData";
import toast from "react-hot-toast";

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
      <section className="text-center my-28 text-cyan-50">
        <PageHeading>get in touch</PageHeading>
        <p className="mt-10">Fill in the below form with any questions/requests</p>
        <p>
          Alternatively you can reach me here{" "}
          <span className="font-semibold underline">
            dan.taylor1493@gmail.com
          </span>
        </p>
      </section>
    </div>
  );
}
