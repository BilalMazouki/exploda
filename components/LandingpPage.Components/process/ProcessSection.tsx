import ProcessHeader from "./ProcessHeader";
import ProcessImages from "./ProcessImages";
import Steps from "./steps";

export default function ProcessSection() {
  return (
    <section className="w-full flex justify-center bg-[#F5F4F7]">
      <div
        className="
          relative
          w-[1440px]
          md:w-[768px]
          lg:w-[1024px]
          xl:w-[1440px]
          h-[1934px]
          md:h-[1400px]
          lg:h-[1650px]
          xl:h-[1934px]
          mx-auto
          bg-[#F5F4F7]
          overflow-hidden
        "
      >
        {/* Background images */}
        <div className="absolute inset-0 z-0">
          <ProcessImages />
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