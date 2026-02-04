import PortfolioGrid from "./PortfolioGrid";
import PortfolioHeader from "./PortfolioHeader";

export default function PortfolioSection() {
  return (
    <section
      className="
        w-[1440px]
        mx-auto
        px-[60px]
        py-[120px]
      "
    >
      <PortfolioHeader />
      <PortfolioGrid />
    </section>
  );
}
