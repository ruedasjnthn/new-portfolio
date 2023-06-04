import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./components/global/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jonathan Ruedas | Software Engineer",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
