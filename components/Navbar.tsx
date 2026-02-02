"use client";
import { useState } from "react";
import { BellIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [search, setSearch] = useState("");
  // For demo, unread notifications fixed at 2
  const unreadNotifications = 2;
  // You'd fetch user data in a real app!
  const user = { name: "Jane Doe", avatar: "" };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-lg shadow sticky top-0 z-40">
      {/* Search */}
      <form className="flex-1 max-w-md mr-4">
        <div className="relative">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-[12px] text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Search designs…"
          />
        </div>
      </form>

      {/* Notification & User */}
      <div className="flex items-center gap-6">
        <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
          <BellIcon className="w-6 h-6 text-gray-500" />
          {unreadNotifications > 0 && (
            <span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold leading-none text-white bg-red-500 rounded-full">
              {unreadNotifications}
            </span>
          )}
        </button>
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