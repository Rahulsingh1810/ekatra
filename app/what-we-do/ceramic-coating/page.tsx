"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Shield, Star, Clock, CheckCircle, Phone, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function CeramicCoatingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleBookService = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I'm interested in booking Ceramic Coating service. Can you please provide more details and help me schedule an appointment?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleGetQuote = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hello! I would like to get a quote for Ceramic Coating service. Can you please share the pricing details?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const features = [
    {
      title: "9H Hardness Protection",
      description:
        "The highest grade of hardness on the mineral hardness scale, providing exceptional scratch resistance and protection against environmental damage.",
    },
    {
      title: "Hydrophobic Properties",
      description:
        "Advanced water-repelling technology that causes water to bead up and roll off the surface, taking dirt and contaminants with it for easier maintenance.",
    },
    {
      title: "UV Protection",
      description:
        "Specialized UV-blocking compounds that prevent the sun's harmful rays from fading and oxidizing your vehicle's paint, maintaining color vibrancy for years.",
    },
    {
      title: "Enhanced Gloss",
      description:
        "Creates a deep, mirror-like finish that enhances your car's paint color and provides a showroom-quality shine that lasts for years.",
    },
    {
      title: "Chemical Resistance",
      description:
        "Forms a protective barrier against harsh chemicals, bird droppings, tree sap, and other contaminants that can damage your vehicle's paint.",
    },
    {
      title: "5-Year Warranty",
      description:
        "Our premium ceramic coating comes with a comprehensive 5-year warranty, guaranteeing long-lasting protection and performance.",
    },
    {
      title: "Professional Application",
      description:
        "Applied by certified technicians in a controlled environment using specialized equipment and techniques for optimal results.",
    },
    {
      title: "Long-lasting Protection",
      description:
        "Unlike traditional waxes that last weeks or months, our ceramic coating provides protection that lasts for years with proper maintenance.",
    },
  ]

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-rose-500" />,
      title: "Superior Protection",
      description:
        "9H hardness coating provides maximum protection against scratches, swirl marks, and environmental damage. The ceramic particles form a permanent bond with your vehicle's paint, creating a sacrificial layer that takes the abuse instead of your paint.",
    },
    {
      icon: <Star className="h-8 w-8 text-rose-500" />,
      title: "Enhanced Appearance",
      description:
        "Deep gloss finish enhances your car's paint color and provides a showroom-quality shine. The coating amplifies the reflective properties of your paint, creating a wet-look that turns heads wherever you go.",
    },
    {
      icon: <Clock className="h-8 w-8 text-rose-500" />,
      title: "Long-lasting Results",
      description:
        "Professional-grade ceramic coating lasts up to 5 years with proper maintenance. Unlike traditional waxes and sealants that degrade quickly, ceramic coating forms a permanent bond with your paint that won't wash away or break down over time.",
    },
  ]

  const process = [
    {
      title: "Thorough Paint Decontamination",
      description:
        "We begin with a multi-stage washing process using pH-neutral shampoos, followed by clay bar treatment to remove embedded contaminants. This ensures the surface is completely clean before coating application.",
    },
    {
      title: "Paint Correction",
      description:
        "Our certified technicians perform professional paint correction to remove swirl marks, scratches, and imperfections. This step may involve multiple stages of machine polishing with progressively finer compounds.",
    },
    {
      title: "Surface Preparation",
      description:
        "The vehicle is thoroughly wiped down with specialized panel wipes to remove any polishing oils or residues. This ensures the ceramic coating can properly bond with the paint surface.",
    },
    {
      title: "Ceramic Coating Application",
      description:
        "The coating is applied in a controlled environment by certified technicians. Each panel is carefully coated using proper techniques to ensure even coverage and optimal bonding.",
    },
    {
      title: "Curing Process",
      description:
        "After application, the vehicle undergoes a curing process under infrared lamps to accelerate the hardening of the ceramic coating. This ensures proper cross-linking of the ceramic particles.",
    },
    {
      title: "Final Inspection",
      description:
        "Our quality control team performs a comprehensive inspection to ensure perfect application and finish. Any imperfections are addressed before the vehicle is released.",
    },
  ]

  const packages = [
    {
      name: "Standard Ceramic",
      duration: "2-3 years protection",
      features: ["9H hardness", "Hydrophobic properties", "UV protection", "Basic warranty"],
      price: "₹15,000 - ₹25,000",
      ideal: "Daily drivers and newer vehicles",
    },
    {
      name: "Premium Ceramic",
      duration: "5+ years protection",
      features: [
        "Enhanced 9H+ hardness",
        "Advanced hydrophobic properties",
        "Superior UV protection",
        "Chemical resistance",
        "5-year warranty",
      ],
      price: "₹30,000 - ₹45,000",
      ideal: "Luxury vehicles and enthusiasts",
    },
    {
      name: "Ultimate Ceramic",
      duration: "7+ years protection",
      features: [
        "Maximum hardness protection",
        "Extreme hydrophobic properties",
        "Complete UV protection",
        "Enhanced gloss finish",
        "Chemical & stain resistance",
        "7-year warranty",
      ],
      price: "₹50,000 - ₹70,000",
      ideal: "High-end luxury and exotic cars",
    },
  ]

  const faqs = [
    {
      question: "How long does ceramic coating last?",
      answer:
        "Our ceramic coatings last between 2-7 years depending on the package you choose. With proper maintenance and care, premium coatings can last even longer. Unlike traditional waxes that last 2-3 months, ceramic coatings form a permanent bond with your paint that won't wash away.",
    },
    {
      question: "Is ceramic coating worth the investment?",
      answer:
        "Absolutely. Ceramic coating provides long-term protection that saves you money over time by reducing the need for frequent detailing and protecting your vehicle's paint from damage that would require expensive repairs. It also helps maintain your vehicle's resale value by preserving its appearance.",
    },
    {
      question: "Do I still need to wash my car after ceramic coating?",
      answer:
        "Yes, regular washing is still necessary, but it becomes much easier. Dirt and contaminants won't bond as easily to the coated surface, and most debris can be removed with a simple rinse. We recommend a gentle hand wash every 2-3 weeks using pH-neutral shampoo specifically designed for ceramic coated vehicles.",
    },
    {
      question: "Can ceramic coating remove existing scratches?",
      answer:
        "Ceramic coating itself doesn't remove scratches. However, our application process includes paint correction steps that address existing scratches, swirl marks, and imperfections before the coating is applied. This combination results in a flawless, protected finish.",
    },
    {
      question: "How is ceramic coating different from waxing?",
      answer:
        "Traditional wax sits on top of your paint and wears off within 2-3 months. Ceramic coating chemically bonds with your vehicle's paint, creating a permanent layer that won't wash away. It provides superior protection, lasts years instead of months, and offers enhanced hydrophobic properties and gloss that wax cannot match.",
    },
    {
      question: "How long does the application process take?",
      answer:
        "The complete process typically takes 2-5 days depending on your vehicle's size, condition, and the package you select. This includes thorough preparation, paint correction, coating application, and curing time. We never rush this process as proper application is crucial for optimal results and longevity.",
    },
  ]

  const testimonials = [
    {
      name: "Rahul Sharma",
      vehicle: "BMW 5 Series",
      text: "I had the Premium Ceramic Coating done on my BMW last year, and I'm still amazed at how water beads up and rolls off. The shine is incredible, and maintenance has become so much easier. Worth every rupee!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      vehicle: "Mercedes-Benz GLC",
      text: "After researching various options, I chose Ekatra Care for ceramic coating my new Mercedes. The attention to detail during the process was impressive, and the results exceeded my expectations. The depth and gloss are stunning!",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      vehicle: "Audi Q7",
      text: "Living in Bangalore with its dust and unpredictable weather, I needed serious protection for my Audi. The ceramic coating has made a huge difference - my car stays cleaner longer, and when it does get dirty, cleaning is a breeze.",
      rating: 5,
    },
  ]

  const maintenanceTips = [
    "Wash your vehicle every 2-3 weeks using pH-neutral shampoo",
    "Avoid automatic car washes with abrasive brushes",
    "Use microfiber towels for drying to prevent scratches",
    "Apply a ceramic boost spray every 3-4 months for enhanced protection",
    "Address bird droppings and tree sap immediately to prevent etching",
    "Park in shaded areas when possible to minimize UV exposure",
    "Schedule professional inspections every 6-12 months",
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
            <span className="text-white">Ceramic Coating</span>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Ceramic Coating</h1>
              <p className="text-xl opacity-90 mb-8">
                Advanced nano-ceramic protection technology that provides unmatched durability, gloss, and protection
                for your vehicle's paint. Our professional-grade ceramic coating creates a permanent bond with your
                paint, offering years of protection against environmental damage, UV rays, and chemical contaminants.
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
                src="/images/ceramic-coating.png"
                alt="Ceramic Coating Service"
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
            <p className="text-xl text-gray-400">
              Our ceramic coating service offers advanced protection and enhancement for your vehicle
            </p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Ceramic Coating?</h2>
            <p className="text-xl text-gray-400">The benefits that make ceramic coating worth the investment</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-400">
              Our meticulous ceramic coating application process ensures optimal results and longevity
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

      {/* Packages Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Ceramic Coating Packages</h2>
            <p className="text-xl text-gray-400">Choose the perfect protection package for your vehicle</p>
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
            <p>Contact us for a personalized quote tailored to your vehicle.</p>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transformation Results</h2>
            <p className="text-xl text-gray-400">See the dramatic difference our ceramic coating makes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift">
              <h3 className="text-white font-semibold text-xl mb-4">Before Ceramic Coating</h3>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image src="/images/car-detailing-1.jpg" alt="Before Ceramic Coating" fill className="object-cover" />
              </div>
              <p className="mt-4 text-gray-400">
                Dull finish with visible swirl marks, water spots, and lack of depth in the paint.
              </p>
            </div>

            <div
              className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-white font-semibold text-xl mb-4">After Ceramic Coating</h3>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image src="/images/car-detailing-2.jpg" alt="After Ceramic Coating" fill className="object-cover" />
              </div>
              <p className="mt-4 text-gray-400">
                Mirror-like finish with enhanced gloss, depth, and clarity. Water beads up and rolls off easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Customer Experiences</h2>
            <p className="text-xl text-gray-400">What our clients say about our ceramic coating service</p>
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
            <p className="text-xl text-gray-400">How to maintain your ceramic coating for optimal longevity</p>
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
            <p className="text-xl text-gray-400">Common questions about our ceramic coating service</p>
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
            <p className="text-xl text-gray-400">Explore other services that complement ceramic coating</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/what-we-do/paint-protection-film" className="block">
              <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full">
                <h3 className="text-white font-semibold text-xl mb-4">Paint Protection Film</h3>
                <p className="text-gray-400 mb-4">
                  Invisible urethane film that provides the ultimate physical protection against stone chips and
                  scratches.
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
                  Professional paint correction and polishing to remove imperfections before coating application.
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
                  Complete interior restoration and protection to complement your exterior ceramic coating.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Protect Your Investment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Give your car the ultimate protection with our professional ceramic coating service. Book now or get a
            custom quote tailored to your vehicle's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBookService}
              size="lg"
              variant="secondary"
              className="bg-white text-rose-600 hover:bg-gray-100"
            >
              Book Ceramic Coating
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
