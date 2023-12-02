import type { Metadata } from "next";
import { Nunito, Montserrat } from "next/font/google";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "FundFlit - Revolutionizing crowdfunding with web5",
  description: "We empower users and ensure trust",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
