import { Tailwind } from "@react-email/tailwind";
import {
  Body,
  Container,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="borderBlack bg-white py-4 my-10 px-10 rounded-md">
              <Heading className="leading-tight">
                You recieved the following message from your contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text> The sender's email is : {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactFormEmail;