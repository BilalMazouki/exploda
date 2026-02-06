import TestimonialsCarousel from "./TestimonialsCarousel.tsx";
import TestimonialsHeader from "./TestimonialsHeader";
export default function HomePage() {
  return (
    <main className="relative flex flex-col bg-[#F5F4F7]">
      {/* ================= HEADER ================= */}
      <section
        className="
          pt-[120px]
          md:pt-[80px]
          lg:pt-[100px]
          xl:pt-[120px]
        "
      >
        <TestimonialsHeader />
      </section>

      {/* ================= CONTENT ================= */}
      <section
        className="
          mt-[80px]
          md:mt-[48px]
          lg:mt-[64px]
          xl:mt-[80px]
        "
      >
        <TestimonialsCarousel />
      </section>
    </main>
  );
}
