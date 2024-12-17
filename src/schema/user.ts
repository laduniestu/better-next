import { boolean, object, string } from "zod";

const getPasswordSchema = (
  type: "password" | "confirmPassword" | "currentPassword",
) =>
  string({ required_error: `${type} is required` })
    .min(8, `${type} must be atleast 8 characters`)
    .max(32, `${type} can not exceed 32 characters`);

const getEmailSchema = () =>
  string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email");

const getNameSchema = () =>
  string({ required_error: "Name is required" })
    .min(1, "Name is required")
    .max(50, "Name must be less than 50 characters");

const getImageSchema = () => string().optional();

const getRevokeOtherSessionsSchema = () => boolean().optional();

export const updateProfileSchema = object({
  name: getNameSchema(),
  image: getImageSchema(),
});

export const updateEmailSchema = object({
  email: getEmailSchema(),
});

export const updatePasswordSchema = object({
  revokeOtherSessions: getRevokeOtherSessionsSchema(),
  currentPassword: getPasswordSchema("currentPassword"),
  password: getPasswordSchema("password"),
  confirmPassword: getPasswordSchema("confirmPassword"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
