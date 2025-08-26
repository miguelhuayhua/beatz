"use client"

import type React from "react"

import { Check, Heart, Phone, Share2, Truck, Shield, Headphones, Volume2, Mic } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { some } from "lodash"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VariantSelector from "./variant-selector"
import type { Publicacion, Variante } from "@/types/main"
import { toggleFavProduct } from "@/store/reducers/user"
import type { RootState } from "@/store"

interface Props {
    producto: Publicacion
}

export default function ProductDetailPage({ producto }: Props) {
    const [selectedVariant, setSelectedVariant] = useState<Variante | null>(null)
    const [currentImageUrl, setCurrentImageUrl] = useState<string | undefined>(undefined)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const { favProducts } = useSelector((state: RootState) => state.user)
    const isFavorite = some(favProducts, (productId) => productId === producto.id)

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: producto?.titulo,
                    text: producto?.subtitulo,
                    url: window.location.href,
                })
            } catch (err) {
                console.log("Error sharing:", err)
            }
        } else {
            navigator.clipboard.writeText(window.location.href)
        }
    }

    const handleVariantChange = (variant: Variante | null) => {
        setSelectedVariant(variant)
        if (variant?.imagen?.url) {
            setCurrentImageUrl(variant.imagen.url)
        } else if (producto?.imagenes[0]?.url) {
            setCurrentImageUrl(producto.imagenes[0].url)
        } else {
            setCurrentImageUrl("/placeholder.svg")
        }
    }

    const nextImage = () => {
        const nextIndex = (currentImageIndex + 1) % producto.imagenes.length
        setCurrentImageIndex(nextIndex)
        setCurrentImageUrl(producto.imagenes[nextIndex]?.url)
    }

    const prevImage = () => {
        const prevIndex = currentImageIndex === 0 ? producto.imagenes.length - 1 : currentImageIndex - 1
        setCurrentImageIndex(prevIndex)
        setCurrentImageUrl(producto.imagenes[prevIndex]?.url)
    }

    useEffect(() => {
        if (producto) {
            if (producto.variantes.length > 0) {
                const defaultVariant = producto.variantes.find((v) => v.titulo == "Por defecto") || producto.variantes[0]
                setSelectedVariant(defaultVariant)
                setCurrentImageUrl(defaultVariant.imagen?.url || producto.imagenes[0]?.url || "/placeholder.svg")
            } else if (producto.imagenes.length > 0) {
                setCurrentImageUrl(producto.imagenes[0].url)
            } else {
                setCurrentImageUrl("/placeholder.svg")
            }
        }
    }, [producto])

    const dispatch = useDispatch()
    const handleToggleFavorite = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(toggleFavProduct({ id: producto.id }))
    }

    const displayPrice = selectedVariant?.precio || null
    const hasVariantWithoutPrice = selectedVariant && (selectedVariant.precio === 0 || selectedVariant.precio === null)

    return (
        <div className="min-h-screen bg-none relative font-sans overflow-hidden">


            <div className="relative z-20 pt-20">
                <div className="container mx-auto px-8 py-12">
                    <div className="flex items-center space-x-3 text-xs bg-white/80 backdrop-blur-xl px-8 py-6 rounded-full border border-gray-200 w-fit shadow-lg">
                        <Link href="/" className="hover:text-primary transition-colors font-medium text-gray-600">
                            Inicio
                        </Link>
                        <span className="text-gray-400">•</span>
                        <Link href="/catalogo" className="hover:text-primary transition-colors font-medium text-gray-600">
                            Catálogo
                        </Link>
                        <span className="text-gray-400">•</span>
                        <span className="text-primary font-semibold">{producto.titulo}</span>
                    </div>
                </div>

                <section className="container mx-auto px-8 ">
                    <div className="mb-16">
                        <Card className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
                            <CardContent className="p-0">
                                <div className="grid lg:grid-cols-2 gap-0">
                                    <div className="relative  w-full  bg-gray-50">

                                        <Image
                                            src={
                                                currentImageUrl || "/placeholder.svg?height=600&width=600&query=premium headphones studio setup"
                                            }
                                            alt={selectedVariant?.titulo || producto.titulo}
                                            width={200}
                                            height={200}
                                            className="object-cover w-full h-auto"
                                        />

                                        {producto.imagenes.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 cursor-pointer backdrop-blur-sm text-gray-700 p-4 rounded-full hover:bg-white transition-all shadow-lg"
                                                >
                                                    ←
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 cursor-pointer backdrop-blur-sm text-gray-700 p-4 rounded-full hover:bg-white transition-all shadow-lg"
                                                >
                                                    →
                                                </button>
                                            </>
                                        )}

                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                                            {producto.imagenes.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        setCurrentImageIndex(index)
                                                        setCurrentImageUrl(producto.imagenes[index]?.url)
                                                    }}
                                                    className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? "bg-primary" : "bg-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-12 lg:p-16 space-y-6">
                                        <div>
                                            {
                                                producto.categorias.map(({ categoria }) => (
                                                    <Badge key={categoria?.id} variant="outline">
                                                        {categoria?.nombre}
                                                    </Badge>
                                                ))
                                            }
                                        </div>
                                        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent leading-tight">
                                            {producto.titulo}
                                        </h1>
                                        {producto.subtitulo && (
                                            <p className="text-md text-gray-600 mb-8 font-light">{producto.subtitulo}</p>
                                        )}

                                        <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_70%)]" />
                                            <div className="relative z-10">
                                                {hasVariantWithoutPrice ? (
                                                    <div>
                                                        <span className="text-xl font-bold text-white">Precio bajo consulta</span>
                                                        <p className="text-white/80 text-xs mt-2">Contacta para disponibilidad</p>
                                                    </div>
                                                ) : displayPrice !== null ? (
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <span className="text-2xl font-bold text-white">BOB {displayPrice.toLocaleString()}</span>
                                                            <p className="text-white/80 text-xs mt-2">
                                                                {selectedVariant?.titulo == "Por defecto" ? "Por defecto" : "Variante seleccionada"}
                                                            </p>
                                                        </div>
                                                        <Volume2 className="w-6 h-6 text-white/80" />
                                                    </div>
                                                ) : (
                                                    <span className="text-2xl font-bold text-white">Consultar precio</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex space-x-6">
                                            <Button
                                                asChild
                                                className="flex-1 text-sm py-8 bg-primary hover:bg-primary/90 text-white font-bold shadow-2xl border-0 rounded-2xl transition-all duration-300"
                                            >
                                                <Link
                                                    href={`https://wa.me/59169848691?text=${encodeURIComponent(
                                                        `Hola BEATZ, me interesa "${producto.titulo}" https://beatz-bo.vercel.app/catalogo/${producto.url || producto.id}. ¿Podrías darme más información?`,
                                                    )}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Phone className="w-4 h-4 mr-2" />
                                                    Consultar WhatsApp
                                                </Link>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="lg"
                                                onClick={handleToggleFavorite}
                                                className={`px-8 py-8 rounded-2xl border-2 transition-all duration-300 ${isFavorite
                                                    ? "bg-red-50 border-red-300 text-red-600 hover:bg-red-100"
                                                    : "bg-white border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
                                                    }`}
                                            >
                                                <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                onClick={handleShare}
                                                size="lg"
                                                className="px-8 py-8 rounded-2xl border-2 bg-white border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-all duration-300"
                                            >
                                                <Share2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mb-16">
                        <Card className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl">
                            <CardContent className="p-12">
                                <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
                                    <Volume2 className="w-5 h-5 mr-3 text-primary" />
                                    Variantes disponibles
                                </h3>
                                <VariantSelector
                                    opciones={producto.opciones}
                                    variantes={producto.variantes}
                                    onVariantChange={handleVariantChange}
                                />
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mb-16">
                        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl">
                            <CardContent className="p-12">
                                <h3 className="text-xl font-bold text-gray-900 mb-10 flex items-center">
                                    <Headphones className="w-5 h-5 mr-3 text-primary" />
                                    Especificaciones Técnicas
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {producto.caracteristicas.map((caracteristica) => (
                                        <div
                                            key={caracteristica.id}
                                            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-primary/50 transition-all duration-300 group shadow-sm"
                                        >
                                            <div className="flex items-center mb-4">
                                                <div className="bg-primary/10 rounded-full p-3 mr-4 group-hover:bg-primary/20 transition-colors">
                                                    <Check className="w-3 h-3 text-primary" />
                                                </div>
                                                <span className="text-primary font-semibold text-xs">{caracteristica.nombre}</span>
                                            </div>
                                            <p className="text-gray-700 font-medium text-sm">{caracteristica.valor}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid  sm:grid-cols-3 gap-8 mb-16">
                        <Card className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group">
                            <CardContent className="p-4 text-center">
                                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="text-gray-900 font-bold mb-3 text-sm">Garantía Técnica</h4>
                                <p className="text-gray-600 text-xs">Respaldo completo del fabricante</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 group">
                            <CardContent className="p-4 text-center">
                                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Truck className="w-6 h-6 text-secondary" />
                                </div>
                                <h4 className="text-gray-900 font-bold mb-3 text-sm">Envío Protegido</h4>
                                <p className="text-gray-600 text-xs">Embalaje especializado para audio</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group">
                            <CardContent className="p-4 text-center">
                                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Mic className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="text-gray-900 font-bold mb-3 text-sm">Soporte Pro</h4>
                                <p className="text-gray-600 text-xs">Asesoría técnica especializada</p>
                            </CardContent>
                        </Card>
                    </div>
                    <Card className="mb-12">
                        <CardContent className="p-12">
                            <div className="prose prose-gray max-w-none">
                                {producto.descripcion ? (
                                    <p className="leading-relaxed whitespace-pre-line text-gray-700 text-base">
                                        {producto.descripcion}
                                    </p>
                                ) : (
                                    <p className="text-gray-500 text-base italic">Información detallada próximamente disponible.</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                </section>
            </div>
        </div>
    )
}
