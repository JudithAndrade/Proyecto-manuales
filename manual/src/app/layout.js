import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";  
import Portada from "./portada/page";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Manual",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        
        {children}</body>
    </html>
  );
}
