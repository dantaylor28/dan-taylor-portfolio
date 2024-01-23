"use server";

import { Resend } from "resend";
import { validateString, getError } from "@/lib/utilities";

const resend = new Resend(process.env.RESEND_API_KEY);

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

  try {
    await resend.emails.send({
      from: `${name} <onboarding@resend.com>`,
      to: "dan.taylor1493@gmail.com",
      subject: "Message from portfolio site",
      text: message as string,
      reply_to: email as string,
    });
  } catch (error: unknown) {
    return {
      error: getError(error),
    };
  }
};
