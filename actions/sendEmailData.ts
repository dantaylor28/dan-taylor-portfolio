"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getError } from "@/lib/utilities";
import EmailForm from "@/email/emailForm";

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
  if (!validateString(name, 300)) {
    return {
      error: "This name is invalid",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "dan.taylor1493@gmail.com",
      subject: "Message from portfolio site",
      reply_to: email as string,
      react: React.createElement(EmailForm, {
        name: name as string,
        message: message as string,
        email: email as string,
      }),
    });
  } catch (error) {
    return {
      error: getError(error),
    };
  }
  return {
    data,
  };
};
