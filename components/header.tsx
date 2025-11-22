'use client'
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "/#" },
    { label: "PACKAGES", href: "/packages" },
    { label: "ABOUT", href: "/#about" },
    { label: "ACCOMMODATION", href: "/#accommodation" },
    { label: "CONTACT", href: "/#contact" },
  ];

  return (
  
        <header className="w-full bg-transparent absolute top-0 left-0 z-50">
      {/* Desktop Header */}
      <div className="hidden md:flex w-full p-4 justify-between items-center max-w-7xl mx-auto">
        <div className="shrink-0">
          <img 
            src="/logo.png" 
            width={60} 
            height={60}
            alt="logo" 
            className="cursor-pointer ml-3"
            onClick={() => router.push('/')}
          />
        </div>
        
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-8 text-accent">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link 
                  href={item.href}
                  className="relative py-2  transition-all duration-300 font-extrabold hover:text-Primary block"
                >
                  {item.label}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-Primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="shrink-0 mr-4">
          <Button className="bg-transparent hover:bg-Primary hover:border-Primary border px-6 rounded-2xl border-accent transition-all duration-300 font-bold">
            <a href="/#packages">Book Now</a>
          </Button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden w-full p-4 flex justify-between items-center">
        <div>
          <img 
            src="/logo.png" 
            width={40} 
            height={40}
            alt="logo" 
            className="cursor-pointer"
            onClick={() => router.push('/')}
          />
        </div>
        
        {/* Hamburger Menu */}
        <button
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-Primary h-fit transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-120 opacity-100 rounded-2xl' : 'max-h-0 opacity-0'
      }`}>
        <ul className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link 
                href={item.href}
                className="relative py-3 text-accent font-medium transition-all duration-300 hover:text-Primary block text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                {/* Mobile animated underline */}
                <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-Primary transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Button className="w-full bg-transparent hover:bg-Primary hover:border-Primary border rounded-2xl border-accent transition-all duration-300 font-bold py-3">
              <a href="/#packages" onClick={() => setIsMenuOpen(false)}>Book Now</a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  
  );
};

export default Header;