"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ThemeProvider } from "next-themes";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navLinkClasses =
    "py-2 px-3 cursor-pointer hover:bg-gray-200 hover:text-black transition ease-in-out duration-200 rounded-sm";
  const navLinks = [
    { id: 1, text: "home", href: "/" },
    { id: 3, text: "projects", href: "/projects" },
    {
      id: 4,
      text: "resume",
      href: "https://docs.google.com/document/d/1O9XIbZo4GL4Zg7c4-oJpRzi39b-6KoUZoAdv1dCUEvY/edit?usp=sharing",
    },
  ];

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const MobileNavigation = () => (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-neutral-900 shadow-md w-full flex flex-col">
      <span
        className="absolute top-4 right-4 cursor-pointer text-white"
        onClick={toggleNavbar}
      >
        <AiOutlineClose size="1.5em" />
      </span>
      <ul className="flex flex-col gap-4 font-medium text-white text-center flex justify-around mt-16">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            target={link.id === 4 ? "_blank" : "_self"}
            href={link.href}
            onClick={toggleNavbar}
          >
            <li
              key={link.id}
              className={`${navLinkClasses} flex items-center justify-center ${
                link.id == 4 && "gap-2"
              }`}
            >
              {link.text} {link.id == 4 && <FaExternalLinkAlt />}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <header className="flex justify-between md:px-1 py-4 shadow-md fira md:border-b sticky top-0 opacity-100 px-4 bg-neutral-900 z-50">
        <h2 className="cursor-pointer font-bold flex items-center text-2xl">
          faraz
        </h2>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 font-medium text-lg">
          {navLinks.map((link) => (
            <Link target={link.id === 4 ? "_blank" : "_self"} href={link.href}>
              <li
                key={link.id}
                className={`${navLinkClasses} flex items-center ${
                  link.id == 4 && "gap-2"
                }`}
              >
                {link.text} {link.id == 4 && <FaExternalLinkAlt />}
              </li>
            </Link>
          ))}
        </ul>

        {/* Mobile Navigation Toggle */}
        <span className="md:hidden cursor-pointer " onClick={toggleNavbar}>
          {isNavbarOpen ? (
            <AiOutlineClose size="2em" />
          ) : (
            <AiOutlineMenu size="1.5em" />
          )}
        </span>

        {/* Mobile Navigation */}
        {isNavbarOpen && <MobileNavigation />}
      </header>
    </ThemeProvider>
  );
};

export default Navbar;
