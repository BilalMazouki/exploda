"use client";
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Color from "@tiptap/extension-color";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import {
    Bars3BottomLeftIcon,
    Bars3Icon,
    Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import { TextStyle } from "@tiptap/extension-text-style";

interface RichTextEditorProps {
    content: string;
    onChange: (html: string) => void;
    placeholder?: string;
}

export default function RichTextEditor({
    content,
    onChange,
    placeholder = "Start writing...",
}: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Heading,
            TextStyle,
            Color,
            Underline,
            Subscript,
            Superscript,
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
        ],
        content: content,
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "prose prose-sm max-w-none p-4 focus:outline-none min-h-[300px] bg-white",
                placeholder: placeholder,
            },
        },
    });

    const handleHeadingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const level = parseInt(e.target.value);
        if (level === 0) {
            editor?.chain().focus().setParagraph().run();
        } else if (level === 1) {
            editor?.chain().focus().setHeading({ level: 1 }).run();
        } else if (level === 2) {
            editor?.chain().focus().setHeading({ level: 2 }).run();
        } else if (level === 3) {
            editor?.chain().focus().setHeading({ level: 3 }).run();
        }
    };

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            {/* Toolbar */}
            <div className="border-b border-gray-200 p-3 bg-gray-50 flex flex-wrap gap-2 items-center">
                {/* Text Color Picker */}
                <input
                    type="color"
                    title="Text Color"
                    className="w-8 h-8 p-0 border border-gray-300 rounded cursor-pointer mr-2"
                    onChange={e => editor?.chain().focus().setColor(e.target.value).run()}
                    value={editor?.getAttributes('textStyle').color || '#000000'}
                    style={{ verticalAlign: 'middle' }}
                />
                {/* Heading Dropdown */}
                <select
                    onChange={handleHeadingChange}
                    className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white hover:bg-gray-50 focus:ring-2 focus:ring-purple-400 cursor-pointer"
                    defaultValue="0"
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
                    onClick={(e) => {
                        e.preventDefault();
                        editor?.chain().focus().toggleBold().run();
                    }}
                    className={`px-3 py-1.5 rounded font-bold text-sm hover:bg-gray-200 transition ${editor?.isActive("bold") ? "bg-purple-100 text-purple-700" : ""
                        }`}
                    title="Bold"
                >
                    B
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        editor?.chain().focus().toggleItalic().run();
                    }}
                    className={`px-3 py-1.5 rounded italic text-sm hover:bg-gray-200 transition ${editor?.isActive("italic") ? "bg-purple-100 text-purple-700" : ""
                        }`}
                    title="Italic"
                >
                    I
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        editor?.chain().focus().toggleUnderline().run();
                    }}
                    className={`px-3 py-1.5 rounded underline text-sm hover:bg-gray-200 transition ${editor?.isActive("underline") ? "bg-purple-100 text-purple-700" : ""
                        }`}
                    title="Underline"
                >
                    U
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        editor?.chain().focus().toggleStrike().run();
                    }}
                    className={`px-3 py-1.5 rounded line-through text-sm hover:bg-gray-200 transition ${editor?.isActive("strike") ? "bg-purple-100 text-purple-700" : ""
                        }`}
                    title="Strikethrough"
                >
                    S
                </button>

                <div className="w-px h-6 bg-gray-300" />

                {/* Subscript / Superscript */}
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        editor?.chain().focus().toggleSubscript().run();
                    }}
                    className={`px-3 py-1.5 rounded text-sm font-semibold hover:bg-gray-200 transition ${editor?.isActive("subscript") ? "bg-purple-100 text-purple-700" : ""
                        }`}
                    title="Subscript"
                >
                    x₂
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        editor?.chain().focus().toggleSuperscript().run();
                    }}
                    className={`px-3 py-1.5 rounded text-sm font-semibold hover:bg-gray-200 transition ${editor?.isActive("superscript") ? "bg-purple-100 text-purple-700" : ""
                        }`}
                    title="Superscript"
                >
                    x²
                </button>

                <div className="w-px h-6 bg-gray-300" />

                {/* Lists */}
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        editor?.chain().focus().toggleBulletList().run();
                    }}
                    className={`px-3 py-1.5 rounded text-sm hover:bg-gray-200 transition ${editor?.isActive("bulletList") ? "bg-purple-100 text-purple-700" : ""
                        }`}
                    title="Bullet List"
                >
                    • List
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        editor?.chain().focus().toggleOrderedList().run();
                    }}
                    className={`px-3 py-1.5 rounded text-sm hover:bg-gray-200 transition ${editor?.isActive("orderedList") ? "bg-purple-100 text-purple-700" : ""
                        }`}
                    title="Numbered List"
                >
                    1. List
                </button>

                <div className="w-px h-6 bg-gray-300" />

                {/* Alignment */}
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        editor?.chain().focus().setTextAlign("left").run();
                    }}
                    className={`p-2 rounded hover:bg-gray-200 transition ${editor?.isActive({ textAlign: "left" }) ? "bg-purple-100 text-purple-700" : ""
                        }`}
                    title="Align Left"
                >
                    <Bars3BottomLeftIcon className="w-4 h-4" />
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        editor?.chain().focus().setTextAlign("center").run();
                    }}
                    className={`p-2 rounded hover:bg-gray-200 transition ${editor?.isActive({ textAlign: "center" }) ? "bg-purple-100 text-purple-700" : ""
                        }`}
                    title="Align Center"
                >
                    <Bars3Icon className="w-4 h-4" />
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        editor?.chain().focus().setTextAlign("right").run();
                    }}
                    className={`p-2 rounded hover:bg-gray-200 transition ${editor?.isActive({ textAlign: "right" }) ? "bg-purple-100 text-purple-700" : ""
                        }`}
                    title="Align Right"
                >
                    <Bars3BottomRightIcon className="w-4 h-4" />
                </button>
            </div>

            {/* Editor */}
            <EditorContent editor={editor} />
        </div>
    );
}