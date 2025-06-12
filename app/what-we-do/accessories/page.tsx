"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Wrench,
  Star,
  CheckCircle,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Shield,
  Zap,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AccessoriesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleBookService = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I'm interested in car accessories and services. Can you please provide more details and help me schedule an appointment?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleGetQuote = () => {
    const phoneNumber = "919902245212"
    const message = "Hello! I would like to get a quote for car accessories. Can you please share the pricing details?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const features = [
    {
      title: "Premium Audio Systems",
      description:
        "High-quality audio system installation including speakers, amplifiers, subwoofers, and head units from leading brands with professional wiring and tuning.",
    },
    {
      title: "Custom Seat Covers",
      description:
        "Tailored seat covers and upholstery solutions using premium materials like leather, fabric, and synthetic options designed for perfect fit and durability.",
    },
    {
      title: "Car Garnishing & Styling",
      description:
        "Aesthetic enhancement accessories including body kits, spoilers, chrome trim, decals, and styling elements to personalize your vehicle's appearance.",
    },
    {
      title: "Performance Accessories",
      description:
        "Performance enhancement parts including air filters, exhaust systems, suspension components, and engine modifications for improved power and handling.",
    },
    {
      title: "Interior Accessories",
      description:
        "Comprehensive interior enhancement including dashboard covers, floor mats, organizers, ambient lighting, and comfort accessories for enhanced driving experience.",
    },
    {
      title: "Electronic Accessories",
      description:
        "Modern electronic installations including GPS navigation, dash cameras, parking sensors, reverse cameras, and smartphone integration systems.",
    },
    {
      title: "Custom Lighting Solutions",
      description:
        "LED lighting upgrades, HID conversions, ambient lighting, underglow systems, and custom lighting solutions for enhanced visibility and aesthetics.",
    },
    {
      title: "Security System Installation",
      description:
        "Advanced security systems including alarms, immobilizers, GPS tracking, central locking, and anti-theft devices for comprehensive vehicle protection.",
    },
  ]

  const benefits = [
    {
      icon: <Wrench className="h-8 w-8 text-rose-500" />,
      title: "Professional Installation",
      description:
        "Expert installation services ensure all accessories are fitted properly and safely. Our certified technicians have extensive experience with various vehicle makes and models, guaranteeing quality workmanship and optimal performance of all installed accessories.",
    },
    {
      icon: <Star className="h-8 w-8 text-rose-500" />,
      title: "Quality Products",
      description:
        "We offer only premium quality accessories from trusted brands for lasting performance. All products come with manufacturer warranties and our quality guarantee, ensuring you get the best value for your investment in vehicle enhancement.",
    },
    {
      icon: <Shield className="h-8 w-8 text-rose-500" />,
      title: "Custom Solutions",
      description:
        "Personalized accessory solutions tailored to your specific needs and preferences. We work with you to understand your requirements and recommend the best accessories to enhance your vehicle's functionality, comfort, and appearance.",
    },
  ]

  const accessoryCategories = [
    {
      title: "Audio & Entertainment",
      icon: <Zap className="h-8 w-8 text-rose-500" />,
      items: [
        "Premium speaker systems and amplifiers",
        "Touchscreen infotainment systems",
        "Subwoofers and sound processors",
        "Bluetooth and wireless connectivity",
        "Smartphone integration solutions",
        "Rear entertainment systems",
      ],
    },
    {
      title: "Comfort & Convenience",
      icon: <Settings className="h-8 w-8 text-rose-500" />,
      items: [
        "Custom leather seat covers",
        "Ergonomic cushions and supports",
        "Climate control accessories",
        "Storage and organization solutions",
        "Window tinting and sun protection",
        "Keyless entry and remote start",
      ],
    },
    {
      title: "Safety & Security",
      icon: <Shield className="h-8 w-8 text-rose-500" />,
      items: [
        "Advanced alarm systems",
        "GPS tracking devices",
        "Parking sensors and cameras",
        "Dash cameras and recorders",
        "Emergency response systems",
        "Anti-theft immobilizers",
      ],
    },
    {
      title: "Performance & Styling",
      icon: <Wrench className="h-8 w-8 text-rose-500" />,
      items: [
        "Body kits and aerodynamic parts",
        "Performance exhaust systems",
        "Custom wheels and tires",
        "Suspension upgrades",
        "Engine performance chips",
        "LED lighting conversions",
      ],
    },
  ]

  const process = [
    {
      title: "Consultation & Assessment",
      description:
        "Detailed discussion of your needs, preferences, and budget. We assess your vehicle and recommend suitable accessories based on compatibility and your requirements.",
    },
    {
      title: "Product Selection",
      description:
        "Expert guidance in selecting the right accessories from our extensive catalog of premium brands, ensuring compatibility and optimal performance for your vehicle.",
    },
    {
      title: "Custom Design & Planning",
      description:
        "For complex installations, we create detailed plans and custom solutions, ensuring seamless integration with your vehicle's existing systems and aesthetics.",
    },
    {
      title: "Professional Installation",
      description:
        "Skilled technicians perform precise installation using proper tools and techniques, following manufacturer specifications and industry best practices.",
    },
    {
      title: "Testing & Calibration",
      description:
        "Comprehensive testing of all installed accessories to ensure proper functionality, optimal performance, and seamless integration with vehicle systems.",
    },
    {
      title: "Training & Warranty",
      description:
        "Complete user training on new accessories and comprehensive warranty coverage for both products and installation workmanship.",
    },
  ]

  const packages = [
    {
      name: "Essential Accessories",
      duration: "2-4 hours",
      features: [
        "Basic audio system upgrade",
        "Seat cover installation",
        "Floor mat set",
        "Basic lighting upgrades",
        "Installation warranty",
      ],
      price: "₹5,000 - ₹15,000",
      ideal: "Basic enhancement and comfort upgrades",
    },
    {
      name: "Premium Enhancement",
      duration: "4-8 hours",
      features: [
        "Advanced audio system",
        "Custom upholstery work",
        "Security system installation",
        "Performance accessories",
        "Electronic integrations",
        "Extended warranty",
      ],
      price: "₹15,000 - ₹40,000",
      ideal: "Comprehensive vehicle enhancement",
    },
    {
      name: "Luxury Transformation",
      duration: "8-16 hours",
      features: [
        "Premium audio & entertainment",
        "Complete interior makeover",
        "Advanced security systems",
        "Performance modifications",
        "Custom styling elements",
        "Professional calibration",
        "Lifetime support",
      ],
      price: "₹40,000 - ₹1,00,000+",
      ideal: "Complete luxury vehicle transformation",
    },
  ]

  const faqs = [
    {
      question: "Do you provide warranty on accessories and installation?",
      answer:
        "Yes, we provide comprehensive warranty coverage on both the accessories and our installation work. Product warranties vary by manufacturer (typically 1-3 years), while our installation workmanship is covered for 1 year. We also offer extended warranty options for additional peace of mind.",
    },
    {
      question: "Can you install accessories on any vehicle make and model?",
      answer:
        "We work with virtually all vehicle makes and models, from economy cars to luxury vehicles and commercial vehicles. Our technicians are trained on various vehicle systems and have access to vehicle-specific installation guides and compatibility databases to ensure proper fitment.",
    },
    {
      question: "How long does accessory installation typically take?",
      answer:
        "Installation time varies greatly depending on the complexity of accessories. Simple installations like seat covers or floor mats take 1-2 hours, while complex audio systems or security installations can take 4-8 hours. We provide accurate time estimates during consultation.",
    },
    {
      question: "Do you offer financing options for expensive accessories?",
      answer:
        "Yes, we offer flexible payment options and financing plans for larger accessory packages. We work with various financial partners to provide EMI options, making premium accessories more accessible. Contact us to discuss available financing options for your specific needs.",
    },
    {
      question: "Can accessories affect my vehicle's warranty?",
      answer:
        "When installed properly by certified technicians, most accessories won't void your vehicle warranty. However, we always recommend checking with your vehicle manufacturer for specific warranty terms. We use proper installation techniques and maintain detailed records to protect your warranty coverage.",
    },
    {
      question: "Do you provide after-sales support and maintenance?",
      answer:
        "We provide comprehensive after-sales support including maintenance, troubleshooting, upgrades, and repairs. Our relationship with customers continues long after installation, ensuring your accessories continue to perform optimally throughout their lifespan.",
    },
  ]

  const testimonials = [
    {
      name: "Karthik Reddy",
      vehicle: "Mahindra Thar",
      text: "Transformed my Thar with a complete audio system, LED lighting, and performance accessories. The installation quality is outstanding and everything works perfectly. The team really understood my vision and delivered beyond expectations!",
      rating: 5,
    },
    {
      name: "Ananya Sharma",
      vehicle: "Honda City",
      text: "Got custom leather seat covers and a premium audio system installed. The attention to detail is incredible - everything fits perfectly and looks factory-installed. Great value for money and excellent customer service throughout.",
      rating: 5,
    },
    {
      name: "Rajesh Gupta",
      vehicle: "Toyota Fortuner",
      text: "Complete security system installation including GPS tracking, dash cam, and parking sensors. Professional installation, clean wiring, and comprehensive training. Feel much more secure about my vehicle now. Highly recommended!",
      rating: 5,
    },
  ]

  const maintenanceTips = [
    "Follow manufacturer guidelines for accessory care and maintenance",
    "Keep electronic accessories clean and dry to prevent damage",
    "Regularly check connections and wiring for signs of wear",
    "Update software and firmware for electronic accessories as needed",
    "Schedule periodic inspections for complex installations",
    "Use appropriate cleaning products for different accessory materials",
    "Protect accessories from extreme temperatures and moisture",
    "Maintain warranty documentation and service records",
  ]

  const beforeAfterComparisons = [
    {
      title: "Audio System Upgrade",
      before: "Basic factory audio with poor sound quality and limited features",
      after: "Premium sound system with crystal clear audio and advanced features",
    },
    {
      title: "Interior Enhancement",
      before: "Standard interior with basic materials and limited comfort features",
      after: "Luxurious interior with custom upholstery and premium comfort accessories",
    },
    {
      title: "Security Enhancement",
      before: "Basic vehicle security with minimal theft protection",
      after: "Comprehensive security system with multiple layers of protection",
    },
  ]

  const popularAccessories = [
    {
      title: "Premium Audio Systems",
      description: "High-end speakers, amplifiers, and infotainment systems",
      icon: "🎵",
    },
    {
      title: "Custom Seat Covers",
      description: "Tailored leather and fabric seat protection solutions",
      icon: "🪑",
    },
    {
      title: "Security Systems",
      description: "Advanced alarms, GPS tracking, and anti-theft devices",
      icon: "🔒",
    },
    {
      title: "Performance Parts",
      description: "Engine, exhaust, and suspension performance upgrades",
      icon: "⚡",
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
            <span className="text-white">Accessories</span>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Accessories</h1>
              <p className="text-xl opacity-90 mb-8">
                Premium car care accessories and professional installation services to enhance your vehicle's
                functionality, comfort, and style. From audio systems to security solutions, we transform your driving
                experience with quality accessories and expert installation.
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
                src="/images/accessories.png"
                alt="Car Accessories"
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
            <p className="text-xl text-gray-400">Premium accessories and professional installation services</p>
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

      {/* Popular Accessories */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Popular Accessories</h2>
            <p className="text-xl text-gray-400">Most requested accessories and upgrades</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularAccessories.map((accessory, index) => (
              <div
                key={accessory.title}
                className="glass-morphism rounded-xl p-6 text-center animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{accessory.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{accessory.title}</h3>
                <p className="text-gray-400 text-sm">{accessory.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessory Categories */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Accessory Categories</h2>
            <p className="text-xl text-gray-400">Comprehensive range of vehicle enhancement solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessoryCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-white font-semibold text-xl ml-3">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Accessories?</h2>
            <p className="text-xl text-gray-400">Quality products with professional service</p>
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
            <p className="text-xl text-gray-400">Professional approach to accessory installation</p>
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
      {/* 
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Accessory Packages</h2>
            <p className="text-xl text-gray-400">Choose the perfect enhancement package for your vehicle</p>
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
            <p>* Prices vary based on specific accessories, vehicle type, and installation complexity.</p>
            <p>Custom packages and financing options available for larger installations.</p>
          </div>
        </div>
      </section>
      */}

      {/* Before/After Comparisons */}
      {/* <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transformation Results</h2>
            <p className="text-xl text-gray-400">See how accessories enhance your vehicle</p>
          </div>

          <div className="space-y-12">
            {beforeAfterComparisons.map((comparison, index) => (
              <div key={comparison.title} className="grid md:grid-cols-2 gap-8 items-center">
                <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift">
                  <h3 className="text-white font-semibold text-xl mb-4">Before: {comparison.title}</h3>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={`/images/accessories.png`}
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
                      src={`/images/car-detailing-${index + 1}.jpg`}
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
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Customer Experiences</h2>
            <p className="text-xl text-gray-400">What our clients say about our accessory services</p>
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
            <p className="text-xl text-gray-400">How to maintain your accessories for optimal performance</p>
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
            <p className="text-xl text-gray-400">Common questions about accessories and installation</p>
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
            <p className="text-xl text-gray-400">Complete your vehicle enhancement with additional services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/what-we-do/interior-detailing" className="block">
              <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full">
                <h3 className="text-white font-semibold text-xl mb-4">Interior Detailing</h3>
                <p className="text-gray-400 mb-4">
                  Professional interior cleaning and restoration to complement your new accessories.
                </p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>

            <Link href="/what-we-do/detailing-services" className="block">
              <div
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-white font-semibold text-xl mb-4">Detailing Services</h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive detailing services to maintain your enhanced vehicle's appearance.
                </p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>

            <Link href="/what-we-do/ceramic-coating" className="block">
              <div
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-white font-semibold text-xl mb-4">Ceramic Coating</h3>
                <p className="text-gray-400 mb-4">
                  Protect your enhanced vehicle with advanced ceramic coating technology.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Enhance Your Vehicle Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover premium accessories and professional installation services that transform your driving experience.
            From comfort to performance, we have the perfect solutions for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBookService}
              size="lg"
              variant="secondary"
              className="bg-white text-rose-600 hover:bg-gray-100"
            >
              Explore Accessories
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
