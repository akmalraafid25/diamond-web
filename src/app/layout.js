import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Diamond Express",
  description: "Your reliable solution",
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='images/favicon.ico' sizes="any"/>
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
