import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsSection from "./TestimonialsSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full flex justify-center bg-[#F5F4F7]">
      {/* 
        RESPONSIVE CONTAINER (MD and above):
        - Mobile (< 768px): Your existing mobile version
        - Tablet (768px - 1023px): 768px width
        - Desktop (1024px - 1439px): 1024px width
        - Large Desktop (1440px+): Fixed 1440px (Figma)
      */}
      <div className="
        relative
        w-[1440px]
        md:w-[768px]
        lg:w-[1024px]
        xl:w-[1440px]
      ">
        {/* ================= HEADER ================= */}
        <TestimonialsHeader />

        {/* ================= CONTENT ================= */}
        <section className="
          mt-[220px]
          md:mt-[150px]
          lg:mt-[180px]
          xl:mt-[220px]
          px-[80px]
          md:px-[30px]
          lg:px-[50px]
          xl:px-[80px]
        ">
          <TestimonialsSection />
        </section>
      </div>
    </main>
  );
}