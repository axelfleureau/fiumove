"use client"

import { useState, useEffect } from "react"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        isScrolled ? "bg-[#7dd3fc] shadow-lg" : "bg-[#7dd3fc]"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-end">
          <Button
            className="bg-white text-[#4f6fa8] hover:bg-gray-50 font-medium px-6 py-2 rounded-lg transition-colors duration-200"
            onClick={() => window.open("tel:+390434457752", "_self")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Chiama ora
          </Button>
        </div>
      </div>
    </header>
  )
}
