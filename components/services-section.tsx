"use client"

import { Activity, Bone, Heart, Shield, User, TestTube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const services = [
  {
    icon: Activity,
    title: "Addome",
    description: "Ecografia addominale completa",
  },
  {
    icon: Bone,
    title: "Muscoli e Articolazioni",
    description: "Ecografia osteoarticolare e muscolo-tendinea",
  },
  {
    icon: User,
    title: "Mammella",
    description: "Ecografia mammaria specialistica",
  },
  {
    icon: Shield,
    title: "Tiroide",
    description: "Ecografia tiroidea diagnostica",
  },
  {
    icon: Heart,
    title: "Cuore",
    description: "Ecografia cardiaca e cardiologica",
  },
  {
    icon: TestTube,
    title: "Testicoli",
    description: "Ecografia testicolare specialistica",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white-2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">I nostri servizi di Diagnostica Ecografica</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-paragraph leading-relaxed max-w-4xl mx-auto text-lg">
            In FIUMEDICA è possibile effettuare tutte le tipologie di esami ecografici: lo Specialista avrà a
            disposizione un quadro completo del paziente e potrà fornire le migliori indicazioni per una corretta
            attività di prevenzione o per la risoluzione della sintomatologia e del disturbo. Eseguiamo ecografie
            addominali, osteoarticolari, muscolo-tendinee, mammarie, ostetriche, ginecologiche, tiroidee, renali,
            vescicali, testicolari, cardiologiche, vascolari con ecocolordoppler utilizzando tecnologie all'avanguardia
            per garantire risultati accurati e affidabili
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
              <p className="text-paragraph leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-primary text-white hover:bg-midnight-blue font-medium px-8 py-3 rounded-lg transition-colors duration-200"
            onClick={() => window.open("tel:+390434457752", "_self")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Chiama ora
          </Button>
        </div>
      </div>
    </section>
  )
}
