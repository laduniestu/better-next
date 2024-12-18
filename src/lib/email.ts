import Plunk from "@plunk/node";
import env from "@/env";

type EmailProps = {
    from: string;
    to: string;
    subject: string;
    body: string;
}
export const sendEmail = async ({from,to,subject,body}:EmailProps) => {
    const mailer = new Plunk(env.PLUNK_API_KEY);
    await mailer.emails.send({from,to,subject,body,});
};