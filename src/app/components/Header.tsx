"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Home, Info, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-10">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <img
              src="/img/ACPL.webp"
              alt="Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-gray-300 object-cover"
            />
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap">
              <span className="text-blue-600">Ajinkya</span>{" "}
              <span className="bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
                Creatiion
              </span>
            </h1>
          </div>

          {/* Desktop Menu (from md+) */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-8 xl:space-x-12 text-base lg:text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Home size={18} className="lg:hidden xl:inline" /> Home
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Info size={18} className="lg:hidden xl:inline" /> About Us
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Info size={18} className="lg:hidden xl:inline" /> Services
            </Link>
            <Link
              href="/insights"
              className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Info size={18} className="lg:hidden xl:inline" /> Insights
            </Link>
            <button
              onClick={scrollToForm}
              className="px-3 sm:px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-900 transition-colors text-sm sm:text-base"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger (below md) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200 w-full">
            <div className="flex flex-col space-y-4 px-6 py-6 text-base font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Home size={18} /> Home
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Info size={18} /> About Us
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Info size={18} /> Services
              </Link>
              <Link
                href="/insights"
                className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Info size={18} /> Insights
              </Link>
              <button
                onClick={scrollToForm}
                className="w-full px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-900 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="pt-20"></div>
    </>
  );
};

export default Header;
