import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Phone, MapPin, Youtube, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/images/logo.png" alt="Ekatra Care Logo" width={40} height={40} className="w-10 h-10" />
              <h3 className="text-2xl font-bold gradient-text">Ekatra Care</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Premium car and bike detailing services providing exceptional care for your vehicles.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-indigo-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-indigo-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-indigo-500 cursor-pointer transition-colors" />
              <Link
                href="https://www.youtube.com/channel/UCmpuQMu9IiaOYYDfCE3QmtQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-gray-400 hover:text-white transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Interior Detailing</li>
              <li className="text-gray-400">Car Wash & Care</li>
              <li className="text-gray-400">Bike Wash & Care</li>
              <li className="text-gray-400">Tyre Care</li>
              <li className="text-gray-400">Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-indigo-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Sy No.21, Chunchagatta, Yadava Farm, Chunchgatta, JP Nagar 7th Phase, J. P. Nagar,
                  Uttarahalli-Manavarthekaval, Bengaluru, Karnataka 560062
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-indigo-500" />
                <span className="text-gray-400">099022 45212</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 mr-2 text-indigo-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <div className="font-semibold mb-1">Open Daily: 9 AM - 9 PM</div>
                  <div>Monday - Sunday</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ekatra Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
