"use client";
import {Mina} from "next/font/google";
import "./globals.css";
import {AppProgressBar as ProgressBar} from "next-nprogress-bar";
import {ToastContainer} from "react-toastify";
import SmoothScroll from "@/components/smooth_scroll";
import Progress from "@/components/progress";
import {Analytics} from "@vercel/analytics/react";

// export const metadata = {
//   title: "Arkar Min portfolio",
//   description: "Arkar Min's portfolio",
// };

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Mina&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>

      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body>
        <Progress />
        <SmoothScroll>
          {children}
          <Analytics />
        </SmoothScroll>
        {/* <ProgressBar
          height="4px"
          color="#EA590D"
          options={{showSpinner: false}}
          shallowRouting
        /> */}
        <ToastContainer />
      </body>
    </html>
  );
}
