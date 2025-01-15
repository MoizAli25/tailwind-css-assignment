"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link href="/" className="block py-2 md:inline hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link href="/components/about" className="block py-2 md:inline hover:text-blue-400">About</Link>
          </li>
          <li>
            <Link href="/components/contact" className="block py-2 md:inline hover:text-blue-400">Contact</Link>
          </li>
          <li>
            <Link href="/components/services" className="block py-2 md:inline hover:text-blue-400">Services</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
