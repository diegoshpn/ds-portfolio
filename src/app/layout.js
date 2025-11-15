"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Geist, Geist_Mono, Teko, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.className} ${geistMono.className} antialiased bg-black`}
      >
        <title>Portfolio | Diego Soares - Desenvolvedor Fullstack</title>
        <meta name="description" content="Portfolio website of Diego Soares, Fullstack Developer and Freelancer" />
        {children}
      </body>
    </html>
  );
}
