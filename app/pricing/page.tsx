"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Head from "next/head"

export default function PricingPage() {
  const handleBookPackage = (packageName: string) => {
    const phoneNumber = "919902245212"
    const message = `Hi! I'm interested in booking the ${packageName} package. Can you please provide more details about this service and help me schedule an appointment?`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleGetQuote = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hello! I would like to get a custom quote for car detailing services. Can you please help me with pricing based on my specific requirements?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const packages = [
    {
      name: "Basic Care",
      price: "₹999",
      duration: "2-3 hours",
      description: "Essential car cleaning and maintenance",
      features: [
        "Exterior wash and dry",
        "Interior vacuum cleaning",
        "Dashboard cleaning",
        "Window cleaning",
        "Tire cleaning",
      ],
      popular: false,
    },
    {
      name: "Premium Detail",
      price: "₹2,499",
      duration: "4-5 hours",
      description: "Comprehensive detailing package",
      features: [
        "Everything in Basic Care",
        "Clay bar treatment",
        "Premium wax application",
        "Interior deep cleaning",
        "Leather conditioning",
        "Engine bay cleaning",
        "Paint protection",
      ],
      popular: true,
    },
    {
      name: "Luxury Elite",
      price: "₹4,999",
      duration: "6-8 hours",
      description: "Ultimate car care experience",
      features: [
        "Everything in Premium Detail",
        "Ceramic coating application",
        "Paint correction",
        "Scratch removal",
        "Headlight restoration",
        "Odor elimination",
        "6-month protection warranty",
      ],
      popular: false,
    },
  ]

  const addOns = [
    { name: "Ceramic Coating", price: "₹1,999" },
    { name: "Paint Correction", price: "₹1,499" },
    { name: "Headlight Restoration", price: "₹799" },
    { name: "Engine Detailing", price: "₹999" },
    { name: "Odor Elimination", price: "₹599" },
    { name: "Scratch Removal", price: "₹1,299" },
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Ekatra Care Service Packages",
    "itemListElement": packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.name,
      "description": pkg.description,
      "price": pkg.price,
      "priceCurrency": "INR",
    })),
  }

  return (
    <>
      <Head>
        <title>Car Care Service Packages & Pricing in Bengaluru | Ekatra Care</title>
        <meta
          name="description"
          content="Discover affordable car care packages starting at ₹999. Choose from Basic Care, Premium Detail, and Luxury Elite services. Book now!"
        />
        <meta name="keywords" content="car detailing packages Bengaluru, car wash pricing, premium car care" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ekatracare.com/pricing" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-r from-rose-600 to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Car Care Service Packages & Pricing</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-slide-up">
              Transparent pricing for premium car care services
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Service Packages</h2>
              <p className="text-xl text-gray-400">Choose the perfect package for your car's needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className={`relative glass-morphism rounded-2xl p-8 animate-slide-up hover-lift ${
                    pkg.popular ? "ring-2 ring-indigo-500 scale-105" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-rose-500 mb-2">{pkg.price}</div>
                    <div className="text-gray-400 mb-4">{pkg.duration}</div>
                    <p className="text-gray-300">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-rose-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleBookPackage(pkg.name)}
                    className={`w-full ${
                      pkg.popular
                        ? "gradient-bg hover:scale-105 text-white"
                        : "bg-slate-800 hover:bg-slate-700 text-white"
                    } transition-all duration-300`}
                    title={`Book ${pkg.name} Package`}
                  >
                    Book {pkg.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Add-on Services</h2>
              <p className="text-xl text-gray-400">Enhance your package with additional services</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <div
                  key={addon.name}
                  className="glass-morphism rounded-xl p-6 flex justify-between items-center animate-slide-up hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">{addon.name}</h3>
                  </div>
                  <div className="text-xl font-bold text-indigo-500">{addon.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-rose-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Service?</h2>
            <p className="text-xl mb-8 opacity-90">Get started with our premium car care services today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => handleBookPackage("Premium Detail")}
                className="bg-white text-rose-600 hover:bg-gray-100 px-8"
                title="Book Premium Detail Package"
              >
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleGetQuote}
                className="border-white text-white hover:bg-white hover:text-rose-600 px-8"
                title="Get Custom Car Care Quote"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}