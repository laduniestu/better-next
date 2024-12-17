import { BetterAuthOptions } from "better-auth";
import { render } from "jsx-email";
import { EmailVerification } from "@/components/email/email-verification";
import Plunk from "@plunk/node";
import env from "@/env";

export const authActions = {
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    async sendVerificationEmail({ user, url }) {
      const mailer = new Plunk(env.PLUNK_API_KEY);
      const body = await render(EmailVerification({ name: user.name, url }));
      await mailer.emails.send({
        to: user.email,
        subject: "Verify your email address",
        body,
      });
    },
  },
} satisfies BetterAuthOptions;
