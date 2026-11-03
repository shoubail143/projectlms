'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Play, CheckCircle, Clock, Users, Star, LogOut, BookOpen } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function CourseDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { user, logout } = useAuth();
  const courseId = params.id;

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  // Mock course data
  const courses: Record<string, any> = {
    '1': {
      title: 'Web Development Fundamentals',
      instructor: 'Sarah Johnson',
      description: 'Learn the basics of web development including HTML, CSS, and JavaScript fundamentals.',
      thumbnail: '🌐',
      rating: 4.8,
      students: 1240,
      duration: '8 weeks',
      level: 'Beginner',
      price: '$49.99',
      progress: 65,
      lessons_completed: 13,
      total_lessons: 20,
    },
    '2': {
      title: 'Advanced React & Next.js Mastery',
      instructor: 'Mike Chen',
      description: 'Master React hooks, state management, and build production-ready applications with Next.js.',
      thumbnail: '⚛️',
      rating: 4.9,
      students: 856,
      duration: '12 weeks',
      level: 'Intermediate',
      price: '$79.99',
      progress: 42,
      lessons_completed: 8,
      total_lessons: 19,
    },
    '3': {
      title: 'UI/UX Design Fundamentals',
      instructor: 'Emma Davis',
      description: 'Learn design principles, user research, and create beautiful, user-centered interfaces.',
      thumbnail: '🎨',
      rating: 4.7,
      students: 934,
      duration: '10 weeks',
      level: 'Beginner',
      price: '$59.99',
      progress: 0,
      lessons_completed: 0,
      total_lessons: 18,
    },
  };

  const course = courses[courseId as string] || courses['1'];

  const lessons = [
    { id: 1, title: 'Course Introduction', duration: '15 min', completed: true },
    { id: 2, title: 'Getting Started', duration: '25 min', completed: true },
    { id: 3, title: 'Core Concepts', duration: '45 min', completed: true },
    { id: 4, title: 'Advanced Topics', duration: '50 min', completed: false },
    { id: 5, title: 'Project Walkthrough', duration: '60 min', completed: false },
    { id: 6, title: 'Best Practices', duration: '30 min', completed: false },
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
                <h1 className="text-2xl font-bold text-white line-clamp-1">{course.title}</h1>
                <p className="text-slate-400 text-sm">{course.instructor}</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-xl overflow-hidden">
                <div className="aspect-video bg-slate-700 flex items-center justify-center text-6xl">
                  {course.thumbnail}
                </div>
              </div>

              {/* Course Description */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">About This Course</h2>
                <p className="text-slate-300 leading-relaxed">{course.description}</p>
              </div>

              {/* Lessons List */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Course Lessons</h2>
                <div className="space-y-3">
                  {lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      className="w-full flex items-center gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 border border-slate-700 hover:border-slate-600 rounded-lg transition text-left"
                    >
                      <div className="flex-shrink-0">
                        {lesson.completed ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <Play className="w-6 h-6 text-blue-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium">{lesson.title}</h3>
                        <p className="text-sm text-slate-400">{lesson.duration}</p>
                      </div>
                      {lesson.completed && <span className="text-green-400 text-sm font-semibold">Completed</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress Card */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-4">Your Progress</h3>

                {/* Stats */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Lessons Completed</span>
                      <span className="text-blue-400 font-bold">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">{course.lessons_completed}</p>
                      <p className="text-xs text-slate-400">Completed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">{course.total_lessons}</p>
                      <p className="text-xs text-slate-400">Total</p>
                    </div>
                  </div>
                </div>

                {/* Course Info */}
                <div className="bg-slate-700/30 rounded-lg p-4 space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Duration
                    </span>
                    <span className="text-white font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400 flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Students
                    </span>
                    <span className="text-white font-medium">{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400 flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Rating
                    </span>
                    <span className="text-yellow-400 font-medium">⭐ {course.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Level</span>
                    <span className="text-white font-medium">{course.level}</span>
                  </div>
                </div>

                {/* Action Button */}
                {course.progress > 0 ? (
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Continue Lesson
                  </button>
                ) : (
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Start Course
                  </button>
                )}

                {/* Download Resources */}
                <button className="w-full mt-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Download Resources
                </button>
              </div>

              {/* Course Highlights */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">What You'll Learn</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Master core concepts and fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Build real-world projects</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Get expert guidance and feedback</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Earn a verified certificate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
