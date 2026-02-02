"use client";

import DesignCard from "@/components/DesignCard";
import { Design } from "@/lib/designsStore";
import { getDesigns } from "@/lib/designsStore";
import { useState, useEffect } from "react";

export default function DesignsListPage() {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadDesigns = () => {
    setLoading(true);
    setError(null);
    const timer = setTimeout(() => {
      try {
        setDesigns(getDesigns());
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
        setLoading(false);
      }
    }, 300);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    loadDesigns();
  }, []);

  const SKELETONS = Array.from({ length: 6 });

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">All Designs</h1>
        <button
          onClick={loadDesigns}
          className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition"
        >
          Refresh
        </button>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {SKELETONS.map((_, i) => (
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
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">No designs yet. Create your first one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {designs.map((design) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>
      )}
    </main>
  );
}