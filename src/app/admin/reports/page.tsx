'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Activity, LogOut, Download, Eye, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function AdminReportsPage() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const [reports] = useState([
    {
      id: 1,
      title: 'Monthly Performance Report',
      description: 'Comprehensive analysis of platform performance metrics',
      date: '2024-11-01',
      status: 'completed',
      type: 'Performance'
    },
    {
      id: 2,
      title: 'User Engagement Report',
      description: 'Detailed breakdown of user engagement and activity',
      date: '2024-11-02',
      status: 'completed',
      type: 'Engagement'
    },
    {
      id: 3,
      title: 'Revenue Analysis Report',
      description: 'Financial analysis and revenue trends',
      date: '2024-11-03',
      status: 'completed',
      type: 'Financial'
    },
    {
      id: 4,
      title: 'Course Performance Report',
      description: 'Analysis of course performance and student outcomes',
      date: '2024-11-04',
      status: 'pending',
      type: 'Courses'
    },
  ]);

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
                <h1 className="text-2xl font-bold text-white">Reports</h1>
                <p className="text-slate-400 text-sm">{reports.length} total reports</p>
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
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white">{report.title}</h3>
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                        report.status === 'completed'
                          ? 'bg-green-500/20 text-green-300'
                          : 'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {report.status === 'completed' ? <CheckCircle className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                        {report.status}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{report.description}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span>Type: {report.type}</span>
                      <span>Date: {report.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-lg transition">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
