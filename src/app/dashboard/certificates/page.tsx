'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Award, Download, Share2, LogOut, Calendar } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function CertificatesPage() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const certificates = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'Sarah Johnson',
      completedDate: 'November 15, 2024',
      certificateId: 'CERT-2024-WEB-001',
      thumbnail: '🌐',
    },
  ];

  return (
    <ProtectedRoute requiredRole="user">
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
                <h1 className="text-2xl font-bold text-white">My Certificates</h1>
                <p className="text-slate-400 text-sm">Showcase your achievements</p>
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
        <main className="max-w-4xl mx-auto px-6 py-8">
          {certificates.length > 0 ? (
            <div className="space-y-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-gradient-to-r from-slate-800 to-slate-900 border border-yellow-500/30 rounded-xl p-8 hover:border-yellow-500/50 transition"
                >
                  {/* Certificate Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{cert.thumbnail}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                        <p className="text-slate-400">Instructor: {cert.instructor}</p>
                        <p className="text-slate-500 text-sm mt-1">ID: {cert.certificateId}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-300 font-semibold">Earned</span>
                    </div>
                  </div>

                  {/* Completion Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 py-6 border-t border-slate-700">
                    <div className="text-center">
                      <p className="text-slate-400 text-sm mb-1">Completed On</p>
                      <p className="text-white font-semibold flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        {cert.completedDate}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-400 text-sm mb-1">Certificate ID</p>
                      <p className="text-white font-mono text-sm">{cert.certificateId}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-400 text-sm mb-1">Status</p>
                      <p className="text-green-400 font-semibold">✓ Active</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-lg transition">
                      <Share2 className="w-4 h-4" />
                      Share Certificate
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-lg transition">
                      View on LinkedIn
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Award className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Certificates Yet</h3>
              <p className="text-slate-400 mb-6">Complete courses to earn certificates and showcase your achievements.</p>
              <Link
                href="/dashboard/my-courses"
                className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                <Award className="w-4 h-4" />
                View My Courses
              </Link>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
