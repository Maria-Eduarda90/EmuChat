'use client';

import { ChildrenType } from "@/@types/ChildrenType";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LayoutAdmin({ children }: ChildrenType) {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (status === "loading") {
        return null;
    }

    if (!session) {
        setTimeout(() => {
            router.push('/auth/login');
        }, 100);

        return null
    }

    return <div className="">{children}</div>
}