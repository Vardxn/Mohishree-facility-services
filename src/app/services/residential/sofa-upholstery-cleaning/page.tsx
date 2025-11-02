import { Metadata } from 'next';
import Link from 'next/link';
import { Sofa, CheckCircle2, Sparkles, Wind, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Professional Sofa & Upholstery Cleaning Services in Aurangabad | Mohishree',
  description: 'Expert sofa and upholstery cleaning in Aurangabad. Deep fabric care, stain removal, and odor elimination. Eco-friendly products. Restore freshness to your furniture!',
  keywords: 'sofa cleaning Aurangabad, upholstery cleaning, furniture cleaning, fabric cleaning, stain removal, couch cleaning',
};

export default function SofaUpholsteryCleaningPage() {
  const processSteps = [
    {
      step: 1,
      title: 'Pre-Inspection',
      description: 'Detailed examination of fabric type, stains, and condition to determine optimal cleaning method',
    },
    {
      step: 2,
      title: 'Dry Vacuuming',
      description: 'Industrial vacuum removes loose dirt, dust, and debris from surface and crevices',
    },
    {
      step: 3,
      title: 'Stain Pre-Treatment',
      description: 'Specialized eco-friendly solutions applied to stubborn stains and high-traffic areas',
    },
    {
      step: 4,
      title: 'Deep Steam Cleaning',
      description: 'Hot water extraction method penetrates deep into fabric fibers for thorough cleaning',
    },
    {
      step: 5,
      title: 'Sanitization',
      description: 'Eco-friendly disinfectants eliminate bacteria, allergens, and odor-causing germs',
    },
    {
      step: 6,
      title: 'Quick Drying',
      description: 'Professional drying techniques reduce moisture and prevent mold growth',
    },
  ];

  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Restores Original Beauty',
      description: 'Revives colors, removes stains, and makes your furniture look fresh and inviting again',
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Eliminates Odors',
      description: 'Deep cleaning removes trapped odors from pets, smoke, food, and daily use',
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Healthier Home Environment',
      description: 'Removes allergens, dust mites, and bacteria that can trigger allergies and respiratory issues',
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: 'Extends Furniture Life',
      description: 'Regular professional cleaning prevents fabric degradation and protects your investment',
    },
  ];

  const fabricTypes = [
    { name: 'Cotton & Linen', suitable: true },
    { name: 'Microfiber', suitable: true },
    { name: 'Velvet & Suede', suitable: true },
    { name: 'Synthetic Blends', suitable: true },
    { name: 'Leather & Faux Leather', suitable: true },
    { name: 'Delicate Silk', suitable: true, note: 'Requires special care' },
  ];

  const targetItems = [
    'Sofas and Couches',
    'Dining Chairs',
    'Office Chairs',
    'Car Seats',
    'Mattresses',
    'Curtains and Drapes',
    'Cushions and Pillows',
    'Ottoman and Recliners',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sofa className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              Professional Sofa & Upholstery Cleaning
            </h1>
            <p className="text-xl lg:text-2xl mb-4 opacity-90">
              Restore Freshness & Extend the Life of Your Furniture
            </p>
            <p className="text-lg mb-8 opacity-85">
              Deep fabric care, stain removal, and sanitization - making your furniture look and smell like new
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote">
                <Button variant="accent" size="lg">
                  Get Free Estimate
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="bg-white/10 border-white hover:bg-white hover:text-purple-600">
                  Book Now: +91 94236 79285
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Why Professional Upholstery Cleaning Matters
            </h2>
            <div className="prose prose-lg max-w-none text-text-secondary">
              <p className="text-xl mb-4 leading-relaxed">
                Your sofa and upholstered furniture accumulate dirt, dust, allergens, and bacteria over time—even if they look clean on the surface. Regular vacuuming only addresses surface-level debris, while deep-seated grime, stains, and odors remain trapped in the fabric fibers.
              </p>
              <p className="text-lg leading-relaxed">
                At Mohishree Facility Services, we use professional-grade steam cleaning equipment and eco-friendly cleaning solutions to penetrate deep into upholstery fibers. Our trained technicians safely remove stubborn stains, eliminate odors, and sanitize your furniture—all while protecting the delicate fabrics and extending the life of your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
                Our Professional 6-Step Cleaning Process
              </h2>
              <p className="text-xl text-text-secondary">
                Proven method that delivers deep cleaning without damaging your furniture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((item) => (
                <Card key={item.step} className="hover:shadow-card-hover transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                        {item.step}
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <p className="text-text-primary font-semibold flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                Typical Service Duration: 1-3 hours depending on furniture size and condition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
                Benefits of Professional Upholstery Cleaning
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-purple-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-green-50 border-2 border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">🌿</span>
                Eco-Friendly & Safe Cleaning Products
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We use only eco-friendly, non-toxic cleaning agents that are safe for children, pets, and individuals with allergies or sensitivities. Our products effectively clean and sanitize while being gentle on fabrics and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Fabrics We Clean
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {fabricTypes.map((fabric, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mr-3" />
                  <div>
                    <span className="text-text-primary font-medium">{fabric.name}</span>
                    {fabric.note && (
                      <span className="text-sm text-text-secondary ml-2 italic">({fabric.note})</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <p className="text-text-primary text-center">
                <strong>Not sure about your fabric type?</strong> Our experts will identify and use the appropriate cleaning method during the pre-inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Clean */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              What We Clean
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {targetItems.map((item, index) => (
                <div key={index} className="bg-background p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <Sofa className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <span className="text-sm font-medium text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Perfect For
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Homeowners</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-text-secondary">
                  Regular maintenance for living room, bedroom, and dining furniture
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Pre-Event Preparation</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-text-secondary">
                  Make your home guest-ready for festivals, weddings, or parties
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Pet Owners</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-text-secondary">
                  Remove pet hair, dander, stains, and odors effectively
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">
            Give Your Furniture the Care It Deserves
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule professional sofa and upholstery cleaning today - restore freshness and beauty to your home
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-a-quote">
              <Button variant="accent" size="lg" className="text-xl px-12 py-6">
                Request Free Estimate
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-xl px-12 py-6 bg-white/10 border-white hover:bg-white hover:text-purple-600">
                Call +91 94236 79285
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm opacity-85">
            <p>⚡ 3-4 Hour Response | 🌿 100% Eco-Friendly Products | ⭐ 4.4 Star Rated Service</p>
          </div>
        </div>
      </section>
    </div>
  );
}
