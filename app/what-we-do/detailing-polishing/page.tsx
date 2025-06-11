"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Sparkles,
  Star,
  Clock,
  CheckCircle,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function DetailingPolishingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleBookService = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I'm interested in booking Detailing and Polishing service. Can you please provide more details and help me schedule an appointment?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleGetQuote = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hello! I would like to get a quote for Detailing and Polishing service. Can you please share the pricing details?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const features = [
    {
      title: "Multi-Stage Paint Correction",
      description:
        "Our systematic approach uses multiple stages of compounding and polishing to remove defects and restore paint clarity progressively.",
    },
    {
      title: "Swirl Mark Removal",
      description:
        "Specialized techniques and products eliminate swirl marks, spider webbing, and micro-scratches that dull your paint's appearance.",
    },
    {
      title: "High-Gloss Finish",
      description:
        "Professional polishing creates a deep, mirror-like finish that enhances your vehicle's color depth and reflectivity.",
    },
    {
      title: "Professional Grade Products",
      description:
        "We use only premium compounds, polishes, and pads from leading manufacturers for optimal results and paint safety.",
    },
    {
      title: "Machine Polishing Techniques",
      description:
        "Advanced dual-action and rotary polishers operated by skilled technicians ensure consistent, professional results.",
    },
    {
      title: "Paint Depth Measurement",
      description:
        "Digital paint thickness gauges ensure safe correction levels while maximizing defect removal without compromising paint integrity.",
    },
    {
      title: "Quality Inspection",
      description:
        "Thorough inspection under various lighting conditions ensures all defects are addressed and the finish meets our high standards.",
    },
    {
      title: "Paint Protection Application",
      description:
        "Optional wax, sealant, or ceramic coating application to protect your newly corrected paint and maintain the results.",
    },
  ]

  const benefits = [
    {
      icon: <Sparkles className="h-8 w-8 text-rose-500" />,
      title: "Paint Correction",
      description:
        "Our multi-stage paint correction process removes years of accumulated damage including swirl marks, scratches, oxidation, and water spots. Using professional-grade compounds and polishes, we restore your paint's original clarity and depth, bringing back that showroom shine.",
    },
    {
      icon: <Star className="h-8 w-8 text-rose-500" />,
      title: "Enhanced Gloss",
      description:
        "Professional machine polishing techniques create a deep, mirror-like finish that dramatically enhances your car's appearance. The increased gloss and clarity make colors appear more vibrant and create stunning reflections that turn heads wherever you go.",
    },
    {
      icon: <Clock className="h-8 w-8 text-rose-500" />,
      title: "Long-lasting Results",
      description:
        "Proper paint correction and protection ensures your car maintains its showroom shine for months. When combined with appropriate protection products, the results can last 6-12 months or longer, depending on maintenance and environmental conditions.",
    },
  ]

  const process = [
    {
      title: "Paint Assessment",
      description:
        "We begin with a comprehensive evaluation of your vehicle's paint condition using specialized lighting and paint depth gauges. This assessment determines the correction strategy and ensures safe removal of defects without compromising paint thickness.",
    },
    {
      title: "Thorough Decontamination",
      description:
        "The vehicle undergoes a multi-stage washing process including pre-rinse, foam wash, hand wash, and clay bar treatment. This removes all surface contaminants that could interfere with the polishing process.",
    },
    {
      title: "Compounding Stage",
      description:
        "Heavy defects, deep scratches, and oxidation are addressed using cutting compounds and appropriate pads. This stage removes the most significant imperfections and levels the paint surface.",
    },
    {
      title: "Polishing Stage",
      description:
        "Finer polishes are used to refine the surface, remove any haze from compounding, and enhance gloss. Multiple polishing steps may be used depending on the paint's condition and desired finish level.",
    },
    {
      title: "Final Finishing",
      description:
        "Ultra-fine finishing polishes create the final high-gloss finish. The paint is thoroughly inspected under various lighting conditions to ensure all defects have been addressed and the finish is flawless.",
    },
    {
      title: "Protection Application",
      description:
        "A protective layer of wax, sealant, or ceramic coating is applied to preserve the corrected paint and maintain the enhanced appearance. This step is crucial for long-lasting results.",
    },
  ]

  const packages = [
    {
      name: "Basic Paint Enhancement",
      duration: "4-6 hours",
      features: ["Single-stage polishing", "Light defect removal", "Gloss enhancement", "Carnauba wax protection"],
      price: "₹8,000 - ₹12,000",
      ideal: "Newer vehicles with minor imperfections",
    },
    {
      name: "Professional Paint Correction",
      duration: "8-12 hours",
      features: [
        "Two-stage correction process",
        "Moderate defect removal",
        "Significant gloss improvement",
        "Premium sealant protection",
        "Paint depth measurement",
      ],
      price: "₹15,000 - ₹25,000",
      ideal: "Vehicles with moderate paint damage",
    },
    {
      name: "Complete Paint Restoration",
      duration: "12-16 hours",
      features: [
        "Multi-stage correction process",
        "Heavy defect removal",
        "Maximum gloss enhancement",
        "Ceramic coating application",
        "Comprehensive paint assessment",
        "6-month protection warranty",
      ],
      price: "₹25,000 - ₹40,000",
      ideal: "Heavily damaged or neglected paint",
    },
  ]

  const faqs = [
    {
      question: "What is paint correction and why do I need it?",
      answer:
        "Paint correction is the process of removing surface imperfections from your vehicle's paint such as swirl marks, scratches, oxidation, and water spots. Over time, these defects accumulate from washing, environmental exposure, and general wear. Paint correction restores your paint's original clarity and gloss, making your vehicle look new again.",
    },
    {
      question: "How long does the paint correction process take?",
      answer:
        "The duration depends on your vehicle's size, paint condition, and the level of correction needed. Basic enhancement takes 4-6 hours, while comprehensive correction can take 12-16 hours or more. We never rush the process as proper paint correction requires time and patience to achieve optimal results.",
    },
    {
      question: "Will paint correction remove all scratches?",
      answer:
        "Paint correction can remove most surface-level scratches, swirl marks, and light to moderate defects. However, deep scratches that penetrate through the clear coat to the base paint may not be completely removable through polishing alone. We'll assess your paint and provide realistic expectations during our initial evaluation.",
    },
    {
      question: "How often should I have paint correction done?",
      answer:
        "The frequency depends on how you maintain your vehicle and environmental factors. With proper maintenance and protection, paint correction may only be needed every 2-3 years. However, vehicles exposed to harsh conditions or poor washing techniques may benefit from annual correction.",
    },
    {
      question: "Is machine polishing safe for my car's paint?",
      answer:
        "When performed by trained professionals using proper techniques and equipment, machine polishing is completely safe. We use paint depth gauges to ensure we never remove more clear coat than necessary, and our experienced technicians know how to achieve maximum correction while preserving paint integrity.",
    },
    {
      question: "What's the difference between polishing and waxing?",
      answer:
        "Polishing is a corrective process that removes defects and restores paint clarity, while waxing is a protective process that adds a layer of protection and enhances shine. Polishing actually improves the paint's condition, whereas waxing simply protects and enhances what's already there. For best results, polishing should be done first, followed by protection.",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      vehicle: "Honda City",
      text: "My 5-year-old City had terrible swirl marks from years of automatic car washes. After the paint correction at Ekatra Care, it looks better than when I bought it new! The depth and clarity are incredible. Highly recommend their expertise.",
      rating: 5,
    },
    {
      name: "Meera Sharma",
      vehicle: "Hyundai Creta",
      text: "I was skeptical about spending money on paint correction, but the results speak for themselves. My white Creta now has a mirror-like finish that reflects like glass. The team's attention to detail is outstanding.",
      rating: 5,
    },
    {
      name: "Arjun Nair",
      vehicle: "Maruti Swift",
      text: "The transformation of my Swift's paint is unbelievable. What looked like a dull, scratched surface is now a glossy, flawless finish. The process took time, but the results are worth every minute and rupee spent.",
      rating: 5,
    },
  ]

  const maintenanceTips = [
    "Use the two-bucket wash method to minimize swirl marks during washing",
    "Always use clean, high-quality microfiber towels for drying",
    "Avoid washing your car in direct sunlight or when the surface is hot",
    "Apply a quality wax or sealant every 3-4 months to maintain protection",
    "Address bird droppings, tree sap, and other contaminants immediately",
    "Consider professional maintenance washes to preserve the corrected finish",
    "Park in shaded areas when possible to minimize UV exposure",
    "Use proper washing techniques and quality car care products",
  ]

  const beforeAfterComparisons = [
    {
      title: "Swirl Mark Removal",
      before: "Visible swirl marks and micro-scratches that create a hazy appearance",
      after: "Crystal clear finish with deep gloss and perfect reflections",
    },
    {
      title: "Oxidation Correction",
      before: "Dull, chalky appearance with faded color and lack of depth",
      after: "Vibrant color restoration with enhanced depth and clarity",
    },
    {
      title: "Water Spot Removal",
      before: "Etched water spots and mineral deposits marring the surface",
      after: "Smooth, spot-free finish with uniform appearance",
    },
  ]

  return (
    <main className="pt-16">
      {/* Breadcrumb */}
      <section className="py-6 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/what-we-do" className="text-gray-400 hover:text-white">
              What We Do
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white">Detailing and Polishing</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/what-we-do" className="inline-flex items-center text-white/80 hover:text-white mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Detailing & Polishing</h1>
              <p className="text-xl opacity-90 mb-8">
                Professional paint correction and polishing services that restore your vehicle's original shine and
                eliminate imperfections. Our multi-stage process removes years of damage while enhancing gloss and depth
                for a showroom-quality finish.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleBookService}
                  size="lg"
                  variant="secondary"
                  className="bg-white text-rose-600 hover:bg-gray-100"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Book Service
                </Button>
                <Button
                  onClick={handleGetQuote}
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rose-600"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/detailing-polishing.png"
                alt="Detailing and Polishing Service"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Service Features</h2>
            <p className="text-xl text-gray-400">Professional paint correction and enhancement techniques</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-6 w-6 text-rose-500 mb-3" />
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Detailing Service?</h2>
            <p className="text-xl text-gray-400">Transform your vehicle's appearance with professional results</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center glass-morphism rounded-2xl p-8 animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Correction Process</h2>
            <p className="text-xl text-gray-400">Systematic approach to paint correction for optimal results</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-rose-600 hidden md:block"></div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <div
                  key={step.title}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-rose-600 text-white text-2xl font-bold z-10 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <div
                    className={`glass-morphism rounded-xl p-6 animate-slide-up hover-lift flex-1 ${
                      index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="md:hidden flex items-center mb-4">
                      <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-white font-semibold">Step {index + 1}</h3>
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-2 hidden md:block">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Correction Packages</h2>
            <p className="text-xl text-gray-400">Choose the right level of correction for your vehicle</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className="glass-morphism rounded-2xl p-8 animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-rose-500 font-semibold mb-4">{pkg.duration}</p>
                <div className="text-2xl font-bold text-white mb-6">{pkg.price}</div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-400 mb-6">
                  <span className="font-semibold text-white">Ideal for:</span> {pkg.ideal}
                </p>

                <Button
                  onClick={handleBookService}
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                  variant="default"
                >
                  Book This Package
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 text-gray-400">
            <p>* Prices may vary based on vehicle size, condition, and specific requirements.</p>
            <p>Contact us for a personalized assessment and quote.</p>
          </div>
        </div>
      </section>

      {/* Before/After Comparisons */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transformation Results</h2>
            <p className="text-xl text-gray-400">See the dramatic difference our paint correction makes</p>
          </div>

          <div className="space-y-12">
            {beforeAfterComparisons.map((comparison, index) => (
              <div key={comparison.title} className="grid md:grid-cols-2 gap-8 items-center">
                <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift">
                  <h3 className="text-white font-semibold text-xl mb-4">Before: {comparison.title}</h3>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={`/images/car-detailing-${index + 1}.jpg`}
                      alt={`Before ${comparison.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-400">{comparison.before}</p>
                </div>

                <div
                  className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift"
                  style={{ animationDelay: "0.2s" }}
                >
                  <h3 className="text-white font-semibold text-xl mb-4">After: {comparison.title}</h3>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={`/images/car-detailing-${index + 2}.jpg`}
                      alt={`After ${comparison.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-400">{comparison.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Customer Experiences</h2>
            <p className="text-xl text-gray-400">What our clients say about our paint correction service</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-rose-500 text-rose-500" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.vehicle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Maintenance Tips</h2>
            <p className="text-xl text-gray-400">How to maintain your corrected paint finish</p>
          </div>

          <div className="glass-morphism rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {maintenanceTips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-rose-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Common questions about paint correction and polishing</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-morphism rounded-xl overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-white font-semibold text-lg">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-rose-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-rose-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-6 pt-0 border-t border-slate-700">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Related Services</h2>
            <p className="text-xl text-gray-400">Explore other services that complement paint correction</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/what-we-do/ceramic-coating" className="block">
              <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full">
                <h3 className="text-white font-semibold text-xl mb-4">Ceramic Coating</h3>
                <p className="text-gray-400 mb-4">
                  Protect your newly corrected paint with advanced ceramic coating for long-lasting results.
                </p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>

            <Link href="/what-we-do/paint-protection-film" className="block">
              <div
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-white font-semibold text-xl mb-4">Paint Protection Film</h3>
                <p className="text-gray-400 mb-4">
                  Add physical protection to your corrected paint with invisible paint protection film.
                </p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>

            <Link href="/what-we-do/interior-detailing" className="block">
              <div
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-white font-semibold text-xl mb-4">Interior Detailing</h3>
                <p className="text-gray-400 mb-4">
                  Complete your vehicle's transformation with professional interior cleaning and restoration.
                </p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Restore Your Car's Shine</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the transformation with our professional detailing and polishing service. Bring back that
            showroom shine and protect your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBookService}
              size="lg"
              variant="secondary"
              className="bg-white text-rose-600 hover:bg-gray-100"
            >
              Book Detailing Service
            </Button>
            <Button
              onClick={handleGetQuote}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
