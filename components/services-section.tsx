"use client"

import { Activity, Heart, Zap, Shield } from "lucide-react"

const services = [
  {
    icon: Activity,
    title: "Fisioterapia",
    description: "Trattamenti personalizzati per il recupero funzionale",
  },
  {
    icon: Heart,
    title: "Riabilitazione",
    description: "Programmi di riabilitazione post-traumatica",
  },
  {
    icon: Zap,
    title: "Terapie Fisiche",
    description: "Tecnologie avanzate per il trattamento del dolore",
  },
  {
    icon: Shield,
    title: "Traumatologia",
    description: "Specialisti nel trattamento dei traumi sportivi",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">I nostri servizi</h2>
          <div className="w-24 h-1 bg-[#7dd3fc] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-[#4f6fa8] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-4">{service.title}</h3>
              <p className="text-[#64748b] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
