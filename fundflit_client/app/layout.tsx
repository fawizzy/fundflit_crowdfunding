import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "FundFlit - Revolutionizing crowdfunding with web5",
  description: "We empower users and ensure trust",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
