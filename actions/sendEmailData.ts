"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailData = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "dan.taylor1493@gmail.com",
    subject: "Message from portfolio site",
    text: message,
    reply_to: email
  });
};
