'use client';

import { MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919876543210'; // Replace with actual number
    const message = encodeURIComponent('Hi! I would like to inquire about your cleaning services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-2xl bg-green-500 hover:bg-green-600 active:bg-green-700 text-white transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      </Button>
      
      {/* Tooltip - Hidden on mobile, shown on desktop */}
      <div className="hidden sm:block absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 -mt-1">
            <div className="border-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
    </div>
  );
}
