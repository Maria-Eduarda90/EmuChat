'use client'

import { Button } from "@/components/Button";
import { LayoutAdmin } from "@/components/LayoutAdmin";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { status, data: session } = useSession();

  return (
    <LayoutAdmin>
      <div className="flex justify-end gap-1">
        <div>{session?.user?.name?.split(" ")[0]}</div>
        <Button
          text="sair"
          className="bg-red-600 text-white rounded px-2 cursor-pointer"
          onClick={() => signOut()}
        />
      </div>
    </LayoutAdmin>
  );
}
