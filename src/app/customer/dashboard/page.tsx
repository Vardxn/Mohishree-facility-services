'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  User, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  CreditCard, 
  FileText, 
  Settings,
  LogOut,
  Clock,
  CheckCircle,
  XCircle,
  IndianRupee
} from 'lucide-react';
import Link from 'next/link';

interface Booking {
  id: string;
  service: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  amount: number;
  address: string;
}

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'profile' | 'billing'>('overview');

  const customerData = {
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 302, Green Park Apartments, Sector 15, Mumbai - 400001',
    joinedDate: '2024-01-15',
    totalBookings: 12,
    upcomingBookings: 2,
  };

  const bookings: Booking[] = [
    {
      id: 'BK20241102001',
      service: 'Deep Cleaning',
      date: '2024-11-05',
      time: '10:00 AM - 12:00 PM',
      status: 'upcoming',
      amount: 3500,
      address: 'Flat 302, Green Park Apartments',
    },
    {
      id: 'BK20241028001',
      service: 'Sofa Cleaning',
      date: '2024-11-10',
      time: '2:00 PM - 4:00 PM',
      status: 'upcoming',
      amount: 1500,
      address: 'Flat 302, Green Park Apartments',
    },
    {
      id: 'BK20241015001',
      service: 'Full Home Cleaning',
      date: '2024-10-15',
      time: '8:00 AM - 10:00 AM',
      status: 'completed',
      amount: 2500,
      address: 'Flat 302, Green Park Apartments',
    },
    {
      id: 'BK20241001001',
      service: 'Office Cleaning',
      date: '2024-10-01',
      time: '6:00 PM - 8:00 PM',
      status: 'completed',
      amount: 5000,
      address: 'Office 201, Business Tower',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming': return <Clock className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {customerData.name.split(' ')[0]}!</h1>
              <p className="opacity-90">Manage your bookings and account settings</p>
            </div>
            <Link href="/booking">
              <Button variant="accent" size="lg">
                Book New Service
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{customerData.name}</h3>
                  <p className="text-sm text-text-secondary">Premium Member</p>
                </div>

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                      activeTab === 'overview' ? 'bg-primary text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    <FileText className="w-5 h-5" />
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('bookings')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                      activeTab === 'bookings' ? 'bg-primary text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Calendar className="w-5 h-5" />
                    My Bookings
                  </button>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                      activeTab === 'profile' ? 'bg-primary text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Settings className="w-5 h-5" />
                    Profile Settings
                  </button>
                  <button
                    onClick={() => setActiveTab('billing')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                      activeTab === 'billing' ? 'bg-primary text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    Billing & Payments
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 transition-colors flex items-center gap-3">
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Total Bookings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-primary">{customerData.totalBookings}</div>
                      <p className="text-sm text-text-secondary mt-1">Since joining</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Upcoming Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-blue-600">{customerData.upcomingBookings}</div>
                      <p className="text-sm text-text-secondary mt-1">Scheduled</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Member Since</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">
                        {new Date(customerData.joinedDate).toLocaleDateString('en-IN', { 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </div>
                      <p className="text-sm text-text-secondary mt-1">Premium customer</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Upcoming Bookings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Bookings</CardTitle>
                    <CardDescription>Your scheduled services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {bookings.filter(b => b.status === 'upcoming').map((booking) => (
                        <div key={booking.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold text-lg">{booking.service}</h4>
                              <p className="text-sm text-text-secondary">{booking.id}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${getStatusColor(booking.status)}`}>
                              {getStatusIcon(booking.status)}
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2 text-text-secondary">
                              <Calendar className="w-4 h-4" />
                              {new Date(booking.date).toLocaleDateString('en-IN')} • {booking.time}
                            </div>
                            <div className="flex items-center gap-2 text-text-secondary">
                              <IndianRupee className="w-4 h-4" />
                              ₹{booking.amount}
                            </div>
                            <div className="flex items-center gap-2 text-text-secondary md:col-span-2">
                              <MapPin className="w-4 h-4" />
                              {booking.address}
                            </div>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button variant="outline" size="sm">Reschedule</Button>
                            <Button variant="outline" size="sm" className="text-red-600">Cancel</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <Card>
                <CardHeader>
                  <CardTitle>All Bookings</CardTitle>
                  <CardDescription>Complete history of your service bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold text-lg">{booking.service}</h4>
                            <p className="text-sm text-text-secondary">{booking.id}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${getStatusColor(booking.status)}`}>
                            {getStatusIcon(booking.status)}
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2 text-text-secondary">
                            <Calendar className="w-4 h-4" />
                            {new Date(booking.date).toLocaleDateString('en-IN')} • {booking.time}
                          </div>
                          <div className="flex items-center gap-2 text-text-secondary">
                            <IndianRupee className="w-4 h-4" />
                            ₹{booking.amount}
                          </div>
                        </div>
                        {booking.status === 'completed' && (
                          <div className="mt-4">
                            <Button variant="outline" size="sm">Leave Review</Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        defaultValue={customerData.name}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        defaultValue={customerData.email}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <input
                        type="tel"
                        defaultValue={customerData.phone}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Address</label>
                      <textarea
                        defaultValue={customerData.address}
                        rows={3}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <Button size="lg">Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <Card>
                <CardHeader>
                  <CardTitle>Billing & Payment History</CardTitle>
                  <CardDescription>View your invoices and payment details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookings.filter(b => b.status === 'completed').map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">{booking.service}</h4>
                          <p className="text-sm text-text-secondary">
                            {new Date(booking.date).toLocaleDateString('en-IN')} • {booking.id}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">₹{booking.amount}</div>
                          <Button variant="outline" size="sm">Download Invoice</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
