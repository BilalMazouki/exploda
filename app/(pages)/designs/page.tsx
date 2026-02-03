"use client";
import DesignsTab from "@/components/DesignsTab";

export default function DesignsPage() {
  // Renders DesignsTab without 'onAddNew' prop, so no "Add New" button
  return (
    <main className="container mx-auto px-4 py-8">
      <DesignsTab />
    </main>
  );
}