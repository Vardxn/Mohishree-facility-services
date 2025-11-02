import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Dashboard | Mohishree Facility Services',
  description: 'Manage your bookings, view service history, and update your profile.',
};

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
