"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const services = [
  {
    title: "ECOGRAFIA ADDOME COMPLETO",
    description:
      "Valutazione dei principali organi interni: Reni, fegato, pancreas, milza, vescica, cistifellea, vie biliari, stomaco, grossi vasi sanguigni, prostata, utero, ovaie",
  },
  {
    title: "ECOGRAFIA OSTEOARTICOLARE",
    description:
      "Valutazione approfondita di eventuali alterazioni che possono interessare i tessuti muscolari, tendini, legamenti e articolazioni (cartilagini, menischi, membrane sinoviali)",
  },
  {
    title: "ECOGRAFIA TIROIDEA",
    description: "Valutazione di forma, struttura e di eventuali alterazioni della ghiandola tiroidea",
  },
  {
    title: "ECOGRAFIA GINECOLOGICA ED OSTETRICA",
    description:
      "Consente di osservare in modo preciso lo stato di salute dell'apparato genitale femminile o di valutare il feto contenuto nell'utero materno",
  },
  {
    title: "ECOGRAFIA CARDIACA",
    description:
      "Consente di valutare l'anatomia del cuore, gli spessori delle sue pareti, la funzionalità sistolica, la morfologia e funzionalità delle valvole",
  },
  {
    title: "ECOGRAFIA TESTICOLARE",
    description:
      "Consente di valutare la struttura dei testicoli e rilevare eventuali anomalie o condizioni che richiedono un trattamento",
  },
  {
    title: "ECOCOLORDOPPLER T.S.A.",
    description: "Consente di valutare struttura e funzionalità di arterie e vasi sanguigni",
  },
]

export default function PreventionSection() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Prevenzione e Diagnosi</h2>
            <p className="text-paragraph leading-relaxed mb-8 text-lg">
              I servizi di Diagnostica Ecografica di FIUMEDICA adottano un approccio centrato sul paziente garantendo
              un'esperienza confortevole e funzionale alle specifiche esigenze. L'esperienza dei nostri Specialisti
              assieme alle tecnologie di ultima generazione adottate consentono di raggiungere risultati accurati e di
              massima precisione.
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors duration-200"
              >
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-primary text-sm uppercase tracking-wide">{service.title}</span>
                  {expandedItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </button>
                {expandedItems.includes(index) && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-paragraph">{service.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
