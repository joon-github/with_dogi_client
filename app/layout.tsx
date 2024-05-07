import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProcider from "./_providers/ReactQueryProvider";
import Loader from "./_components/block/Loader";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./_components/block/Footer";
import { Jua } from "next/font/google";
const jua = Jua({ subsets: ["latin"], weight: ["400"] });

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
        <body className={jua.className}>
          <NextUIProvider>
            <div
              className={`h-screen flex flex-col`}
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
