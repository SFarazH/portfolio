import "./globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Link from "next/link";

export const metadata = {
  title: "Faraz Hasan",
  description: "Portoflio of Faraz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="md:mx-auto md:w-3/4 lg:w-1/2 bg-neutral-900 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <div className="mt-auto">
          <Contact />
        </div>
      </body>
    </html>
  );
}
