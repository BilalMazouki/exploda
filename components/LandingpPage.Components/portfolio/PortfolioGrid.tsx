import PortfolioCard from "./PortfolioCard";
import PortfolioCTA from "./PortfolioCTA";

export default function PortfolioGrid() {
  return (
    <div
      className="
        grid
        grid-cols-3
        gap-[32px]
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
