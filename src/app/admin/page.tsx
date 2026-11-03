import AdminDashboard from '@/components/AdminDashboard';
import ProtectedRoute from '@/components/ProtectedRoute';

export const metadata = {
  title: 'Admin Dashboard - LMS Pro',
  description: 'Manage courses, users, and analytics',
};

export default function AdminPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <AdminDashboard />
    </ProtectedRoute>
  );
}
