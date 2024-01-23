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
        <Body>
          <Container>
            <Section>
              <Heading>You received the following message:</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Message recieved from: {name}</Text>
              <Text>Email Address: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
