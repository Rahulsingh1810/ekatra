import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Bike, Wrench, Sparkles, Shield, Settings } from "lucide-react"

export function ServicesPreview() {
  const services = [
    {
      title: "Interior Detailing",
      description:
        "Deep cleaning and restoration of your car's interior with professional techniques and premium products",
      image: "/images/interior-detailing.png",
      icon: <Car className="h-6 w-6" />,
      color: "from-rose-600 to-pink-500",
    },
    {
      title: "Detailing Services",
      description: "Explore our comprehensive range of specialized car care and detailing services",
      image: "/images/detailing-services.png",
      icon: <Sparkles className="h-6 w-6" />,
      color: "from-red-600 to-rose-500",
    },
    {
      title: "Car Wash & Care",
      description: "Keep your car spotless with our professional wash services and premium care treatments",
      image: "/images/car-wash-care.png",
      icon: <Shield className="h-6 w-6" />,
      color: "from-orange-600 to-amber-500",
    },
    {
      title: "Bike Wash & Care",
      description: "Keep your bike spotless with our professional wash services designed for motorcycles",
      image: "/images/detailing-polishing.png",
      icon: <Bike className="h-6 w-6" />,
      color: "from-red-700 to-red-500",
    },
    {
      title: "Car & Bike Tyre Care",
      description: "Professional care to extend tyre life and ensure a smooth, safe ride for all vehicles",
      image: "/images/paint-protection.png",
      icon: <Settings className="h-6 w-6" />,
      color: "from-rose-800 to-rose-600",
    },
    {
      title: "Accessories",
      description: "Explore our range of premium car care accessories and additional services",
      image: "/images/ceramic-coating.png",
      icon: <Wrench className="h-6 w-6" />,
      color: "from-orange-700 to-orange-500",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto mobile-responsive">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-responsive-lg font-bold mb-4 sm:mb-6 gradient-text">Our Premium Services</h2>
          <p className="text-responsive-md text-gray-400 max-w-3xl mx-auto">
            Professional car and bike care services designed to keep your vehicles in pristine condition with the latest
            technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-morphism rounded-3xl p-6 sm:p-8 hover:glass-morphism-hover transition-all duration-500 animate-slide-up group hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 sm:h-56 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />
                <div className="absolute top-4 right-4 p-3 glass-morphism rounded-full text-white animate-pulse-glow">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{service.description}</p>
              <Button
                variant="ghost"
                className="text-indigo-500 hover:text-amber-500 p-0 text-sm sm:text-base font-semibold group-hover:translate-x-2 transition-all duration-300"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-bounce-slow" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link href="/what-we-do">
            <Button
              size="lg"
              className="gradient-bg hover:scale-105 transition-all duration-300 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold animate-pulse-glow"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
