"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"

export function VideoHero() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleBookService = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I'm interested in booking a premium car detailing service. Can you please provide me with more details about your services and availability?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleLearnMore = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hello! I would like to learn more about your car care services. Can you share details about what services you offer?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-600 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-600 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-800 rounded-full opacity-30 animate-pulse-glow"></div>
      </div>

      {/* YouTube Video Background */}
      <iframe
        ref={iframeRef}
        src="https://www.youtube.com/embed/eMBlkjCA298?autoplay=1&mute=1&loop=1&playlist=eMBlkjCA298&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
        className="absolute inset-0 w-full h-full object-cover scale-110 sm:scale-125 -translate-y-8 sm:-translate-y-16"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ border: "none" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-center text-white mobile-responsive">
        <div className="max-w-5xl animate-fade-in">
          <h1 className="text-responsive-xl font-bold mb-4 sm:mb-6 animate-slide-up gradient-text">Premium Car Care</h1>
          <p
            className="text-responsive-md mb-6 sm:mb-8 opacity-90 animate-slide-up max-w-3xl mx-auto"
            style={{ animationDelay: "0.3s" }}
          >
            Experience the finest car detailing and service with cutting-edge technology and premium care
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              onClick={handleBookService}
              className="bg-rose-600 hover:bg-rose-700 hover:scale-105 transition-all duration-300 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold animate-pulse-glow"
            >
              Book Your Service
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleLearnMore}
              className="border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white hover:scale-105 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold glass-morphism"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-20">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-rose-600 rounded-full flex justify-center glass-morphism">
          <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-rose-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
