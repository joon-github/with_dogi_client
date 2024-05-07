import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProcider from "./_providers/ReactQueryProvider";
import Loader from "./_components/block/Loader";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./_components/block/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "with_dogi",
  description: "위드도기와 행복한 반려생활을 해보세요!",
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
            <div
              id=""
              className={`${inter.className} h-screen flex flex-col overflow-hidden  min-w-[800px] overflow-x-scroll overflow-y-hidden`}
            >
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
