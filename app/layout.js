import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@components/Navbar";
import { StoreContext } from "@context/StoreContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Store",
  description: "Buy all Book in one store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreContext>
        <body className={`${inter.className} `}>
          <Navbar />
          <Suspense callback={<loading />}>{children}</Suspense>
        </body>
      </StoreContext>
    </html>
  );
}
