"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const sendEmailData = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email, 500)) {
    return {
      error: "This email is invalid",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "This message is invalid",
    };
  }

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "dan.taylor1493@gmail.com",
    subject: "Message from portfolio site",
    text: message,
    reply_to: email,
  });
};
