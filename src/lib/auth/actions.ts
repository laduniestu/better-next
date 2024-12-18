import { BetterAuthOptions } from "better-auth";
import { render } from "jsx-email";
import { EmailVerification } from "@/components/email/email-verification";
import {after} from "next/server";
import {sendEmail} from "@/lib/email";

export const authActions = {
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    async sendVerificationEmail({ user, url }) {
      after(async()=>{
        const body = await render(EmailVerification({ name: user.name, url }));
        await sendEmail({
          from: "noreply@dun.gg",
          to: user.email,
          subject: "Verify your email address",
          body,
        })
      })
    },
  },
} satisfies BetterAuthOptions;
