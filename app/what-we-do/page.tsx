"use client"

import Image from "next/image"
import { CheckCircle, Star, Shield, Clock, Car, Bike, Wrench, Sparkles, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Head from "next/head"

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
      id: "interior-detailing",
      title: "Interior Detailing",
      description: "Deep cleaning and restoration of your car's interior with professional techniques",
      features: ["Deep vacuum cleaning", "Leather conditioning", "Dashboard restoration", "Odor elimination"],
      image: "/images/interior-detailing.png",
      icon: <Car className="h-8 w-8" />,
    },
    {
      id: "detailing-services",
      title: "Detailing Services",
      description: "Comprehensive range of specialized car care and detailing services",
      features: ["Glass & windshield care", "Headlight restoration", "Deodorizer treatment", "Leather seat care"],
      image: "/images/detailing-services.png",
      icon: <Sparkles className="h-8 w-8" />,
    },
    {
      id: "car-wash-care",
      title: "Car Wash & Care",
      description: "Professional wash services to keep your car spotless and protected",
      features: ["Premium foam wash", "Pressure cleaning", "Wax application", "Protective coating"],
      image: "/images/car-wash-care.png",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      id: "bike-wash-care",
      title: "Bike Wash & Care",
      description: "Specialized wash services designed specifically for motorcycles and bikes",
      features: ["Engine cleaning", "Chain lubrication", "Body polishing", "Chrome restoration"],
      image: "/images/bike-wash-and-care.png",
      icon: <Bike className="h-8 w-8" />,
    },
    {
      id: "tyre-care",
      title: "Car & Bike Tyre Care",
      description: "Professional tyre care to extend life and ensure safety",
      features: ["Tyre cleaning", "Sidewall protection", "Pressure checking", "Alignment inspection"],
      image: "/images/car-and-bike-tyre.png",
      icon: <Settings className="h-8 w-8" />,
    },
    {
      id: "accessories",
      title: "Accessories",
      description: "Premium car care accessories and additional services",
      features: ["Ceramic coating", "Paint protection film", "Interior accessories", "Performance upgrades"],
      image: "/images/accessories.png",
      icon: <Wrench className="h-8 w-8" />,
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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Car and Bike Care Services",
    "provider": {
      "@type": "Organization",
      "name": "Ekatra Care",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560062",
        "streetAddress": "Sy No.21, Chunchagatta, Yadava Farm",
      },
    },
    "offers": services.map(service => ({
      "@type": "Offer",
      "name": service.title,
      "description": service.description,
    })),
  }

  return (
    <>
      <Head>
        <title>Premium Car and Bike Care Services in Bengaluru | Ekatra Care</title>
        <meta
          name="description"
          content="Explore Ekatra Care's premium car and bike care services in Bengaluru, including interior detailing, wash, and tyre care. Book your service today!"
        />
        <meta name="keywords" content="car care Bengaluru, bike detailing, interior cleaning, premium car wash" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ekatracare.com/what-we-do" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-r from-rose-600 to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Premium Car and Bike Care Services</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-slide-up">
              Comprehensive car and bike care services designed to keep your vehicles in pristine condition
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-400">Professional car and bike care solutions for every need</p>
            </div>

            <div className="space-y-16 lg:space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  } pt-16`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} animate-slide-up`}>
                    <div className="flex items-center mb-4">
                      <div className="p-3 glass-morphism rounded-full text-rose-500 mr-4">{service.icon}</div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6">{service.description}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500 mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={handleBookService}
                      className="gradient-bg hover:scale-105 transition-all duration-300 text-white text-sm sm:text-base"
                      title={`Book ${service.title} Service`}
                    >
                      Book This Service
                    </Button>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} animate-fade-in`}>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={`${service.title} service in Bengaluru`}
                      width={600}
                      height={400}
                      className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
              title="Book Your Car Care Service Now"
            >
              Book Your Service Now
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}