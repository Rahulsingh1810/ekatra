"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Palette,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function PaintProtectionFilmPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleBookService = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I'm interested in booking Paint Protection Film service. Can you please provide more details and help me schedule an appointment?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleGetQuote = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hello! I would like to get a quote for Paint Protection Film service. Can you please share the pricing details?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const features = [
    {
      title: "Self-Healing Technology",
      description:
        "Advanced thermoplastic urethane film that automatically repairs minor scratches and swirl marks when exposed to heat from the sun or warm water.",
    },
    {
      title: "Crystal Clear Finish",
      description:
        "Optically clear film that's virtually invisible once applied, preserving your vehicle's original appearance while providing superior protection.",
    },
    {
      title: "10-Year Warranty",
      description:
        "Our premium paint protection film comes with a comprehensive 10-year warranty against yellowing, cracking, peeling, and delamination.",
    },
    {
      title: "Custom Fit Installation",
      description:
        "Computer-cut patterns specific to your vehicle's make and model ensure perfect coverage and seamless installation.",
    },
    {
      title: "Stone Chip Protection",
      description:
        "Absorbs the impact from road debris, gravel, and stone chips that would otherwise damage your vehicle's paint.",
    },
    {
      title: "UV Resistance",
      description:
        "Built-in UV inhibitors prevent film degradation and protect your paint from sun damage and fading over time.",
    },
    {
      title: "Hydrophobic Surface",
      description:
        "Water-repelling properties make cleaning easier and help maintain your vehicle's appearance even in harsh conditions.",
    },
    {
      title: "Removable Without Damage",
      description:
        "Can be safely removed years later without damaging your vehicle's original paint, preserving its resale value.",
    },
  ]

  const benefits = [
    {
      icon: <Palette className="h-8 w-8 text-rose-500" />,
      title: "Invisible Protection",
      description:
        "Our premium PPF is optically clear and virtually invisible once installed. It preserves your vehicle's original appearance while providing superior protection against road debris, stone chips, bug splatter, bird droppings, and environmental contaminants.",
    },
    {
      icon: <Shield className="h-8 w-8 text-rose-500" />,
      title: "Self-Healing Technology",
      description:
        "The advanced thermoplastic urethane film has self-healing properties that allow minor scratches and swirl marks to disappear when exposed to heat. Simply park in the sun or rinse with warm water, and watch as light scratches vanish.",
    },
    {
      icon: <Clock className="h-8 w-8 text-rose-500" />,
      title: "Long-term Investment",
      description:
        "With a 10-year warranty, our PPF provides long-lasting protection that maintains your vehicle's appearance and value. It's a smart investment that pays for itself by preventing expensive paint damage and preserving resale value.",
    },
  ]

  const process = [
    {
      title: "Vehicle Assessment",
      description:
        "Our technicians thoroughly examine your vehicle to identify any existing paint issues that need to be addressed before PPF installation.",
    },
    {
      title: "Surface Preparation",
      description:
        "The vehicle undergoes a comprehensive cleaning process including clay bar treatment to remove contaminants and ensure proper film adhesion.",
    },
    {
      title: "Custom Pattern Creation",
      description:
        "Using specialized software, we create precise patterns tailored to your specific vehicle make and model for a perfect fit.",
    },
    {
      title: "Film Cutting",
      description:
        "Our computer-controlled cutting system precisely cuts the film according to the custom patterns, ensuring accurate coverage.",
    },
    {
      title: "Professional Installation",
      description:
        "Skilled technicians apply the film using specialized techniques and tools to ensure proper positioning, smooth application, and elimination of air bubbles.",
    },
    {
      title: "Quality Inspection",
      description:
        "After installation, we conduct a thorough inspection to ensure perfect coverage, seamless edges, and flawless appearance.",
    },
  ]

  const packages = [
    {
      name: "Partial Front Protection",
      coverage: "Partial hood, fenders, mirrors, bumper",
      features: ["High-impact areas coverage", "Self-healing film", "10-year warranty", "Custom-cut patterns"],
      price: "₹25,000 - ₹35,000",
      ideal: "Budget-conscious protection for high-impact areas",
    },
    {
      name: "Full Front Protection",
      coverage: "Complete hood, fenders, mirrors, bumper, headlights",
      features: [
        "Complete front-end coverage",
        "Advanced self-healing technology",
        "Hydrophobic surface",
        "UV protection",
        "10-year warranty",
      ],
      price: "₹45,000 - ₹60,000",
      ideal: "Comprehensive protection for daily drivers",
    },
    {
      name: "Complete Vehicle Protection",
      coverage: "Full vehicle coverage including all painted surfaces",
      features: [
        "Total vehicle protection",
        "Premium self-healing film",
        "Maximum UV and chemical resistance",
        "Enhanced hydrophobic properties",
        "10-year comprehensive warranty",
      ],
      price: "₹1,00,000 - ₹1,50,000",
      ideal: "Luxury and high-end vehicles requiring maximum protection",
    },
  ]

  const faqs = [
    {
      question: "What is Paint Protection Film (PPF)?",
      answer:
        "Paint Protection Film is a thermoplastic urethane film applied to painted surfaces of a new or used vehicle to protect the paint from stone chips, bug splatter, and minor abrasions. It's virtually invisible, self-healing, and helps maintain your vehicle's appearance and value.",
    },
    {
      question: "How long does Paint Protection Film last?",
      answer:
        "Our premium PPF comes with a 10-year warranty against yellowing, cracking, and peeling. With proper care and maintenance, it can protect your vehicle for a decade or more while maintaining its clarity and protective properties.",
    },
    {
      question: "Is PPF better than ceramic coating?",
      answer:
        "PPF and ceramic coating serve different purposes. PPF provides physical protection against stone chips, scratches, and physical impacts that ceramic coating cannot. Ceramic coating offers superior chemical protection and enhanced gloss. For ultimate protection, we recommend combining both - PPF for physical protection and ceramic coating on top for chemical resistance and enhanced appearance.",
    },
    {
      question: "Will PPF damage my paint when removed?",
      answer:
        "No, when professionally installed and removed, PPF will not damage your vehicle's paint. In fact, the paint underneath the film will be in pristine condition compared to unprotected areas, as it's been shielded from UV rays and environmental contaminants.",
    },
    {
      question: "Can PPF be applied to any vehicle?",
      answer:
        "Yes, PPF can be applied to any vehicle regardless of age, make, or model. We have custom patterns for virtually every vehicle, and our skilled technicians can create custom solutions for rare or modified vehicles.",
    },
    {
      question: "How do I maintain my vehicle after PPF installation?",
      answer:
        "Maintenance is simple. Wait 7 days after installation before washing. Use pH-neutral car wash soap, avoid harsh chemicals, and don't wax over the film. The self-healing properties activate with heat, so minor scratches can be removed by leaving your car in the sun or using warm water.",
    },
  ]

  const testimonials = [
    {
      name: "Aditya Mehta",
      vehicle: "Porsche 911",
      text: "After investing in my dream car, I wanted the best protection available. The PPF installation at Ekatra Care was flawless - you can't even tell it's there! Already saved my front bumper from several stone chips on a recent road trip.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      vehicle: "Range Rover Sport",
      text: "Living in Bangalore with its construction zones everywhere, my SUV was constantly getting stone chips. Since getting the full front PPF package, I've had zero paint damage despite driving through the same areas daily. Worth every rupee!",
      rating: 5,
    },
    {
      name: "Karthik Iyer",
      vehicle: "Tesla Model 3",
      text: "The self-healing feature of this film is incredible! Had a few light scratches after a trip, and they literally disappeared after sitting in the sun for a few hours. The clarity is perfect - you can't tell the film is there unless you know what to look for.",
      rating: 5,
    },
  ]

  const maintenanceTips = [
    "Wait at least 7 days after installation before washing your vehicle",
    "Use pH-neutral car wash soap and avoid harsh chemicals",
    "Don't wax over the film - it already has hydrophobic properties",
    "For minor scratches, leave your vehicle in the sun or use warm water to activate self-healing",
    "Avoid high-pressure washing directly on the edges of the film",
    "Clean bird droppings and tree sap promptly to prevent staining",
    "Schedule professional inspections annually to ensure optimal performance",
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
            <span className="text-white">Paint Protection Film</span>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Paint Protection Film</h1>
              <p className="text-xl opacity-90 mb-8">
                Premium-grade thermoplastic urethane film that provides invisible yet powerful protection against stone
                chips, scratches, and environmental damage. Our self-healing PPF preserves your vehicle's appearance
                while maintaining its resale value.
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
                src="/images/paint-protection.png"
                alt="Paint Protection Film Service"
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
            <p className="text-xl text-gray-400">Advanced paint protection film technology</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Paint Protection Film?</h2>
            <p className="text-xl text-gray-400">The ultimate invisible protection for your vehicle</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Installation Process</h2>
            <p className="text-xl text-gray-400">
              Professional PPF installation requires precision, expertise, and attention to detail
            </p>
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

      {/* Coverage Options */}
      {/* <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Protection Packages</h2>
            <p className="text-xl text-gray-400">Choose the perfect coverage for your vehicle</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className="glass-morphism rounded-2xl p-8 animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-rose-500 font-semibold mb-4">{pkg.coverage}</p>
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
            <p>Contact us for a personalized quote tailored to your vehicle.</p>
          </div>
        </div>
      </section> */}

      {/* Before/After Section */}
      {/* <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Protection Demonstration</h2>
            <p className="text-xl text-gray-400">See how PPF shields your vehicle from damage</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift">
              <h3 className="text-white font-semibold text-xl mb-4">Without Protection</h3>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/car-detailing-3.jpg"
                  alt="Without Paint Protection Film"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-400">
                Unprotected paint is vulnerable to stone chips, scratches, and environmental damage that permanently mar
                your vehicle's appearance.
              </p>
            </div>

            <div
              className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-white font-semibold text-xl mb-4">With PPF Protection</h3>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/car-detailing-4.jpg"
                  alt="With Paint Protection Film"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-400">
                PPF absorbs impacts and prevents damage while remaining virtually invisible, preserving your vehicle's
                pristine appearance.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Customer Experiences</h2>
            <p className="text-xl text-gray-400">What our clients say about our PPF installation</p>
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
            <p className="text-xl text-gray-400">How to care for your paint protection film</p>
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
            <p className="text-xl text-gray-400">Common questions about paint protection film</p>
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
            <p className="text-xl text-gray-400">Explore other services that complement paint protection film</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/what-we-do/ceramic-coating" className="block">
              <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full">
                <h3 className="text-white font-semibold text-xl mb-4">Ceramic Coating</h3>
                <p className="text-gray-400 mb-4">
                  Apply ceramic coating over PPF for enhanced gloss, hydrophobic properties, and chemical resistance.
                </p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>

            <Link href="/what-we-do/detailing-polishing" className="block">
              <div
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-white font-semibold text-xl mb-4">Detailing & Polishing</h3>
                <p className="text-gray-400 mb-4">
                  Professional paint correction ensures your vehicle's paint is perfect before PPF installation.
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
                  Complete your vehicle's protection with professional interior cleaning and protection.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Protect Your Paint Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Invest in invisible protection that keeps your car looking new for years to come. Our professional PPF
            installation provides peace of mind and preserves your vehicle's value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBookService}
              size="lg"
              variant="secondary"
              className="bg-white text-rose-600 hover:bg-gray-100"
            >
              Book PPF Installation
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
