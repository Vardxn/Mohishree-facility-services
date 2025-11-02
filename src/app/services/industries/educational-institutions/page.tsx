import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, CheckCircle2, Shield, Clock, Users, Leaf } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Facility Services for Educational Institutions in Aurangabad | Mohishree',
  description: 'Professional cleaning and facility management for colleges, schools, and educational institutions. Safe, non-toxic products with flexible scheduling. Trusted by institutions across Aurangabad.',
  keywords: 'school cleaning services, college facility management, educational institution cleaning, campus cleaning, Aurangabad schools',
};

export default function EducationalInstitutionsPage() {
  const challenges = [
    {
      challenge: 'High-Traffic Student Areas',
      solution: 'Intensive cleaning protocols for corridors, cafeterias, and common areas with high footfall',
    },
    {
      challenge: 'Hygiene in Washrooms',
      solution: 'Multiple daily sanitization cycles with eco-friendly, non-toxic disinfectants',
    },
    {
      challenge: 'Flexible Scheduling',
      solution: 'Cleaning around class times, during breaks, after school hours, or on weekends',
    },
    {
      challenge: 'Student Safety',
      solution: 'Only eco-friendly, non-toxic cleaning products safe for children and young adults',
    },
    {
      challenge: 'Classroom Sanitization',
      solution: 'Desk, bench, and equipment cleaning to minimize disease transmission',
    },
    {
      challenge: 'Large Campus Areas',
      solution: 'Comprehensive outdoor maintenance including playgrounds, sports fields, and gardens',
    },
  ];

  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Daily Classroom Cleaning',
      description: 'Desks, benches, blackboards, and floors cleaned with child-safe, eco-friendly products',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Washroom Sanitization',
      description: 'Multiple daily deep-cleaning cycles to maintain hygiene standards throughout the day',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Cafeteria & Dining Hall',
      description: 'Food-safe cleaning of dining areas, kitchen support, and waste management',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Library & Study Areas',
      description: 'Quiet, non-disruptive cleaning of reading rooms, computer labs, and study halls',
    },
  ];

  const benefits = [
    'Healthier learning environment reduces student absenteeism',
    'Compliance with health and safety regulations',
    'Positive impression on parents during campus visits',
    'Extended life of school infrastructure and equipment',
    'Flexible scheduling minimizes disruption to academic activities',
    'Eco-friendly products safe for students with allergies or sensitivities',
    'Trained staff with background verification for campus safety',
    'Comprehensive waste management and recycling programs',
  ];

  const institutions = [
    'Schools (Primary, Secondary, Higher Secondary)',
    'Colleges and Universities',
    'Coaching Centers and Tuition Classes',
    'Educational Trusts and Boards',
    'Hostels and Residential Campuses',
    'Educational Research Centers',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              Facility Services for Educational Institutions
            </h1>
            <p className="text-xl lg:text-2xl mb-4 opacity-90">
              Creating Safe, Clean, and Healthy Learning Environments
            </p>
            <p className="text-lg mb-8 opacity-85">
              Comprehensive facility management for schools and colleges with flexible scheduling and eco-friendly practices
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote">
                <Button variant="accent" size="lg">
                  Request Campus Assessment
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="bg-white/10 border-white hover:bg-white hover:text-indigo-600">
                  Contact: +91 94236 79285
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
              Why Educational Institutions Need Specialized Facility Services
            </h2>
            <div className="prose prose-lg max-w-none text-text-secondary">
              <p className="text-xl mb-4 leading-relaxed">
                Educational institutions face unique challenges when it comes to facility management. With hundreds or even thousands of students congregating daily, maintaining hygiene and cleanliness is not just about aesthetics—it's essential for student health, academic performance, and regulatory compliance.
              </p>
              <p className="text-lg leading-relaxed">
                At Mohishree Facility Services, we understand the specific needs of schools and colleges. Our services are designed with student safety as the top priority, using only eco-friendly, non-toxic cleaning products. We offer flexible scheduling around class times and academic calendars, ensuring minimal disruption to learning while maintaining the highest hygiene standards across your campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
                Understanding Your Unique Challenges
              </h2>
              <p className="text-xl text-text-secondary">
                We address the specific facility management needs of educational environments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((item, index) => (
                <Card key={index} className="hover:shadow-card-hover transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-indigo-700">
                      🎯 Challenge: {item.challenge}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary">
                      <strong className="text-green-700">Our Solution:</strong> {item.solution}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">
                Comprehensive Campus Facility Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-indigo-600">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🌿</span>
                  100% Eco-Friendly Products
                </h3>
                <p className="text-text-secondary">
                  All cleaning products are non-toxic, biodegradable, and safe for children, ensuring a healthy learning environment without harsh chemicals.
                </p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🕐</span>
                  Flexible Scheduling
                </h3>
                <p className="text-text-secondary">
                  We work around your academic calendar—during breaks, after school hours, on weekends, or during summer vacations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Benefits for Your Institution
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mr-3 mt-1" />
                  <span className="text-text-primary">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutions We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Educational Institutions We Serve
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {institutions.map((institution, index) => (
                <div key={index} className="flex items-center bg-background p-4 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-indigo-600 flex-shrink-0 mr-3" />
                  <span className="text-text-primary font-medium">{institution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study / Testimonial */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">💬</div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    Why Institutions Choose Mohishree
                  </h3>
                  <p className="text-text-secondary">6 years of trusted service to educational institutions</p>
                </div>
              </div>
              <blockquote className="text-lg text-text-secondary italic border-l-4 border-indigo-600 pl-6 mb-4">
                "Mohishree has transformed our campus hygiene standards. Their eco-friendly approach gives us peace of mind, and their flexible scheduling means our academic activities are never disrupted. The professionalism of their staff and their quick response time make them the ideal partner for our institution."
              </blockquote>
              <p className="text-text-primary font-semibold">
                — Principal, Leading College in Aurangabad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">
            Partner with Mohishree for Your Campus
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a free campus assessment and discover how we can create a cleaner, healthier learning environment
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-a-quote">
              <Button variant="accent" size="lg" className="text-xl px-12 py-6">
                Request Free Campus Assessment
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-xl px-12 py-6 bg-white/10 border-white hover:bg-white hover:text-indigo-600">
                Call +91 94236 79285
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm opacity-85">
            <p>⚡ 3-4 Hour Response | 🌿 100% Eco-Friendly | ⭐ 4.4 Star Rated | 🏆 6 Years Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}
