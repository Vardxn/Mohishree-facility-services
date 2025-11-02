import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  Factory,
  HardHat,
  CheckCircle2, 
  AlertTriangle, 
  Shield,
  Leaf,
  ClipboardCheck,
  Droplet
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Factory & Industrial Cleaning Services in Aurangabad | Mohishree',
  description: 'Specialized industrial cleaning for factories in Aurangabad. Production floor cleaning, compliance support, safety-focused. Manufacturing facility expertise.',
  keywords: 'industrial cleaning, factory cleaning Aurangabad, manufacturing cleaning, production floor cleaning, industrial housekeeping',
};

export default function FactoriesPage() {
  const challenges = [
    {
      challenge: 'Production Continuity',
      solution: 'Cleaning schedules synchronized with production cycles and shift changes',
      icon: Factory,
    },
    {
      challenge: 'Safety Compliance',
      solution: 'Trained staff following OSHA guidelines and industry-specific safety protocols',
      icon: Shield,
    },
    {
      challenge: 'Hazardous Materials',
      solution: 'Certified handling of industrial waste, chemical spills, and contaminated areas',
      icon: AlertTriangle,
    },
    {
      challenge: 'Regulatory Standards',
      solution: 'Documentation and procedures meeting FDA, ISO, and environmental regulations',
      icon: ClipboardCheck,
    },
    {
      challenge: 'Heavy Machinery Areas',
      solution: 'Specialized degreasing and cleaning around equipment without operational disruption',
      icon: HardHat,
    },
    {
      challenge: 'Dust & Contamination Control',
      solution: 'Industrial-grade equipment for effective particulate removal and air quality',
      icon: Droplet,
    },
  ];

  const services = [
    {
      area: 'Production Floors',
      tasks: ['Machine area cleaning', 'Oil and grease removal', 'Floor scrubbing', 'Dust control'],
    },
    {
      area: 'Warehouses',
      tasks: ['Aisle cleaning', 'Loading dock maintenance', 'Racking area upkeep', 'Pest control'],
    },
    {
      area: 'Clean Rooms',
      tasks: ['Sterile environment protocols', 'HEPA filtration', 'Particle control', 'Gowning area cleaning'],
    },
    {
      area: 'Office & Admin',
      tasks: ['Corporate area cleaning', 'QC lab maintenance', 'Conference rooms', 'Cafeteria'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Factory className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Factory & Industrial Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Compliance-Focused Cleaning for Manufacturing Excellence
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-gray-800 hover:bg-gray-50">
              Request Industrial Cleaning Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-gray-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Where Safety, Compliance, and Cleanliness Converge
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Industrial facilities face unique cleaning challenges - heavy machinery, hazardous materials, 
                  strict regulatory requirements, and the need to maintain operations without interruption. 
                  Generic cleaning services simply cannot meet these specialized demands.
                </p>
                <p className="text-lg text-gray-600">
                  Mohishree brings industrial cleaning expertise across pharmaceutical manufacturing, food 
                  processing, automotive, textiles, and chemical plants. Our teams are trained in safety 
                  protocols, regulatory compliance, and the specific needs of production environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Industrial Cleaning Challenges & Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-6 w-6 text-gray-700" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.challenge}
                        </h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Our Solution:</p>
                      <p className="text-gray-600">{item.solution}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Industrial Facility Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardHeader className="bg-gray-100">
                    <h3 className="text-lg font-semibold text-center">{service.area}</h3>
                  </CardHeader>
                  <CardContent className="p-4">
                    <ul className="space-y-2 text-sm">
                      {service.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-gray-700 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-gray-700 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-900 text-white">
                <h3 className="text-2xl font-semibold text-center">Success Story: Pharmaceutical Plant</h3>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Challenge:</p>
                    <p className="text-gray-600">FDA-compliant cleaning, cleanroom standards, validated procedures</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Solution:</p>
                    <p className="text-gray-600">Certified personnel, documented procedures, QA coordination</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Results:</p>
                    <p className="text-gray-600">Zero FDA observations, 30% reduced downtime, 3+ year partnership</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    Preferred vendor status achieved through consistent compliance and quality delivery.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-yellow-50 border-y-2 border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-6">
            <AlertTriangle className="h-16 w-16 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Safety-First Industrial Cleaning
              </h3>
              <p className="text-lg text-gray-600">
                Our teams are trained in LOTO procedures, confined space entry, chemical handling, and 
                emergency response. Safety compliance is never compromised.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Keep Your Facility Compliant and Clean
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Specialized industrial cleaning you can trust
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-gray-800 hover:bg-gray-50">
              Schedule Factory Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
