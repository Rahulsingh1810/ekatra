"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message with form data
    const phoneNumber = "919902245212"
    const message = `*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Interested:* ${formData.service}
*Message:* ${formData.message}

Please get back to me regarding my inquiry. Thank you!`

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleBookService = () => {
    const phoneNumber = "919902245212"
    const message =
      "Hi! I would like to book a service at Ekatra Car Care. Can you please help me with the booking process and available time slots?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: [
        "Sy No.21, Chunchagatta, Yadava Farm",
        "Chunchgatta, JP Nagar 7th Phase",
        "J. P. Nagar, Uttarahalli-Manavarthekaval",
        "Bengaluru, Karnataka 560062",
      ],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["099022 45212"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["info@ekatracare.com", "support@ekatracare.com"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: ["Monday - Sunday: 9:00 AM - 9:00 PM", "Open all days of the week"],
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-slide-up">
            Get in touch with our team for premium car and bike care services
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className="text-white">
                      Service Interested
                    </Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select a service</option>
                      <option value="Interior Detailing">Interior Detailing</option>
                      <option value="Car Wash & Care">Car Wash & Care</option>
                      <option value="Bike Wash & Care">Bike Wash & Care</option>
                      <option value="Tyre Care">Tyre Care</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Custom Service">Custom Service</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="mt-1 bg-slate-800 border-slate-700 text-white"
                    placeholder="Tell us about your car care needs..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-rose-600 hover:bg-rose-700 hover:scale-105 transition-all duration-300 text-white"
                >
                  Send Message via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                We're here to help with all your car and bike care needs. Reach out to us through any of the following
                methods.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4 glass-morphism rounded-xl p-6">
                    <div className="text-rose-500 mt-1">{info.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-400 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Find Us</h2>
            <p className="text-gray-400">Visit our state-of-the-art car care facility in Bengaluru</p>
          </div>

          <div className="glass-morphism rounded-2xl p-4 sm:p-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.253462607692!2d77.57328907491693!3d12.89141678741659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e682d34d93%3A0x2eb5e84ce0249924!2sTotalEnergies%20WASH%20-%20Ekatra%20Car%20Care!5e0!3m2!1sen!2sin!4v1749361145091!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Service?</h2>
          <p className="text-xl mb-8 opacity-90">Don't wait - give your car the premium care it deserves</p>
          <Button
            onClick={handleBookService}
            size="lg"
            variant="secondary"
            className="bg-white text-rose-600 hover:bg-gray-100 px-8"
          >
            Book Service Now
          </Button>
        </div>
      </section>
    </main>
  )
}
