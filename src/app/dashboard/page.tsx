import UserDashboard from '@/components/UserDashboard';
import ProtectedRoute from '@/components/ProtectedRoute';

export const metadata = {
  title: 'My Learning Dashboard - LMS Pro',
  description: 'Track your courses, progress, and certificates',
};

export default function DashboardPage() {
  return (
    <ProtectedRoute requiredRole="user">
      <UserDashboard />
    </ProtectedRoute>
  );
}
