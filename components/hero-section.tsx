"use client"

import Image from "next/image"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="pt-20 min-h-screen bg-gradient-to-br from-blue-accent to-primary relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-40 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 h-full">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col justify-center items-center text-center py-12 min-h-screen">
          {/* Logo */}
          <div className="bg-white rounded-lg p-4 mb-8 shadow-lg">
            <Image
              src="/images/fiumedica-logo.png"
              alt="FIUMEDICA Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Title */}
          <h1 className="text-white text-3xl font-bold mb-4 leading-tight">Diagnostica Ecografica</h1>

          {/* Subtitle */}
          <p className="text-white/90 mb-8 text-lg leading-relaxed px-4">
            Tecnologie avanzate e Specialisti di livello per la tua prevenzione
          </p>

          {/* Hero Image */}
          <div className="mb-8 animate-float">
            <Image
              src="/images/hero-ultrasound.png"
              alt="Dottoressa che esegue ecografia"
              width={400}
              height={300}
              className="rounded-lg shadow-2xl"
            />
          </div>

          {/* CTA Button */}
          <Button
            className="bg-primary text-white hover:bg-midnight-blue font-medium px-8 py-4 rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() =>
              window.open("https://www.medgestprenotazioni.it/10022020_mgp_fiumedica/reservation.php", "_blank")
            }
          >
            <Calendar className="w-5 h-5 mr-3" />
            Prenota la tua ecografia
          </Button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center min-h-screen">
          {/* Left Side - Content */}
          <div className="w-1/2 pr-12">
            {/* Logo */}
            <div className="bg-white rounded-lg p-4 mb-8 inline-block shadow-lg">
              <Image
                src="/images/fiumedica-logo.png"
                alt="FIUMEDICA Logo"
                width={250}
                height={80}
                className="h-16 w-auto"
              />
            </div>

            <h1 className="text-white text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Diagnostica
              <br />
              Ecografica
            </h1>

            <p className="text-white/90 mb-10 text-xl leading-relaxed max-w-lg">
              Tecnologie avanzate e Specialisti di livello per la tua prevenzione
            </p>

            <Button
              className="bg-primary text-white hover:bg-midnight-blue font-medium px-10 py-4 rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() =>
                window.open("https://www.medgestprenotazioni.it/10022020_mgp_fiumedica/reservation.php", "_blank")
              }
            >
              <Calendar className="w-5 h-5 mr-3" />
              Prenota la tua ecografia
            </Button>
          </div>

          {/* Right Side - Image */}
          <div className="w-1/2 flex justify-center">
            <div className="animate-float">
              <Image
                src="/images/hero-ultrasound.png"
                alt="Dottoressa che esegue ecografia"
                width={600}
                height={450}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
