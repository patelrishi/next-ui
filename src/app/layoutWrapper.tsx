'use client'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Login } from "@/Login";
import {appStore} from "../Redux/store"
import { Provider, useSelector } from "react-redux";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = useSelector((state: any) =>{
    return state?.appReducer?.isLoggedIn
  })
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={appStore}>
          {isLoggedIn ? children : <Login/>}
        </Provider>
      </body>
    </html>
  );
}
