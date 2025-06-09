"use client"

import { useEffect, useState } from "react"
import { Car, Users, Award, Clock } from "lucide-react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ cars: 0, satisfaction: 0, experience: 0, support: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          const targets = { cars: 5000, satisfaction: 98, experience: 10, support: 24 }
          const duration = 2000
          const steps = 60
          const stepTime = duration / steps

          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            setCounts({
              cars: Math.floor(targets.cars * progress),
              satisfaction: Math.floor(targets.satisfaction * progress),
              experience: Math.floor(targets.experience * progress),
              support: Math.floor(targets.support * progress),
            })

            if (step >= steps) {
              clearInterval(timer)
              setCounts(targets)
            }
          }, stepTime)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      number: `${counts.cars}+`,
      label: "Cars Serviced",
      icon: <Car className="h-8 w-8 sm:h-10 sm:w-10" />,
      color: "from-rose-600 to-red-500",
    },
    {
      number: `${counts.satisfaction}%`,
      label: "Customer Satisfaction",
      icon: <Users className="h-8 w-8 sm:h-10 sm:w-10" />,
      color: "from-red-600 to-rose-500",
    },
    {
      number: `${counts.experience}+`,
      label: "Years Experience",
      icon: <Award className="h-8 w-8 sm:h-10 sm:w-10" />,
      color: "from-rose-800 to-rose-600",
    },
    {
      number: `${counts.support}/7`,
      label: "Support Available",
      icon: <Clock className="h-8 w-8 sm:h-10 sm:w-10" />,
      color: "from-orange-600 to-red-600",
    },
  ]

  return (
    <section id="stats-section" className="section-padding gradient-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white rounded-full animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto mobile-responsive relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center animate-scale-in glass-morphism rounded-3xl p-6 sm:p-8 hover-lift ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`inline-flex p-4 sm:p-6 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 sm:mb-6 animate-pulse-glow`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white animate-text-shimmer">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
