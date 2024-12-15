import { Metadata } from "next";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const userList = await prisma.user.findMany();
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Total user registered : {userList.length}</p>
      <ul>
        {userList.length > 0 &&
          userList.map((user) => (
            <li key={user.id}>
              {user.name} (
              {user.email.replace(
                /^[^@]+/,
                "*".repeat(user.email.indexOf("@")),
              )}
              )
            </li>
          ))}
      </ul>
    </div>
  );
}
