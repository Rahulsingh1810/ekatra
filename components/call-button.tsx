"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CallButton() {
  const phoneNumber = "+919902245212"

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <Button
      onClick={handleCallClick}
      className="fixed bottom-6 left-6 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
      size="lg"
      title="Call us directly"
    >
      <Phone className="h-6 w-6" />
      <span className="sr-only">Call us directly</span>
    </Button>
  )
}