"use client"

import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle,
  Star,
  Shield,
  Clock,
  Car,
  Bike,
  Wrench,
  Sparkles,
  Settings,
  Zap,
  Palette,
  Droplets,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatWeDoPage() {
  const handleBookService = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I'm interested in booking one of your premium car care services. Can you please help me choose the right service and schedule an appointment?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const services = [
    {
      id: "ceramic-coating",
      title: "Ceramic Coating",
      description: "Advanced ceramic protection for your vehicle's paint with long-lasting shine and protection",
      features: ["9H hardness protection", "Hydrophobic properties", "UV protection", "5-year warranty"],
      image: "/images/ceramic-coating.png",
      icon: <Shield className="h-8 w-8" />,
      slug: "/what-we-do/ceramic-coating",
    },
    {
      id: "paint-protection-film",
      title: "Paint Protection Film",
      description: "Invisible protection film that shields your car's paint from scratches and stone chips",
      features: ["Self-healing technology", "Crystal clear finish", "10-year warranty", "Custom fit installation"],
      image: "/images/paint-protection.png",
      icon: <Palette className="h-8 w-8" />,
      slug: "/what-we-do/paint-protection-film",
    },
    {
      id: "detailing-polishing",
      title: "Detailing and Polishing",
      description: "Professional paint correction and polishing services to restore your car's original shine",
      features: ["Paint correction", "Swirl mark removal", "High-gloss finish", "Professional grade products"],
      image: "/images/detailing-polishing.png",
      icon: <Sparkles className="h-8 w-8" />,
      slug: "/what-we-do/detailing-polishing",
    },
    {
      id: "interior-detailing",
      title: "Interior Detailing",
      description: "Deep cleaning and restoration of your car's interior with professional techniques",
      features: ["Deep vacuum cleaning", "Leather conditioning", "Dashboard restoration", "Odor elimination"],
      image: "/images/interior-detailing.png",
      icon: <Car className="h-8 w-8" />,
      slug: "/what-we-do/interior-detailing",
    },
    {
      id: "detailing-services",
      title: "Detailing Services",
      description: "Comprehensive range of specialized car care and detailing services",
      features: ["Glass & windshield care", "Headlight restoration", "Deodorizer treatment", "Leather seat care"],
      image: "/images/detailing-services.png",
      icon: <Zap className="h-8 w-8" />,
      slug: "/what-we-do/detailing-services",
    },
    {
      id: "automatic-car-wash",
      title: "Automatic Car Wash and Care",
      description: "State-of-the-art automatic car wash systems for efficient and thorough cleaning",
      features: ["Touchless washing", "Premium foam wash", "Spot-free rinse", "Quick drying system"],
      image: "/images/car-wash-care.png",
      icon: <Droplets className="h-8 w-8" />,
      slug: "/what-we-do/automatic-car-wash",
    },
    {
      id: "bike-wash-care",
      title: "Bike Wash & Care",
      description: "Specialized wash services designed specifically for motorcycles and bikes",
      features: ["Engine cleaning", "Chain lubrication", "Body polishing", "Chrome restoration"],
      image: "/images/bike-wash-and-care.png",
      icon: <Bike className="h-8 w-8" />,
      slug: "/what-we-do/bike-wash-care",
    },
    {
      id: "tyre-care",
      title: "Car & Bike Tyre Care",
      description: "Professional tyre care to extend life and ensure safety",
      features: ["Tyre cleaning", "Sidewall protection", "Pressure checking", "Alignment inspection"],
      image: "/images/car-and-bike-tyre.png",
      icon: <Settings className="h-8 w-8" />,
      slug: "/what-we-do/tyre-care",
    },
    {
      id: "accessories",
      title: "Accessories",
      description: "Premium car care accessories and additional services",
      features: ["Audio systems", "Custom seat covers", "Car garnishing", "Performance upgrades"],
      image: "/images/accessories.png",
      icon: <Wrench className="h-8 w-8" />,
      slug: "/what-we-do/accessories",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Star className="h-8 w-8 text-rose-500" />,
      title: "Premium Quality",
      description: "We use only the finest products and techniques for exceptional results.",
    },
    {
      icon: <Shield className="h-8 w-8 text-rose-500" />,
      title: "Guaranteed Results",
      description: "Our work is backed by a satisfaction guarantee and warranty.",
    },
    {
      icon: <Clock className="h-8 w-8 text-rose-500" />,
      title: "Timely Service",
      description: "We respect your time and deliver services as promised.",
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">What We Do</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-slide-up">
            Comprehensive car and bike care services designed to keep your vehicles in pristine condition
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-400">Professional car and bike care solutions for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-morphism rounded-3xl p-6 hover:glass-morphism-hover transition-all duration-500 animate-slide-up group hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 p-3 glass-morphism rounded-full text-rose-500 animate-pulse-glow">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-rose-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <Link href={service.slug} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <Button
                    onClick={handleBookService}
                    className="flex-1 gradient-bg hover:scale-105 transition-all duration-300 text-white"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Ekatra Care?</h2>
            <p className="text-xl text-gray-400">
              Experience the difference with our premium car and bike care services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="text-center glass-morphism rounded-2xl p-8 animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Premium Care?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your service today and see why thousands of customers trust Ekatra Care
          </p>
          <Button
            onClick={handleBookService}
            size="lg"
            variant="secondary"
            className="bg-white text-rose-600 hover:bg-gray-100 px-8"
          >
            Book Your Service Now
          </Button>
        </div>
      </section>
    </main>
  )
}
