import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

/**
 * Footer component with company information, links, and social media
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Get a Quote', href: '/get-a-quote' },
  ];

  const services = [
    { label: 'Residential Services', href: '/services/residential' },
    { label: 'Commercial Services', href: '/services/commercial' },
    { label: 'Industrial Services', href: '/services/industrial' },
    { label: 'Environmental Services', href: '/services/environmental' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info with Logo */}
          <div className="text-center sm:text-left">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 justify-center sm:justify-start">
              <Image 
                src="/images/mohishree-logo.jpg" 
                alt="Mohishree Logo" 
                width={40} 
                height={40}
                className="object-contain w-10 h-10 sm:w-12 sm:h-12"
              />
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg leading-tight">Mohishree</h3>
                <p className="text-blue-400 text-xs sm:text-sm font-semibold leading-tight">Facility Services</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm mb-4">
              Professional facility management and cleaning services in Chhatrapati Sambhajinagar.
            </p>
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-blue-400 transition-colors text-xs sm:text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-left">
                  Harishchandra Residency, Bajajnagar, Chh. Sambhajinagar, 431133
                </span>
              </li>
              <li className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <a
                  href="tel:9423679285"
                  className="text-xs sm:text-sm hover:text-blue-400 transition-colors"
                >
                  +91 94236 79285
                </a>
              </li>
              <li className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <a
                  href="mailto:mohishreejcmk2025@gmail.com"
                  className="text-xs sm:text-sm hover:text-blue-400 transition-colors break-all"
                >
                  mohishreejcmk2025@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm">
            &copy; {currentYear} Mohishree Facility Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
