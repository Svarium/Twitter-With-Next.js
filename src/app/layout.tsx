import type { Metadata } from "next";
import { Mulish, Alegreya } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import { cookies } from "next/headers";

const mulish = Mulish({
   subsets: ["latin"],
   variable:'--font-mulish',
  
  });
const alegreya = Alegreya({
   subsets: ["latin"],
   variable:'--font-alegreya',

  });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedUsernameCookie = cookies().get('SocialUsername')
  return (
    <html lang="en" className={`${alegreya.variable} ${mulish.variable}`}>
      <body>   
        <NavBar loggedUsername={loggedUsernameCookie?.value}/>

        {children}        
        </body>
    </html>
  );
}
