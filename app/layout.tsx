import type { Metadata } from "next";
import "./globals.css";

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
    <html
      lang="en"
      className="h-full antialiased dark"
    >
      <body className="min-h-full flex flex-col bg-[#111111] text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
