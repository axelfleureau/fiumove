"use client"

import { useState, useEffect } from "react"
import { Clock, Mail, FileText, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const scheduleData = [
  { day: "Lunedì", hours: "08:30 – 13:00 / 14:00 – 19:30" },
  { day: "Martedì", hours: "07:30 – 13:00 / 14:00 – 19:30" },
  { day: "Mercoledì", hours: "08:30 – 13:00 / 14:00 – 19:30" },
  { day: "Giovedì", hours: "07:30 – 13:00 / 14:00 – 19:30" },
  { day: "Venerdì", hours: "08:30 – 13:00 / 14:00 – 19:30" },
  { day: "Sabato", hours: "07:30 – 13:00" },
  { day: "Domenica", hours: "CHIUSO" },
]

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const footerElement = document.getElementById("footer")
    if (footerElement) {
      observer.observe(footerElement)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer id="footer" className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#7dd3fc] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4f6fa8] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Schedule Section */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7dd3fc] to-[#4f6fa8] rounded-full flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Orari di Apertura</h2>
            </div>

            <div className="space-y-4">
              {scheduleData.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:translate-x-2 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="font-semibold text-white">{item.day}</span>
                  <span className={`text-right ${item.hours === "CHIUSO" ? "text-red-400" : "text-gray-300"}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center mb-8">
              {/* Logo Section */}
              <div className="w-20 h-20 bg-white rounded-lg p-3 mr-4 shadow-lg">
                <img src="/images/fiumedica-logo.png" alt="FIUMEDICA Logo" className="w-full h-full object-contain" />
              </div>
              {/* End of Logo Section */}
            </div>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Inizia il tuo percorso verso la salute con FIUMEDICA oggi.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#7dd3fc] to-[#4f6fa8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Direttore Sanitario:</p>
                  <p className="text-white font-semibold">Dott. Roberto Vergari Borzetti</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#7dd3fc] to-[#4f6fa8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Autorizzazione:</p>
                  <p className="text-white font-semibold text-sm leading-relaxed">
                    Aut. Sanitaria N.24710/P del 22/03/2017 e successive integrazioni
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#7dd3fc] to-[#4f6fa8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">PEC:</p>
                  <p className="text-white font-semibold">fiumedicasasrl@pec.it</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                className="bg-gradient-to-r from-[#4f6fa8] to-[#7dd3fc] text-white hover:from-[#3d5a8c] hover:to-[#5bc5f2] font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => window.open("/modulistica", "_blank")}
              >
                <FileText className="w-4 h-4 mr-2" />
                Modulistica
              </Button>
            </div>

            {/* New Button for Appointment Booking */}
            <div className="mt-8">
              <Button
                className="bg-primary text-white hover:bg-midnight-blue font-medium px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
                onClick={() =>
                  window.open("https://www.medgestprenotazioni.it/10022020_mgp_fiumedica/reservation.php", "_blank")
                }
              >
                <Calendar className="w-5 h-5 mr-3" />
                Prenota la tua visita
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            FIUMEDICA Srl è titolare di Autorizzazione Sanitaria N.31939/P del 26/04/2023. Il Direttore Sanitario è il
            Dott. Roberto Vergari Borzetti
          </p>
        </div>
      </div>
    </footer>
  )
}
