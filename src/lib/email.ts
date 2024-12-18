import Plunk from "@plunk/node";
import env from "@/env";

type EmailProps = {
  name?: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  subscribed?: boolean;
};
export const sendEmail = async ({
  name = "Better Next",
  from,
  to,
  subject,
  body,
  subscribed = false,
}: EmailProps) => {
  const mailer = new Plunk(env.PLUNK_API_KEY);
  await mailer.emails.send({ name, from, to, subject, body, subscribed });
};
