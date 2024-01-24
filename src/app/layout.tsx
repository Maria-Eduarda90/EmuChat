import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import { AuthProvider } from "@/components/AuthProvider";

const roboto = Roboto({
  subsets: ["latin"],

  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "EmuChat",
  description: "Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={roboto.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
