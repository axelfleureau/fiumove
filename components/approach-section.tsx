"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const approaches = ["Fisioterapia", "Riabilitazione", "Terapie fisiche", "Traumatologia"]

export default function ApproachSection() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-8">L'approccio FIUMOVE</h2>

            <p className="text-[#64748b] leading-relaxed mb-8 text-lg">
              La nostra offerta include fisioterapia, riabilitazione, terapie fisiche e traumatologia. Ad ogni passo,
              garantiamo standard eccezionali di assistenza medica per raggiungere una guarigione di successo. Scopri in
              FIUMOVE un approccio specializzato che si adatta alle tue esigenze individuali, guidandoti verso un
              benessere ottimale e una ripresa efficace.
            </p>

            <div className="space-y-4 mb-8">
              {approaches.map((approach, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-[#7dd3fc] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#1e293b] font-medium">{approach}</span>
                </div>
              ))}
            </div>

            <div className="lg:hidden mb-8">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Image
                    src="/images/medical-equipment.jpg"
                    alt="Medical Equipment"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Image
                    src="/images/treatment-room.jpg"
                    alt="Treatment Room"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-start lg:justify-end">
              <Button
                className="bg-[#4f6fa8] text-white hover:bg-[#3d5a8c] font-medium px-8 py-3 rounded-lg transition-colors duration-200"
                onClick={() => window.open("https://fiumepolosanitario.it/", "_blank")}
              >
                Scopri di più
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Image
                  src="/images/medical-equipment.jpg"
                  alt="Medical Equipment"
                  width={500}
                  height={320}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Image
                  src="/images/treatment-room.jpg"
                  alt="Treatment Room"
                  width={500}
                  height={320}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
