"use client";

import React from "react";
import PageHeading from "./page-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmailData } from "@/actions/sendEmailData";
import toast from "react-hot-toast";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { motion } from "framer-motion";

export default function ContactMe() {
  const { ref } = useSectionInView("Contact Me", 0.5);
  return (
    <div
      id="contactme"
      ref={ref}
      className="scroll-mt-28 flex w-[100%] justify-center items-center bg-cyan-800"
    >
      <section className="text-center my-28 px-4 text-cyan-50 w-[min(100%,55rem)]">
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: "-200px",
          }}
        >
          <PageHeading>get in touch</PageHeading>
        </motion.div>
        <motion.p
          className="mt-5"
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: "-200px",
          }}
        >
          You can reach me directly at{" "}
          <a
            href="mailto:dan.taylor1493@gmail.com"
            className="underline font-semibold"
          >
            dan.taylor1493@gmail.com
          </a>{" "}
          or through the following form.
        </motion.p>
        <motion.form
          action={async (formData) => {
            const { data, error } = await sendEmailData(formData);

            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Message sent successfully!");
          }}
          className="flex flex-col items-center justify-center mt-10 sm:mt-16"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-250px",
          }}
          transition={{
            duration: 0.3,
          }}
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
        </motion.form>
      </section>
    </div>
  );
}
