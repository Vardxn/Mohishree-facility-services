import { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, CheckCircle2, Shield, Sparkles, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Professional Water Tank Cleaning Services in Aurangabad | Mohishree',
  description: 'Expert water tank cleaning services in Aurangabad. Remove harmful sediment and contaminants from your water supply. Eco-friendly, thorough, and affordable. Call now!',
  keywords: 'water tank cleaning Aurangabad, water tank cleaning services, tank sanitization, water purification, overhead tank cleaning',
};

export default function WaterTankCleaningPage() {
  const processSteps = [
    {
      step: 1,
      title: 'Inspection & Draining',
      description: 'Complete assessment of tank condition followed by safe, controlled water drainage',
    },
    {
      step: 2,
      title: 'Manual Scrubbing',
      description: 'Thorough removal of sediment, algae, and biofilm from walls, floor, and ceiling',
    },
    {
      step: 3,
      title: 'High-Pressure Washing',
      description: 'Industrial-grade pressure washing to eliminate stubborn deposits and contaminants',
    },
    {
      step: 4,
      title: 'Sanitization Treatment',
      description: 'Application of eco-friendly disinfectants to ensure complete bacterial elimination',
    },
    {
      step: 5,
      title: 'Rinse & Refill',
      description: 'Multiple rinses to remove cleaning agents, followed by safe refilling',
    },
    {
      step: 6,
      title: 'Quality Check',
      description: 'Final inspection and water quality verification before handover',
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Protects Family Health',
      description: 'Removes harmful bacteria, sediment, and contaminants that can cause waterborne diseases',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Improves Water Quality',
      description: 'Clear, odor-free water with better taste and appearance for daily use',
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Extends Tank Life',
      description: 'Prevents corrosion and structural damage, prolonging your water tank investment',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Recommended Frequency',
      description: 'Expert cleaning every 6 months ensures optimal water safety year-round',
    },
  ];

  const targetAudience = [
    'Residential homes and apartments',
    'Housing societies and gated communities',
    'Commercial buildings and offices',
    'Hotels and hospitality establishments',
    'Educational institutions',
    'Healthcare facilities',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Droplets className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              Professional Water Tank Cleaning Services
            </h1>
            <p className="text-xl lg:text-2xl mb-4 opacity-90">
              Safeguard Your Family's Health with Clean, Pure Water
            </p>
            <p className="text-lg mb-8 opacity-85">
              Expert water tank cleaning in Aurangabad - removing harmful sediment and contaminants for safe, healthy water
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote">
                <Button variant="accent" size="lg">
                  Request Free Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="bg-white/10 border-white hover:bg-white hover:text-blue-600">
                  Call Now: +91 94236 79285
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
              Why Water Tank Cleaning is Essential
            </h2>
            <div className="prose prose-lg max-w-none text-text-secondary">
              <p className="text-xl mb-4 leading-relaxed">
                A clean water tank is essential for the health and safety of your family or employees. Over time, water tanks accumulate sediment, algae, bacteria, and other harmful contaminants that can pose serious health risks. Regular professional cleaning removes these dangers and ensures your water supply remains pure and safe.
              </p>
              <p className="text-lg leading-relaxed">
                At Mohishree Facility Services, we use eco-friendly cleaning products and advanced techniques to thoroughly clean and sanitize your water tanks. Our trained professionals follow a systematic process that guarantees complete removal of contaminants without compromising the structural integrity of your tank.
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
                Our Proven 6-Step Cleaning Process
              </h2>
              <p className="text-xl text-text-secondary">
                Transparent, systematic, and thorough - see exactly how we ensure your water safety
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((item) => (
                <Card key={item.step} className="hover:shadow-card-hover transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
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

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <p className="text-text-primary font-semibold flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
                Complete Process Duration: 2-4 hours depending on tank size
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
                Key Benefits of Professional Water Tank Cleaning
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-primary">
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
                Eco-Friendly Cleaning Products
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We use only eco-friendly, non-toxic cleaning agents that are safe for your family, pets, and the environment. Our cleaning process ensures complete sanitization without leaving harmful chemical residues in your water supply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Who Needs Water Tank Cleaning?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {targetAudience.map((audience, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3" />
                  <span className="text-text-primary font-medium">{audience}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-text-secondary italic">
                Ideal for anyone concerned about water quality and family health
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Frequency */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Recommended Frequency</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-5xl font-bold text-primary mb-4">Every 6 Months</div>
                  <p className="text-text-secondary">
                    Regular cleaning every 6 months ensures optimal water safety and prevents harmful buildup
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-primary-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-white">Our Promise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>4.4★ Rated Service Quality</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>3-4 Hour Response Time</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Eco-Friendly Products Only</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>6 Years of Trusted Service</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">
            Ready for Clean, Safe Water?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your professional water tank cleaning today and protect your family's health
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-a-quote">
              <Button variant="accent" size="lg" className="text-xl px-12 py-6">
                Request Free Quote for Water Tank Cleaning
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-xl px-12 py-6 bg-white/10 border-white hover:bg-white hover:text-blue-600">
                Call +91 94236 79285
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm opacity-85">
            <p>⚡ Quick Response in 3-4 Hours | 🌿 100% Eco-Friendly | ⭐ 4.4 Star Rated</p>
          </div>
        </div>
      </section>
    </div>
  );
}
