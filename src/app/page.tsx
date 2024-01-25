'use client'

import { CommentArea } from "@/components/CommentArea";
import { HeaderSession } from "@/components/HeaderSession";
import { LayoutAdmin } from "@/components/LayoutAdmin";

export default function Home() {

  return (
    <LayoutAdmin>
      <HeaderSession />
      <CommentArea />
    </LayoutAdmin>
  );
}
