import SidebarItem from "./SidebarItem";
import React from "react";

export default function Sidebar({ open = false, onClose }: { open?: boolean; onClose?: () => void }) {
  return (
    <>
      {/* Overlay for mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={open ? 'false' : 'true'}
      />

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 w-72 h-screen border-r bg-white/60 backdrop-blur-sm shadow-lg transform transition-transform duration-300 flex flex-col
        ${open ? 'translate-x-0' : '-translate-x-full'}
        md:static md:translate-x-0 md:z-auto`}
        aria-hidden={open ? 'false' : 'true'}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-10 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-3">     
            <img src="/logo.svg" width={40} alt="Logo" />  
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard</h2>
            
          </div>

          {/* Close button for mobile */}
          <button
            className="md:hidden absolute top-2 right-2 rounded hover:bg-gray-200 transition"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6 py-6 space-y-3 text-xl overflow-y-auto">
          <SidebarItem label="Designs" active />
          <SidebarItem label="Testimonials" active={false} disabled />
          <SidebarItem label="Team" active={false} disabled />
        </nav>
      </aside>
    </>
  );
}