"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const liClasses =
    "py-2 px-3 cursor-pointer hover:bg-[#c1d4da] transition rounded-sm";
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const navLinks = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Services" },
    { id: 4, text: "Gallery" },
  ];

  return (
    <header className="flex justify-between p-4 shadow-md ">
      <h2 className="cursor-pointer font-bold">faraz</h2>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-4 uppercase font-medium">
        {navLinks.map((link) => (
          <li key={link.id} className={liClasses}>
            {link.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Toggle */}
      <span className="md:hidden cursor-pointer" onClick={toggleNavbar}>
        {isNavbarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </span>

      {/* Mobile Navigation */}
      {isNavbarOpen && (
        <div className="fixed top-0 right-0 bottom-0 bg-black shadow-md w-full sm:w-9/12 flex flex-col ">
          <span
            className="absolute top-4 right-4 cursor-pointer"
            onClick={toggleNavbar}
          >
            <AiOutlineClose />
          </span>
          <ul className="flex flex-col gap-4 uppercase font-medium text-center">
            {navLinks.map((link) => (
              <li key={link.id} className={liClasses}>
                {link.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
