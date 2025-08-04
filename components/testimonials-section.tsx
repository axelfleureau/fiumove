"use client"

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-blue-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cosa dicono di noi</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white-2 rounded-xl p-8 md:p-12 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-black font-bold text-xl mb-2">Claudia R.</h3>
              <button className="text-primary text-sm font-medium hover:underline">Leggi Tutto</button>
            </div>

            <p className="text-paragraph leading-relaxed text-lg">
              Mi sono rivolta a Fiumedica per un'ecografia addominale e sono rimasta estremamente soddisfatta del
              servizio ricevuto. Il personale è competente, professionale e attento alle esigenze dei pazienti. La
              qualità delle immagini ecografiche è eccellente e mi ha permesso di avere una diagnosi precisa. Consiglio
              vivamente questo centro a tutti coloro che necessitano di un esame ecografico.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
