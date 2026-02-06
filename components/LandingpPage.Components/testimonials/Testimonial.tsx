import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsSection from "./TestimonialsSection";

export default function HomePage() {
  return (
    <main className="relative flex justify-center bg-[#F5F4F7]">
      {/* Responsive Figma Container */}
      <div
        className="
          relative
          w-full
          max-w-[1440px]
          md:max-w-[768px]
          lg:max-w-[1024px]
          xl:max-w-[1440px]
        "
      >
        {/* ================= HEADER ================= */}
        <TestimonialsHeader />

        {/* ================= CONTENT ================= */}
        <section
          className="
            mt-[220px]
            md:mt-[150px]
            lg:mt-[180px]
            xl:mt-[220px]
            px-4
            md:px-[30px]
            lg:px-[50px]
            xl:px-[80px]
          "
        >
          <TestimonialsSection />
        </section>
      </div>
    </main>
  );
}
