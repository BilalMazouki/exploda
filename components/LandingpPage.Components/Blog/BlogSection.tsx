// app/(sections)/blog/page.tsx
// OR use this JSX inside app/page.tsx

import BlogSlider from "./BlogSlider";
import BlogHeader from "./BlogHeader";

export default function BlogPageSection() {
  /**
   * 👉 REAL BACK-END DATA (PAGE LEVEL)
   *
   * In production, this page can:
   * - Fetch blog data here (Server Component)
   * - Pass data down to BlogHeader / BlogSlider
   * - Use ISR / caching
   *
   * Example later:
   * const blogs = await fetch("https://api.site.com/blogs", { cache: "force-cache" }).then(res => res.json())
   */

  return (
    <section
      className="
        w-[1440px]
        h-[884px]
        bg-[#F5F4F7]
        mx-auto
        flex
        flex-col
        justify-start
      "
    >
      {/* ================= BLOG HEADER ================= */}
      {/* 👉 Usually static or CMS-managed content */}
      <div className="pt-[96px]">
        <BlogHeader />
      </div>

      {/* ================= BLOG SLIDER ================= */}
      {/* 👉 Dynamic data-driven slider */}
      <div className="mt-[64px]">
        <BlogSlider />
      </div>
    </section>
  );
}
