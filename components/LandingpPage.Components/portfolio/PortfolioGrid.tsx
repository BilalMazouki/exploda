import PortfolioCard from "./PortfolioCard";
import PortfolioCTA from "./PortfolioCTA";

export default function PortfolioGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3

        gap-6
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
