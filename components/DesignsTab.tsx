"use client";
import { useState, useEffect } from "react";
import DesignCard, { Design } from "./DesignCard";
import { mockDesigns } from "./mockDesigns";

const DESIGN_SKELETONS = Array.from({ length: 6 });

export default function DesignsTab({ onAddNew }: { onAddNew: () => void }) {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate async data load with delay
    setLoading(true);
    setError(null);
    const timer = setTimeout(() => {
      try {
        setDesigns(mockDesigns);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
        setLoading(false);
      }
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Designs</h1>
          <p className="text-sm text-gray-500">Browse and manage your design work</p>
        </div>
        <button
          onClick={onAddNew}
          className="rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-6 py-2 text-sm font-semibold text-white shadow-xl hover:scale-105 transition"
        >
          Add New
        </button>
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