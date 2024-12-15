"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { signInSchema } from "@/shcema/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useTransition } from "react";
import { signIn } from "@/lib/auth/client";
import { useRouter, useSearchParams } from "next/navigation";

import { ErrorContext } from "@better-fetch/fetch";
import { toast } from "sonner";
import { PasswordInput } from "@/components/ui/password-input";
import { AUTHENTICATED_URL } from "@/constant";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const encodedCallbackUrl = encodeURIComponent(callbackUrl ?? "");

  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const openSignUpPage = () => {
    if (!callbackUrl) {
      router.push("/sign-up");
    } else {
      router.push(`/sign-up?callbackUrl=${encodedCallbackUrl}`);
    }
  };

  const handleCredentialsSignIn = async (
    values: z.infer<typeof signInSchema>,
  ) => {
    startTransition(async () => {
      await signIn.email(
        {
          email: values.email,
          password: values.password,
        },
        {
          onRequest: () => {
            toast.loading("Signing in...", { id: "signInToast" });
          },
          onSuccess: async () => {
            toast.success("Signed in successfully", { id: "signInToast" });
            router.push(callbackUrl ?? AUTHENTICATED_URL);
            router.refresh();
          },
          onError: (ctx: ErrorContext) => {
            toast.error(ctx.error.message ?? "Something went wrong.", {
              id: "signInToast",
            });
            console.log("error", ctx);
          },
        },
      );
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleCredentialsSignIn)}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field: fieldProps }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your emaill"
                    autoComplete="email"
                    {...fieldProps}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field: fieldProps }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="password"
                    {...fieldProps}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoadingButton loading={isPending} className="w-full">
            Sign in
          </LoadingButton>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        <Button
          variant="link"
          onClick={openSignUpPage}
          className="text-primary hover:underline"
        >
          Don&apos;t have an account? Sign up
        </Button>
      </div>
    </>
  );
}
