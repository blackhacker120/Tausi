"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 backdrop-blur-md shadow-md py-2 px-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-400 focus:outline-none"
          >
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-1 justify-end space-x-6">
          <Link href="/home/Landing">
            <Button
              as="a"
              variant="link"
              className="relative text-purple-400 text-sm font-medium no-underline focus:outline-none transition-colors duration-300 hover:text-purple-600"
            >
              Home
            </Button>
          </Link>
          <Link href="/home/About">
            <Button
              as="a"
              variant="link"
              className="relative text-purple-400 text-sm font-medium no-underline focus:outline-none transition-colors duration-300 hover:text-purple-600"
            >
              About Us
            </Button>
          </Link>
          <Link href="/home/Documentation">
            <Button
              className="relative text-purple-100 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 hover:bg-purple-600 hover:text-white text-sm border border-purple-400 rounded-lg"
              variant="ghost"
            >
              Documentation
            </Button>
          </Link>
          <Link href="/home/Download">
            <Button className="relative text-white bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-700 hover:text-white text-sm rounded-lg">
              Download
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Links with Transition */}
        <div
          className={`${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } transition-all duration-500 ease-in-out overflow-hidden md:hidden absolute top-16 left-0 right-0 bg-gray-900 w-full flex flex-col items-center space-y-4 py-6`}
        >
          <Link href="/home/Landing">
            <Button
              as="a"
              variant="link"
              className="relative text-purple-400 text-sm font-medium no-underline focus:outline-none transition-colors duration-300 hover:text-purple-600"
            >
              Home
            </Button>
          </Link>
          <Link href="/home/About">
            <Button
              as="a"
              variant="link"
              className="relative text-purple-400 text-sm font-medium no-underline focus:outline-none transition-colors duration-300 hover:text-purple-600"
            >
              About Us
            </Button>
          </Link>
          <Link href="/home/Documentation">
            <Button
              className="relative text-purple-100 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 hover:bg-purple-600 hover:text-white text-sm border border-purple-400 rounded-lg"
              variant="ghost"
            >
              Documentation
            </Button>
          </Link>
          <Link href="/home/Download">
            <Button className="relative text-white bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-700 hover:text-white text-sm rounded-lg">
              Download
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
