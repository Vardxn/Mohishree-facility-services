import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  Building2,
  Briefcase,
  CheckCircle2, 
  Clock, 
  Shield,
  Leaf,
  Users,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate Office Cleaning Services in Aurangabad | Mohishree',
  description: 'Specialized cleaning services for corporate offices in Aurangabad. Professional image, employee health, flexible scheduling. IT park and business center expertise.',
  keywords: 'corporate office cleaning, business center cleaning Aurangabad, IT park housekeeping, professional office cleaning',
};

export default function CorporateOfficesPage() {
  const challenges = [
    {
      challenge: '24/7 Operations',
      solution: 'Dual-shift cleaning teams ensuring coverage without disrupting round-the-clock business',
      icon: Clock,
    },
    {
      challenge: 'Professional Image',
      solution: 'Impeccable standards for client-facing areas, lobbies, and conference rooms',
      icon: Award,
    },
    {
      challenge: 'Employee Health',
      solution: 'Regular sanitization reducing sick days and promoting a healthy workforce',
      icon: Shield,
    },
    {
      challenge: 'Confidentiality',
      solution: 'Background-verified staff trained in document handling and privacy protocols',
      icon: Briefcase,
    },
    {
      challenge: 'Workstation Hygiene',
      solution: 'Non-intrusive desk cleaning and tech equipment sanitization procedures',
      icon: Users,
    },
    {
      challenge: 'Sustainability Goals',
      solution: 'Green cleaning aligned with corporate environmental commitments',
      icon: Leaf,
    },
  ];

  const services = [
    'Executive suites and cabins',
    'Open workspace and cubicles',
    'Meeting and conference rooms',
    'Pantry and break rooms',
    'Reception and waiting areas',
    'Server rooms (controlled access)',
    'Executive washrooms',
    'Common corridors',
    'Building lobbies',
    'Parking and external areas',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Building2 className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Corporate Office Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Tailored Facility Solutions for Professional Business Environments
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
              Request Corporate Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-blue-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Where Image and Health Meet Productivity
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Corporate offices demand more than basic cleaning - they require a partner who understands 
                  the importance of professional appearance, employee wellbeing, confidentiality, and operational 
                  continuity. Whether you operate 9-to-5 or run 24/7 operations, cleanliness directly impacts 
                  your company image and team productivity.
                </p>
                <p className="text-lg text-gray-600">
                  Mohishree has extensive experience serving IT parks, business centers, and corporate campuses. 
                  We understand the unique needs of professional environments - from handling sensitive documents 
                  to maintaining pristine client-facing spaces to supporting employee health through regular sanitization.
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
              Understanding Corporate Office Challenges
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-6 w-6 text-blue-700" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.challenge}
                        </h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold text-blue-700 mb-2">Our Solution:</p>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Comprehensive Corporate Facility Coverage
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-blue-700 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-700 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                <h3 className="text-2xl font-semibold text-center">Success Story: IT Park</h3>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-blue-700 mb-2">Client:</p>
                    <p className="text-gray-600">Multi-tenant IT Park, 5 buildings, 50,000 sq ft</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-700 mb-2">Challenge:</p>
                    <p className="text-gray-600">Round-the-clock operations across multiple shifts</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-700 mb-2">Results:</p>
                    <p className="text-gray-600">92% employee satisfaction, contract expansion to 3 more buildings</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Key Outcomes:</strong> Zero security incidents, improved cleanliness scores, 
                    professional image maintenance leading to new tenant acquisitions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-50 border-y-2 border-green-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-6">
            <Leaf className="h-16 w-16 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Supporting Corporate Sustainability
              </h3>
              <p className="text-lg text-gray-600">
                Align cleaning operations with your ESG goals. Eco-friendly products, waste reduction, 
                and energy-efficient practices that support your corporate responsibility commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Maintain Your Professional Edge
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Partner with Mohishree for corporate facility excellence
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
