'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Play, CheckCircle, Clock, Star, BookOpen, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function MyCoursesPage() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const enrolledCourses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'Sarah Johnson',
      progress: 65,
      lessons_completed: 13,
      total_lessons: 20,
      rating: 4.8,
      thumbnail: '🌐',
      category: 'Web Development',
      nextLesson: 'Advanced CSS Techniques',
      duration: '8 weeks',
    },
    {
      id: 2,
      title: 'Advanced React & Next.js',
      instructor: 'Mike Chen',
      progress: 42,
      lessons_completed: 8,
      total_lessons: 19,
      rating: 4.9,
      thumbnail: '⚛️',
      category: 'React',
      nextLesson: 'Context API Deep Dive',
      duration: '12 weeks',
    },
    {
      id: 3,
      title: 'Python for Data Science',
      instructor: 'Alex Rodriguez',
      progress: 28,
      lessons_completed: 5,
      total_lessons: 18,
      rating: 4.8,
      thumbnail: '🐍',
      category: 'Data Science',
      nextLesson: 'Data Visualization',
      duration: '14 weeks',
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
                <h1 className="text-2xl font-bold text-white">My Courses</h1>
                <p className="text-slate-400 text-sm">Track your learning progress</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => (
              <Link
                key={course.id}
                href={`/dashboard/course/${course.id}`}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition group"
              >
                {/* Course Header */}
                <div className="relative h-40 bg-gradient-to-r from-slate-700 to-slate-800 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-700/50 to-slate-800/50" />
                  <span className="text-6xl group-hover:scale-110 transition duration-300">{course.thumbnail}</span>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{course.title}</h3>
                      <p className="text-sm text-slate-400">{course.instructor}</p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm font-semibold">
                      ⭐ {course.rating}
                    </div>
                  </div>

                  {/* Next Lesson */}
                  <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-slate-400 mb-1">Next Lesson</p>
                    <p className="text-sm text-white font-medium">{course.nextLesson}</p>
                  </div>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-300">
                        {course.lessons_completed}/{course.total_lessons} lessons
                      </span>
                      <span className="text-sm font-bold text-blue-400">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Course Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.category}
                    </span>
                  </div>

                  {/* Continue Button */}
                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2 group/btn">
                    <Play className="w-4 h-4" />
                    Continue Learning
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {enrolledCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Courses Yet</h3>
              <p className="text-slate-400 mb-6">You haven't enrolled in any courses yet.</p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                <BookOpen className="w-4 h-4" />
                Explore Courses
              </Link>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
