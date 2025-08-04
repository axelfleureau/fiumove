"use client"

import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-accent shadow-lg" : "bg-blue-accent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/fiumedica-logo.png"
              alt="FIUMEDICA Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <Button
            className="bg-primary text-white hover:bg-midnight-blue font-medium px-6 py-2 rounded-lg transition-colors duration-200"
            onClick={() =>
              window.open("https://www.medgestprenotazioni.it/10022020_mgp_fiumedica/reservation.php", "_blank")
            }
          >
            <Calendar className="w-4 h-4 mr-2" />
            Prenota la tua visita
          </Button>
        </div>
      </div>
    </header>
  )
}
