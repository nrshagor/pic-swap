import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Convert JPG, PNG, MP3 & WAV Files Online with Pic-Swap",
  description: `Convert any image or audio file format for free with Pic-Swap! We support JPG, PNG, MP3, WAV, and many more. Easy and secure conversions, always online!`,
  creator: "N R SHAGOR",
  keywords: `"file converter","image converter","audio converter","JPG","PNG","MP3","WAV."`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-T3V6F8DPRT"
      ></Script>
      <Script id="G-T3V6F8DPRT">
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-T3V6F8DPRT');`}
      </Script>
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
          {children}
        </div>
      </body>
    </html>
  );
}
