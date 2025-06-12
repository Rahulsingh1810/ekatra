"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Settings,
  Star,
  CheckCircle,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Shield,
  Gauge,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function TyreCarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleBookService = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I'm interested in booking Tyre Care service. Can you please provide more details and help me schedule an appointment?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleGetQuote = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hello! I would like to get a quote for Tyre Care service. Can you please share the pricing details?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const features = [
    {
      title: "Professional Tyre Cleaning",
      description:
        "Deep cleaning removes embedded dirt, brake dust, and road grime from tyre treads and sidewalls, improving appearance and preventing premature wear.",
    },
    {
      title: "Sidewall Protection Treatment",
      description:
        "Specialized UV-resistant treatments protect sidewalls from cracking, fading, and deterioration caused by sun exposure and environmental factors.",
    },
    {
      title: "Pressure Checking & Adjustment",
      description:
        "Accurate pressure measurement and adjustment to manufacturer specifications ensures optimal performance, fuel efficiency, and tyre longevity.",
    },
    {
      title: "Wheel Alignment Inspection",
      description:
        "Professional alignment check identifies misalignment issues that cause uneven wear, poor handling, and reduced tyre life.",
    },
    {
      title: "Tyre Rotation Service",
      description:
        "Strategic tyre rotation promotes even wear patterns, maximizes tyre life, and maintains consistent traction across all wheels.",
    },
    {
      title: "Wheel Balancing",
      description:
        "Precision wheel balancing eliminates vibrations, reduces uneven wear, and ensures smooth, comfortable driving at all speeds.",
    },
    {
      title: "Valve Stem Inspection",
      description:
        "Thorough inspection and replacement of damaged valve stems prevents air leaks and maintains proper tyre pressure.",
    },
    {
      title: "Tread Depth Measurement",
      description:
        "Accurate tread depth measurement using professional gauges helps determine tyre condition and replacement timing for safety.",
    },
  ]

  const benefits = [
    {
      icon: <Settings className="h-8 w-8 text-rose-500" />,
      title: "Extended Tyre Life",
      description:
        "Proper care and maintenance significantly extend the lifespan of your tyres, saving you money on premature replacements. Regular rotation, proper inflation, and alignment checks can increase tyre life by 20-40%, providing excellent return on investment.",
    },
    {
      icon: <Shield className="h-8 w-8 text-rose-500" />,
      title: "Enhanced Safety",
      description:
        "Regular tyre maintenance ensures optimal grip, handling, and safety on the road. Proper tread depth, correct pressure, and good alignment are crucial for safe braking, cornering, and wet weather performance, protecting you and your passengers.",
    },
    {
      icon: <Gauge className="h-8 w-8 text-rose-500" />,
      title: "Improved Performance",
      description:
        "Well-maintained tyres provide better fuel efficiency, smoother ride quality, and enhanced vehicle performance. Proper inflation alone can improve fuel economy by up to 3%, while balanced wheels eliminate vibrations and improve comfort.",
    },
  ]

  const tyreServices = [
    {
      title: "Car Tyre Care",
      description: "Comprehensive tyre services for passenger cars and SUVs",
      services: [
        "Pressure optimization for fuel efficiency",
        "Rotation for even wear patterns",
        "Alignment check and adjustment",
        "Balancing for smooth ride",
        "Sidewall protection and cleaning",
      ],
    },
    {
      title: "Bike Tyre Care",
      description: "Specialized services for motorcycle and scooter tyres",
      services: [
        "Pressure adjustment for optimal handling",
        "Tread depth safety inspection",
        "Sidewall condition assessment",
        "Valve stem maintenance",
        "Performance optimization",
      ],
    },
    {
      title: "Commercial Vehicle Care",
      description: "Heavy-duty tyre services for commercial vehicles",
      services: [
        "Load-specific pressure adjustment",
        "Heavy-duty rotation patterns",
        "Commercial alignment services",
        "Fleet tyre management",
        "Extended wear monitoring",
      ],
    },
    {
      title: "Performance Tyre Care",
      description: "Specialized care for high-performance and sports tyres",
      services: [
        "Performance pressure optimization",
        "Track-day preparation",
        "Temperature monitoring",
        "Compound-specific care",
        "Racing alignment services",
      ],
    },
  ]

  const process = [
    {
      title: "Initial Inspection",
      description:
        "Comprehensive visual inspection of all tyres, checking for wear patterns, damage, sidewall condition, and overall health.",
    },
    {
      title: "Pressure Assessment",
      description:
        "Accurate pressure measurement using calibrated gauges, comparing to manufacturer specifications and adjusting as needed.",
    },
    {
      title: "Tread Depth Analysis",
      description:
        "Professional tread depth measurement across multiple points to assess wear patterns and remaining tyre life.",
    },
    {
      title: "Cleaning & Treatment",
      description:
        "Thorough cleaning of treads and sidewalls followed by application of protective treatments to prevent deterioration.",
    },
    {
      title: "Rotation & Balancing",
      description:
        "Strategic tyre rotation according to vehicle specifications and precision wheel balancing to eliminate vibrations.",
    },
    {
      title: "Final Inspection & Report",
      description:
        "Complete quality check and detailed report on tyre condition, recommendations, and maintenance schedule.",
    },
  ]

  const packages = [
    {
      name: "Basic Tyre Care",
      duration: "30-45 minutes",
      features: [
        "Pressure check & adjustment",
        "Visual inspection",
        "Basic cleaning",
        "Tread depth measurement",
        "Condition report",
      ],
      price: "₹200 - ₹400",
      ideal: "Regular maintenance for all vehicles",
    },
    {
      name: "Complete Tyre Service",
      duration: "60-90 minutes",
      features: [
        "Comprehensive inspection",
        "Pressure optimization",
        "Professional cleaning",
        "Tyre rotation",
        "Sidewall protection",
        "Valve stem check",
      ],
      price: "₹500 - ₹800",
      ideal: "Comprehensive care for optimal performance",
    },
    {
      name: "Premium Tyre Care",
      duration: "90-120 minutes",
      features: [
        "Complete tyre service",
        "Wheel balancing",
        "Alignment inspection",
        "Advanced protection treatment",
        "Performance optimization",
        "Extended warranty",
        "Maintenance schedule",
      ],
      price: "₹800 - ₹1,200",
      ideal: "Maximum performance and longevity",
    },
  ]

  const faqs = [
    {
      question: "How often should I have my tyres professionally serviced?",
      answer:
        "We recommend professional tyre service every 3-6 months or every 5,000-10,000 km, depending on your driving conditions. City driving, highway use, and environmental factors all affect service frequency. Regular service helps identify issues early and extends tyre life significantly.",
    },
    {
      question: "What's the correct tyre pressure for my vehicle?",
      answer:
        "Correct tyre pressure varies by vehicle and is specified by the manufacturer. You can find this information in your owner's manual, on a sticker inside the driver's door frame, or in the glove compartment. We check and adjust to these specifications, considering load and driving conditions.",
    },
    {
      question: "When should I rotate my tyres?",
      answer:
        "Tyre rotation should typically be done every 5,000-8,000 km or as recommended by your vehicle manufacturer. Regular rotation ensures even wear across all tyres, maximizing their lifespan and maintaining consistent traction. We follow manufacturer-specific rotation patterns for optimal results.",
    },
    {
      question: "How do I know when my tyres need replacement?",
      answer:
        "Tyres should be replaced when tread depth reaches 1.6mm (legal minimum) or shows signs of damage like cracks, bulges, or uneven wear. We measure tread depth at multiple points and provide detailed assessments. For safety, we recommend replacement before reaching minimum legal limits.",
    },
    {
      question: "Can proper tyre care really improve fuel efficiency?",
      answer:
        "Yes, absolutely! Properly inflated tyres can improve fuel efficiency by 3-5%. Under-inflated tyres create more rolling resistance, forcing your engine to work harder. Regular rotation and alignment also contribute to better fuel economy by ensuring optimal contact with the road surface.",
    },
    {
      question: "Do you service both car and motorcycle tyres?",
      answer:
        "Yes, we provide comprehensive tyre care for all vehicle types including cars, SUVs, motorcycles, scooters, and commercial vehicles. Our technicians are trained in the specific requirements of each vehicle type and use appropriate equipment and techniques for optimal results.",
    },
  ]

  const testimonials = [
    {
      name: "Vikram Singh",
      vehicle: "Toyota Fortuner",
      text: "My Fortuner's tyres were wearing unevenly and I was getting poor fuel economy. After their complete tyre service including rotation and alignment check, the difference is remarkable. Better handling, improved mileage, and even wear patterns now.",
      rating: 5,
    },
    {
      name: "Priya Nair",
      vehicle: "Honda City",
      text: "I never realized how important proper tyre pressure was until I started using their service. My City now feels more stable, the ride is smoother, and I'm getting better mileage. Their detailed reports help me track tyre health too.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      vehicle: "Royal Enfield",
      text: "As a motorcycle enthusiast, I'm particular about tyre care. Their bike tyre service is excellent - proper pressure for my riding style, thorough inspection, and great advice on maintenance. My bike handles much better now.",
      rating: 5,
    },
  ]

  const maintenanceTips = [
    "Check tyre pressure monthly when tyres are cold for accurate readings",
    "Inspect tyres regularly for cuts, cracks, bulges, or foreign objects",
    "Rotate tyres according to manufacturer recommendations for even wear",
    "Maintain proper wheel alignment to prevent premature tyre wear",
    "Avoid overloading your vehicle beyond its specified weight limits",
    "Drive smoothly to reduce unnecessary stress on tyres",
    "Store spare tyres in cool, dry places away from direct sunlight",
    "Replace tyres in pairs or sets for optimal performance and safety",
  ]

  const beforeAfterComparisons = [
    {
      title: "Tyre Pressure Optimization",
      before: "Under-inflated tyres causing poor fuel economy and uneven wear patterns",
      after: "Properly inflated tyres providing optimal performance and extended life",
    },
    {
      title: "Tread Condition Assessment",
      before: "Worn treads with reduced grip and safety concerns in wet conditions",
      after: "Well-maintained treads with optimal depth for safe driving performance",
    },
    {
      title: "Sidewall Protection",
      before: "Cracked, faded sidewalls vulnerable to UV damage and deterioration",
      after: "Protected sidewalls with enhanced durability and appearance",
    },
  ]

  const tyreTypes = [
    {
      title: "All-Season Tyres",
      description: "Balanced performance for year-round driving",
      icon: "🌤️",
    },
    {
      title: "Performance Tyres",
      description: "Enhanced grip and handling for sports cars",
      icon: "🏎️",
    },
    {
      title: "Off-Road Tyres",
      description: "Rugged construction for adventure vehicles",
      icon: "🏔️",
    },
    {
      title: "Motorcycle Tyres",
      description: "Specialized compounds for two-wheelers",
      icon: "🏍️",
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
            <span className="text-white">Tyre Care</span>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Car & Bike Tyre Care</h1>
              <p className="text-xl opacity-90 mb-8">
                Professional tyre care services to extend life, ensure safety, and maintain optimal performance for both
                cars and bikes. Our comprehensive approach covers everything from pressure optimization to advanced
                protection treatments.
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
                src="/images/car-and-bike-tyre.png"
                alt="Tyre Care Service"
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
            <p className="text-xl text-gray-400">Comprehensive tyre care and maintenance services</p>
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

      {/* Tyre Types Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Tyre Types We Service</h2>
            <p className="text-xl text-gray-400">Expert care for all tyre types and applications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tyreTypes.map((type, index) => (
              <div
                key={type.title}
                className="glass-morphism rounded-xl p-6 text-center animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{type.title}</h3>
                <p className="text-gray-400 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-xl text-gray-400">Specialized services for different vehicle types</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tyreServices.map((service, index) => (
              <div
                key={service.title}
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-white font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{item}</span>
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Tyre Care?</h2>
            <p className="text-xl text-gray-400">Professional care for optimal tyre performance</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Care Process</h2>
            <p className="text-xl text-gray-400">Systematic approach to comprehensive tyre care</p>
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
      {/* <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Tyre Care Packages</h2>
            <p className="text-xl text-gray-400">Choose the right level of care for your tyres</p>
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
            <p>* Prices may vary based on vehicle type, tyre size, and specific requirements.</p>
            <p>Fleet and commercial vehicle packages available on request.</p>
          </div>
        </div>
      </section> */}

      {/* Before/After Comparisons */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Care Results</h2>
            <p className="text-xl text-gray-400">See the difference professional tyre care makes</p>
          </div>

          <div className="space-y-12">
            {beforeAfterComparisons.map((comparison, index) => (
              <div key={comparison.title} className="grid md:grid-cols-2 gap-8 items-center">
                <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift">
                  <h3 className="text-white font-semibold text-xl mb-4">Before: {comparison.title}</h3>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={`/images/car-and-bike-tyre.png`}
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
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Customer Experiences</h2>
            <p className="text-xl text-gray-400">What our clients say about our tyre care service</p>
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
            <p className="text-xl text-gray-400">How to maintain your tyres between professional services</p>
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
            <p className="text-xl text-gray-400">Common questions about tyre care</p>
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
            <p className="text-xl text-gray-400">Complete your vehicle care with additional services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/what-we-do/bike-wash-care" className="block">
              <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full">
                <h3 className="text-white font-semibold text-xl mb-4">Bike Wash & Care</h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive bike care services to complement your tyre maintenance routine.
                </p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>

            <Link href="/what-we-do/automatic-car-wash" className="block">
              <div
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-white font-semibold text-xl mb-4">Car Wash Services</h3>
                <p className="text-gray-400 mb-4">
                  Professional car wash services to keep your vehicle clean and well-maintained.
                </p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>

            <Link href="/what-we-do/detailing-services" className="block">
              <div
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-white font-semibold text-xl mb-4">Detailing Services</h3>
                <p className="text-gray-400 mb-4">
                  Complete detailing services for comprehensive vehicle care and maintenance.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Maximize Your Tyre Performance</h2>
          <p className="text-xl mb-8 opacity-90">
            Professional tyre care services for safety, performance, and longevity. Invest in proper tyre maintenance
            and experience the difference it makes to your driving experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBookService}
              size="lg"
              variant="secondary"
              className="bg-white text-rose-600 hover:bg-gray-100"
            >
              Book Tyre Service
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
