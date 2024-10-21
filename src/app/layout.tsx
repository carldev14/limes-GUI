
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { RegularPoppins } from "../../utils/fonts";
import Providers from "@/components/providers/wrap-for-all";



export const metadata: Metadata = {
  title: "Limes",
  description: "Chat with your friends, family, or co-worker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RegularPoppins.className} p-2 bg-gray-100`}
      >
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}
