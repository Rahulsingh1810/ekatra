import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CallButton } from "@/components/call-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ekatra Care - Premium Car & Bike Detailing Services",
  description:
    "Professional car and bike detailing services including ceramic coating, paint protection film, interior detailing, and more. Experience the Ekatra Care difference.",
  keywords:
    "car detailing, ceramic coating, paint protection film, interior detailing, bike wash, tyre care, car accessories, auto detailing, car care, premium detailing",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticlesBackground />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CallButton />
        <WhatsAppButton />
      </body>
    </html>
  )
}
