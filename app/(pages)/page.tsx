import BlogSection from "@/components/LandingpPage.Components/Blog/BlogSection";
import ContactUsHero from "@/components/LandingpPage.Components/contactusSections/contactUs";
import CountriesSection from "@/components/LandingpPage.Components/COUNTRY/CountriesSection";
import Footer from "@/components/LandingpPage.Components/footer/Footer";
import Hero from "@/components/LandingpPage.Components/heroSection/Hero";
import OURMission from "@/components/LandingpPage.Components/OurMissionSection/OURMission";
import PortfolioSection from "@/components/LandingpPage.Components/portfolio/PortfolioSection";
import ProcessSection from "@/components/LandingpPage.Components/process/ProcessSection";
import ServicesSection from "@/components/LandingpPage.Components/ServicesSection/ServicesSection";
import TeamSection from "@/components/LandingpPage.Components/Team/TeamSection";
import Testimonial from "@/components/LandingpPage.Components/testimonials/Testimonial";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-[#F5F4F7]">
      <section className="w-full">
        <Hero />
      </section>

      <section className="w-full">
        <ServicesSection />
      </section>

      <section className="w-full">
        <PortfolioSection />
      </section>

      <section className="w-full">
        <ProcessSection />
      </section>

      <section className="w-full">
        <TeamSection />
      </section>

      <section className="w-full">
        <OURMission />
      </section>

      <section className="w-full">
        <Testimonial />
      </section>

      <section className="w-full">
        <BlogSection />
      </section>

      <section className="w-full">
        <CountriesSection />
      </section>

      <section className="w-full">
        <ContactUsHero />
      </section>

      <Footer />
    </main>
  );
}
