"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navLinkClasses =
    "py-2 px-3 cursor-pointer hover:bg-gray-200 hover:text-black transition ease-in-out duration-200 rounded-sm";
  const navLinks = [
    { id: 1, text: "home" },
    { id: 2, text: "about" },
    { id: 3, text: "projects" },
    { id: 4, text: "resume" },
  ];

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const MobileNavigation = () => (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black shadow-md w-full flex flex-col">
      <span
        className="absolute top-4 right-4 cursor-pointer text-white"
        onClick={toggleNavbar}
      >
        <AiOutlineClose size="1.5em" />
      </span>
      <ul className="flex flex-col gap-4 font-medium text-white text-center mt-16">
        {navLinks.map((link) => (
          <li key={link.id} className={`${navLinkClasses}  text-xl mx-4`}>
            {link.text}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <header className="flex justify-between md:px-1 py-4 shadow-md fira md:border-b sticky top-0 bg-[#111111] px-4">
      <h2 className="cursor-pointer font-bold flex items-center text-2xl">
        faraz
      </h2>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-4 font-medium text-lg">
        {navLinks.map((link) => (
          <li key={link.id} className={navLinkClasses}>
            {link.text}
          </li>
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
  );
};

export default Navbar;
