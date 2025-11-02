import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog Post | Mohishree Facility Services',
};

const blogPost = {
  title: '10 Essential Deep Cleaning Tips for Indian Homes',
  category: 'Residential',
  date: '2024-10-25',
  author: 'Priya Sharma',
  authorRole: 'Senior Cleaning Specialist',
  readTime: '8 min read',
  image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=600&fit=crop',
  content: `
    <p>Deep cleaning your home is essential, especially during the monsoon season when humidity and moisture create the perfect environment for mold and bacteria. Here are 10 expert tips to keep your home spotless and healthy.</p>

    <h2>1. Start with a Plan</h2>
    <p>Create a room-by-room checklist. This ensures you don't miss any areas and helps you track your progress. Divide your home into zones and tackle one zone at a time.</p>

    <h2>2. Declutter First</h2>
    <p>Before you start cleaning, remove unnecessary items. A clutter-free space is easier to clean and maintain. Donate or discard items you haven't used in the last year.</p>

    <h2>3. Focus on High-Touch Surfaces</h2>
    <p>Door handles, light switches, remote controls, and cabinet handles harbor the most germs. Use disinfectant wipes or a microfiber cloth with cleaning solution to sanitize these areas thoroughly.</p>

    <h2>4. Deep Clean Your Kitchen</h2>
    <p>Remove everything from cabinets and clean inside. Pay special attention to the area behind the refrigerator and stove. Clean your chimney and exhaust fans to prevent grease buildup.</p>

    <h2>5. Bathroom Deep Dive</h2>
    <p>Use a toilet bowl cleaner and let it sit for 10 minutes before scrubbing. Clean grout lines with a mixture of baking soda and vinegar. Don't forget to clean bathroom exhaust fans.</p>

    <h2>6. Tackle the Windows</h2>
    <p>Clean windows inside and out for maximum natural light. Use a mixture of water and vinegar for streak-free results. Clean window tracks and screens as well.</p>

    <h2>7. Mattress and Upholstery Care</h2>
    <p>Vacuum your mattress and sprinkle baking soda on it. Let it sit for a few hours before vacuuming again. This removes odors and dust mites. Clean sofa cushions and drapes too.</p>

    <h2>8. Don't Ignore the Ceiling</h2>
    <p>Dust ceiling fans, light fixtures, and corners where cobwebs accumulate. Use a long-handled duster or attach a microfiber cloth to a mop.</p>

    <h2>9. Clean Air Vents and Filters</h2>
    <p>Dirty air vents reduce air quality and efficiency. Remove vent covers and wash them. Vacuum inside the ducts and replace AC filters if necessary.</p>

    <h2>10. Maintain a Regular Schedule</h2>
    <p>Deep cleaning should be done quarterly, but maintain daily and weekly cleaning routines. This prevents dirt buildup and makes deep cleaning sessions easier.</p>

    <h2>Professional Help</h2>
    <p>While these tips are effective, sometimes you need professional expertise. Our team at Mohishree Facility Services uses industrial-grade equipment and eco-friendly products to deliver exceptional results.</p>

    <p>Book a professional deep cleaning service today and enjoy a spotless, healthy home without the hassle!</p>
  `,
};

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
          <Link href="/blog">
            <Button variant="outline" size="sm" className="text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {blogPost.category}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
            {blogPost.title}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-text-secondary" />
                <div>
                  <div className="font-semibold">{blogPost.author}</div>
                  <div className="text-sm text-text-secondary">{blogPost.authorRole}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(blogPost.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="text-text-secondary">{blogPost.readTime}</div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-semibold text-text-secondary">Share:</span>
              <button className="p-2 rounded-full hover:bg-blue-50 text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-sky-50 text-sky-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-blue-50 text-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
              style={{
                lineHeight: '1.8',
              }}
            />

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/20 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready for a Professional Clean?</h3>
              <p className="text-text-secondary mb-6">
                Our expert team is ready to transform your home with our professional deep cleaning services.
                Book now and get 10% off your first service!
              </p>
              <div className="flex gap-3">
                <Link href="/booking">
                  <Button size="lg">Book Now</Button>
                </Link>
                <Link href="/get-a-quote">
                  <Button variant="outline" size="lg">Get a Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Link key={i} href="/blog/related-post" className="group">
                  <div className="h-40 rounded-lg overflow-hidden mb-3">
                    <img
                      src={`https://images.unsplash.com/photo-158157873154${i}-c64695cc6952?w=400&h=300&fit=crop`}
                      alt="Related post"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    Related Cleaning Tip #{i}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">5 min read</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
