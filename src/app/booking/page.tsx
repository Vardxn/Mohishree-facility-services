import BookingForm from '@/components/BookingForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Service | Mohishree Facility Services',
  description: 'Book your cleaning service online. Choose your preferred date and time slot. Instant confirmation.',
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">
              Book Your Service Online
            </h1>
            <p className="text-xl opacity-90">
              Fast, easy, and convenient scheduling. Get instant confirmation!
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <BookingForm />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">
              Why Book Online?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Instant Booking</h3>
                <p className="text-sm text-text-secondary">Book in 2 minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="font-semibold mb-2">Flexible Timing</h3>
                <p className="text-sm text-text-secondary">Choose your slot</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2">Confirmation</h3>
                <p className="text-sm text-text-secondary">Instant SMS & email</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="font-semibold mb-2">Easy Reschedule</h3>
                <p className="text-sm text-text-secondary">Free until 6hrs before</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
