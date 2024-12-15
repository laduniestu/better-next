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
import { updateProfileSchema } from "@/shcema/user";
import { updateUser } from "@/lib/auth/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useTransition } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";

interface UserProfileFormProps {
  session: Session | null;
}

export function UserProfileForm({ session }: UserProfileFormProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: session?.user?.name ?? "",
      image: session?.user?.image ?? "",
    },
  });
  const { isDirty } = form.formState;

  function onSubmit(values: z.infer<typeof updateProfileSchema>) {
    startTransition(async () => {
      await updateUser(
        {
          name: values.name,
          image: values.image,
        },
        {
          onRequest: () => {
            toast.loading("Updating profile...", { id: "updateProfileToast" });
          },
          onSuccess: () => {
            toast.success("Profile updated successfully", {
              id: "updateProfileToast",
            });
            form.reset({ name: values.name, image: values.image });
            router.refresh();
          },
          onError: (ctx) => {
            toast.error(ctx.error.message ?? "Something went wrong.", {
              id: "updateProfileToast",
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
        {/*TODO : Implement upload user image*/}
        <div className="space-y-2">
          <FormLabel>Avatar</FormLabel>
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16 rounded-full">
              <AvatarImage
                src={form.getValues("image")}
                alt={form.getValues("name")}
              />
              <AvatarFallback className="rounded-full text-2xl">
                {form.getValues("name").slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <Button variant="secondary" disabled>
              <UploadIcon className="h-5 w-5" />
              Upload New Image
            </Button>
          </div>
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} autoComplete="name" />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton disabled={!isDirty} loading={isPending}>
          Update profile
        </LoadingButton>
      </form>
    </Form>
  );
}
