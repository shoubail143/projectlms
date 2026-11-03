'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import {
  LogOut,
  BookOpen,
  Play,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Bell,
  Award,
  Target,
  TrendingUp,
  Settings,
  Heart,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import ThemeToggle from './ThemeToggle';

export default function UserDashboard() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!user || user.role !== 'user') {
    return (
      <div className="dashboard-shell min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-slate-400 mb-8">You don't have permission to access this page.</p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  // User's enrolled courses
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
  ];

  // Recommended courses
  const recommendedCourses = [
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Emma Davis',
      rating: 4.7,
      students: 934,
      price: '$59.99',
      thumbnail: '🎨',
      category: 'Design',
    },
    {
      id: 4,
      title: 'Python for Data Science',
      instructor: 'Alex Rodriguez',
      rating: 4.8,
      students: 1567,
      price: '$69.99',
      thumbnail: '🐍',
      category: 'Data Science',
    },
    {
      id: 5,
      title: 'Mobile App Development',
      instructor: 'Chris Lee',
      rating: 4.6,
      students: 645,
      price: '$79.99',
      thumbnail: '📱',
      category: 'Mobile',
    },
  ];

  // Learning stats
  const stats = [
    { label: 'Total Hours', value: '24', icon: Clock, color: 'from-blue-500 to-blue-600' },
    { label: 'Courses Taken', value: '2', icon: BookOpen, color: 'from-purple-500 to-purple-600' },
    { label: 'Certificates', value: '1', icon: Award, color: 'from-yellow-500 to-yellow-600' },
    { label: 'Learning Streak', value: '12 days', icon: TrendingUp, color: 'from-green-500 to-green-600' },
  ];

  const NavItem = ({ 
    label, 
    icon: Icon, 
    href,
    isActive 
  }: { 
    label: string; 
    icon: React.ReactNode;
    href: string;
    isActive?: boolean;
  }) => (
    <Link
      href={href}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium ${
        isActive
          ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500'
          : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
      }`}
    >
      {Icon}
      <span>{label}</span>
    </Link>
  );

  return (
    <div className="dashboard-shell min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sidebar */}
      <div
        className="dashboard-sidebar fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-800 to-slate-900 border-r border-slate-700 z-40"
      >
        {/* Logo */}
        <div className="p-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-white">LMS</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1">
          <NavItem 
            label="Dashboard" 
            icon={<BookOpen className="w-5 h-5" />} 
            href="/dashboard"
            isActive={pathname === '/dashboard'}
          />
          <NavItem 
            label="My Courses" 
            icon={<Play className="w-5 h-5" />} 
            href="/dashboard/my-courses"
            isActive={pathname === '/dashboard/my-courses'}
          />
          <NavItem 
            label="Wishlist" 
            icon={<Heart className="w-5 h-5" />} 
            href="/dashboard/wishlist"
            isActive={pathname === '/dashboard/wishlist'}
          />
          <NavItem 
            label="Certificates" 
            icon={<Award className="w-5 h-5" />} 
            href="/dashboard/certificates"
            isActive={pathname === '/dashboard/certificates'}
          />
          <NavItem 
            label="Settings" 
            icon={<Settings className="w-5 h-5" />} 
            href="/dashboard/settings"
            isActive={pathname === '/dashboard/settings'}
          />
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 hover:text-red-300 transition font-medium"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Bar */}
        <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-30">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">My Learning</h1>
              <p className="text-slate-400 text-sm">Welcome back, {user?.name}! 🎓</p>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button className="p-2 hover:bg-slate-700 rounded-lg transition relative">
                <Bell className="w-6 h-6 text-slate-400 hover:text-white" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Continue Learning Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Play className="w-6 h-6 text-blue-400" />
                Continue Learning
              </h2>
              <Link href="/courses" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 transition">
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
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

                    {/* Action Button */}
                    <Link
                      href={`/dashboard/course/${course.id}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Continue Learning
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Courses Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Target className="w-6 h-6 text-purple-400" />
                Recommended For You
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition group"
                >
                  {/* Course Image */}
                  <div className="h-32 bg-gradient-to-r from-slate-700 to-slate-800 flex items-center justify-center overflow-hidden">
                    <span className="text-5xl group-hover:scale-110 transition duration-300">{course.thumbnail}</span>
                  </div>

                  {/* Course Info */}
                  <div className="p-4">
                    <h3 className="text-base font-bold text-white mb-1 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-slate-400 mb-3">{course.instructor}</p>

                    {/* Rating and Students */}
                    <div className="flex items-center gap-3 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-yellow-400">
                        ⭐ {course.rating}
                      </div>
                      <span className="text-slate-400">({course.students.toLocaleString()})</span>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-400">{course.price}</span>
                      <button className="p-2 hover:bg-slate-700 rounded-lg transition text-slate-400 hover:text-white">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Enroll Button */}
                    <Link
                      href={`/dashboard/enroll/${course.id}`}
                      className="w-full mt-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Enroll Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
