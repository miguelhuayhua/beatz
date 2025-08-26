"use client"

import {
  Handshake,
  Home,
  Building,
} from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-16 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-secondary md:text-3xl font-bold mb-3 animate-fade-in-up">Sobre Nosotros</h2>
          <p className="text-base animate-fade-in-up animation-delay-200 font-medium">
            Tu tienda especializada en sonidos y auriculares de alta calidad
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-lg text-primary font-bold mb-4">Nuestra Pasión</h3>
            <p className="mb-4 text-sm font-medium leading-relaxed">
              BEATZ nace como un proyecto joven con la misión de ofrecer equipos de audio y auriculares que marcan la diferencia.
              Creemos que el sonido puede transformar tu día, ya sea para disfrutar de tu música favorita, trabajar o estudiar con mejor concentración.
            </p>
            <p className="text-sm font-medium leading-relaxed">
              Trabajamos con marcas confiables y modelos seleccionados, asegurando calidad, comodidad y un diseño moderno en cada producto que ofrecemos.
            </p>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="relative w-full h-80 rounded-xl overflow-hidden group shadow-xl">
              <Image
                src="/fondo3.webp"
                alt="Auriculares BEATZ"
                width={480}
                height={420}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
               
              </div>
            </div>
          </div>
        </div>

        {/* Nueva sección: Cómo Trabajamos */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-in-up text-primary">Cómo Trabajamos</h2>
          <p className="text-base animate-fade-in-up animation-delay-200 font-medium">
            Un servicio pensado para que disfrutes del mejor sonido sin complicaciones
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="bg-white/90 backdrop-blur-sm text-center transition-all duration-500 hover:scale-105 group animate-slide-in-up hover:shadow-lg">
            <CardContent className="p-4">
              <Home className="w-8 h-8 mx-auto mb-3 group-hover:animate-bounce" />
              <h3 className="text-sm font-semibold mb-2">Asesoría Personalizada</h3>
              <p className="text-xs font-medium leading-relaxed">
                Te ayudamos a elegir los auriculares o parlantes ideales según tu estilo y necesidades.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur-sm text-center transition-all duration-500 hover:scale-105 group animate-slide-in-up animation-delay-100 hover:shadow-lg">
            <CardContent className="p-4">
              <Building className="w-8 h-8 mx-auto mb-3 group-hover:animate-bounce" />
              <h3 className="text-sm font-semibold mb-2">Productos Garantizados</h3>
              <p className="text-xs font-medium leading-relaxed">
                Solo trabajamos con productos originales y garantizados para que disfrutes sin preocupaciones.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur-sm text-center transition-all duration-500 hover:scale-105 group animate-slide-in-up animation-delay-200 hover:shadow-lg">
            <CardContent className="p-4">
              <Handshake className="w-8 h-8 mx-auto mb-3 group-hover:animate-bounce" />
              <h3 className="text-sm font-semibold mb-2">Atención Cercana</h3>
              <p className="text-xs font-medium leading-relaxed">
                Nos importa cada cliente: brindamos soporte y acompañamiento antes y después de tu compra.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
