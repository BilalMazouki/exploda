"use client";
import React, { useRef, useState } from "react";
import RichTextEditor from "./RichTextEditor";
import { saveDesign } from "@/lib/designsStore";

export default function AddDesignModal({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess?: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [previews, setPreviews] = useState<string[]>([]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
      setPreviews(selectedFiles.map((file) => URL.createObjectURL(file)));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setUploading(true);
    setError("");
    try {
      // Save design with dynamic ID
      const savedDesign = saveDesign({
        title,
        description,
        imageUrl: previews[0] || "",
        images: previews,
      });

      console.log("Design saved with ID:", (await savedDesign).id);

      // Reset form
      setTitle("");
      setDescription("<p>Start writing your design description...</p>");
      setFiles([]);
      setPreviews([]);

      // Call success callback
      onSuccess?.();
      onClose();
    } catch (err: any) {
      setError(err.message || "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-8 pb-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            Add New Post
          </h2>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <form className="space-y-6" onSubmit={handleSubmit} id="design-form">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm bg-white focus:ring-2 focus:ring-purple-400 transition"
                placeholder="E.g., Vibrant Landing Page"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <div
                tabIndex={0}
                role="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex h-36 items-center justify-center rounded-xl border-2 border-dashed border-purple-300 bg-gradient-to-r from-purple-50 to-fuchsia-50 text-sm text-purple-400 cursor-pointer hover:border-purple-400 transition"
              >
                {files.length === 0
                  ? "Click to upload images"
                  : `${files.length} image(s) selected`}
              </div>
              {previews.length > 0 && (
                <div className="mt-3 flex gap-2 flex-wrap">
                  {previews.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      className="w-16 h-16 object-cover rounded-lg border shadow"
                      alt={`preview-${idx}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Description
              </label>
              <RichTextEditor
                content={description}
                onChange={setDescription}
                placeholder="Describe your design in detail..."
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">
                  <span className="font-semibold">Error:</span> {error}
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Footer with Buttons */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={uploading}
              className="rounded-full px-6 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 transition disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="design-form"
              disabled={uploading || !title.trim()}
              className="rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-8 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? "Saving..." : "Save Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
