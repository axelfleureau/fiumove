"use client"

import { Clock, Phone, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import FiumoveMap from "@/components/fiumove-map"

export default function BookingSection() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Navy Blue */}
        <div className="bg-[#4f6fa8] p-8 lg:p-12 flex flex-col justify-center text-white min-h-[400px] lg:min-h-[600px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center lg:text-left">prenota ora</h2>

          <div className="space-y-8 mb-12">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#7dd3fc] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium mb-1">Lunedì al venerdì: 8:30–12:30, 14:00–19:30</p>
                <p className="text-white/80">Sabato: 7:30–13:00</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#7dd3fc] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <p className="font-medium">+39 0434 457752</p>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#7dd3fc] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <p className="font-medium">Fiume Veneto (PN), Viale Trento n.25 (2a sede di Fiumedica)</p>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              className="w-full bg-[#7dd3fc] text-white hover:bg-[#5bc5f2] font-medium py-3 rounded-lg transition-colors duration-200"
              onClick={() =>
                window.open("https://www.medgestprenotazioni.it/10022020_mgp_fiumedica/reservation.php", "_blank")
              }
            >
              <Calendar className="w-4 h-4 mr-2" />
              Prenota ora
            </Button>
            <Button
              variant="outline"
              className="w-full border-white text-white hover:bg-white hover:text-[#4f6fa8] font-medium py-3 rounded-lg transition-colors duration-200 bg-transparent"
              onClick={() => window.open("tel:+390434457752", "_self")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Chiama ora
            </Button>
          </div>
        </div>

        {/* Right Side - Turquoise with Map */}
        <div className="bg-[#7dd3fc] relative min-h-[500px] lg:min-h-[600px]">
          <FiumoveMap />
        </div>
      </div>
    </section>
  )
}
