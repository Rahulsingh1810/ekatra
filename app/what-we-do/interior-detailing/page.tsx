"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Car,
  Star,
  CheckCircle,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Shield,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function InteriorDetailingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleBookService = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I'm interested in booking Interior Detailing service. Can you please provide more details and help me schedule an appointment?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleGetQuote = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hello! I would like to get a quote for Interior Detailing service. Can you please share the pricing details?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const features = [
    {
      title: "Deep Vacuum Cleaning",
      description:
        "Professional-grade vacuum systems with specialized attachments remove dirt, debris, and pet hair from every crevice, including seats, carpets, and hard-to-reach areas.",
    },
    {
      title: "Leather Conditioning",
      description:
        "Premium leather cleaners and conditioners restore suppleness, prevent cracking, and protect against UV damage while maintaining the natural texture and appearance.",
    },
    {
      title: "Dashboard Restoration",
      description:
        "Specialized products clean and protect plastic, vinyl, and rubber surfaces while restoring original color and preventing fading and cracking.",
    },
    {
      title: "Carpet & Upholstery Cleaning",
      description:
        "Hot water extraction and steam cleaning remove deep-seated stains, odors, and allergens from fabric seats and carpeting for a fresh, clean interior.",
    },
    {
      title: "Odor Elimination",
      description:
        "Professional-grade ozone treatment and enzymatic cleaners eliminate persistent odors from smoke, pets, food, and other sources at the molecular level.",
    },
    {
      title: "Glass Cleaning",
      description:
        "Streak-free cleaning of all interior glass surfaces including windows, mirrors, and instrument clusters for crystal-clear visibility and appearance.",
    },
    {
      title: "Air Vent Cleaning",
      description:
        "Specialized tools and techniques clean dust and debris from air vents and HVAC systems, improving air quality and system efficiency.",
    },
    {
      title: "UV Protection Application",
      description:
        "Protective treatments shield interior surfaces from harmful UV rays that cause fading, cracking, and deterioration over time.",
    },
  ]

  const benefits = [
    {
      icon: <Car className="h-8 w-8 text-rose-500" />,
      title: "Complete Interior Care",
      description:
        "Our comprehensive interior detailing service addresses every surface and component of your vehicle's cabin. From leather seats to plastic trim, carpets to headliners, we clean, condition, and protect all materials using appropriate products and techniques for each surface type.",
    },
    {
      icon: <Shield className="h-8 w-8 text-rose-500" />,
      title: "Odor Elimination",
      description:
        "Professional odor removal techniques eliminate even the most persistent smells including pet odors, smoke, food spills, and mildew. Our ozone treatment and enzymatic cleaners work at the molecular level to neutralize odor-causing bacteria and compounds.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-rose-500" />,
      title: "Health & Hygiene",
      description:
        "Deep cleaning removes bacteria, allergens, dust mites, and other contaminants that can affect air quality and health. Our sanitization process creates a cleaner, healthier cabin environment for you and your passengers.",
    },
  ]

  const process = [
    {
      title: "Initial Assessment",
      description:
        "We begin with a thorough inspection of your vehicle's interior to identify specific cleaning needs, stain types, material conditions, and any areas requiring special attention.",
    },
    {
      title: "Pre-Treatment",
      description:
        "Stains and heavily soiled areas receive pre-treatment with appropriate cleaners. This allows products to penetrate and break down contaminants before the main cleaning process.",
    },
    {
      title: "Vacuum & Debris Removal",
      description:
        "Complete vacuum cleaning of all surfaces including seats, carpets, floor mats, crevices, and storage compartments. All loose items and debris are carefully removed and organized.",
    },
    {
      title: "Surface-Specific Cleaning",
      description:
        "Each surface type receives appropriate treatment - leather cleaning and conditioning, fabric shampooing, plastic and vinyl cleaning, and glass polishing using specialized products.",
    },
    {
      title: "Deep Cleaning & Extraction",
      description:
        "Steam cleaning and hot water extraction remove deep-seated dirt, stains, and odors from carpets and upholstery. Multiple passes ensure thorough cleaning and soil removal.",
    },
    {
      title: "Protection & Finishing",
      description:
        "Protective treatments are applied to leather, plastic, and fabric surfaces. Final detailing includes dressing application and quality inspection to ensure perfect results.",
    },
  ]

  const packages = [
    {
      name: "Basic Interior Clean",
      duration: "2-3 hours",
      features: ["Vacuum cleaning", "Dashboard wiping", "Glass cleaning", "Basic seat cleaning", "Floor mat cleaning"],
      price: "₹3,000 - ₹5,000",
      ideal: "Regular maintenance and light cleaning needs",
    },
    {
      name: "Premium Interior Detail",
      duration: "4-6 hours",
      features: [
        "Deep vacuum cleaning",
        "Leather conditioning",
        "Carpet shampooing",
        "Dashboard restoration",
        "Odor treatment",
        "UV protection",
      ],
      price: "₹6,000 - ₹10,000",
      ideal: "Comprehensive cleaning and restoration",
    },
    {
      name: "Complete Interior Restoration",
      duration: "6-8 hours",
      features: [
        "Full interior detailing",
        "Steam cleaning",
        "Stain removal treatment",
        "Ozone odor elimination",
        "Headliner cleaning",
        "Complete sanitization",
        "6-month protection warranty",
      ],
      price: "₹10,000 - ₹15,000",
      ideal: "Heavily soiled or neglected interiors",
    },
  ]

  const faqs = [
    {
      question: "How long does interior detailing take?",
      answer:
        "Interior detailing duration depends on your vehicle's size, condition, and the package selected. Basic cleaning takes 2-3 hours, while comprehensive restoration can take 6-8 hours. We never rush the process as thorough cleaning requires adequate time for products to work effectively and surfaces to dry properly.",
    },
    {
      question: "Can you remove pet hair and odors?",
      answer:
        "Yes, we specialize in pet hair and odor removal. Our professional-grade vacuum systems with specialized attachments effectively remove embedded pet hair from all surfaces. For odors, we use enzymatic cleaners and ozone treatment that eliminate odor-causing bacteria at the molecular level, not just mask the smell.",
    },
    {
      question: "Is it safe to clean leather seats?",
      answer:
        "Absolutely. We use pH-balanced leather cleaners specifically formulated for automotive leather. Our process includes gentle cleaning followed by conditioning to restore suppleness and protect against cracking. We test products on inconspicuous areas first and use different techniques for different leather types.",
    },
    {
      question: "How often should I have my interior detailed?",
      answer:
        "For most vehicles, professional interior detailing every 3-6 months maintains optimal cleanliness and condition. High-use vehicles, those with pets, or cars exposed to heavy wear may benefit from more frequent service. Regular maintenance detailing extends the life of interior materials and maintains a healthier cabin environment.",
    },
    {
      question: "Can you remove tough stains from fabric seats?",
      answer:
        "We can remove most stains including food spills, beverages, ink, makeup, and biological stains. Our success rate is very high due to professional-grade cleaners and extraction equipment. However, some very old or set-in stains may be permanent. We'll assess each stain and provide realistic expectations during our initial evaluation.",
    },
    {
      question: "Do you clean the engine bay as part of interior detailing?",
      answer:
        "Engine bay cleaning is a separate service, not included in interior detailing. Interior detailing focuses on the passenger cabin - seats, carpets, dashboard, door panels, and all interior surfaces. Engine bay cleaning can be added as an additional service if desired.",
    },
  ]

  const testimonials = [
    {
      name: "Priya Menon",
      vehicle: "Toyota Innova",
      text: "My Innova had years of family use with kids and pets. The interior was in terrible condition with stains and odors. After Ekatra Care's complete restoration service, it looks and smells like a brand new car. Absolutely incredible transformation!",
      rating: 5,
    },
    {
      name: "Rohit Agarwal",
      vehicle: "BMW X3",
      text: "The leather conditioning service brought my BMW's seats back to life. They were starting to crack and fade, but now they look and feel like new. The attention to detail and quality of products used is outstanding.",
      rating: 5,
    },
    {
      name: "Kavitha Reddy",
      vehicle: "Maruti Ertiga",
      text: "Had coffee and food stains that I thought were permanent. The team not only removed every stain but also eliminated the lingering odors. The interior now looks better than when I bought the car. Highly recommend!",
      rating: 5,
    },
  ]

  const maintenanceTips = [
    "Use seat covers and floor mats to protect original surfaces from daily wear",
    "Clean spills immediately to prevent staining and odor development",
    "Vacuum regularly to prevent dirt from embedding in carpets and upholstery",
    "Use UV-blocking window tint to protect interior surfaces from sun damage",
    "Avoid eating in the vehicle to minimize stains and odors",
    "Keep interior surfaces dry to prevent mold and mildew growth",
    "Use appropriate cleaning products for different surface types",
    "Schedule professional cleaning every 3-6 months for optimal maintenance",
  ]

  const beforeAfterComparisons = [
    {
      title: "Leather Seat Restoration",
      before: "Cracked, faded leather with visible wear and lack of suppleness",
      after: "Restored leather with renewed color, flexibility, and protective coating",
    },
    {
      title: "Carpet Deep Cleaning",
      before: "Stained, odorous carpets with embedded dirt and debris",
      after: "Fresh, clean carpets with restored color and eliminated odors",
    },
    {
      title: "Dashboard Rejuvenation",
      before: "Faded, dusty dashboard with visible UV damage and dullness",
      after: "Restored dashboard with original color and protective UV coating",
    },
  ]

  const specializedServices = [
    {
      title: "Pet Hair Removal",
      description: "Specialized tools and techniques for complete pet hair extraction from all surfaces",
      icon: "🐕",
    },
    {
      title: "Smoke Odor Elimination",
      description: "Ozone treatment and deep cleaning to completely remove cigarette and other smoke odors",
      icon: "🚭",
    },
    {
      title: "Stain Protection",
      description: "Fabric protection treatment that repels liquids and prevents future staining",
      icon: "🛡️",
    },
    {
      title: "Sanitization Service",
      description: "Complete disinfection and sanitization for health and hygiene",
      icon: "🧼",
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
            <span className="text-white">Interior Detailing</span>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Interior Detailing</h1>
              <p className="text-xl opacity-90 mb-8">
                Complete interior restoration and deep cleaning service that transforms your vehicle's cabin into a
                pristine, healthy environment. Our comprehensive approach addresses every surface with specialized
                techniques and premium products for lasting results.
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
                src="/images/interior-detailing.png"
                alt="Interior Detailing Service"
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
            <p className="text-xl text-gray-400">Comprehensive interior cleaning and restoration techniques</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Interior Detailing?</h2>
            <p className="text-xl text-gray-400">Transform your car's interior with professional care</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Detailing Process</h2>
            <p className="text-xl text-gray-400">Systematic approach to interior cleaning and restoration</p>
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

      {/* Specialized Services */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-400">Additional services for specific interior challenges</p>
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

      {/* Packages Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Interior Detailing Packages</h2>
            <p className="text-xl text-gray-400">Choose the right level of interior care for your vehicle</p>
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
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transformation Results</h2>
            <p className="text-xl text-gray-400">See the dramatic difference our interior detailing makes</p>
          </div>

          <div className="space-y-12">
            {beforeAfterComparisons.map((comparison, index) => (
              <div key={comparison.title} className="grid md:grid-cols-2 gap-8 items-center">
                <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift">
                  <h3 className="text-white font-semibold text-xl mb-4">Before: {comparison.title}</h3>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={`/images/interior-cleaning.jpg`}
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
            <p className="text-xl text-gray-400">What our clients say about our interior detailing service</p>
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
            <p className="text-xl text-gray-400">How to maintain your detailed interior</p>
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
            <p className="text-xl text-gray-400">Common questions about interior detailing</p>
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
            <p className="text-xl text-gray-400">Complete your vehicle's transformation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/what-we-do/detailing-polishing" className="block">
              <div className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full">
                <h3 className="text-white font-semibold text-xl mb-4">Exterior Detailing</h3>
                <p className="text-gray-400 mb-4">
                  Complete your vehicle's transformation with professional exterior paint correction and polishing.
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
                  Protect your vehicle's exterior with advanced ceramic coating technology.
                </p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>

            <Link href="/what-we-do/detailing-services" className="block">
              <div
                className="glass-morphism rounded-xl p-6 animate-slide-up hover-lift h-full"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-white font-semibold text-xl mb-4">Additional Services</h3>
                <p className="text-gray-400 mb-4">Explore our comprehensive range of specialized detailing services.</p>
                <p className="text-rose-500 font-semibold">Learn more →</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Refresh Your Interior Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the comfort and cleanliness of a professionally detailed interior. Transform your daily driving
            experience with our comprehensive interior care service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBookService}
              size="lg"
              variant="secondary"
              className="bg-white text-rose-600 hover:bg-gray-100"
            >
              Book Interior Detailing
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
