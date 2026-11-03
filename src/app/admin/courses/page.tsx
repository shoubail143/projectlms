'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, LogOut, Edit, Trash2, Users, X } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

interface Course {
  id: number;
  title: string;
  instructor: string;
  students: number;
  rating: number;
  revenue: string;
  status: 'published' | 'draft';
}

export default function AdminCoursesPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { isDark } = useTheme();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const [courses, setCourses] = useState<Course[]>([
    { id: 1, title: 'Web Development Fundamentals', instructor: 'Sarah Johnson', students: 342, rating: 4.8, revenue: '$12,450', status: 'published' },
    { id: 2, title: 'Advanced React & Next.js', instructor: 'Mike Chen', students: 256, rating: 4.9, revenue: '$9,280', status: 'published' },
    { id: 3, title: 'UI/UX Design Fundamentals', instructor: 'Emma Davis', students: 198, rating: 4.7, revenue: '$7,120', status: 'published' },
    { id: 4, title: 'Python for Data Science', instructor: 'Alex Rodriguez', students: 421, rating: 4.8, revenue: '$15,360', status: 'draft' },
  ]);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [deletingCourse, setDeletingCourse] = useState<Course | null>(null);

  const saveCourse = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editingCourse) return;
    setCourses((current) =>
      current.map((course) => course.id === editingCourse.id ? editingCourse : course)
    );
    setEditingCourse(null);
  };

  const deleteCourse = () => {
    if (!deletingCourse) return;
    setCourses((current) => current.filter((course) => course.id !== deletingCourse.id));
    setDeletingCourse(null);
  };

  return (
    <ProtectedRoute requiredRole="admin">
      <div className={`dashboard-shell min-h-screen ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-slate-50'}`}>
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
                <h1 className="text-2xl font-bold text-white">Course Management</h1>
                <p className="text-slate-400 text-sm">{courses.length} total courses</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 hover:text-red-300 rounded-lg transition font-medium"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`border rounded-xl p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${isDark ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-300'}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{course.title}</h3>
                    <p className="text-slate-400 text-sm">{course.instructor}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    course.status === 'published' 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {course.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-slate-700">
                  <div className="text-center">
                    <p className="text-slate-400 text-xs mb-1">Students</p>
                    <p className="text-white font-bold flex items-center justify-center gap-1">
                      <Users className="w-4 h-4 text-blue-400" />
                      {course.students}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-400 text-xs mb-1">Rating</p>
                    <p className="text-yellow-400 font-bold">⭐ {course.rating}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-400 text-xs mb-1">Revenue</p>
                    <p className="text-green-400 font-bold">{course.revenue}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingCourse({ ...course })}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-sm"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeletingCourse(course)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 border font-semibold rounded-lg transition ${isDark ? 'bg-red-500/10 hover:bg-red-500/20 border-red-500/30 text-red-300' : 'bg-red-50 hover:bg-red-100 border-red-200 text-red-600'}`}
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {editingCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
            <form onSubmit={saveCourse} className={`w-full max-w-lg rounded-2xl border p-6 shadow-2xl ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <div className="mb-6 flex items-center justify-between">
                <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Edit course</h2>
                <button type="button" onClick={() => setEditingCourse(null)} className={`rounded-lg p-2 ${isDark ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-500 hover:bg-slate-100'}`} aria-label="Close">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <label className={`block text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Course title
                  <input value={editingCourse.title} onChange={(event) => setEditingCourse({ ...editingCourse, title: event.target.value })} className={`mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${isDark ? 'border-slate-700 bg-slate-800 text-white' : 'border-slate-300 bg-white text-slate-900'}`} />
                </label>
                <label className={`block text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Instructor
                  <input value={editingCourse.instructor} onChange={(event) => setEditingCourse({ ...editingCourse, instructor: event.target.value })} className={`mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${isDark ? 'border-slate-700 bg-slate-800 text-white' : 'border-slate-300 bg-white text-slate-900'}`} />
                </label>
                <label className={`block text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Status
                  <select value={editingCourse.status} onChange={(event) => setEditingCourse({ ...editingCourse, status: event.target.value as Course['status'] })} className={`mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${isDark ? 'border-slate-700 bg-slate-800 text-white' : 'border-slate-300 bg-white text-slate-900'}`}>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 flex gap-3">
                <button type="button" onClick={() => setEditingCourse(null)} className={`flex-1 rounded-lg border px-4 py-3 font-semibold ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}>Cancel</button>
                <button type="submit" className="flex-1 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-500">Save changes</button>
              </div>
            </form>
          </div>
        )}

        {deletingCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
            <div className={`w-full max-w-sm rounded-2xl border p-6 shadow-2xl ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Delete course?</h2>
              <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>This will remove “{deletingCourse.title}” from the course list.</p>
              <div className="mt-6 flex gap-3">
                <button type="button" onClick={() => setDeletingCourse(null)} className={`flex-1 rounded-lg border px-4 py-3 font-semibold ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}>Cancel</button>
                <button type="button" onClick={deleteCourse} className="flex-1 rounded-lg bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-500">Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
