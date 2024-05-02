import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProcider from "../_providers/ReactQueryProvider";
import Loader from "../_components/molecule/Loader";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "../_components/molecule/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "with_dogi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProcider>
        <body>
          <NextUIProvider>
            <div id="" className={`${inter.className} h-screen flex flex-col`}>
              {children}
              <Footer />
            </div>
          </NextUIProvider>
        </body>
        <Loader />
      </ReactQueryProcider>
    </html>
  );
}
