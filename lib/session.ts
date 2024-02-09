import { getServerSession } from "next-auth/next";
import { cookies } from 'next/headers';

import { authOptions } from "@/lib/auth";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}

export async function getExtensionStatus() {
  const cookiesList = cookies();
  const hasCookie = cookiesList.has("extension-tracking-id");
  return hasCookie;
}
