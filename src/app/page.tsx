'use client'

import { Button } from "@/components/Button";
import { CommentArea } from "@/components/CommentArea";
import { HeaderSession } from "@/components/HeaderSession";
import { LayoutAdmin } from "@/components/LayoutAdmin";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { status, data: session } = useSession();

  return (
    <LayoutAdmin>
      <HeaderSession />
      <CommentArea />
    </LayoutAdmin>
  );
}
