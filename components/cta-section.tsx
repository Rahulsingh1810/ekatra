"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"

export function CTASection() {
  const handleBookNow = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I'm ready to book a premium car detailing service at Ekatra Car Care. Can you please help me schedule an appointment and provide pricing details?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleGetQuote = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hello! I would like to get a quote for car detailing services. Can you please share your pricing and service packages?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section className="section-padding gradient-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white rounded-full animate-rotate-slow"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center mobile-responsive relative z-10">
        <div className="animate-fade-in">
          <Sparkles className="h-12 w-12 sm:h-16 sm:w-16 text-white mx-auto mb-6 sm:mb-8 animate-pulse-glow" />
        </div>

        <h2 className="text-responsive-lg font-bold mb-4 sm:mb-6 text-white animate-slide-up">
          Ready to Transform Your Car?
        </h2>

        <p
          className="text-responsive-md text-white/90 mb-8 sm:mb-12 animate-slide-up max-w-3xl mx-auto"
          style={{ animationDelay: "0.2s" }}
        >
          Book your premium car detailing service today and experience the Ekatra Care difference with our cutting-edge
          technology and expert care
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            variant="secondary"
            onClick={handleBookNow}
            className="bg-white text-rose-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold animate-pulse-glow"
          >
            Book Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleGetQuote}
            className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 hover:scale-105 transition-all duration-300 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold glass-morphism"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
