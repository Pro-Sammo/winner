"use client"
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import {Providers} from "./provider";
import NextTopLoader from 'nextjs-toploader';
import Footer from "@/components/Footer/Footer";
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from "@/components/CustomCursor";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-[#FAFAF9]">
      <SmoothScroll/>
      <CustomCursor/>
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
        <Toaster richColors position="top-right" toastOptions={{
          style:{
            backgroundColor:"#68ACD9",
            borderColor:"white"
          }
        }}/>
        </Providers>
      </body>
    </html>
  );
}
