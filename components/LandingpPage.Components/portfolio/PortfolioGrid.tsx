import PortfolioCard from "./PortfolioCard";
import PortfolioCTA from "./PortfolioCTA";

export default function PortfolioGrid() {
  return (
    <div
      className="
        grid
        grid-cols-3
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-3
        gap-[32px]
        md:gap-[20px]
        lg:gap-[24px]
        xl:gap-[32px]
      "
    >
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />

      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />

      <PortfolioCard />
      <PortfolioCTA />
    </div>
  );
}