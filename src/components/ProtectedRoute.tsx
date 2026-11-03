'use client';

import React, { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: 'admin' | 'user';
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    // Wait for auth to load
    if (isLoading) {
      return;
    }

    // If not authenticated, redirect to home
    if (!user) {
      router.push('/');
      return;
    }

    // If role is required and doesn't match, redirect appropriately
    if (requiredRole && user.role !== requiredRole) {
      if (user.role === 'admin') {
        router.push('/admin');
      } else if (user.role === 'user') {
        router.push('/dashboard');
      } else {
        router.push('/');
      }
    }
  }, [user, isLoading, requiredRole, router]);

  // Show loading state while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  // If user doesn't have required role, don't render children
  if (requiredRole && user?.role !== requiredRole) {
    return null;
  }

  // Render children if authenticated and authorized
  return <>{children}</>;
}
