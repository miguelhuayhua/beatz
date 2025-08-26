import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Providers } from "@/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Tienda BEATZ",
  description: "Compra audífonos, parlantes y equipos de sonido de calidad en línea.",
  openGraph: {
    title: "Tienda BEATZ",
    description: "Compra audífonos, parlantes y equipos de sonido de calidad en línea.",
    url: "https://beatz-bo.vercel.app",
    siteName: "Tienda BEATZ",
    images: [
      {
        url: "https://beatz-bo.vercel.app/og-tienda.png",
        width: 1200,
        height: 630,
        alt: "Tienda BEATZ",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tienda BEATZ",
    description: "Compra audífonos, parlantes y equipos de sonido de calidad en línea.",
    images: ["https://beatz-bo.vercel.app/og-tienda.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers >
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <div className="fixed h-screen w-screen -z-1">
          <div className="dashed-grid-pattern h-screen">
          </div>
        </div>
      </body>

    </html>
  );
}
