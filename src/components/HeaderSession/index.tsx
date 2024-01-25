import { Button } from "@/components/Button";
import { signOut, useSession } from "next-auth/react";

export function HeaderSession() {
    const { status, data: session } = useSession();

    return (
        <div className="flex justify-end gap-4 mt-4 mr-4">
            <div>Olá {`${session?.user?.name?.split(" ")[0]}`}</div>
            <Button
                text="sair"
                className="bg-gradient-to-r from-red-600 to-red-900 text-white rounded px-4 cursor-pointer"
                onClick={() => signOut()}
            />
        </div>
    );
}