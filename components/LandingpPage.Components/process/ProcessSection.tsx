import ProcessHeader from "./ProcessHeader";
import ProcessImages from "./ProcessImages";
import Steps from "./steps";

export default function ProcessSection() {
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
          relative
          w-[1440px]
          md:w-[768px]
          lg:w-[1024px]
        xl:w-full
          h-[1934px]
          md:h-[1400px]
          lg:h-[1650px]
          xl:h-[1934px]
          mx-auto
          bg-[#F5F4F7]
          overflow-hidden
        "
      >
        {/* Background images - hide decorative elements on md/lg */}
        <div className="absolute inset-0 z-0 hidden xl:block">
          <ProcessImages />
        </div>

        {/* Show main process image on md/lg */}
        <div className="absolute inset-0 z-0 xl:hidden">
          <ProcessImages showMainOnly />
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          <ProcessHeader />
          <Steps />
        </div>
      </div>
    </section>
  );
}