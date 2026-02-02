"use client";

import AddDesignModal from "../components/AddDesignModal";
import DesignsTab from "../components/DesignsTab";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function DashboardPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          {/* Handler opens modal */}
          <DesignsTab onAddNew={() => setShowAddModal(true)} />
        </main>
      </div>
      {/* Show modal when triggered */}
      {showAddModal && (
        <AddDesignModal onClose={() => setShowAddModal(false)} />
      )}
    </>
  );
}