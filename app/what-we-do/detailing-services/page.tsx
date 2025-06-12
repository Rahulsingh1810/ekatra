"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Zap,
  Star,
  Clock,
  CheckCircle,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Shield,
  Sparkles,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function DetailingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleBookService = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I'm interested in booking Detailing Services. Can you please provide more details and help me schedule an appointment?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleGetQuote = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hello! I would like to get a quote for Detailing Services. Can you please share the pricing details?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const features = [
    {
      title: "Glass & Windshield Care",
      description:
        "Professional glass cleaning and treatment services including water spot removal, clarity restoration, and hydrophobic coating application for enhanced visibility and safety.",
    },
    {
      title: "Headlight Restoration",
      description:
        "Complete headlight restoration service that removes oxidation, yellowing, and cloudiness while applying protective coating to prevent future degradation.",
    },
    {
      title: "Deodorizer Treatment",
      description:
        "Advanced odor elimination using ozone generators, enzymatic cleaners, and specialized techniques to neutralize persistent odors at the molecular level.",
    },
    {
      title: "Leather Seat Care",
      description:
        "Comprehensive leather cleaning, conditioning, and protection service that restores suppleness, prevents cracking, and maintains the natural beauty of leather surfaces.",
    },
    {
      title: "Chrome & Metal Polishing",
      description:
        "Specialized polishing and restoration of chrome, aluminum, and stainless steel components to remove oxidation and restore mirror-like finish.",
    },
    {
      title: "Plastic Trim Restoration",
      description:
        "Professional restoration of faded plastic trim and moldings using specialized products that restore original color and provide long-lasting protection.",
    },
    {
      title: "Engine Bay Detailing",
      description:
        "Comprehensive engine compartment cleaning and detailing that removes grease, grime, and contaminants while protecting sensitive components.",
    },
    {
      title: "Wheel & Tire Detailing",
      description:
        "Complete wheel and tire care including deep cleaning, polishing, and protection application for enhanced appearance and longevity.",
    },
  ]

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-rose-500" />,
      title: "Comprehensive Care",
      description:
        "Our detailing services cover every aspect of your vehicle's appearance and maintenance. From glass clarity to engine bay cleanliness, we address all the details that make your vehicle look, feel, and perform its best. No area is overlooked in our thorough approach.",
    },
    {
      icon: <Star className="h-8 w-8 text-rose-500" />,
      title: "Professional Results",
      description:
        "Expert techniques and premium products ensure showroom-quality results every time. Our trained technicians use industry-leading methods and professional-grade equipment to deliver consistent, exceptional outcomes that exceed expectations.",
    },
    {
      icon: <Clock className="h-8 w-8 text-rose-500" />,
      title: "Time Efficient",
      description:
        "Streamlined processes and experienced technicians deliver quality results in optimal time. We respect your schedule while never compromising on quality, ensuring you get back on the road with a perfectly detailed vehicle.",
    },
  ]

  const serviceCategories = [
    {
      title: "Glass & Vision Services",
      icon: <Eye className="h-8 w-8 text-rose-500" />,
      services: [
        "Windshield deep cleaning and clarity restoration",
        "Water spot removal from all glass surfaces",
        "Hydrophobic coating application for rain repellency",
        "Interior glass cleaning for streak-free visibility",
        "Mirror polishing and clarity enhancement",
      ],
    },
    {
      title: "Restoration Services",
      icon: <Sparkles className="h-8 w-8 text-rose-500" />,
      services: [
        "Headlight restoration and UV protection",
        "Plastic trim color restoration",
        "Chrome and metal polishing",
        "Rubber seal conditioning and protection",
        "Faded paint touch-up and correction",
      ],
    },
    {
      title: "Protection Services",
      icon: <Shield className="h-8 w-8 text-rose-500" />,
      services: [
        "Leather conditioning and protection",
        "Fabric protection treatment",
        "UV protection for interior surfaces",
        "Anti-static treatment for dust reduction",
        "Stain resistance application",
      ],
    },
  ]

  const process = [
    {
      title: "Comprehensive Assessment",
      description:
        "We begin with a detailed evaluation of your vehicle to identify specific needs, problem areas, and the most appropriate treatments for each surface and component.",
    },
    {
      title: "Surface Preparation",
      description:
        "All surfaces are properly prepared through cleaning, decontamination, and pre-treatment to ensure optimal results from subsequent detailing processes.",
    },
    {
      title: "Specialized Treatment",
      description:
        "Each service is performed using appropriate techniques and products specific to the material and condition, ensuring safe and effective results.",
    },
    {
      title: "Quality Control",
      description:
        "Every completed service undergoes thorough inspection to ensure it meets our high standards before moving to the next phase of the detailing process.",
    },
    {
      title: "Protection Application",
      description:
        "Appropriate protective treatments are applied to maintain results and provide ongoing protection against environmental damage and wear.",
    },
    {
      title: "Final Inspection",
      description:
        "A comprehensive final inspection ensures all services have been completed to perfection and the vehicle meets our quality standards.",
    },
  ]

  const packages = [
    {
      name: "Essential Detailing",
      duration: "3-4 hours",
      features: [
        "Glass cleaning & treatment",
        "Basic headlight restoration",
        "Interior deodorizing",
        "Wheel & tire cleaning",
        "Basic trim restoration",
      ],
      price: "₹5,000 - ₹8,000",
      ideal: "Regular maintenance and basic enhancement",
    },
    {
      name: "Complete Detailing",
      duration: "5-7 hours",
      features: [
        "Comprehensive glass care",
        "Full headlight restoration",
        "Advanced odor elimination",
        "Leather conditioning",
        "Chrome polishing",
        "Engine bay cleaning",
      ],
      price: "₹8,000 - ₹12,000",
      ideal: "Comprehensive restoration and protection",
    },
    {
      name: "Premium Detailing",
      duration: "7-9 hours",
      features: [
        "Complete glass treatment package",
        "Professional headlight restoration",
        "Ozone odor treatment",
        "Full leather care service",
        "Complete trim restoration",
        "Detailed engine bay service",
        "6-month protection warranty",
      ],
      price: "₹12,000 - ₹18,000",
      ideal: "Maximum enhancement and long-term protection",
    },
  ]

  const faqs = [
    {
      question: "What's included in your detailing services?",
      answer:
        "Our detailing services include glass and windshield care, headlight restoration, odor elimination, leather conditioning, chrome polishing, plastic trim restoration, engine bay cleaning, and wheel detailing. Each service can be customized based on your vehicle's specific needs and condition.",
    },
    {
      question: "How often should I have these detailing services done?",
      answer:
        "The frequency depends on your driving conditions and vehicle use. Generally, comprehensive detailing every 3-6 months maintains optimal appearance and protection. Vehicles exposed to harsh conditions or heavy use may benefit from more frequent service, while garage-kept vehicles may need less frequent attention.",
    },
    {
      question: "Can you restore severely yellowed headlights?",
      answer:
        "Yes, we can restore most yellowed and cloudy headlights to near-original clarity. Our multi-stage restoration process removes oxidation, polishes the lens, and applies protective coating. However, headlights with internal damage or severe pitting may have limitations on restoration potential.",
    },
    {
      question: "Do you use eco-friendly products?",
      answer:
        "We prioritize environmentally responsible products whenever possible while maintaining effectiveness. Many of our cleaners and treatments are biodegradable and low-VOC. We also use water-efficient techniques and proper waste disposal methods to minimize environmental impact.",
    },
    {
      question: "Is engine bay cleaning safe for modern vehicles?",
      answer:
        "Yes, our engine bay cleaning is completely safe for modern vehicles. We use appropriate techniques and products that won't damage sensitive electronic components. We cover and protect sensitive areas while using steam cleaning and specialized degreasers designed for automotive use.",
    },
    {
      question: "How long do the results of detailing services last?",
      answer:
        "Results vary by service and environmental conditions. Glass treatments typically last 3-6 months, headlight restoration can last 1-2 years with proper care, and leather conditioning effects last 3-4 months. We provide maintenance recommendations to extend the life of each service.",
    },
  ]

  const testimonials = [
    {
      name: "Suresh Patel",
      vehicle: "Honda Accord",
      text: "The headlight restoration service was amazing! My 8-year-old Accord's headlights were so yellow I was considering replacement. Now they look brand new and the difference in visibility at night is incredible. Excellent value for money!",
      rating: 5,
    },
    {
      name: "Anita Sharma",
      vehicle: "Hyundai i20",
      text: "Had persistent odors in my car that I couldn't eliminate. Their ozone treatment completely removed all smells, and the interior feels fresh and clean. The attention to detail in their glass cleaning is also outstanding.",
      rating: 5,
    },
    {
      name: "Ravi Kumar",
      vehicle: "Mahindra XUV500",
      text: "The complete detailing package transformed my SUV. The engine bay looks spotless, chrome is mirror-bright, and the leather seats feel like new. Professional service with impressive results throughout.",
      rating: 5,
    },
  ]

  const maintenanceTips = [
    "Clean glass surfaces weekly to prevent buildup of contaminants",
    "Park in shaded areas to protect headlights from UV damage",
    "Address spills and stains immediately to prevent permanent damage",
    "Use appropriate cleaners for different surface materials",
    "Avoid harsh chemicals that can damage protective treatments",
    "Schedule regular professional maintenance to extend service life",
    "Keep leather surfaces conditioned to prevent cracking",
    "Maintain proper ventilation to prevent odor development",
  ]

  const beforeAfterComparisons = [
    {
      title: "Headlight Restoration",
      before: "Yellowed, cloudy headlights with reduced light output and poor visibility",
      after: "Crystal clear headlights with restored transparency and optimal light output",
    },
    {
      title: "Chrome Restoration",
      before: "Oxidized, dull chrome with water spots and surface corrosion",
      after: "Mirror-bright chrome finish with protective coating and enhanced shine",
    },
    {
      title: "Glass Treatment",
      before: "Water-spotted, hazy glass with reduced visibility and clarity",
      after: "Crystal clear glass with hydrophobic coating for enhanced visibility",
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
            <span className="text-white">Detailing Services</span>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Detailing Services</h1>
              <p className="text-xl opacity-90 mb-8">
                Comprehensive range of specialized car care and detailing services designed to maintain and enhance
                every aspect of your vehicle's appearance. From glass clarity to engine bay cleanliness, we perfect
                every detail.
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
                src="/images/detailing-services.png"
                alt="Detailing Services"
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
            <p className="text-xl text-gray-400">Specialized detailing services for complete vehicle care</p>
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

      {/* Service Categories */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-xl text-gray-400">Organized services for comprehensive vehicle care</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-morphism rounded-2xl p-8 animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-white ml-3">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Detailing Services?</h2>
            <p className="text-xl text-gray-400">Professional care for every detail of your vehicle</p>
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
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-400">Systematic approach to comprehensive detailing</p>
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
      {/* <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Detailing Packages</h2>
            <p className="text-xl text-gray-400">Choose the right level of detailing for your vehicle</p>
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
      </section> */}

      {/* Before/After Comparisons */}
      {/* <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transformation Results</h2>
            <p className="text-xl text-gray-400">See the dramatic difference our detailing services make</p>
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
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Customer Experiences</h2>
            <p className="text-xl text-gray-400">What our clients say about our detailing services</p>
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
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Maintenance Tips</h2>
            <p className="text-xl text-gray-400">How to maintain your detailed vehicle</p>
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
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Common questions about our detailing services</p>
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
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Related Services</h2>
            <p className="text-xl text-gray-400">Explore other services that complement our detailing services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/what-we-do/interior-detailing" className="block">
              <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full">
                <h3 className="text-white font-semibold text-xl mb-4">Interior Detailing</h3>
                <p className="text-gray-400 mb-4">
                  Complete interior cleaning and restoration to complement your exterior detailing services.
                </p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>

            <Link href="/what-we-do/ceramic-coating" className="block">
              <div
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-white font-semibold text-xl mb-4">Ceramic Coating</h3>
                <p className="text-gray-400 mb-4">
                  Protect your detailed vehicle with advanced ceramic coating for long-lasting results.
                </p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>

            <Link href="/what-we-do/paint-protection-film" className="block">
              <div
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-white font-semibold text-xl mb-4">Paint Protection Film</h3>
                <p className="text-gray-400 mb-4">
                  Add physical protection to your detailed vehicle with invisible paint protection film.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete Your Vehicle's Transformation</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience comprehensive detailing services that cover every aspect of your vehicle. From glass clarity to
            engine bay cleanliness, we perfect every detail.
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
