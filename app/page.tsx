import { VideoHero } from "@/components/video-hero"
import { ServicesPreview } from "@/components/services-preview"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import Head from "next/head"

export default function HomePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ekatra Care",
    "url": "https://www.ekatracare.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sy No.21, Chunchagatta, Yadava Farm",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560062",
      "addressCountry": "IN",
    },
    "telephone": "+919902245212",
    "email": "info@ekatracare.com",
  }

  return (
    <>
      <Head>
        <title>Ekatra Care | Premium Car and Bike Care Services in Bengaluru</title>
        <meta
          name="description"
          content="Experience top-tier car and bike care at Ekatra Care. From detailing to wash services, we keep your vehicle in pristine condition. Book now!"
        />
        <meta name="keywords" content="car care Bengaluru, premium car detailing, bike wash services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ekatracare.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>
      <main className="min-h-screen">
        <VideoHero />
        <ServicesPreview />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  )
}