import { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, Target, Lightbulb, TrendingUp, CheckCircle2, Building2, GraduationCap, ShoppingBag, Factory } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Case Studies & Success Stories - Mohishree Facility Services',
  description: 'Read how Mohishree Facility Services solved complex facility management challenges for educational institutions, corporate offices, and commercial spaces in Aurangabad.',
  keywords: 'case studies, success stories, facility management solutions, corporate cleaning case study, Mohishree projects',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      icon: <GraduationCap className="w-12 h-12" />,
      client: 'Leading Educational Institution in Aurangabad',
      industry: 'Education',
      service: 'Comprehensive Campus Facility Management',
      challenge: 'The client required a reliable and discreet housekeeping solution to maintain hygiene standards across a high-traffic campus with over 2,000 students without disrupting academic activities. Previous vendors struggled with consistency and scheduling flexibility.',
      solution: 'Mohishree Facility Services developed and implemented a customized daily and weekly cleaning schedule utilizing eco-friendly products, with a focus on sanitizing common areas, restrooms, and lecture halls during off-peak hours. Our team coordinated closely with administration to align with class schedules and examination periods.',
      result: 'The partnership resulted in a consistently higher standard of campus cleanliness, positive feedback from students and faculty, and a renewal of the service contract for a multi-year term. Student absenteeism due to illness decreased by 15% in the first year.',
      duration: '2+ years ongoing',
      metrics: [
        '2,000+ students served daily',
        '15% reduction in illness-related absenteeism',
        '98% satisfaction rating from faculty',
        'Multi-year contract renewal',
      ],
      color: 'indigo',
    },
    {
      id: 2,
      icon: <Building2 className="w-12 h-12" />,
      client: 'IT Park Corporate Complex',
      industry: 'Corporate Offices',
      service: 'Corporate Housekeeping & Workstation Sanitization',
      challenge: 'A modern IT park housing multiple companies needed comprehensive facility management that maintained a professional image for clients while ensuring employee health and safety. The complex required flexible scheduling to accommodate 24/7 operations and strict confidentiality protocols.',
      solution: 'Mohishree implemented a dual-shift cleaning team to service the facility during off-hours and low-traffic periods. We introduced a specialized workstation sanitization program, confidential document handling protocols, and pantry/cafeteria management with food-safe cleaning standards. All staff underwent background verification.',
      result: 'The IT park management reported improved tenant satisfaction scores and successful client audits. Employee feedback surveys showed a 92% approval rating for office cleanliness. The contract expanded to include additional buildings within the complex.',
      duration: '18 months ongoing',
      metrics: [
        '5 buildings, 50,000+ sq.ft managed',
        '92% employee satisfaction rating',
        'Zero security incidents',
        'Contract expansion to 3 additional buildings',
      ],
      color: 'blue',
    },
    {
      id: 3,
      icon: <ShoppingBag className="w-12 h-12" />,
      client: 'Premium Shopping Mall',
      industry: 'Retail & Commercial',
      service: 'High-Traffic Retail Space Maintenance',
      challenge: 'A large shopping mall with 100+ retail tenants and daily footfall of 10,000+ visitors required spotless public areas, food court hygiene, and restroom cleanliness throughout operating hours. The client needed minimal disruption during peak shopping times.',
      solution: 'Mohishree deployed a strategic cleaning approach with continuous maintenance during operational hours and intensive deep cleaning post-closing. We implemented a rapid response team for spills and emergencies, specialized floor care for high-traffic zones, and food court compliance cleaning with hourly sanitization cycles.',
      result: 'Mall management received positive tenant feedback and improved mystery shopper scores by 25%. Food court passed all health inspections with commendations. The service contract was extended with additional scope for exterior facade cleaning.',
      duration: '12 months',
      metrics: [
        '10,000+ daily visitors served',
        '25% improvement in mystery shopper scores',
        '100% health inspection pass rate',
        'Extended contract with additional services',
      ],
      color: 'pink',
    },
    {
      id: 4,
      icon: <Factory className="w-12 h-12" />,
      client: 'Pharmaceutical Manufacturing Unit',
      industry: 'Industrial/Pharma',
      service: 'Specialized Industrial & Technical Cleaning',
      challenge: 'A pharmaceutical manufacturer required compliance-grade cleaning that met strict regulatory standards for production areas. The challenge included contamination control, cleanroom maintenance, and documentation of all cleaning activities for audit purposes.',
      solution: 'Mohishree provided trained personnel with pharmaceutical cleaning certifications. We implemented validated cleaning procedures, utilized approved cleaning agents, maintained detailed cleaning logs, and conducted regular microbial testing. Our team coordinated with QA department for protocol adherence.',
      result: 'The facility successfully passed FDA inspections with zero cleaning-related observations. Production downtime was reduced by implementing efficient changeover cleaning protocols. The client awarded Mohishree preferred vendor status.',
      duration: '3+ years ongoing',
      metrics: [
        'Zero FDA cleaning-related observations',
        '30% reduction in production downtime',
        'Preferred vendor status achieved',
        '3+ years of continuous service',
      ],
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      indigo: {
        gradient: 'from-indigo-500 to-indigo-600',
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        text: 'text-indigo-700',
        icon: 'text-indigo-600',
      },
      blue: {
        gradient: 'from-blue-500 to-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        icon: 'text-blue-600',
      },
      pink: {
        gradient: 'from-pink-500 to-pink-600',
        bg: 'bg-pink-50',
        border: 'border-pink-200',
        text: 'text-pink-700',
        icon: 'text-pink-600',
      },
      green: {
        gradient: 'from-green-500 to-green-600',
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        icon: 'text-green-600',
      },
    };
    return colors[color] || colors.indigo;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              Case Studies & Success Stories
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Real Solutions, Measurable Results, Lasting Partnerships
            </p>
            <p className="text-lg mt-4 opacity-85">
              See how Mohishree transforms facility management challenges into success stories
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              From Vendor to Strategic Partner
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              We don't just clean—we solve business problems. Each case study below demonstrates our approach to understanding unique client challenges, developing customized solutions, and delivering measurable value that extends beyond spotless spaces.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Our success is measured by long-term partnerships, contract renewals, and the tangible improvements we bring to our clients' operations.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {caseStudies.map((study, index) => {
              const colors = getColorClasses(study.color);
              
              return (
                <Card key={study.id} className="overflow-hidden shadow-lg">
                  <CardHeader className={`bg-gradient-to-r ${colors.gradient} text-white p-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        {study.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold opacity-90 mb-1">{study.industry}</div>
                        <CardTitle className="text-2xl text-white">{study.client}</CardTitle>
                        <div className="text-sm opacity-90 mt-1">{study.service}</div>
                      </div>
                      <div className="text-right">
                        <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                          {study.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      {/* Challenge */}
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <div className={`${colors.bg} ${colors.border} border-2 p-2 rounded-lg`}>
                            <Target className={`w-6 h-6 ${colors.icon}`} />
                          </div>
                          <h3 className={`text-xl font-bold ${colors.text}`}>The Challenge</h3>
                        </div>
                        <p className="text-text-secondary leading-relaxed">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <div className={`${colors.bg} ${colors.border} border-2 p-2 rounded-lg`}>
                            <Lightbulb className={`w-6 h-6 ${colors.icon}`} />
                          </div>
                          <h3 className={`text-xl font-bold ${colors.text}`}>The Solution</h3>
                        </div>
                        <p className="text-text-secondary leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Result */}
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <div className={`${colors.bg} ${colors.border} border-2 p-2 rounded-lg`}>
                            <TrendingUp className={`w-6 h-6 ${colors.icon}`} />
                          </div>
                          <h3 className={`text-xl font-bold ${colors.text}`}>The Result</h3>
                        </div>
                        <p className="text-text-secondary leading-relaxed">{study.result}</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className={`${colors.bg} ${colors.border} border-2 rounded-lg p-6`}>
                      <h4 className={`font-bold ${colors.text} mb-4 text-center text-lg`}>
                        Key Metrics & Outcomes
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle2 className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                            <span className="text-text-primary font-medium">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              The Mohishree Partnership Approach
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">Understand</h3>
                  <p className="text-sm text-text-secondary">Deep dive into your unique challenges and operational needs</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">Customize</h3>
                  <p className="text-sm text-text-secondary">Develop tailored solutions aligned with your goals</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">Implement</h3>
                  <p className="text-sm text-text-secondary">Execute with professionalism, efficiency, and minimal disruption</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">Optimize</h3>
                  <p className="text-sm text-text-secondary">Continuous improvement based on feedback and results</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how Mohishree can solve your facility management challenges and deliver measurable results
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-a-quote">
              <Button variant="accent" size="lg" className="text-xl px-12 py-6">
                Request Custom Proposal
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-xl px-12 py-6 bg-white/10 border-white hover:bg-white hover:text-primary">
                Schedule Consultation
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm opacity-85">
            <p>🏆 6 Years of Excellence | 📈 100+ Successful Projects | ⭐ 4.4 Star Rated | 🤝 Long-term Partnerships</p>
          </div>
        </div>
      </section>
    </div>
  );
}
