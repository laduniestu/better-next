"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { deleteUser } from "@/lib/auth/client";
import { Session } from "@/lib/auth/types";
import { toast } from "sonner";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalFooter,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from "@/components/ui/responsive-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoadingButton } from "@/components/ui/loading-button";

interface UserDeleteFormProps {
  session: Session | null;
}
export function UserDeleteForm({ session }: UserDeleteFormProps) {
  const [isPending, startTransition] = useTransition();
  const [confirmation, setConfirmation] = useState("");
  const router = useRouter();

  function onSubmit() {
    startTransition(async () => {
      toast.loading("Deleting account...", { id: "deleteAccountToast" });
      if (confirmation !== session?.user?.name) {
        toast.error("Please type your name to confirm", {
          id: "deleteAccountToast",
        });
        return;
      }
      await deleteUser()
        .then(async () => {
          toast.success("Account deleted successfully", {
            id: "deleteAccountToast",
          });
          router.refresh();
        })
        .catch((err) => {
          toast.error(err.message ?? "Something went wrong.", {
            id: "deleteAccountToast",
          });
        });
    });
  }

  return (
    <ResponsiveModal>
      <ResponsiveModalTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </ResponsiveModalTrigger>
      <ResponsiveModalContent side="bottom">
        <ResponsiveModalHeader>
          <ResponsiveModalTitle></ResponsiveModalTitle>
          <ResponsiveModalTitle>Confirm Account Deletion</ResponsiveModalTitle>
          <ResponsiveModalDescription>
            Are you sure you want to delete your account? This action is
            irreversible, and all your data will be permanently deleted. Please
            confirm if you wish to proceed.
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <Separator />
        <div className="space-y-1">
          <span>
            Please type <b>{session?.user.name}</b> to confirm
          </span>
          <Input
            type="text"
            onChange={(e) => setConfirmation(e.target.value)}
          />
        </div>
        <ResponsiveModalFooter>
          <LoadingButton
            className="w-full bg-destructive/90 hover:bg-destructive"
            onClick={onSubmit}
            disabled={isPending || confirmation !== session?.user?.name}
          >
            I understand the consequences, delete my account
          </LoadingButton>
        </ResponsiveModalFooter>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
}
