import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TeamSection from "@/components/team-section"
import PreventionSection from "@/components/prevention-section"
import TestimonialsSection from "@/components/testimonials-section"
import BookingMapSection from "@/components/booking-map-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <PreventionSection />
        <TestimonialsSection />
        <BookingMapSection />
      </main>
      <Footer />
    </div>
  )
}
