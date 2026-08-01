import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "IEDC ICET - Innovation & Entrepreneurship Development Centre",
  description: "Empowering students to transform innovative ideas into impactful startups through entrepreneurship, technology, research, and collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#111111] text-white overflow-x-hidden">
        <TooltipProvider>
          <Navbar />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}