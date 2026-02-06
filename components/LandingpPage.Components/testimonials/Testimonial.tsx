import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsSection from "./TestimonialsCarousel.tsx";

export default function HomePage() {
  /**
   * 👉 REAL DATA STRATEGY (IMPORTANT)
   *
   * In production, this page should:
   * - Fetch data here (Server Component)
   * - OR receive data from a CMS
   * - OR call an internal API
   *
   * Example (later):
   * const data = await fetch("https://api.yoursite.com/testimonials").then(res => res.json())
   */

  return (
    <main className="relative min-h-screen ">
      {/* ================= HEADER ================= */}
      {/* Static section header – usually content-managed */}
      <TestimonialsHeader />

      {/* ================= CONTENT ================= */}
      {/* Testimonials cards – dynamic data injected here */}
      <section className="mt-[220px] ">
        <TestimonialsSection />
      </section>
    </main>
  );
}
