"use client";

import React from "react";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group bg-cyan-50 text-cyan-800 px-5 py-3 rounded-full flex items-center gap-2 hover:bg-cyan-500 hover:text-white transition duration-300 hover:scale-105 disabled:scale-100 disabled:bg-cyan-500 dark:bg-cyan-100/90 dark:hover:bg-cyan-800 dark:hover:border dark:hover:border-white/10"
      disabled={pending}
    >
      {pending ? (
        <div className="animate-spin h-5 w-5 rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send
          <PiPaperPlaneTilt className="group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
        </>
      )}
    </button>
  );
}
