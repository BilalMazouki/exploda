"use client";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm px-6 py-4 flex items-center justify-between shadow-sm">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition active:bg-gray-200"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <Bars3Icon className="w-6 h-6 text-gray-700" />
      </button>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl mx-4">
        <input
          type="text"
          placeholder="Search designs..."
          className="w-full rounded-full border border-gray-200 bg-gray-50 px-6 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center justify-center text-white font-semibold shadow-lg">
          N
        </div>
      </div>
    </header>
  );
}