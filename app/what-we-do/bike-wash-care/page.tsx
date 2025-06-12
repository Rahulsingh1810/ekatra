"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Bike,
  Star,
  Clock,
  CheckCircle,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function BikeWashCarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleBookService = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I'm interested in booking Bike Wash & Care service. Can you please provide more details and help me schedule an appointment?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleGetQuote = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hello! I would like to get a quote for Bike Wash & Care service. Can you please share the pricing details?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const features = [
    {
      title: "Engine Cleaning & Degreasing",
      description:
        "Specialized engine cleaning removes grease, oil, and grime buildup while protecting sensitive electrical components and improving heat dissipation.",
    },
    {
      title: "Chain Lubrication Service",
      description:
        "Professional chain cleaning and lubrication using high-quality lubricants extends chain life and ensures smooth power transmission.",
    },
    {
      title: "Body Polishing & Shine",
      description:
        "Multi-stage polishing process restores paint luster, removes minor scratches, and applies protective coating for long-lasting shine.",
    },
    {
      title: "Chrome Restoration",
      description:
        "Specialized chrome polishing removes oxidation and water spots, restoring mirror-like finish to exhaust pipes, handlebars, and trim pieces.",
    },
    {
      title: "Wheel & Tire Detailing",
      description:
        "Comprehensive wheel cleaning removes brake dust and road grime, while tire treatment enhances appearance and provides UV protection.",
    },
    {
      title: "Exhaust Pipe Cleaning",
      description:
        "Professional exhaust cleaning removes carbon buildup and heat stains, restoring original appearance and preventing corrosion.",
    },
    {
      title: "Seat & Handle Cleaning",
      description:
        "Thorough cleaning and conditioning of seats, grips, and controls using appropriate products for different materials and finishes.",
    },
    {
      title: "Paint Protection Application",
      description:
        "Protective wax or sealant application shields paint from UV damage, weather, and environmental contaminants for extended protection.",
    },
  ]

  const benefits = [
    {
      icon: <Bike className="h-8 w-8 text-rose-500" />,
      title: "Specialized Care",
      description:
        "Our bike wash and care service is specifically designed for motorcycles and scooters. We understand the unique requirements of two-wheelers, from delicate electrical components to specialized materials, ensuring proper care for every part of your bike.",
    },
    {
      icon: <Zap className="h-8 w-8 text-rose-500" />,
      title: "Performance Enhancement",
      description:
        "Regular maintenance and cleaning improve your bike's performance and extend its lifespan. Clean engines run cooler, lubricated chains transfer power efficiently, and protected surfaces resist wear and corrosion for optimal performance.",
    },
    {
      icon: <Clock className="h-8 w-8 text-rose-500" />,
      title: "Quick Service",
      description:
        "Efficient service process gets your bike clean and maintained without long waiting times. Our streamlined approach respects your schedule while ensuring thorough care and attention to every detail of your motorcycle.",
    },
  ]

  const bikeTypes = [
    {
      title: "Sport Bikes",
      description: "Specialized care for high-performance motorcycles with attention to aerodynamic components",
      services: ["Fairing cleaning", "Performance exhaust care", "Chain maintenance", "Brake system cleaning"],
    },
    {
      title: "Cruisers",
      description: "Comprehensive care for touring and cruiser motorcycles with extensive chrome work",
      services: ["Chrome polishing", "Leather seat care", "Engine detailing", "Custom paint protection"],
    },
    {
      title: "Scooters",
      description: "Gentle yet thorough cleaning for urban commuter scooters and automatic bikes",
      services: ["Body panel cleaning", "Storage compartment care", "Wheel detailing", "Plastic trim restoration"],
    },
    {
      title: "Adventure Bikes",
      description: "Rugged cleaning for off-road and adventure motorcycles with heavy contamination",
      services: ["Mud removal", "Undercarriage cleaning", "Protection application", "Heavy-duty degreasing"],
    },
  ]

  const process = [
    {
      title: "Initial Inspection",
      description:
        "Thorough assessment of your bike's condition, identifying areas requiring special attention and noting any existing damage or wear.",
    },
    {
      title: "Pre-Cleaning Preparation",
      description:
        "Covering sensitive electrical components and removing accessories that might be damaged during the cleaning process.",
    },
    {
      title: "Engine Bay Cleaning",
      description:
        "Careful degreasing and cleaning of the engine compartment using appropriate solvents and techniques to remove oil and grime buildup.",
    },
    {
      title: "Body Washing & Polishing",
      description:
        "Gentle washing of all body panels followed by polishing to restore shine and remove minor surface imperfections.",
    },
    {
      title: "Chain & Drive Maintenance",
      description:
        "Thorough chain cleaning to remove old lubricant and debris, followed by proper lubrication for optimal performance.",
    },
    {
      title: "Final Detailing & Protection",
      description:
        "Application of protective products, final polishing of chrome components, and quality inspection to ensure perfect results.",
    },
  ]

  const packages = [
    {
      name: "Basic Bike Wash",
      duration: "30-45 minutes",
      features: ["Exterior washing", "Basic wheel cleaning", "Chain lubrication", "Seat cleaning", "Quick dry"],
      price: "₹150 - ₹250",
      ideal: "Regular maintenance for daily commuters",
    },
    {
      name: "Premium Bike Care",
      duration: "60-90 minutes",
      features: [
        "Complete bike washing",
        "Engine bay cleaning",
        "Chrome polishing",
        "Chain cleaning & lubrication",
        "Tire shine application",
        "Basic paint protection",
      ],
      price: "₹300 - ₹500",
      ideal: "Comprehensive care for weekend riders",
    },
    {
      name: "Complete Bike Detailing",
      duration: "90-120 minutes",
      features: [
        "Full bike detailing service",
        "Engine degreasing & cleaning",
        "Professional chrome restoration",
        "Paint polishing & protection",
        "Leather seat conditioning",
        "Exhaust pipe cleaning",
        "3-month protection warranty",
      ],
      price: "₹500 - ₹800",
      ideal: "Show bikes and premium motorcycles",
    },
  ]

  const faqs = [
    {
      question: "Is it safe to wash the engine of my motorcycle?",
      answer:
        "Yes, when done properly by professionals. We use specialized techniques and cover sensitive electrical components before cleaning. Our engine cleaning process removes harmful buildup while protecting delicate parts like the ECU, wiring harnesses, and sensors. We avoid high-pressure water on electrical components and use appropriate degreasers designed for motorcycle engines.",
    },
    {
      question: "How often should I have my bike professionally washed?",
      answer:
        "For daily commuters, we recommend professional washing every 2-3 weeks. Weekend riders may need service monthly, while bikes used in harsh conditions (rain, dust, off-road) benefit from more frequent cleaning. Regular professional care prevents buildup of harmful contaminants and maintains your bike's appearance and performance.",
    },
    {
      question: "Do you service all types of motorcycles and scooters?",
      answer:
        "Yes, we service all types of two-wheelers including sport bikes, cruisers, touring bikes, scooters, and adventure motorcycles. Our technicians are trained to handle different bike types and understand the specific requirements of each category, from delicate fairings to heavy-duty adventure bike components.",
    },
    {
      question: "What type of chain lubricant do you use?",
      answer:
        "We use high-quality motorcycle-specific chain lubricants appropriate for your bike type and riding conditions. For street bikes, we typically use all-weather chain lubes, while off-road bikes may receive heavy-duty lubricants. We clean the chain thoroughly before applying fresh lubricant to ensure optimal performance and longevity.",
    },
    {
      question: "Can you remove rust from chrome parts?",
      answer:
        "We can remove light surface rust and oxidation from chrome components using specialized polishing compounds. However, deep pitting or severe corrosion may require professional restoration or replacement. We'll assess the condition of your chrome parts and provide realistic expectations about restoration possibilities.",
    },
    {
      question: "Do you provide any warranty on your bike care services?",
      answer:
        "Yes, our Complete Bike Detailing package includes a 3-month protection warranty. This covers the longevity of applied protective products and ensures your bike maintains its enhanced appearance. We also guarantee our workmanship and will address any issues that arise from our service within the warranty period.",
    },
  ]

  const testimonials = [
    {
      name: "Arjun Krishnan",
      vehicle: "Royal Enfield Classic 350",
      text: "My Royal Enfield's chrome was looking dull and the engine was covered in grime. After their complete detailing service, it looks absolutely stunning! The chrome shines like a mirror and the engine bay is spotless. Excellent attention to detail.",
      rating: 5,
    },
    {
      name: "Sneha Gupta",
      vehicle: "Honda Activa",
      text: "I use their basic wash service regularly for my daily commute scooter. They're quick, efficient, and my Activa always looks clean and fresh. The chain lubrication service has definitely improved the smoothness of my ride.",
      rating: 5,
    },
    {
      name: "Ravi Sharma",
      vehicle: "Kawasaki Ninja 300",
      text: "As a weekend rider, I wanted my Ninja to always look its best. Their premium care package is perfect - the paint protection keeps it looking new, and the professional approach gives me confidence in their service quality.",
      rating: 5,
    },
  ]

  const maintenanceTips = [
    "Clean your bike regularly to prevent buildup of corrosive contaminants",
    "Lubricate the chain every 500-1000 km depending on riding conditions",
    "Protect chrome parts with appropriate wax or polish to prevent oxidation",
    "Keep the engine clean to improve cooling efficiency and performance",
    "Use bike-specific cleaning products to avoid damage to sensitive components",
    "Dry your bike thoroughly after washing to prevent water spots and corrosion",
    "Store your bike in a covered area to protect it from environmental damage",
    "Schedule professional maintenance based on your riding frequency and conditions",
  ]

  const beforeAfterComparisons = [
    {
      title: "Engine Bay Restoration",
      before: "Greasy, dirty engine with oil buildup and accumulated grime affecting cooling",
      after: "Clean, degreased engine bay with improved heat dissipation and pristine appearance",
    },
    {
      title: "Chrome Component Revival",
      before: "Oxidized, dull chrome with water spots and surface corrosion",
      after: "Mirror-bright chrome finish with protective coating and enhanced shine",
    },
    {
      title: "Chain & Drive Care",
      before: "Dirty, poorly lubricated chain with accumulated debris affecting performance",
      after: "Clean, properly lubricated chain ensuring smooth power transmission",
    },
  ]

  const specializedServices = [
    {
      title: "Performance Bike Care",
      description: "Specialized service for high-performance motorcycles with attention to aerodynamic components",
      icon: "🏍️",
    },
    {
      title: "Vintage Bike Restoration",
      description: "Careful cleaning and restoration for classic and vintage motorcycles",
      icon: "🏛️",
    },
    {
      title: "Off-Road Cleaning",
      description: "Heavy-duty cleaning for adventure and dirt bikes with mud and debris removal",
      icon: "🏔️",
    },
    {
      title: "Scooter Spa",
      description: "Gentle yet thorough care specifically designed for urban scooters",
      icon: "🛵",
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
            <span className="text-white">Bike Wash & Care</span>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Bike Wash & Care</h1>
              <p className="text-xl opacity-90 mb-8">
                Specialized wash and care services designed specifically for motorcycles, scooters, and bikes. Our
                expert technicians understand the unique requirements of two-wheelers and provide comprehensive care
                that enhances performance and appearance.
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
                src="/images/bike-wash-and-care.png"
                alt="Bike Wash & Care Service"
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
            <p className="text-xl text-gray-400">Comprehensive bike care and maintenance services</p>
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

      {/* Bike Types Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Bike Types We Service</h2>
            <p className="text-xl text-gray-400">Specialized care for all types of motorcycles and scooters</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bikeTypes.map((type, index) => (
              <div
                key={type.title}
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-white font-semibold text-xl mb-3">{type.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-400">Tailored services for specific bike types and needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <div
                key={service.title}
                className="glass-morphism rounded-xl p-6 text-center animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Bike Care?</h2>
            <p className="text-xl text-gray-400">Expert care for your motorcycle or bike</p>
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
            <p className="text-xl text-gray-400">Step-by-step bike care and maintenance process</p>
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
      {/* pricing */}
      {/* <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Bike Care Packages</h2>
            <p className="text-xl text-gray-400">Choose the perfect care package for your bike</p>
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
            <p>* Prices may vary based on bike size, type, and condition.</p>
            <p>Custom packages available for vintage and specialty motorcycles.</p>
          </div>
        </div>
      </section> */}

      {/* Before/After Comparisons */}
      {/* <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transformation Results</h2>
            <p className="text-xl text-gray-400">See the difference our bike care makes</p>
          </div>

          <div className="space-y-12">
            {beforeAfterComparisons.map((comparison, index) => (
              <div key={comparison.title} className="grid md:grid-cols-2 gap-8 items-center">
                <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift">
                  <h3 className="text-white font-semibold text-xl mb-4">Before: {comparison.title}</h3>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={`/images/bike-wash-and-care.png`}
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
            <p className="text-xl text-gray-400">What our clients say about our bike care service</p>
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
            <p className="text-xl text-gray-400">How to maintain your bike between professional services</p>
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
            <p className="text-xl text-gray-400">Common questions about bike wash and care</p>
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
            <p className="text-xl text-gray-400">Explore other services for complete vehicle care</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/what-we-do/tyre-care" className="block">
              <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full">
                <h3 className="text-white font-semibold text-xl mb-4">Tyre Care</h3>
                <p className="text-gray-400 mb-4">
                  Professional tyre care services for both cars and bikes to ensure safety and performance.
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
                  Comprehensive car wash services to complement your bike care routine.
                </p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>

            <Link href="/what-we-do/accessories" className="block">
              <div
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-white font-semibold text-xl mb-4">Accessories</h3>
                <p className="text-gray-400 mb-4">
                  Explore premium accessories and upgrades for your motorcycle or scooter.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Keep Your Bike in Perfect Condition</h2>
          <p className="text-xl mb-8 opacity-90">
            Professional bike care services that maintain performance, enhance appearance, and extend the life of your
            motorcycle or scooter. Experience the difference expert care makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBookService}
              size="lg"
              variant="secondary"
              className="bg-white text-rose-600 hover:bg-gray-100"
            >
              Book Bike Service
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
