"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { mockDesigns } from "@/components/mockDesigns";

export default function DesignDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const design = mockDesigns.find((d) => d.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Use images array from mockDesigns, fallback to imageUrl if images doesn't exist
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
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-fuchsia-50">
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
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-600">
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

            {/* Dots Indicator */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition ${idx === currentImageIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                      }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Description Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="inline-block w-1 h-8 bg-gradient-to-b from-purple-500 to-fuchsia-500 rounded-full"></span>
            About This Design
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {design.description}
          </p>

          {/* Additional Info (optional) */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-1">
                Category
              </p>
              <p className="text-gray-800 font-medium">Web Design</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 rounded-xl">
              <p className="text-xs font-semibold text-fuchsia-600 uppercase tracking-wide mb-1">
                Date
              </p>
              <p className="text-gray-800 font-medium">Jan 2026</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl">
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">
                Tools
              </p>
              <p className="text-gray-800 font-medium">Figma, Tailwind</p>
            </div>
          </div>
        </div>

        {/* Call to Action (optional) */}
        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-8 py-3 rounded-full border-2 border-purple-500 text-purple-600 font-semibold hover:bg-purple-50 transition">
            <a href="/designs" >
              View More Designs
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}