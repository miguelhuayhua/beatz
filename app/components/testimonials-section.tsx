"use client"
import "keen-slider/keen-slider.min.css"

import { StarIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useKeenSlider } from "keen-slider/react"

const testimonios = [
  {
    nombre: "Carlos Mendoza",
    ubicacion: "DJ - Zona Sur",
    texto:
      "Compré unos auriculares para mis presentaciones y la calidad de sonido es increíble. Los graves se escuchan perfectos y son muy cómodos para usar toda la noche.",
    producto: "Auriculares DJ",
    avatar: "CM",
    rating: 5,
  },
  {
    nombre: "Ana Flores",
    ubicacion: "Estudiante - UMSA",
    texto:
      "Necesitaba auriculares para estudiar y estos me aíslan perfecto del ruido. Puedo concentrarme mejor y la batería dura todo el día de clases.",
    producto: "Auriculares con cancelación de ruido",
    avatar: "AF",
    rating: 5,
  },
  {
    nombre: "Miguel Torres",
    ubicacion: "Músico - Sopocachi",
    texto:
      "Los altavoces que compré aquí tienen un sonido muy limpio. Los uso para mis ensayos y grabaciones caseras, excelente relación calidad-precio.",
    producto: "Altavoces de estudio",
    avatar: "MT",
    rating: 5,
  },
  {
    nombre: "Lucia Vargas",
    ubicacion: "Oficinista - Calacoto",
    texto:
      "Trabajo desde casa y necesitaba un buen micrófono para videollamadas. Me explicaron las diferencias y elegí uno perfecto para mi setup.",
    producto: "Micrófono USB",
    avatar: "LV",
    rating: 5,
  },
  {
    nombre: "Roberto Paz",
    ubicacion: "Gamer - El Alto",
    texto:
      "Mis auriculares gaming llegaron rápido y funcionan genial. El sonido envolvente me ayuda mucho en los juegos y el micrófono se escucha claro.",
    producto: "Auriculares gaming",
    avatar: "RP",
    rating: 5,
  },
  {
    nombre: "Sofia Mamani",
    ubicacion: "Profesora - Villa Fátima",
    texto:
      "Compré un altavoz portátil para mis clases y es perfecto. Se conecta fácil al teléfono y todos mis estudiantes pueden escuchar claramente.",
    producto: "Altavoz Bluetooth",
    avatar: "SM",
    rating: 5,
  },
  {
    nombre: "Diego Quispe",
    ubicacion: "Streamer - Miraflores",
    texto:
      "El equipo de audio que armé aquí para mi stream es excelente. El micrófono capta muy bien mi voz y los auriculares son súper cómodos.",
    producto: "Setup completo streaming",
    avatar: "DQ",
    rating: 5,
  },
  {
    nombre: "Patricia Luna",
    ubicacion: "Fitness - Zona Norte",
    texto:
      "Los auriculares deportivos que compré son perfectos para el gym. No se caen cuando hago ejercicio y resisten el sudor sin problemas.",
    producto: "Auriculares deportivos",
    avatar: "PL",
    rating: 5,
  },
  {
    nombre: "Andrés Choque",
    ubicacion: "Productor - San Miguel",
    texto:
      "Para mi home studio necesitaba monitores de calidad. Los que compré aquí reproducen el sonido tal como es, sin colorear nada.",
    producto: "Monitores de estudio",
    avatar: "AC",
    rating: 5,
  },
  {
    nombre: "Carla Ramos",
    ubicacion: "Podcaster - Achumani",
    texto:
      "Mi podcast suena mucho mejor desde que compré este micrófono. La calidad de grabación mejoró notablemente y es muy fácil de usar.",
    producto: "Micrófono para podcast",
    avatar: "CR",
    rating: 5,
  },
]

export default function TestimonialSection() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 40,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 28,
        },
      },
    },
  })

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Lo que dicen nuestros clientes</h2>
          <div className="flex justify-center mb-6 items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">4.9/5 de nuestros clientes</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clientes satisfechos que confían en Beatz para su experiencia de audio perfecta
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {testimonios.map((testimonio, i) => (
            <div key={i} className="keen-slider__slide">
              <Card className="bg-card/80 backdrop-blur-sm  transition-all duration-300 hover:scale-105 hover:shadow-xl border h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-3 w-12 h-12 border-2 border-primary/20">
                      <AvatarFallback className="text-sm font-bold bg-primary/10 text-primary">
                        {testimonio.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{testimonio.nombre}</p>
                      <p className="text-sm text-muted-foreground">{testimonio.ubicacion}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonio.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <blockquote className="mb-4 text-sm leading-relaxed text-muted-foreground italic">
                    {`"${testimonio.texto}"`}
                  </blockquote>

                  <Badge variant="outline">⚡ {testimonio.producto}</Badge>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            ¿Listo para mejorar tu experiencia de audio?
            <span className="text-primary font-medium ml-1">¡Visítanos hoy!</span>
          </p>
        </div>
      </div>
    </section>
  )
}
