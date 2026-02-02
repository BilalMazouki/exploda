"use client";
import { useState, useEffect } from "react";
import DesignCard from "./DesignCard";
import { Design } from "@/lib/designsStore";
import { getDesigns } from "@/lib/designsStore";

const DESIGN_SKELETONS = Array.from({ length: 6 });

export default function DesignsTab({ onAddNew }: { onAddNew?: () => void }) {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔴 This calls getDesigns() which will use your API
  const loadDesigns = async () => {
    setLoading(true);
    setError(null);
    try {
      const loadedDesigns = await getDesigns();
      console.log("Loaded designs:", loadedDesigns);
      setDesigns(loadedDesigns);
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial load
    loadDesigns();

    // Listen for updates from modal
    const handleUpdate = () => {
      console.log("Designs updated event received");
      loadDesigns();
    };

    window.addEventListener('designsUpdated', handleUpdate);
    
    return () => {
      window.removeEventListener('designsUpdated', handleUpdate);
    };
  }, []);

  return (
    <section>
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Designs</h1>
          <p className="text-sm text-gray-500">Browse and manage your design work</p>
        </div>
        {onAddNew && (
          <button
            onClick={onAddNew}
            className="rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-6 py-2 text-sm font-semibold text-white shadow-xl hover:scale-105 transition"
          >
            Add New
          </button>
        )}
      </header>
      
      {loading ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {DESIGN_SKELETONS.map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border bg-white/60 animate-pulse p-4 shadow-xl"
            >
              <div className="h-44 w-full rounded-xl bg-gray-200 mb-3" />
              <div className="h-6 w-2/3 bg-gray-200 rounded-lg mb-2" />
              <div className="h-4 w-1/2 bg-gray-200 rounded-lg mb-1" />
              <div className="h-8 w-1/4 bg-gray-200 rounded-full mt-3" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="p-8 bg-red-50 text-red-600 rounded-xl">
          <span className="font-semibold">Error:</span> {error}
        </div>
      ) : designs.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-fuchsia-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <p className="text-lg text-gray-600 font-medium mb-2">No designs yet</p>
          <p className="text-sm text-gray-500 mb-6">Create your first design to get started</p>
          {onAddNew && (
            <button
              onClick={onAddNew}
              className="rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              Create Your First Design
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {designs.map((design) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>
      )}
    </section>
  );
}