"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailData = async (formData: FormData) => {
  console.log("Running on server");
  console.log(formData.get("name"));
  console.log(formData.get("email"));
  console.log(formData.get("message"));

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "dan.taylor1493@gmail.com",
    subject: "Message from portfolio site",
    text: "Hello, world!!!!!",
  });
};
