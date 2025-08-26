import { Headphones, Truck, Users } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export default function FeatureSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-[url('/audio-equipment-background.png')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-secondary/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-in-up text-primary">
            ¿Por Qué Elegir Beatz?
          </h2>
          <p className="text-base animate-fade-in-up animation-delay-200 font-medium">
            Tu tienda de confianza para equipos de audio
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              /* Changed to Headphones icon for audio equipment */
              icon: Headphones,
              /* Updated for audio equipment variety */
              titulo: "Variedad de Audio",
              descripcion: "Auriculares, altavoces y accesorios para todos los gustos musicales",
            },
            {
              icon: Truck,
              /* Updated for delivery service */
              titulo: "Envío Rápido",
              descripcion: "Entregamos tu equipo de audio donde lo necesites",
            },
            {
              /* Changed to Users icon for community support */
              icon: Users,
              /* Updated for audio expertise without being boastful */
              titulo: "Soporte Amigable",
              descripcion: "Te ayudamos a encontrar el equipo que mejor se adapte a ti",
            },
          ].map((caracteristica, i) => (
            <Card
              key={i}
              className={`bg-white/90 backdrop-blur-sm text-center transition-all duration-500 hover:scale-105 group animate-slide-in-up hover:shadow-lg border-primary/20`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardContent className="p-4">
                <caracteristica.icon className={`w-8 h-8 mx-auto mb-3 group-hover:animate-bounce text-secondary`} />
                <h3 className="text-sm font-semibold mb-2 text-primary">{caracteristica.titulo}</h3>
                <p className="text-xs font-medium leading-relaxed text-gray-700">{caracteristica.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
