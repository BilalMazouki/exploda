import BlogSlider from "./BlogSlider";
import BlogHeader from "./BlogHeader";

export default function BlogPageSection() {
  return (
    <section className="w-full flex justify-center bg-[#F5F4F7]">
      {/* 
        RESPONSIVE CONTAINER (MD and above):
        - Mobile (< 768px): Your existing mobile version
        - Tablet (768px - 1023px): 768px width
        - Desktop (1024px - 1439px): 1024px width
        - Large Desktop (1440px+): Fixed 1440px (Figma)
      */}
      <div
        className="
          w-[1440px]
          md:w-[768px]
          lg:w-[1024px]
          xl:w-full
          h-auto
          bg-[#F5F4F7]
          mx-auto
          flex
          flex-col
          justify-start
        "
      >
        {/* ================= BLOG HEADER ================= */}
        <div className="
          pt-[96px]
          md:pt-[60px]
          lg:pt-[75px]
          xl:pt-[96px]
        ">
          <BlogHeader />
        </div>

        {/* ================= BLOG SLIDER ================= */}
        <div className="
          mt-[64px]
          md:mt-[40px]
          lg:mt-[50px]
          xl:mt-[64px]
        ">
          <BlogSlider />
        </div>
      </div>
    </section>
  );
}