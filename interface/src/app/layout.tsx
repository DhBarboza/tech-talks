import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Talk",
  description: "Yor meeting app to dialog about tecnology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body className={`${rubik.className} bg-background-page text-white`}>
              {children}
          </body>
      </html>
  );
}
