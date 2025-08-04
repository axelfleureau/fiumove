"use client"

import Image from "next/image"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="pt-20 min-h-screen flex items-center">
      <div className="w-full">
        {/* Mobile Layout - Exact Screenshot Match */}
        <div className="md:hidden">
          <div className="bg-gradient-to-r from-[#4f6fa8] to-[#7dd3fc] min-h-screen flex flex-col justify-center px-6 py-12 text-center relative">
            {/* Logo at top */}
            <div className="bg-white rounded-lg p-6 mb-12 inline-block mx-auto">
              <Image src="/images/fiumove-logo.png" alt="FIUMOVE Logo" width={200} height={80} className="mx-auto" />
            </div>

            {/* Main title */}
            <h1 className="text-white text-2xl font-bold mb-12 leading-tight px-4">FISIOTERAPIA E RIABILITAZIONE</h1>

            {/* Professional image - large and centered */}
            <div className="flex-1 flex items-center justify-center mb-12">
              <div className="relative">
                <Image
                  src="/images/hero-man.png"
                  alt="Professional physiotherapist"
                  width={300}
                  height={450}
                  className="mx-auto rounded-lg"
                />
              </div>
            </div>

            {/* Bottom button */}
            <div className="mt-auto">
              <Button
                className="w-full bg-[#7dd3fc] text-white hover:bg-[#5bc5f2] font-medium px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
                onClick={() =>
                  window.open("https://www.medgestprenotazioni.it/10022020_mgp_fiumedica/reservation.php", "_blank")
                }
              >
                <Calendar className="w-5 h-5 mr-3" />
                Prenota il tuo trattamento
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex min-h-screen">
          {/* Left Side - Navy Blue */}
          <div className="w-1/2 bg-[#4f6fa8] flex flex-col justify-center px-12 lg:px-16">
            <div className="bg-white rounded-lg p-6 mb-8 inline-block max-w-xs">
              <Image
                src="/images/fiumove-logo.png"
                alt="FIUMOVE Logo"
                width={250}
                height={100}
                className="w-full h-auto"
              />
            </div>

            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              FISIOTERAPIA E<br />
              RIABILITAZIONE
            </h1>

            <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-md">
              FIUMOVE è la divisione specialistica di FIUMEDICA dedicata ai servizi di riabilitazione, fisioterapia,
              osteopatia e terapia fisica.
            </p>

            <Button
              className="bg-[#7dd3fc] text-white hover:bg-[#5bc5f2] font-medium px-10 py-4 rounded-lg transition-colors duration-200 self-start text-lg"
              onClick={() =>
                window.open("https://www.medgestprenotazioni.it/10022020_mgp_fiumedica/reservation.php", "_blank")
              }
            >
              <Calendar className="w-5 h-5 mr-3" />
              Prenota il tuo trattamento
            </Button>
          </div>

          {/* Right Side - Turquoise Gradient */}
          <div className="w-1/2 bg-gradient-to-br from-[#7dd3fc] to-[#5bc5f2] flex items-center justify-center p-12">
            <div className="relative">
              <Image
                src="/images/hero-man.png"
                alt="Professional physiotherapist"
                width={400}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
