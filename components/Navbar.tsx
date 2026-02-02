"use client";
import { useState } from "react";
import { MagnifyingGlassIcon, UserCircleIcon, Bars3Icon } from "@heroicons/react/24/outline";



interface NavbarProps {
  onOpenSidebar?: () => void;
}

export default function Navbar({ onOpenSidebar }: NavbarProps) {
  const [search, setSearch] = useState("");
  // For demo, unread notifications fixed at 2
  const unreadNotifications = 2;
  // You'd fetch user data in a real app!
  const user = { name: "jassem sabri", avatar: "" };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-lg shadow  top-0 left-0 w-full z-40">
      {/* Hamburger for mobile */}
      <button
        className="md:hidden mr-4 p-2 rounded hover:bg-gray-200 transition"
        onClick={onOpenSidebar}
        aria-label="Open sidebar"
      >
        <Bars3Icon className="w-7 h-7 text-gray-700" />
      </button>
      {/* Search */}
      <form className="flex w-full  justify-center mr-4">
        <div className="relative rounded-2xl w-full max-w-md">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-[12px] text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-2xl bg-gray-100 border focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Search designs…"
          />
        </div>
      </form>

      {/* Notification & User */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer group">
          {user.avatar ? (
            <img src={user.avatar} alt="user avatar" className="w-8 h-8 rounded-full" />
          ) : (
            <UserCircleIcon className="w-8 h-8 text-gray-500 group-hover:text-purple-600 transition" />
          )}
          <span className="font-medium text-gray-700 group-hover:text-purple-600 transition">{user.name}</span>
        </div>
      </div>
    </nav>
  );
}