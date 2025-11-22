'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo with Image - Responsive */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 hover:opacity-90 transition-opacity">
            <Image 
              src="/images/mohishree-logo.jpg" 
              alt="Mohishree Facility Services Logo" 
              width={50} 
              height={50}
              className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              priority
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-bold text-orange-500 leading-tight">
                Mohishree
              </span>
              <span className="text-xs sm:text-sm font-semibold text-blue-600 leading-tight">
                FACILITY SERVICES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors text-sm xl:text-base ${
                  isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a href="tel:+919423679285" className="hidden xl:flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm whitespace-nowrap">+91 94236 79285</span>
            </a>
            <Link href="/booking" className="bg-green-500 text-white px-4 xl:px-6 py-2 rounded-lg hover:bg-green-600 font-semibold text-sm whitespace-nowrap">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t bg-white">
            {/* Navigation Links */}
            <div className="space-y-1 mb-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    isActive(item.href) 
                      ? 'bg-blue-50 text-blue-600 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t space-y-2">
              <a 
                href="tel:+919423679285" 
                className="flex items-center space-x-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg active:bg-gray-100"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="font-medium">+91 94236 79285</span>
              </a>

              <Link 
                href="/booking" 
                onClick={() => setIsMenuOpen(false)}
                className="block bg-green-500 text-white text-center px-4 py-3 rounded-lg hover:bg-green-600 font-semibold active:bg-green-700"
              >
                Book Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
