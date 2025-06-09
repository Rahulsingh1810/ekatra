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
  title: "Ekatra Care | Premium Car & Bike Detailing in Bengaluru",
  description:
    "Premium car & bike detailing at Ekatra Care in Bengaluru. Expert cleaning, ceramic coating & more. Book now!",
  keywords: [
    "car detailing Bengaluru",
    "bike care services",
    "premium car wash",
    "ceramic coating",
    "car wash JP Nagar",
    "Ekatra Care",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Ekatra Care | Premium Car & Bike Detailing in Bengaluru",
    description:
      "Professional car and bike care in Bengaluru. Ekatra Care offers detailing, washing, and coatings. Book today!",
    url: "https://ekatra-flax.vercel.app",
    siteName: "Ekatra Care",
    images: [
      {
        url: "https://ekatra-flax.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ekatra Care car detailing service",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekatra Care | Premium Car & Bike Detailing in Bengaluru",
    description:
      "Premium car & bike detailing in Bengaluru at Ekatra Care. Washes, coatings & more. Book now!",
    images: ["https://ekatra-flax.vercel.app/images/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  generator: "Next.js 14",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Ekatra Care",
      url: "https://ekatra-flax.vercel.app",
      logo: "https://ekatra-flax.vercel.app/images/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sy No.21, Chunchagatta, Yadava Farm",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560062",
        addressCountry: "IN",
      },
      telephone: "+919902245212",
      email: "info@ekatracare.com",
    }),
  },
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
        {children}
        <Footer />
        <CallButton />
        <WhatsAppButton />
        
      </body>
    </html>
  )
}
