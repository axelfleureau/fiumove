"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Twitter } from "lucide-react"

const testimonials = [
  {
    name: "Gabriel Focosi",
    role: "Pivot",
    content:
      "Sono un calciatore brasiliano professionista di Calcio a 5. In seguito alla rottura del legamento crociato del ginocchio con interessamento anche del menisco, mi sono mi sono affidato ai professionisti di Fiumove per la delicata fase di riabilitazione. Da subito sono stato trattato con estrema professionalità e sensibilità. Il mio ringraziamento in particolare va a Stefano per il suo determinante contributo al mio recupero fisico. Fiumove Top! Obrigado! Gabriel Focosi",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Filippo Lari",
    role: "Pivot - Maccano5",
    content:
      "Mi sono presentato in FIUMOVE per una brutta distorsione alla caviglia (rotto e lesionati i legamenti). Fin dal primo appuntamento con Alessandro ho trovato una persona molto preparata, disponibile, paziente e con voglia di lavorare. Si è creata subito una forte sinergia tanto che ora ogni piccolo acciacco e infortunio la prima persona che sento è proprio Alessandro. Nel giro di due mesi son tornato in campo e il merito è suo. Un grazie a tutte le persone che lavorano in FIUMOVE in un ambiente accogliente che ti mette subito a tuo agio. Tornerò sicuramente!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Alessandro Bassoli",
    role: "Sportivo Professionista",
    content:
      "Sono uno sportivo professionista e per molti anni mi sono affidato alle mani esperte di Alessandro e Stefano. È stata una vera fortuna perché oltre ad essere molto preparati e competenti riescono a creare una sinergia importante con il paziente, riuscendo a trovare la soluzione più efficace in poco tempo.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000) // Change every 6 seconds

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#4f6fa8] to-[#2d4a7a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#7dd3fc] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cosa dicono di noi</h2>
          <div className="w-24 h-1 bg-[#7dd3fc] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20 shadow-2xl transition-all duration-500 ease-in-out">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7dd3fc] to-[#5bc5f2] flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold text-lg">{testimonials[currentIndex].name.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h3>
                  <Twitter className="w-5 h-5 text-[#7dd3fc]" />
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-[#7dd3fc] text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            <p className="text-white leading-relaxed text-lg transition-all duration-500 ease-in-out">
              {testimonials[currentIndex].content}
            </p>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#7dd3fc] scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
