'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Star, Users, Clock, ArrowRight, BookOpen, Zap, Lightbulb } from 'lucide-react';
import PaymentModal from '@/components/PaymentModal';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

interface PaymentCourse {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  thumbnail: string;
  instructor: { name: string; avatar: string };
}

export default function CoursesPage() {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCourseForPayment, setSelectedCourseForPayment] = useState<PaymentCourse | null>(null);

  const courses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'Sarah Johnson',
      description: 'Learn HTML, CSS, and JavaScript from scratch',
      category: 'Development',
      students: 1240,
      rating: 4.8,
      duration: '12 weeks',
      level: 'Beginner',
      price: '$49.99',
      icon: BookOpen,
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      title: 'Advanced React & Next.js',
      instructor: 'Mike Chen',
      description: 'Master modern React patterns and Next.js framework',
      category: 'Development',
      students: 856,
      rating: 4.9,
      duration: '10 weeks',
      level: 'Advanced',
      price: '$79.99',
      icon: Zap,
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Emma Davis',
      description: 'Design beautiful user interfaces and experiences',
      category: 'Design',
      students: 934,
      rating: 4.7,
      duration: '8 weeks',
      level: 'Beginner',
      price: '$59.99',
      icon: Lightbulb,
      color: 'from-pink-400 to-pink-600',
    },
    {
      id: 4,
      title: 'Python for Data Science',
      instructor: 'Alex Rodriguez',
      description: 'Analyze data and build ML models with Python',
      category: 'Data Science',
      students: 2100,
      rating: 4.8,
      duration: '14 weeks',
      level: 'Intermediate',
      price: '$89.99',
      icon: Zap,
      color: 'from-green-400 to-green-600',
    },
    {
      id: 5,
      title: 'Mobile App Development',
      instructor: 'John Smith',
      description: 'Build iOS and Android apps with Flutter',
      category: 'Development',
      students: 678,
      rating: 4.6,
      duration: '12 weeks',
      level: 'Intermediate',
      price: '$69.99',
      icon: BookOpen,
      color: 'from-orange-400 to-orange-600',
    },
    {
      id: 6,
      title: 'Digital Marketing Mastery',
      instructor: 'Lisa Wang',
      description: 'Master SEO, SEM, and social media marketing',
      category: 'Marketing',
      students: 1567,
      rating: 4.7,
      duration: '6 weeks',
      level: 'Beginner',
      price: '$49.99',
      icon: Lightbulb,
      color: 'from-red-400 to-red-600',
    },
    {
      id: 7,
      title: 'Cloud Computing with AWS',
      instructor: 'David Lee',
      description: 'Deploy and manage applications on AWS',
      category: 'Cloud',
      students: 845,
      rating: 4.8,
      duration: '10 weeks',
      level: 'Advanced',
      price: '$99.99',
      icon: Zap,
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      id: 8,
      title: 'Cybersecurity Essentials',
      instructor: 'Rachel Green',
      description: 'Protect systems and data from security threats',
      category: 'Security',
      students: 512,
      rating: 4.9,
      duration: '12 weeks',
      level: 'Intermediate',
      price: '$79.99',
      icon: BookOpen,
      color: 'from-indigo-400 to-indigo-600',
    },
  ];

  const categories = ['all', 'Development', 'Design', 'Data Science', 'Marketing', 'Cloud', 'Security'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900' : 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100'}`}>
      {/* Payment Modal */}
      {selectedCourseForPayment && (
        <PaymentModal
          isOpen={!!selectedCourseForPayment}
          onClose={() => setSelectedCourseForPayment(null)}
          course={selectedCourseForPayment}
        />
      )}

      {/* Header Navigation */}
      <header className={`sticky top-0 z-40 ${isDark ? 'bg-slate-950/90 border-b border-blue-500/30' : 'bg-white/80 border-b border-amber-200'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-amber-900'}`}>🌟 COURSA</Link>
            <nav className="hidden md:flex gap-8">
              <Link href="/courses" className={`${isDark ? 'text-blue-300 hover:text-blue-100' : 'text-amber-700 hover:text-amber-900'} transition font-medium`}>Courses</Link>
              <Link href="/paths" className={`${isDark ? 'text-blue-300 hover:text-blue-100' : 'text-amber-700 hover:text-amber-900'} transition font-medium`}>Paths</Link>
              <Link href="/community" className={`${isDark ? 'text-blue-300 hover:text-blue-100' : 'text-amber-700 hover:text-amber-900'} transition font-medium`}>Community</Link>
              <Link href="/pricing" className={`${isDark ? 'text-blue-300 hover:text-blue-100' : 'text-amber-700 hover:text-amber-900'} transition font-medium`}>Pricing</Link>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/" className={`${isDark ? 'bg-blue-600 hover:bg-blue-500' : 'bg-amber-700 hover:bg-amber-800'} text-white px-6 py-2 rounded-lg transition font-semibold`}>
                Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`px-4 sm:px-6 lg:px-8 py-12 ${isDark ? 'border-b border-blue-500/30' : 'border-b-2 border-amber-200'}`}>
        <div className="max-w-7xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-blue-300' : 'text-amber-950'} mb-4`}>Explore Our Courses</h1>
          <p className={`${isDark ? 'text-blue-200' : 'text-amber-700'} text-lg mb-8 font-medium`}>Choose from {courses.length} carefully curated courses taught by industry experts</p>

          {/* Search and Filter */}
          <div className="space-y-4">
            <div className="relative">
              <Search className={`absolute left-4 top-3 w-5 h-5 ${isDark ? 'text-blue-400' : 'text-amber-600'}`} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full ${isDark ? 'bg-slate-800 border-2 border-blue-500/50 text-blue-100 placeholder-blue-600' : 'bg-white border-2 border-amber-200 text-amber-950 placeholder-amber-500'} rounded-lg pl-12 pr-4 py-3 focus:outline-none ${isDark ? 'focus:border-blue-400' : 'focus:border-amber-400'} transition`}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCategory === category
                      ? isDark ? 'bg-blue-600 text-white' : 'bg-amber-700 text-white'
                      : isDark ? 'bg-slate-800 text-blue-300 border-2 border-blue-500/50 hover:bg-slate-700' : 'bg-white text-amber-700 border-2 border-amber-200 hover:bg-amber-50'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <p className={`${isDark ? 'text-blue-300' : 'text-amber-700'} mb-8 font-medium`}>{filteredCourses.length} courses found</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map(course => {
              const IconComponent = course.icon;
              return (
                <div
                  key={course.id}
                  className={`${isDark ? 'bg-slate-800/50 border-2 border-blue-500/30 hover:border-blue-400' : 'bg-white/70 border-2 border-amber-200 hover:border-amber-400'} backdrop-blur-sm rounded-xl overflow-hidden transition group cursor-pointer shadow-md hover:shadow-lg`}
                  onMouseEnter={() => setHoveredCard(course.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Course Header */}
                  <div className={`bg-gradient-to-r ${course.color} h-24 flex items-center justify-center group-hover:scale-105 transition`}>
                    <IconComponent className="w-12 h-12 text-white opacity-80" />
                  </div>

                  {/* Course Info */}
                  <div className="p-5">
                    <span className={`text-xs ${isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-amber-100 text-amber-700'} px-3 py-1 rounded-full inline-block mb-2 font-semibold`}>
                      {course.category}
                    </span>
                    <h3 className={`${isDark ? 'text-blue-100' : 'text-amber-950'} font-bold mb-2 line-clamp-2`}>{course.title}</h3>
                    <p className={`${isDark ? 'text-blue-300' : 'text-amber-700'} text-xs mb-3 line-clamp-2`}>{course.description}</p>
                    <p className={`${isDark ? 'text-blue-400' : 'text-amber-600'} text-xs mb-3`}>{course.instructor}</p>

                    {/* Course Stats */}
                    <div className={`space-y-2 mb-4 pb-4 ${isDark ? 'border-t border-blue-500/30' : 'border-t-2 border-amber-200'} pt-4`}>
                      <div className="flex items-center justify-between text-xs">
                        <span className={`${isDark ? 'text-blue-300' : 'text-amber-700'} flex items-center gap-1`}>
                          <Users className="w-3 h-3" /> {course.students}
                        </span>
                        <span className={`font-semibold ${isDark ? 'text-blue-300' : 'text-amber-700'}`}>⭐ {course.rating}</span>
                      </div>
                      <div className={`flex items-center justify-between text-xs ${isDark ? 'text-blue-300' : 'text-amber-700'}`}>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {course.duration}
                        </span>
                        <span className={isDark ? 'text-blue-400' : 'text-amber-600'}>{course.level}</span>
                      </div>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between">
                      <span className={`font-bold ${isDark ? 'text-blue-300' : 'text-amber-950'}`}>{course.price}</span>
                      <button 
                        onClick={() => setSelectedCourseForPayment({
                          id: course.id,
                          title: course.title,
                          price: parseFloat(course.price.replace('$', '')),
                          originalPrice: parseFloat(course.price.replace('$', '')) * 2,
                          thumbnail: course.icon === BookOpen ? '📚' : course.icon === Zap ? '⚡' : '💡',
                          instructor: { name: course.instructor, avatar: '👨‍🏫' }
                        })}
                        className={`${isDark ? 'bg-blue-600 hover:bg-blue-500' : 'bg-amber-700 hover:bg-amber-800'} text-white px-3 py-2 rounded-lg text-xs font-semibold transition`}
                      >
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDark ? 'border-t border-blue-500/30 bg-slate-900/50' : 'border-t-2 border-amber-200 bg-white/50'} px-4 sm:px-6 lg:px-8 py-12`}>
        <div className={`max-w-7xl mx-auto text-center ${isDark ? 'text-blue-300' : 'text-amber-700'}`}>
          <p>© 2024 LMS Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
