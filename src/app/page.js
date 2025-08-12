import { HeroSection } from "@/components/hero-section"
import { GiftSections } from "@/components/gift-sections"
import { BestsellersSection } from "@/components/bestsellers-section"
import { ServicesSection } from "@/components/services-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ServiceFeatures } from "@/components/service-features"
import { DesignYourRing } from "@/components/design-your-ring"
import DiamondCarousel from "@/components/diamond-carousel"

export default function HomePage() {
  return (
    <>
      <HeroSection />
     <DesignYourRing/>
     <DiamondCarousel/>
      <GiftSections />
      <BestsellersSection />
      <ServicesSection />
      <ServiceFeatures />
      <NewsletterSection />
    </>
  )
}
