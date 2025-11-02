import PricingCalculator from '@/components/PricingCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Calculator | Mohishree Facility Services',
  description: 'Calculate instant pricing for our cleaning and facility management services. Get transparent estimates before booking.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">
              Transparent Pricing
            </h1>
            <p className="text-xl opacity-90">
              Calculate your service cost instantly. No hidden charges, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <PricingCalculator />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">
              Why Our Pricing is Fair
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💯</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">100% Transparent</h3>
                <p className="text-text-secondary">Clear breakdown of all costs upfront</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Market Competitive</h3>
                <p className="text-text-secondary">Best value for professional service quality</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎁</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Loyalty Discounts</h3>
                <p className="text-text-secondary">Save up to 15% with recurring services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
