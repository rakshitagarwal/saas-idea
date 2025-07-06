import { notFound, redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";


export default async function Dashboard({ children }) {
  // const user = await getCurrentUser();
  // if (!user || user.role !== "ADMIN") redirect("/login");

  return <>{children}</>;
}
