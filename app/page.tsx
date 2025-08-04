import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TeamSection from "@/components/team-section"
import ApproachSection from "@/components/approach-section"
import TestimonialsSection from "@/components/testimonials-section"
import BookingSection from "@/components/booking-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <ApproachSection />
        <TestimonialsSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  )
}
