'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, BarChart3, LogOut, TrendingUp, Users, BookOpen, DollarSign } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function AdminAnalyticsPage() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const analytics = [
    { label: 'Total Users', value: '1,234', change: '+12%', icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Active Courses', value: '48', change: '+3%', icon: BookOpen, color: 'from-purple-500 to-purple-600' },
    { label: 'Total Revenue', value: '$45,231', change: '+8%', icon: DollarSign, color: 'from-green-500 to-green-600' },
    { label: 'Growth Rate', value: '23%', change: '+5%', icon: TrendingUp, color: 'from-pink-500 to-pink-600' },
  ];

  const chartData = [
    { month: 'Jan', revenue: 8000, users: 300 },
    { month: 'Feb', revenue: 12000, users: 400 },
    { month: 'Mar', revenue: 15000, users: 550 },
    { month: 'Apr', revenue: 18000, users: 720 },
    { month: 'May', revenue: 22000, users: 890 },
    { month: 'Jun', revenue: 28000, users: 1100 },
  ];

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Header */}
        <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="p-2 hover:bg-slate-700 rounded-lg transition text-slate-400 hover:text-white"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
                <p className="text-slate-400 text-sm">Platform performance metrics</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 hover:text-red-300 rounded-lg transition font-medium"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {analytics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
                  </div>
                  <h3 className="text-slate-400 text-sm font-medium mb-1">{stat.label}</h3>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                Monthly Revenue
              </h2>
              <div className="space-y-4">
                {chartData.map((item) => (
                  <div key={item.month}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{item.month}</span>
                      <span className="text-slate-400">${item.revenue.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                        style={{ width: `${(item.revenue / 30000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Growth Chart */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                User Growth
              </h2>
              <div className="space-y-4">
                {chartData.map((item) => (
                  <div key={item.month}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{item.month}</span>
                      <span className="text-slate-400">{item.users} users</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                        style={{ width: `${(item.users / 1200) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
