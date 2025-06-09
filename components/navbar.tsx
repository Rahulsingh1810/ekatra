"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleBookService = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I would like to book a service at Ekatra Car Care. Can you please help me with the booking process and available time slots?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-morphism shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto mobile-responsive">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center space-x-3 animate-fade-in group">
            <Image
              src="/images/logo.png"
              alt="Ekatra Care Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse-glow"
            />
            <span className="text-xl sm:text-2xl font-bold gradient-text group-hover:animate-text-shimmer">
              Ekatra Care
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-indigo-500 transition-all duration-300 font-medium relative group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button
              onClick={handleBookService}
              className="bg-rose-600 hover:bg-rose-700 hover:scale-105 transition-all duration-300 animate-pulse-glow text-white font-semibold px-6 py-2"
            >
              Book Service
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-indigo-500 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6 animate-spin" /> : <Menu className="h-6 w-6 hover:animate-pulse" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden glass-morphism rounded-2xl mt-4 p-6 animate-scale-in">
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-400 hover:text-indigo-500 transition-all duration-300 font-medium text-lg animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={handleBookService}
                className="bg-rose-600 hover:bg-rose-700 hover:scale-105 transition-all duration-300 text-white font-semibold w-full py-3"
              >
                Book Service
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
