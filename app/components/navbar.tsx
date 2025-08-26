"use client"
import { Button } from "@/components/ui/button"
import { Heart, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${(isScrolled)
          ? "backdrop-blur-md bg-background/90 border-b shadow-lg shadow-primary/10"
          : "backdrop-blur-sm bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="w-14 h-14 ">
              <Link href={"/"} >
                {
                  (isScrolled || !isHomePage) ?
                    <Image
                      src="/logo.png"
                      alt="BEATZ Logo"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full "
                    />
                    : <Image
                      src="/logo2.png"
                      alt="BEATZ Logo"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full "
                    />
                }
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {["Productos", "Nosotros", "Contacto"].map((item, i) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className={
                  `text-white ${(isScrolled || !isHomePage) && ('!text-primary')}
                  `}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/favoritos" className={
              `text-white ${(isScrolled || !isHomePage) && ('!text-primary')}
                  `
            }>
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4" />
                <span className="ml-1 ">Favoritos</span>
              </Button>
            </Link>
            <Link
              href="https://wa.me/59169848691?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20productos%20de%20aceites%20y%20l%C3%ADquidos%20de%20auto."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" >
                <Phone className="size-4" />
                Contactarnos
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}