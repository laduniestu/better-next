import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "jsx-email";
import { APP_NAME } from "@/constant";
import env from "@/env";

interface EmailVerificationProps {
  name: string;
  url: string;
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

export const EmailVerification = ({ name, url }: EmailVerificationProps) => (
  <Html>
    <Head />
    <Preview>Verify your email</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${env.NEXT_PUBLIC_APP_URL}/logo.png`}
          width="224"
          height="90"
          alt={APP_NAME}
          style={logo}
        />
        <Text style={paragraph}>Hi {name}, </Text>
        <Text style={paragraph}>Welcome to {APP_NAME}.</Text>
        <Section style={btnContainer}>
          <Button
            align="center"
            width={200}
            height={44}
            backgroundColor="#EA580C"
            borderRadius={3}
            textColor="#fff"
            href={url}
          >
            Verify Email
          </Button>
        </Section>
        <Text style={paragraph}>or click this link:</Text>
        <Link href={url}>{url}</Link>
      </Container>
    </Body>
  </Html>
);
