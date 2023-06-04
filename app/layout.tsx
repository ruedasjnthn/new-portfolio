import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Jonathan Ruedas | Software Engineer",
  description: "Software Engineer Portfolio",
  keywords: ["Portfolio", "Software Engineer", "Jonathan Ruedas"],
  icons: {
    icon: "/images/icons/logo-dark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
