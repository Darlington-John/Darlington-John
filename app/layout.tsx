import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {DaxProvider } from "./context/dax-context";
import LinkHoverListener from "./components/hover-listener";
import Hover from "./components/hover-effects";
import Footer from "./components/footer";
import Header from "./components/header/header";
import Overlay from "./components/overlay";

const recoleta = localFont({
  src: "./fonts/Recoleta-SemiBold.ttf",
  variable: "--font-recoleta",
  weight: "100 900",
});
const recoletaBold = localFont({
  src: "./fonts/Recoleta-Bold.ttf",
  variable: "--font-recoleta-bold",
  weight: "100 900",
});

const cursive = localFont({
  src: "./fonts/dancing.ttf",
  variable: "--font-dancing",
  weight: "100 900",
});

const mulish  = localFont({
  src: "./fonts/mulish.ttf",
  variable: "--font-mulish",
  weight: "400",
});

const mulishSemi  = localFont({
  src: "./fonts/mulish.ttf",
  variable: "--font-mulish-semibold",
  weight: "600",
});
const macho  = localFont({
  src: "./fonts/machoman.ttf",
  variable: "--font-macho",
  weight: "600",
});

export const metadata: Metadata = {
  title: "John Darlington",
  description: "Darlington",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body
        className={`${recoleta.variable} ${recoletaBold.variable} ${cursive.variable} ${mulish.variable}  ${mulishSemi.variable} ${macho.variable} antialiased flex  flex-col  justify-between h-screen   bg-darkBlue`}
      >
        <DaxProvider>
        <Header/>
        <Overlay/>
        <LinkHoverListener/>
        <Hover/>
        {children}
 <Footer/>
        </DaxProvider>
      
      </body>
    </html>
  );
}
