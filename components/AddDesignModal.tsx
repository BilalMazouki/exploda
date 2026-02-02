"use client";
import React, { useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import {
  Bars3BottomLeftIcon,
  Bars3Icon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";

export default function AddDesignModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [previews, setPreviews] = useState<string[]>([]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Subscript,
      Superscript,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "<p>Start writing your design description...</p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none p-4 focus:outline-none min-h-[300px] bg-white",
      },
    },
  });

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
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", editor?.getHTML() || "");
      files.forEach((file) => formData.append("images", file));

      const resp = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (!resp.ok) throw new Error("Upload failed.");
      onClose();
    } catch (err: any) {
      setError(err.message || "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm overflow-y-auto py-8">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl p-8 my-8">
        <h2 className="mb-5 text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span className="inline-block w-6 h-6 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-lg mr-2"></span>
          Add New Design
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
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
              {files.length === 0 ? "Click to upload images" : "Change images"}
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
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
              {/* Toolbar */}
              <div className="border-b border-gray-200 p-3 bg-gray-50 flex flex-wrap gap-2 items-center">
                {/* Heading Dropdown */}
                <select
                  onChange={(e) => {
                    const level = parseInt(e.target.value);
                    if (level === 0) {
                      editor?.chain().focus().setParagraph().run();
                    } else {
                      editor?.chain().focus().toggleHeading({ level: level as 1 | 2 | 3 }).run();
                    }
                  }}
                  className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white hover:bg-gray-50 focus:ring-2 focus:ring-purple-400"
                >
                  <option value="0">Normal</option>
                  <option value="1">Heading 1</option>
                  <option value="2">Heading 2</option>
                  <option value="3">Heading 3</option>
                </select>

                <div className="w-px h-6 bg-gray-300" />

                {/* Text Format */}
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                  className={`px-3 py-1.5 rounded font-bold text-sm hover:bg-gray-200 ${
                    editor?.isActive("bold") ? "bg-purple-100 text-purple-700" : ""
                  }`}
                  title="Bold"
                >
                  B
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                  className={`px-3 py-1.5 rounded italic text-sm hover:bg-gray-200 ${
                    editor?.isActive("italic") ? "bg-purple-100 text-purple-700" : ""
                  }`}
                  title="Italic"
                >
                  I
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleUnderline().run()}
                  className={`px-3 py-1.5 rounded underline text-sm hover:bg-gray-200 ${
                    editor?.isActive("underline") ? "bg-purple-100 text-purple-700" : ""
                  }`}
                  title="Underline"
                >
                  U
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleStrike().run()}
                  className={`px-3 py-1.5 rounded line-through text-sm hover:bg-gray-200 ${
                    editor?.isActive("strike") ? "bg-purple-100 text-purple-700" : ""
                  }`}
                  title="Strikethrough"
                >
                  S
                </button>

                <div className="w-px h-6 bg-gray-300" />

                {/* Subscript / Superscript */}
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleSubscript().run()}
                  className={`px-3 py-1.5 rounded text-sm font-semibold hover:bg-gray-200 ${
                    editor?.isActive("subscript") ? "bg-purple-100 text-purple-700" : ""
                  }`}
                  title="Subscript"
                >
                  x₂
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleSuperscript().run()}
                  className={`px-3 py-1.5 rounded text-sm font-semibold hover:bg-gray-200 ${
                    editor?.isActive("superscript") ? "bg-purple-100 text-purple-700" : ""
                  }`}
                  title="Superscript"
                >
                  x²
                </button>

                <div className="w-px h-6 bg-gray-300" />

                {/* Lists */}
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleBulletList().run()}
                  className={`px-3 py-1.5 rounded text-sm hover:bg-gray-200 ${
                    editor?.isActive("bulletList") ? "bg-purple-100 text-purple-700" : ""
                  }`}
                  title="Bullet List"
                >
                  • List
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                  className={`px-3 py-1.5 rounded text-sm hover:bg-gray-200 ${
                    editor?.isActive("orderedList") ? "bg-purple-100 text-purple-700" : ""
                  }`}
                  title="Numbered List"
                >
                  1. List
                </button>

                <div className="w-px h-6 bg-gray-300" />

                {/* Alignment */}
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().setTextAlign("left").run()}
                  className={`p-2 rounded hover:bg-gray-200 ${
                    editor?.isActive({ textAlign: "left" }) ? "bg-purple-100 text-purple-700" : ""
                  }`}
                  title="Align Left"
                >
                  <Bars3BottomLeftIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().setTextAlign("center").run()}
                  className={`p-2 rounded hover:bg-gray-200 ${
                    editor?.isActive({ textAlign: "center" }) ? "bg-purple-100 text-purple-700" : ""
                  }`}
                  title="Align Center"
                >
                  <Bars3Icon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().setTextAlign("right").run()}
                  className={`p-2 rounded hover:bg-gray-200 ${
                    editor?.isActive({ textAlign: "right" }) ? "bg-purple-100 text-purple-700" : ""
                  }`}
                  title="Align Right"
                >
                  <Bars3BottomRightIcon className="w-4 h-4" />
                </button>
              </div>

              {/* Editor */}
              <EditorContent editor={editor} />
            </div>
          </div>

          {error && <div className="py-2 text-red-500 text-sm">{error}</div>}

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={uploading}
              className="rounded-full px-5 py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={uploading}
              className="rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-6 py-2 text-sm font-semibold text-white shadow-lg hover:scale-105 transition disabled:opacity-50"
            >
              {uploading ? "Uploading..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}