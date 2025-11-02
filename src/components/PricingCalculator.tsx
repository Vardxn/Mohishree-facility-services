'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Calculator, IndianRupee } from 'lucide-react';
import Link from 'next/link';

interface PricingFactors {
  service: string;
  propertyType: string;
  area: string;
  frequency: string;
  addons: string[];
}

export default function PricingCalculator() {
  const [factors, setFactors] = useState<PricingFactors>({
    service: '',
    propertyType: '',
    area: '',
    frequency: '',
    addons: [],
  });

  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const services = [
    { name: 'Full Home Cleaning', basePrice: 2000 },
    { name: 'Deep Cleaning', basePrice: 3500 },
    { name: 'Sofa Cleaning', basePrice: 1500 },
    { name: 'Bathroom Cleaning', basePrice: 800 },
    { name: 'Kitchen Cleaning', basePrice: 1200 },
    { name: 'Office Cleaning', basePrice: 5000 },
    { name: 'Corporate Housekeeping', basePrice: 15000 },
  ];

  const propertyTypes = [
    { name: '1 BHK', multiplier: 1.0 },
    { name: '2 BHK', multiplier: 1.3 },
    { name: '3 BHK', multiplier: 1.6 },
    { name: '4+ BHK', multiplier: 2.0 },
    { name: 'Office (<1000 sq.ft)', multiplier: 1.5 },
    { name: 'Office (1000-5000 sq.ft)', multiplier: 3.0 },
    { name: 'Office (>5000 sq.ft)', multiplier: 5.0 },
  ];

  const frequencies = [
    { name: 'One-time', discount: 0 },
    { name: 'Weekly', discount: 0.15 },
    { name: 'Bi-weekly', discount: 0.10 },
    { name: 'Monthly', discount: 0.05 },
  ];

  const addons = [
    { name: 'Window Cleaning', price: 500 },
    { name: 'Balcony Cleaning', price: 300 },
    { name: 'Carpet Cleaning', price: 800 },
    { name: 'Pest Control', price: 1200 },
    { name: 'Disinfection Service', price: 600 },
  ];

  const calculatePrice = () => {
    if (!factors.service || !factors.propertyType || !factors.frequency) {
      alert('Please fill in all required fields');
      return;
    }

    const service = services.find(s => s.name === factors.service);
    const propertyType = propertyTypes.find(p => p.name === factors.propertyType);
    const frequency = frequencies.find(f => f.name === factors.frequency);

    if (!service || !propertyType || !frequency) return;

    let price = service.basePrice * propertyType.multiplier;

    // Add addons
    factors.addons.forEach(addonName => {
      const addon = addons.find(a => a.name === addonName);
      if (addon) price += addon.price;
    });

    // Apply frequency discount
    price = price * (1 - frequency.discount);

    setEstimatedPrice(Math.round(price));
  };

  const handleAddonToggle = (addonName: string) => {
    setFactors({
      ...factors,
      addons: factors.addons.includes(addonName)
        ? factors.addons.filter(a => a !== addonName)
        : [...factors.addons, addonName],
    });
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Calculator className="w-6 h-6" />
          Pricing Calculator
        </CardTitle>
        <CardDescription>
          Get an instant estimate for your cleaning service
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Service Selection */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Select Service *
            </label>
            <select
              value={factors.service}
              onChange={(e) => setFactors({ ...factors, service: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Choose a service</option>
              {services.map((service) => (
                <option key={service.name} value={service.name}>
                  {service.name} (Base: ₹{service.basePrice})
                </option>
              ))}
            </select>
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Property Type *
            </label>
            <select
              value={factors.propertyType}
              onChange={(e) => setFactors({ ...factors, propertyType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select property type</option>
              {propertyTypes.map((type) => (
                <option key={type.name} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          {/* Frequency */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Service Frequency * <span className="text-green-600 text-xs">(Save up to 15%)</span>
            </label>
            <select
              value={factors.frequency}
              onChange={(e) => setFactors({ ...factors, frequency: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select frequency</option>
              {frequencies.map((freq) => (
                <option key={freq.name} value={freq.name}>
                  {freq.name} {freq.discount > 0 && `(Save ${freq.discount * 100}%)`}
                </option>
              ))}
            </select>
          </div>

          {/* Add-ons */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Additional Services (Optional)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {addons.map((addon) => (
                <label
                  key={addon.name}
                  className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                    factors.addons.includes(addon.name)
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-300 hover:border-primary/50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={factors.addons.includes(addon.name)}
                    onChange={() => handleAddonToggle(addon.name)}
                    className="w-4 h-4"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{addon.name}</div>
                    <div className="text-xs text-text-secondary">+₹{addon.price}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <Button onClick={calculatePrice} size="lg" className="w-full">
            Calculate Price
          </Button>

          {/* Result */}
          {estimatedPrice !== null && (
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary rounded-lg p-6">
              <div className="text-center">
                <div className="text-sm text-text-secondary mb-2">Estimated Price</div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <IndianRupee className="w-8 h-8 text-primary" />
                  <span className="text-5xl font-bold text-primary">{estimatedPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-sm text-text-secondary mb-4">
                  *Actual price may vary based on specific requirements and location
                </div>
                <div className="flex gap-3 justify-center">
                  <Link href="/booking">
                    <Button size="lg">Book This Service</Button>
                  </Link>
                  <Link href="/get-a-quote">
                    <Button variant="outline" size="lg">Get Exact Quote</Button>
                  </Link>
                </div>
              </div>

              {/* Breakdown */}
              <div className="mt-6 pt-6 border-t border-primary/20">
                <div className="text-sm font-semibold mb-3">Price Breakdown:</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{factors.service}</span>
                    <span>Base Service</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{factors.propertyType}</span>
                    <span>Property Size</span>
                  </div>
                  {factors.addons.length > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>{factors.addons.length} Add-on(s)</span>
                      <span>+₹{factors.addons.reduce((sum, name) => {
                        const addon = addons.find(a => a.name === name);
                        return sum + (addon?.price || 0);
                      }, 0)}</span>
                    </div>
                  )}
                  {frequencies.find(f => f.name === factors.frequency)?.discount! > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>{factors.frequency} Plan</span>
                      <span>-{(frequencies.find(f => f.name === factors.frequency)?.discount! * 100)}% Discount</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-sm text-blue-800">
              <p className="font-semibold mb-2">✨ All Services Include:</p>
              <ul className="space-y-1 ml-4">
                <li>• Professional trained staff</li>
                <li>• Eco-friendly cleaning products</li>
                <li>• Quality assurance guarantee</li>
                <li>• Free rescheduling (up to 6 hours before)</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
