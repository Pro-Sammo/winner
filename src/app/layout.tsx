import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import {Providers} from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WINNER MACHINERIES",
  description: "Created by Sammo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAF9]">
      <Providers>
        <NavBar />
        {children}
        <Toaster />
        </Providers>
      </body>
    </html>
  );
}
