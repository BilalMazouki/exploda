"use client";
import AddDesignModal from "@/components/AddDesignModal";
import DesignsTab from "@/components/DesignsTab";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function DashboardPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <DesignsTab onAddNew={() => setShowAddModal(true)} />
        </main>
      </div>
      {showAddModal && (
        <AddDesignModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
}