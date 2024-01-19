"use client";
import {Mina} from "next/font/google";
import "./globals.css";
import {AppProgressBar as ProgressBar} from "next-nprogress-bar";
import {ToastContainer} from "react-toastify";
import SmoothScroll from "@/components/smooth_scroll";

// export const metadata = {
//   title: "Arkar Min portfolio",
//   description: "Arkar Min's portfolio",
// };

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Mina&display=swap"
        rel="stylesheet"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>

      <body>
        <SmoothScroll>{children}</SmoothScroll>
        <ProgressBar
          height="4px"
          color="#EA580C"
          options={{showSpinner: false}}
          shallowRouting
        />
        <ToastContainer />
      </body>
    </html>
  );
}
