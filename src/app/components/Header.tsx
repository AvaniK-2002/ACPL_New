"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Home, Info, Contact, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <img
              src="/img/ACPL.webp"
              alt="Logo"
              className="w-12 h-12 rounded-full border border-gray-300"
            />
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
              <span className="text-blue-600">Ajinkya</span>{" "}
              <span className="bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
                Creatiion
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Home size={20} /> Home
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Info size={20} /> About Us
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Info size={20} /> Services
            </Link>
            <Link
              href="/insights"
              className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Info size={20} /> Insights
            </Link>
            <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
            <div className="flex flex-col space-y-4 px-6 py-4 text-base font-medium">
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
              <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer so content isn’t hidden under header */}
      <div className="pt-20"></div>
    </>
  );
};

export default Header;
