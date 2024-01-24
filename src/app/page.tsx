'use client'

import { LayoutAdmin } from "@/components/LayoutAdmin";
import { useSession } from "next-auth/react";

export default function Home() {
  const { status, data: session } = useSession();

  return (
    <LayoutAdmin>
      <div>{session?.user?.name?.split(" ")[0]}</div>
    </LayoutAdmin>
  );
}
