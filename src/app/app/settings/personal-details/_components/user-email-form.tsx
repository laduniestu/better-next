"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Session } from "@/lib/auth/types";
import { updateEmailSchema } from "@/schema/user";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import { changeEmail } from "@/lib/auth/client";

interface UserEmailFormProps {
  session: Session | null;
}

export function UserEmailForm({ session }: UserEmailFormProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof updateEmailSchema>>({
    resolver: zodResolver(updateEmailSchema),
    defaultValues: {
      email: session?.user?.email ?? "",
    },
  });
  const { isDirty } = form.formState;

  function onSubmit(values: z.infer<typeof updateEmailSchema>) {
    startTransition(async () => {
      await changeEmail(
        {
          newEmail: values.email,
        },
        {
          onRequest: () => {
            toast.loading("Updating email...", { id: "updateEmailToast" });
          },
          onSuccess: () => {
            toast.success("Email updated successfully", {
              id: "updateEmailToast",
            });
            form.reset({ email: values.email });
            router.refresh();
          },
          onError: (ctx) => {
            toast.error(ctx.error.message ?? "Something went wrong.", {
              id: "updateEmailToast",
            });
            console.log("error", ctx);
          },
        },
      );
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@email.com"
                  type="email"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                We will never share your email with anyone else.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton disabled={!isDirty} loading={isPending}>
          Update email
        </LoadingButton>
      </form>
    </Form>
  );
}
