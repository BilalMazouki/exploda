import BlogSection from "@/components/LandingpPage.Components/Blog/BlogSection";
import ContactUsHero from "@/components/LandingpPage.Components/contactusSections/contactUs";
import Hero from "@/components/LandingpPage.Components/heroSection/Hero";
import OURMission from "@/components/LandingpPage.Components/OurMissionSection/OURMission";
import PortfolioSection from "@/components/LandingpPage.Components/portfolio/PortfolioSection";
import ProcessSection from "@/components/LandingpPage.Components/process/ProcessSection";
import ServicesSection from "@/components/LandingpPage.Components/ServicesSection/ServicesSection";
import TeamSection from "@/components/LandingpPage.Components/Team/TeamSection";
import Testimonial from "@/components/LandingpPage.Components/testimonials/Testimonial";

export default function home() {
  return (
    <main className=" bg-[#F5F4F7]">
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TeamSection />
      <Testimonial />
      <BlogSection />
      <OURMission />
      <ContactUsHero />
    </main>
  )
}
