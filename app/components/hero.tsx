import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Headphones, Volume2, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/fondo.webp"
          alt="Beatz Audio Equipment Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
      </div>

      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/40 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary/50 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 right-10 w-5 h-5 bg-secondary/40 rounded-full animate-pulse delay-300"></div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <Badge
                variant="outline"
                className="text-white"
              >
                <Headphones className="w-4 h-4 mr-2" />
                Audio Premium Quality
              </Badge>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-sky-700 via-primary to-secondary bg-clip-text text-transparent drop-shadow-sm">
                    Beatz
                  </span>
                  <br />
                  <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/90">Feel the Sound</span>
                </h1>

                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Descubre la experiencia sonora definitiva con nuestros auriculares, altavoces y equipos de audio de{" "}
                  <span className="text-secondary font-semibold">alta calidad</span>. Diseñados para audiófilos y amantes
                  de la música.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href="/catalogo">

                    Explorar Catálogo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="px-8 py-4 font-semibold border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 bg-transparent"
                >
                  <Link
                    href="https://wa.me/59169848691?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20aud%C3%ADfonos%20y%20equipos%20de%20sonido%20Beatz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contactar Ahora
                  </Link>


                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 bg-black/40 backdrop-blur-sm">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <Volume2 className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">Sonido HD</p>
                      <p className="text-xs text-white/70">Calidad superior</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 hover:border-secondary/40 bg-black/40 border-transparent backdrop-blur-sm">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                      <Headphones className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">Comodidad Total</p>
                      <p className="text-xs text-white/70">Diseño ergonómico</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-secondary/40 bg-black/40 backdrop-blur-sm">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                      <Truck className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">Envío Gratis</p>
                      <p className="text-xs text-white/70">A todo el país</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 rounded-3xl blur-2xl animate-pulse"></div>

                <div className="relative w-full h-[500px] rounded-3xl overflow-hidden group shadow-2xl border border-primary/30">
                  <Image
                    src="/fondo2.jpeg"
                    alt="Beatz - Auriculares y Equipos de Audio Premium"
                    width={600}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-secondary/20"></div>
                </div>

                <Card className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm border-primary/30 shadow-lg">
                  <CardContent className="p-3 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-white">Stock Disponible</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
