import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

type EmailFormProps = {
  name: string;
  message: string;
  email: string;
};

export default function EmailForm({ name, message, email }: EmailFormProps) {
  return (
    <Html>
      <Head>
        <title>Message from portfolio site</title>
      </Head>
      <Preview>New message from your contact form</Preview>
      <Tailwind>
        <Body className="bg-cyan-950">
          <Container>
            <Section className="bg-slate-200 border border-black/10 rounded-md my-10 px-10 py-5 ">
              <Heading as="h1" className="font-semibold leading-tight text-cyan-950 capitalize">
                You received the following message:
              </Heading>
              <Text className="text-lg font-normal">{message}</Text>
              <Hr className="decoration-inherit"/>
              <Text className="text-xs font-light capitalize">
                message received from:{" "}
                <span className="font-normal">{name}</span>
              </Text>
              <Text className="text-xs font-light">
                Email Address:{" "}
                <span className="font-normal">{email}</span>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
