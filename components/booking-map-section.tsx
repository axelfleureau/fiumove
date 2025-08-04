"use client"

import { Clock, Phone, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import FiumedicaMap from "@/components/fiumedica-map"

export default function BookingMapSection() {
  return (
    <section className="bg-blue-accent">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Booking Info */}
        <div className="p-8 lg:p-12 flex flex-col justify-center text-white min-h-[500px] lg:min-h-[600px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center lg:text-left">
            Prenota il tuo esame ecografico!
          </h2>

          <div className="space-y-8 mb-12">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium mb-1">lunedì al venerdì: 8:30–12:30, 14:00–19:30</p>
                <p className="text-white/80">Sabato: 7:30–13:00</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <p className="font-medium">+39 0434 457752</p>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <p className="font-medium">Piazza P. Bagellardo, 3, 33080 Fiume Veneto PN, Italia</p>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              className="w-full bg-primary text-white hover:bg-midnight-blue font-medium py-3 rounded-lg transition-colors duration-200"
              onClick={() =>
                window.open("https://www.medgestprenotazioni.it/10022020_mgp_fiumedica/reservation.php", "_blank")
              }
            >
              <Calendar className="w-4 h-4 mr-2" />
              Prenota ora
            </Button>
            <Button
              variant="outline"
              className="w-full border-white text-white hover:bg-white hover:text-blue-accent font-medium py-3 rounded-lg transition-colors duration-200 bg-transparent"
              onClick={() => window.open("tel:+390434457752", "_self")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Chiama ora
            </Button>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="relative min-h-[500px] lg:min-h-[600px]">
          <FiumedicaMap />
        </div>
      </div>
    </section>
  )
}
