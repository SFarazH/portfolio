import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Faraz Hasan",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="md:mx-auto md:w-3/4 lg:w-1/2 bg-neutral-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
