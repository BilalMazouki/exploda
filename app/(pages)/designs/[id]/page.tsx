"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { getDesignById, Design } from "@/lib/designsStore";

export default function DesignDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
  const [design, setDesign] = useState<Design | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 🔴 Fetch design by ID from API
  useEffect(() => {
    async function fetchDesign() {
      setLoading(true);
      const fetchedDesign = await getDesignById(id);
      console.log("Fetched design:", fetchedDesign); // Debug log
      console.log("Blog content:", fetchedDesign?.blog); // Debug log
      setDesign(fetchedDesign);
      setLoading(false);
    }
    fetchDesign();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-fuchsia-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading design...</p>
        </div>
      </main>
    );
  }

  if (!design) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-fuchsia-50">
        <div className="text-center">
          <p className="text-2xl text-gray-600 mb-4">Design not found</p>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold hover:scale-105 transition"
          >
            Go Back
          </button>
        </div>
      </main>
    );
  }

  const images = design.images && design.images.length > 0
    ? design.images
    : design.imageUrl
      ? [design.imageUrl]
      : [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-purple-50 via-white to-fuchsia-50">
      {/* Header / Back Button */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition font-medium"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Designs
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-fuchsia-600">
          {design.title}
        </h1>

        {/* Image Slider */}
        {images.length > 0 && (
          <div className="relative w-full h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 group">
            <img
              src={images[currentImageIndex]}
              alt={`${design.title} - image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="w-6 h-6 text-gray-800" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        )}

        {/* Blog Content with TipTap styling */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog</h2>
          {design.blog ? (
            <div 
              className="tiptap-editor"
              dangerouslySetInnerHTML={{ __html: design.blog }}
            />
          ) : (
            <div className="space-y-4">
              <p className="text-red-600 font-semibold">⚠️ No blog content available</p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Debug Info:</strong>
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Blog field is: {design.blog === undefined ? 'undefined' : design.blog === null ? 'null' : 'empty string'}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  This post was likely created before the blog field was added.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Metadata */}
        {design.createdAt && (
          <div className="text-center text-gray-500 text-sm">
            Created on {new Date(design.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        )}
      </div>
    </main>
  );
}