"use client"

import { ChildrenType } from "@/@types/ChildrenType"
import { SessionProvider } from "next-auth/react"

export function AuthProvider({ children }: ChildrenType) {
    return <SessionProvider>{children}</SessionProvider>
}