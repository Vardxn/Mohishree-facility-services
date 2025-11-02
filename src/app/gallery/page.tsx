import { Metadata } from 'next';
import Link from 'next/link';
import { Image as ImageIcon, Play, Users, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Our Work Gallery - Mohishree Facility Services',
  description: 'See the quality of our work through photos and videos. Before & after transformations, our professional team in action, and completed projects across Aurangabad.',
  keywords: 'cleaning before after, facility services gallery, professional cleaning photos, Mohishree work portfolio',
};

export default function GalleryPage() {
  // Gallery categories
  const categories = [
    { id: 'all', name: 'All', count: 13 },
    { id: 'before-after', name: 'Before & After', count: 4 },
    { id: 'team-action', name: 'Team in Action', count: 3 },
    { id: 'completed-projects', name: 'Completed Projects', count: 2 },
    { id: 'videos', name: 'Videos', count: 4 },
  ];

  // Placeholder for actual media (to be replaced with real photos/videos)
  const galleryItems = [
    {
      id: 1,
      category: 'before-after',
      type: 'image',
      title: 'Office Deep Cleaning Transformation',
      description: 'Corporate office space before and after comprehensive deep cleaning',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: 2,
      category: 'before-after',
      type: 'image',
      title: 'Sofa Upholstery Restoration',
      description: 'Family sofa restored to like-new condition with professional cleaning',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      category: 'before-after',
      type: 'image',
      title: 'Water Tank Sanitization',
      description: 'Before and after: Clean, safe water tank free from sediment and contaminants',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
    },
    {
      id: 4,
      category: 'before-after',
      type: 'image',
      title: 'Bathroom Deep Clean',
      description: 'Complete bathroom transformation with eco-friendly sanitization',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop',
    },
    {
      id: 5,
      category: 'team-action',
      type: 'image',
      title: 'Professional Team in Safety Gear',
      description: 'Our trained staff following safety protocols during facility cleaning',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: 6,
      category: 'team-action',
      type: 'image',
      title: 'High-Pressure Washing Equipment',
      description: 'Industrial-grade equipment for superior cleaning results',
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop',
    },
    {
      id: 7,
      category: 'team-action',
      type: 'image',
      title: 'Commercial Kitchen Cleaning',
      description: 'Specialized cleaning for food service areas with compliance standards',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
    },
    {
      id: 8,
      category: 'completed-projects',
      type: 'image',
      title: 'Pristine Corporate Office',
      description: 'Completed office cleaning project showcasing attention to detail',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
    },
    {
      id: 9,
      category: 'completed-projects',
      type: 'image',
      title: 'Educational Institution Campus',
      description: 'College campus maintenance - clean, safe learning environment',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
    },
    {
      id: 10,
      category: 'videos',
      type: 'video',
      title: 'Deep Cleaning Process Time-Lapse',
      description: 'Watch our systematic approach to comprehensive deep cleaning',
      thumbnail: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: 11,
      category: 'videos',
      type: 'video',
      title: 'Team Training & Safety Protocols',
      description: 'See how we train our staff to deliver professional service',
      thumbnail: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop',
    },
    {
      id: 12,
      category: 'videos',
      type: 'video',
      title: 'Water Tank Cleaning Demonstration',
      description: 'Complete process of professional water tank sanitization',
      thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
    },
    {
      id: 13,
      category: 'videos',
      type: 'video',
      title: 'Customer Testimonial Video',
      description: 'Hear directly from our satisfied commercial client',
      thumbnail: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ImageIcon className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              Our Work Gallery
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Seeing is Believing - Visual Proof of Quality Service
            </p>
            <p className="text-lg mt-4 opacity-85">
              Explore our portfolio of transformations, professional team, and completed projects
            </p>
          </div>
        </div>
      </section>

      {/* Media Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">9+</div>
                <div className="text-sm text-text-secondary">Professional Photos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-text-secondary">Video Showcases</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-text-secondary">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-text-secondary">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter (Future Enhancement) */}
      <section className="py-8 bg-background sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    category.id === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-white text-text-primary hover:bg-primary hover:text-white border border-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Featured Items */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
                Featured Showcases
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.filter(item => item.featured).map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-card-hover transition-all group cursor-pointer">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.type === 'video' ? item.thumbnail : item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-primary ml-1" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {item.type === 'video' ? 'VIDEO' : 'PHOTO'}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                      <p className="text-sm text-text-secondary">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Gallery Items */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
                All Media
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-card-hover transition-all group cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.type === 'video' ? item.thumbnail : item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-90">
                            <Play className="w-6 h-6 text-primary ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-3">
                      <h4 className="font-semibold text-sm text-text-primary line-clamp-1">{item.title}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Categories Detailed */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              What You'll Find in Our Gallery
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="font-bold text-text-primary mb-3">Before & After</h3>
                  <p className="text-sm text-text-secondary">
                    See the transformative impact of our cleaning services with side-by-side comparisons
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-text-primary mb-3">Team in Action</h3>
                  <p className="text-sm text-text-secondary">
                    Our professional staff using proper equipment and following safety protocols
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-text-primary mb-3">Completed Projects</h3>
                  <p className="text-sm text-text-secondary">
                    Portfolio of pristine spaces across residential, commercial, and industrial sectors
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Video Content Highlight */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Play className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Watch Our Work in Action
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Our exclusive video library showcases our systematic processes, professional team training, and actual transformations. See the Mohishree difference in real-time.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-text-primary font-semibold mb-4">
                4 Professional Videos Available:
              </p>
              <ul className="text-left text-text-secondary space-y-2 max-w-md mx-auto">
                <li className="flex items-start">
                  <Play className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Complete deep cleaning process demonstrations</span>
                </li>
                <li className="flex items-start">
                  <Play className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Team training and safety protocol walkthroughs</span>
                </li>
                <li className="flex items-start">
                  <Play className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Service-specific technique showcases</span>
                </li>
                <li className="flex items-start">
                  <Play className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real customer testimonial interviews</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">
            Experience the Mohishree Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            See the quality, professionalism, and attention to detail in every project we undertake
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-a-quote">
              <Button variant="accent" size="lg" className="text-xl px-12 py-6">
                Request Your Free Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="text-xl px-12 py-6 bg-white/10 border-white hover:bg-white hover:text-purple-600">
                Explore Our Services
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm opacity-85">
            <p>📸 9+ Photos | 🎥 4 Videos | ⭐ 4.4 Star Rated | 🏆 100+ Projects Completed</p>
          </div>
        </div>
      </section>
    </div>
  );
}
