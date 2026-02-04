import ProcessHeader from "./ProcessHeader";
import ProcessImages from "./ProcessImages";
import Steps from "./steps";

export default function ProcessSection() {
  return (
    <section
      className="
        relative
        w-[1440px]
        h-[1934px]
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
    </section>
  );
}
