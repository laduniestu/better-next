import { betterAuth } from "better-auth";
import { authConfig } from "@/lib/auth/config";
import { authActions } from "@/lib/auth/actions";

export const auth = betterAuth({ ...authConfig, ...authActions });
