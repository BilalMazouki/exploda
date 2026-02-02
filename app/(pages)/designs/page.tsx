"use client";

import DesignCard, { Design } from "@/components/DesignCard";
import { mockDesigns } from "@/components/mockDesigns";
import { useState, useEffect } from "react";

export default function DesignsListPage() {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const SKELETONS = Array.from({ length: 6 });

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-4">All Designs</h1>
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