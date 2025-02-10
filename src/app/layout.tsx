import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import Header from "@/components/header";
import { TaskProvider } from "@/context/taskContext";
import "./globals.css";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aric Repp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${righteous.className} antialiased bg-[#232323]`}>
        <TaskProvider>
          <Header></Header>
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}
