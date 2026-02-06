import PortfolioGrid from "./PortfolioGrid";
import PortfolioHeader from "./PortfolioHeader";

export default function PortfolioSection() {
  return (
    <section className="w-full flex justify-center bg-[#F5F4F7]">
      {/*
        RESPONSIVE STRATEGY
        - Mobile: fluid width
        - Tablet: max 768px
        - Desktop: max 1024px
        - XL: max 1440px (Figma)
      */}
      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto

          px-4
          md:px-[30px]
          lg:px-[45px]
          xl:px-[60px]

          py-[60px]
          lg:py-[90px]
          xl:py-[120px]
        "
      >
        <PortfolioHeader />
        <PortfolioGrid />
      </div>
    </section>
  );
}
