"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth/client";
import { toast } from "sonner";

export default function LogoutButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            router.refresh();
          },
        },
      });
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  };

  return <div onClick={handleSignOut}>{children}</div>;
}
