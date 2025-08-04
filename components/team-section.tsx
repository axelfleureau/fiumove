"use client"

import Image from "next/image"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Alessandro Marzotto",
    role: "Massoterapista, esperto nella prevenzione e trattamento degli infortuni e delle patologie sportive, nella riattivazione osteo-articolare e muscolare.",
    image: "/images/doctor-1.png",
  },
  {
    name: "Stefano Tonin",
    role: "Fisioterapista laureato in Scienze Motorie esperto nella riabilitazione e trattamento degli infortuni, nella rieducazione funzionale e nel miglioramento delle performance sportive.",
    image: "/images/doctor-2.png",
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">Il nostro team di specialisti</h2>
          <div className="w-24 h-1 bg-[#7dd3fc] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#f8fafc] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-64 h-80 md:w-48 md:h-64 mx-auto mb-6 rounded-xl overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-4">{member.name}</h3>
              <p className="text-[#64748b] leading-relaxed text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-[#4f6fa8] text-white hover:bg-[#3d5a8c] font-medium px-8 py-3 rounded-lg transition-colors duration-200"
            onClick={() =>
              window.open("https://www.medgestprenotazioni.it/10022020_mgp_fiumedica/reservation.php", "_blank")
            }
          >
            <Calendar className="w-4 h-4 mr-2" />
            prenota il tuo trattamento
          </Button>
        </div>
      </div>
    </section>
  )
}
