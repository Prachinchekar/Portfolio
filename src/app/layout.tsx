import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import SmoothScroll from "../components/SmoothScroll";
import Loader from "../components/Loader";
import CustomCursor from "../components/CustomCursor";
import BackgroundGlow from "../components/BackgroundGlow";

const inter = Inter ({ subsets: ["latin"] });

export const metadata = {
  title: "Pranay Chinchekar | Fullstack Developer",
  description: "Portfolio of Pranay - React, Next.js Developere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <BackgroundGlow />
        <SmoothScroll />
        <Loader />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
};