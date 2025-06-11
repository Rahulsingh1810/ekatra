import { VideoHero } from "@/components/video-hero"
import { ServicesPreview } from "@/components/services-preview"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <VideoHero />
      <ServicesPreview />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
