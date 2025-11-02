import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Calendar, User, ArrowRight, Sparkles, Home, Building2, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cleaning Tips & Guides | Mohishree Facility Services Blog',
  description: 'Expert cleaning tips, facility management insights, and maintenance guides from industry professionals.',
};

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Deep Cleaning Tips for Indian Homes',
    excerpt: 'Monsoon season brings unique challenges. Learn how to protect your home from humidity, mold, and water damage with our expert tips.',
    category: 'Residential',
    date: '2024-10-25',
    author: 'Priya Sharma',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=500&fit=crop',
    slug: 'deep-cleaning-tips-indian-homes',
    icon: <Home className="w-5 h-5" />,
  },
  {
    id: 2,
    title: 'Office Hygiene Best Practices Post-COVID',
    excerpt: 'Maintaining a safe workplace environment requires updated protocols. Discover the new standards for commercial cleaning and sanitization.',
    category: 'Commercial',
    date: '2024-10-20',
    author: 'Rajesh Kumar',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop',
    slug: 'office-hygiene-post-covid',
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    id: 3,
    title: 'Eco-Friendly Cleaning Products: What Works',
    excerpt: 'Go green without compromising on cleanliness. We review the best eco-friendly cleaning products available in India.',
    category: 'Environment',
    date: '2024-10-15',
    author: 'Anjali Mehta',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop',
    slug: 'eco-friendly-cleaning-products',
    icon: <Leaf className="w-5 h-5" />,
  },
  {
    id: 4,
    title: 'How to Clean and Maintain Marble Flooring',
    excerpt: 'Marble requires special care. Learn the dos and don\'ts of marble maintenance to keep your floors looking pristine for years.',
    category: 'Residential',
    date: '2024-10-10',
    author: 'Vikram Singh',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=500&fit=crop',
    slug: 'marble-flooring-maintenance',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    id: 5,
    title: 'Complete Guide to Sofa and Upholstery Care',
    excerpt: 'Extend the life of your furniture with proper cleaning techniques. From fabric types to stain removal, we cover it all.',
    category: 'Residential',
    date: '2024-10-05',
    author: 'Neha Gupta',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop',
    slug: 'sofa-upholstery-care-guide',
    icon: <Home className="w-5 h-5" />,
  },
  {
    id: 6,
    title: 'Water Tank Cleaning: Why Every 6 Months?',
    excerpt: 'Contaminated water tanks pose serious health risks. Understand why regular cleaning is crucial and what the process involves.',
    category: 'Environment',
    date: '2024-09-28',
    author: 'Dr. Arun Verma',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    slug: 'water-tank-cleaning-guide',
    icon: <Leaf className="w-5 h-5" />,
  },
];

const categories = [
  { name: 'All Posts', count: 6, slug: 'all' },
  { name: 'Residential', count: 3, slug: 'residential' },
  { name: 'Commercial', count: 1, slug: 'commercial' },
  { name: 'Environment', count: 2, slug: 'environment' },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">
              Cleaning Tips & Insights
            </h1>
            <p className="text-xl opacity-90">
              Expert advice, maintenance guides, and industry insights from our team of professionals
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.slug}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  category.slug === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-card-hover transition-all group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                      {post.icon}
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-text-secondary mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" size="sm" className="group-hover:text-primary">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg opacity-90 mb-8">
              Get the latest cleaning tips, maintenance guides, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="accent" size="lg" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
