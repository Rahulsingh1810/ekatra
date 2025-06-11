"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Droplets,
  Star,
  CheckCircle,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Shield,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AutomaticCarWashPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleBookService = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I'm interested in booking Automatic Car Wash service. Can you please provide more details and help me schedule an appointment?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleGetQuote = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hello! I would like to get a quote for Automatic Car Wash service. Can you please share the pricing details?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const features = [
    {
      title: "Touchless Washing Technology",
      description:
        "Advanced high-pressure water jets and specialized detergents clean your vehicle without physical contact, eliminating the risk of scratches and swirl marks.",
    },
    {
      title: "Premium Foam Wash System",
      description:
        "Rich, thick foam application that clings to surfaces, breaking down dirt and grime while providing lubrication for safe cleaning.",
    },
    {
      title: "Spot-Free Rinse Process",
      description:
        "Reverse osmosis water system removes minerals and impurities, ensuring a spot-free finish that eliminates water marks and streaking.",
    },
    {
      title: "Quick Drying System",
      description:
        "Powerful air blowers and heated air circulation quickly dry your vehicle, reducing water spots and preparing it for immediate use.",
    },
    {
      title: "Undercarriage Cleaning",
      description:
        "Specialized undercarriage wash removes salt, mud, and debris from hard-to-reach areas, protecting against corrosion and extending vehicle life.",
    },
    {
      title: "Wheel & Tire Cleaning",
      description:
        "Dedicated wheel and tire cleaning system removes brake dust, road grime, and tar for comprehensive cleaning of all surfaces.",
    },
    {
      title: "Wax Application Option",
      description:
        "Automated wax application provides protective coating and enhanced shine, extending the life of your vehicle's paint finish.",
    },
    {
      title: "Eco-Friendly Products",
      description:
        "Biodegradable cleaning products and water recycling systems minimize environmental impact while maintaining superior cleaning performance.",
    },
  ]

  const benefits = [
    {
      icon: <Droplets className="h-8 w-8 text-rose-500" />,
      title: "Advanced Technology",
      description:
        "Our state-of-the-art automatic car wash systems use the latest technology to provide consistent, thorough cleaning without manual labor. Computer-controlled processes ensure optimal cleaning parameters for every wash cycle, delivering professional results every time.",
    },
    {
      icon: <Zap className="h-8 w-8 text-rose-500" />,
      title: "Time Efficient",
      description:
        "Quick and efficient washing process gets your car clean in just minutes, perfect for busy schedules. Our streamlined system allows you to get a professional-quality wash without the time investment of traditional hand washing.",
    },
    {
      icon: <Shield className="h-8 w-8 text-rose-500" />,
      title: "Consistent Results",
      description:
        "Automated systems ensure the same high-quality wash every time, regardless of weather conditions or human variables. Every vehicle receives the same thorough cleaning process with consistent pressure, temperature, and chemical application.",
    },
  ]

  const washStages = [
    {
      title: "Pre-Rinse",
      description:
        "High-pressure water removes loose dirt, debris, and surface contaminants to prepare the vehicle for the main wash cycle.",
    },
    {
      title: "Foam Application",
      description:
        "Rich foam is applied to all surfaces, providing lubrication and breaking down stubborn dirt and grime for effective cleaning.",
    },
    {
      title: "High-Pressure Wash",
      description:
        "Powerful water jets clean all surfaces including the undercarriage, removing embedded dirt and contaminants from every area.",
    },
    {
      title: "Wheel & Tire Cleaning",
      description:
        "Specialized cleaning system targets wheels and tires with appropriate pressure and cleaning agents for optimal results.",
    },
    {
      title: "Final Rinse",
      description:
        "Thorough rinse removes all cleaning products and loosened contaminants, preparing the vehicle for the drying process.",
    },
    {
      title: "Spot-Free Rinse",
      description:
        "Purified water rinse eliminates mineral deposits and ensures a spot-free finish without water marks or streaking.",
    },
    {
      title: "Air Drying",
      description:
        "Powerful air blowers remove water from all surfaces, leaving your vehicle clean, dry, and ready for immediate use.",
    },
  ]

  const packages = [
    {
      name: "Basic Wash",
      duration: "5-7 minutes",
      features: ["Pre-rinse", "Foam wash", "High-pressure rinse", "Basic air dry", "Exterior cleaning only"],
      price: "₹200 - ₹300",
      ideal: "Quick cleaning for lightly soiled vehicles",
    },
    {
      name: "Premium Wash",
      duration: "8-10 minutes",
      features: [
        "Complete wash cycle",
        "Undercarriage cleaning",
        "Wheel & tire cleaning",
        "Spot-free rinse",
        "Enhanced air drying",
        "Basic wax application",
      ],
      price: "₹400 - ₹600",
      ideal: "Comprehensive cleaning for regular maintenance",
    },
    {
      name: "Ultimate Wash",
      duration: "12-15 minutes",
      features: [
        "Full premium wash cycle",
        "Extended undercarriage cleaning",
        "Intensive wheel cleaning",
        "Premium wax application",
        "Tire shine treatment",
        "Extended drying cycle",
        "Quality inspection",
      ],
      price: "₹600 - ₹800",
      ideal: "Maximum cleaning and protection",
    },
  ]

  const faqs = [
    {
      question: "Is automatic car wash safe for my vehicle's paint?",
      answer:
        "Yes, our touchless automatic car wash is completely safe for your vehicle's paint. We use high-pressure water and specialized detergents without any physical contact, eliminating the risk of scratches or swirl marks that can occur with brush-type washes. Our system is designed to be gentler on your paint than traditional washing methods.",
    },
    {
      question: "How often should I use automatic car wash?",
      answer:
        "For most vehicles, weekly or bi-weekly automatic washing maintains optimal cleanliness and appearance. Vehicles exposed to harsh conditions like salt, mud, or heavy pollution may benefit from more frequent washing. Regular washing also helps protect your vehicle's finish and prevents buildup of harmful contaminants.",
    },
    {
      question: "Can I wash my vehicle if it has aftermarket accessories?",
      answer:
        "Most aftermarket accessories are compatible with our automatic wash system. However, we recommend removing or securing loose items like antennas, spoilers, or decorative elements that might be damaged by high-pressure water. Our staff can advise you on any specific concerns before the wash.",
    },
    {
      question: "What's the difference between your wash packages?",
      answer:
        "Our packages differ in duration, services included, and level of protection. Basic wash provides essential cleaning, Premium adds undercarriage and wheel cleaning with basic wax, while Ultimate includes extended cleaning cycles, premium wax, tire shine, and comprehensive protection for maximum results.",
    },
    {
      question: "Do you recycle water in your wash process?",
      answer:
        "Yes, we use an advanced water recycling system that treats and reuses water throughout our wash process. This environmentally responsible approach reduces water consumption while maintaining cleaning effectiveness. Our system also uses biodegradable cleaning products to minimize environmental impact.",
    },
    {
      question: "Can automatic wash remove all types of dirt and stains?",
      answer:
        "Our automatic wash effectively removes most common dirt, dust, mud, and light stains. However, heavily embedded contaminants, tar, tree sap, or oxidation may require additional hand cleaning or detailing services. For best results on heavily soiled vehicles, we recommend our premium detailing services.",
    },
  ]

  const testimonials = [
    {
      name: "Amit Verma",
      vehicle: "Maruti Swift",
      text: "I use the automatic wash twice a week for my daily commute car. It's incredibly convenient and my Swift always comes out spotless. The spot-free rinse really works - no water marks at all! Great value for money.",
      rating: 5,
    },
    {
      name: "Deepika Singh",
      vehicle: "Hyundai Verna",
      text: "Was initially skeptical about automatic wash, but the touchless system is amazing. My car's paint looks perfect after every wash, and the undercarriage cleaning is a great bonus. Much better than the old brush-type washes.",
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      vehicle: "Toyota Innova",
      text: "Perfect for my family SUV! The Ultimate wash package keeps our Innova looking great despite daily school runs and weekend trips. The kids love watching the car go through the wash process too!",
      rating: 5,
    },
  ]

  const maintenanceTips = [
    "Remove loose items and secure antennas before entering the wash",
    "Close all windows and sunroof completely",
    "Ensure proper tire pressure for optimal cleaning results",
    "Pre-treat heavily soiled areas if necessary",
    "Follow staff instructions for proper vehicle positioning",
    "Allow complete drying before applying any additional products",
    "Regular washing prevents buildup of harmful contaminants",
    "Consider premium packages for enhanced protection and shine",
  ]

  const washTechnology = [
    {
      title: "High-Pressure Water System",
      description: "Advanced pumps deliver consistent pressure for effective cleaning",
      icon: "💧",
    },
    {
      title: "Computer-Controlled Process",
      description: "Automated systems ensure consistent results and optimal chemical application",
      icon: "🖥️",
    },
    {
      title: "Water Recycling System",
      description: "Environmentally responsible water treatment and reuse technology",
      icon: "♻️",
    },
    {
      title: "Quality Sensors",
      description: "Advanced sensors monitor wash quality and adjust parameters automatically",
      icon: "📡",
    },
  ]

  const beforeAfterComparisons = [
    {
      title: "Daily Driver Cleaning",
      before: "Dusty, road-grime covered vehicle with water spots and light contamination",
      after: "Spotless, gleaming finish with enhanced shine and complete cleanliness",
    },
    {
      title: "Undercarriage Protection",
      before: "Salt, mud, and debris accumulation in hard-to-reach undercarriage areas",
      after: "Clean undercarriage free from corrosive contaminants and road debris",
    },
    {
      title: "Wheel & Tire Enhancement",
      before: "Brake dust, road grime, and dull tire appearance",
      after: "Clean wheels and enhanced tire appearance with protective shine",
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
            <span className="text-white">Automatic Car Wash</span>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Automatic Car Wash</h1>
              <p className="text-xl opacity-90 mb-8">
                State-of-the-art touchless automatic car wash systems that deliver professional-quality cleaning in
                minutes. Our advanced technology ensures consistent, thorough results while protecting your vehicle's
                finish.
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
                src="/images/car-wash-care.png"
                alt="Automatic Car Wash Service"
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
            <p className="text-xl text-gray-400">Advanced automatic washing technology and systems</p>
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

      {/* Technology Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Technology</h2>
            <p className="text-xl text-gray-400">Cutting-edge systems for superior cleaning results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {washTechnology.map((tech, index) => (
              <div
                key={tech.title}
                className="glass-morphism rounded-xl p-6 text-center animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{tech.title}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Automatic Car Wash?</h2>
            <p className="text-xl text-gray-400">Modern convenience meets professional results</p>
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

      {/* Wash Process Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Wash Process</h2>
            <p className="text-xl text-gray-400">Step-by-step automatic washing process</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-rose-600 hidden md:block"></div>

            <div className="space-y-12">
              {washStages.map((stage, index) => (
                <div
                  key={stage.title}
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
                      <h3 className="text-white font-semibold">Stage {index + 1}</h3>
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-2 hidden md:block">{stage.title}</h3>
                    <p className="text-gray-400">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Wash Packages</h2>
            <p className="text-xl text-gray-400">Choose the perfect wash package for your needs</p>
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
            <p>* Prices may vary based on vehicle size and specific requirements.</p>
            <p>Multiple wash packages and memberships available for regular customers.</p>
          </div>
        </div>
      </section>

      {/* Before/After Comparisons */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Cleaning Results</h2>
            <p className="text-xl text-gray-400">See the difference our automatic wash makes</p>
          </div>

          <div className="space-y-12">
            {beforeAfterComparisons.map((comparison, index) => (
              <div key={comparison.title} className="grid md:grid-cols-2 gap-8 items-center">
                <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift">
                  <h3 className="text-white font-semibold text-xl mb-4">Before: {comparison.title}</h3>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={`/images/car-wash.jpg`}
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
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Customer Experiences</h2>
            <p className="text-xl text-gray-400">What our clients say about our automatic car wash</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Usage Tips</h2>
            <p className="text-xl text-gray-400">How to get the best results from automatic car wash</p>
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
            <p className="text-xl text-gray-400">Common questions about automatic car wash</p>
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
            <p className="text-xl text-gray-400">Enhance your car wash with additional services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/what-we-do/detailing-services" className="block">
              <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full">
                <h3 className="text-white font-semibold text-xl mb-4">Detailing Services</h3>
                <p className="text-gray-400 mb-4">
                  Complement your automatic wash with comprehensive detailing services for complete vehicle care.
                </p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>

            <Link href="/what-we-do/interior-detailing" className="block">
              <div
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-white font-semibold text-xl mb-4">Interior Detailing</h3>
                <p className="text-gray-400 mb-4">
                  Complete your vehicle's cleanliness with professional interior cleaning and restoration.
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
                  Protect your freshly washed vehicle with advanced ceramic coating technology.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience Automatic Excellence</h2>
          <p className="text-xl mb-8 opacity-90">
            Quick, efficient, and thorough cleaning with our advanced automatic car wash systems. Perfect for busy
            schedules without compromising on quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBookService}
              size="lg"
              variant="secondary"
              className="bg-white text-rose-600 hover:bg-gray-100"
            >
              Book Car Wash
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
