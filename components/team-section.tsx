"use client"

import Image from "next/image"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Dott. Sergio Battaglia",
    specialty: "Specialista in Radiologia",
    description:
      "Esperto in diagnostica per immagini e radiologia interventistica, specializzato in ecografia diagnostica avanzata per una valutazione accurata e tempestiva.",
    image: "/images/doctor-battaglia.png",
  },
  {
    name: "Dott.ssa Cristina Millevoi",
    specialty: "Specialista in Medicina Interna",
    description:
      "Specialista in medicina interna con esperienza nella diagnostica ecografica, focalizzata sulla prevenzione e diagnosi precoce delle patologie internistiche.",
    image: "/images/doctor-millevoi.png",
  },
  {
    name: "Dott.ssa Chiara Lestuzzi",
    specialty: "Specialista in Cardiologia",
    description:
      "Cardiologa esperta in ecocardiografia e diagnostica cardiovascolare, specializzata nella valutazione non invasiva delle patologie cardiache.",
    image: "/images/doctor-lestuzzi.png",
  },
  {
    name: "Dott. Giuseppe Stimoli",
    specialty: "Specialista in Ginecologia e Ostetricia",
    description:
      "Ginecologo ostetrico con esperienza in ecografia ginecologica e ostetrica, specializzato nel monitoraggio della gravidanza e della salute femminile.",
    image: "/images/doctor-stimoli.png",
  },
  {
    name: "Dott.ssa Moira Martinelli",
    specialty: "Specialista in Ginecologia e Ostetricia",
    description:
      "Specialista in ginecologia e ostetricia con focus sulla diagnostica ecografica dell'apparato genitale femminile e controlli prenatali.",
    image: "/images/doctor-martinelli.png",
  },
  {
    name: "Dott. Giuseppe Catalano",
    specialty: "Specialista in Urologia",
    description:
      "Urologo esperto in diagnostica ecografica dell'apparato genitourinario maschile, specializzato nella prevenzione e cura delle patologie urologiche.",
    image: "/images/doctor-catalano.png",
  },
  {
    name: "Dott. Adolfo Sangiorgio",
    specialty: "Specialista in Urologia",
    description:
      "Specialista in urologia con competenze avanzate in ecografia testicolare e prostatica, focalizzato sulla diagnosi precoce delle patologie urologiche.",
    image: "/images/doctor-sangiorgio.png",
  },
  {
    name: "Dott. Giacomo Sabbioni",
    specialty: "Specialista in Ortopedia e Traumatologia",
    description:
      "Ortopedico traumatologo esperto in ecografia muscolo-scheletrica, specializzato nella diagnosi delle patologie osteoarticolari e dei tessuti molli.",
    image: "/images/doctor-sabbioni.png",
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Il nostro team di specialisti</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-64 h-80 mx-auto mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-4">{member.specialty}</p>
              <p className="text-paragraph text-sm leading-relaxed px-4">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-primary text-white hover:bg-midnight-blue font-medium px-8 py-3 rounded-lg transition-colors duration-200"
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
