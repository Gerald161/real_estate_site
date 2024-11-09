import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideBarContextProvider from "./contexts/SideBarContext";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "GoldFern Limited",
  description: "A real estate website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />

      <body className={inter.className}>
        <SideBarContextProvider>
          <Navbar/>
        </SideBarContextProvider>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
