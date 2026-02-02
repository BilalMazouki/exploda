"use client";
import AddDesignModal from "@/components/AddDesignModal";
import DesignsTab from "@/components/DesignsTab";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function DashboardPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSuccess = () => {
    setRefreshKey(prev => prev + 1); // Trigger refresh
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <DesignsTab 
            key={refreshKey} 
            onAddNew={() => setShowAddModal(true)} 
          />
        </main>
      </div>
      {showAddModal && (
        <AddDesignModal 
          onClose={() => setShowAddModal(false)}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
}