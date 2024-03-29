import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import {Providers} from "./provider";
import NextTopLoader from 'nextjs-toploader';
import Footer from "@/components/Footer/Footer";

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
      <body className=" bg-[#FAFAF9]">
      <Providers>
        <NavBar />
        <NextTopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        zIndex={100}
        />

        {children}

        <Footer/>
        <Toaster />
        </Providers>
      </body>
    </html>
  );
}
