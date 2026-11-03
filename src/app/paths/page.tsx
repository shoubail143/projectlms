'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Lock, Users, Clock, Target, Zap } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function PathsPage() {
  const [expandedPath, setExpandedPath] = useState<number | null>(null);

  const paths = [
    {
      id: 1,
      title: 'Full Stack Web Developer',
      description: 'Master front-end and back-end development',
      duration: '24 weeks',
      students: 3200,
      level: 'Beginner to Advanced',
      price: '$199.99',
      courses: [
        { id: 1, title: 'HTML & CSS Fundamentals', duration: '2 weeks' },
        { id: 2, title: 'JavaScript Essentials', duration: '3 weeks' },
        { id: 3, title: 'React Fundamentals', duration: '4 weeks' },
        { id: 4, title: 'Node.js & Express', duration: '3 weeks' },
        { id: 5, title: 'Database Design', duration: '2 weeks' },
        { id: 6, title: 'Full Stack Project', duration: '2 weeks' },
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      icon: '🚀',
    },
    {
      id: 2,
      title: 'UX/UI Design Master',
      description: 'Learn user-centered design principles',
      duration: '16 weeks',
      students: 2100,
      level: 'Beginner to Intermediate',
      price: '$149.99',
      courses: [
        { id: 1, title: 'Design Fundamentals', duration: '2 weeks' },
        { id: 2, title: 'UI Design Principles', duration: '3 weeks' },
        { id: 3, title: 'UX Research', duration: '2 weeks' },
        { id: 4, title: 'Figma Mastery', duration: '3 weeks' },
        { id: 5, title: 'Prototyping & Testing', duration: '2 weeks' },
        { id: 6, title: 'Design Portfolio', duration: '2 weeks' },
      ],
      skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Usability Testing'],
      icon: '🎨',
    },
    {
      id: 3,
      title: 'Data Science & ML',
      description: 'Build and deploy machine learning models',
      duration: '20 weeks',
      students: 1800,
      level: 'Intermediate to Advanced',
      price: '$249.99',
      courses: [
        { id: 1, title: 'Python for Data Science', duration: '3 weeks' },
        { id: 2, title: 'Statistics Fundamentals', duration: '2 weeks' },
        { id: 3, title: 'Machine Learning Basics', duration: '3 weeks' },
        { id: 4, title: 'Advanced ML Algorithms', duration: '3 weeks' },
        { id: 5, title: 'Deep Learning', duration: '4 weeks' },
        { id: 6, title: 'ML Project Capstone', duration: '2 weeks' },
      ],
      skills: ['Python', 'TensorFlow', 'Pandas', 'ML', 'Deep Learning', 'Data Visualization'],
      icon: '📊',
    },
    {
      id: 4,
      title: 'Cloud Architecture',
      description: 'Design and deploy cloud solutions',
      duration: '18 weeks',
      students: 1400,
      level: 'Intermediate to Advanced',
      price: '$199.99',
      courses: [
        { id: 1, title: 'Cloud Fundamentals', duration: '2 weeks' },
        { id: 2, title: 'AWS Core Services', duration: '3 weeks' },
        { id: 3, title: 'Containerization & Docker', duration: '2 weeks' },
        { id: 4, title: 'Kubernetes Orchestration', duration: '3 weeks' },
        { id: 5, title: 'Microservices Architecture', duration: '3 weeks' },
        { id: 6, title: 'Cloud Project Deployment', duration: '2 weeks' },
      ],
      skills: ['AWS', 'Docker', 'Kubernetes', 'Microservices', 'CI/CD', 'Infrastructure as Code'],
      icon: '☁️',
    },
    {
      id: 5,
      title: 'Mobile App Developer',
      description: 'Create apps for iOS and Android',
      duration: '22 weeks',
      students: 2500,
      level: 'Beginner to Advanced',
      price: '$179.99',
      courses: [
        { id: 1, title: 'Mobile Development Basics', duration: '2 weeks' },
        { id: 2, title: 'Flutter Fundamentals', duration: '4 weeks' },
        { id: 3, title: 'State Management', duration: '2 weeks' },
        { id: 4, title: 'Firebase Integration', duration: '2 weeks' },
        { id: 5, title: 'Advanced Flutter', duration: '3 weeks' },
        { id: 6, title: 'App Store Deployment', duration: '2 weeks' },
      ],
      skills: ['Flutter', 'Dart', 'Firebase', 'iOS', 'Android', 'App Publishing'],
      icon: '📱',
    },
    {
      id: 6,
      title: 'Digital Marketing Pro',
      description: 'Master modern marketing strategies',
      duration: '12 weeks',
      students: 2800,
      level: 'Beginner to Intermediate',
      price: '$99.99',
      courses: [
        { id: 1, title: 'Marketing Fundamentals', duration: '2 weeks' },
        { id: 2, title: 'SEO Mastery', duration: '2 weeks' },
        { id: 3, title: 'SEM & Google Ads', duration: '2 weeks' },
        { id: 4, title: 'Social Media Marketing', duration: '2 weeks' },
        { id: 5, title: 'Email Marketing', duration: '2 weeks' },
        { id: 6, title: 'Analytics & ROI', duration: '2 weeks' },
      ],
      skills: ['SEO', 'Google Ads', 'Social Media', 'Email Marketing', 'Analytics', 'Content Strategy'],
      icon: '📈',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b-2 border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-amber-900">🌟 COURSA</Link>
            <nav className="hidden md:flex gap-8">
              <Link href="/courses" className="text-amber-700 hover:text-amber-900 transition font-medium">Courses</Link>
              <Link href="/paths" className="text-amber-700 font-semibold">Paths</Link>
              <Link href="/community" className="text-amber-700 hover:text-amber-900 transition font-medium">Community</Link>
              <Link href="/pricing" className="text-amber-700 hover:text-amber-900 transition font-medium">Pricing</Link>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/" className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg transition font-semibold">
                Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 border-b-2 border-amber-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">Learning Paths</h1>
          <p className="text-amber-700 text-lg font-medium">
            Follow structured learning paths designed by industry experts to achieve your career goals
          </p>
        </div>
      </section>

      {/* Paths Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {paths.map(path => (
              <div
                key={path.id}
                className="bg-white/70 backdrop-blur-sm border-2 border-amber-200 rounded-xl overflow-hidden hover:border-amber-400 transition shadow-md"
              >
                {/* Path Header */}
                <div className="bg-gradient-to-r from-amber-700 to-amber-800 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{path.icon}</span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {path.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{path.title}</h3>
                  <p className="text-amber-100">{path.description}</p>
                </div>

                {/* Path Info */}
                <div className="p-6">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b-2 border-amber-200">
                    <div className="text-center">
                      <p className="text-amber-700 text-sm mb-1 font-medium">Duration</p>
                      <p className="text-amber-950 font-bold">{path.duration}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-amber-700 text-sm mb-1 font-medium">Students</p>
                      <p className="text-amber-950 font-bold">{path.students.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-amber-700 text-sm mb-1 font-medium">Courses</p>
                      <p className="text-amber-950 font-bold">{path.courses.length}</p>
                    </div>
                  </div>

                  {/* Courses List */}
                  <div className="mb-6">
                    <button
                      onClick={() => setExpandedPath(expandedPath === path.id ? null : path.id)}
                      className="w-full text-left"
                    >
                      <h4 className="text-amber-950 font-semibold mb-3 flex items-center justify-between hover:text-amber-700 transition">
                        {path.courses.length} Courses
                        <span className={`transition ${expandedPath === path.id ? 'rotate-180' : ''}`}>
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </h4>
                    </button>

                    {expandedPath === path.id && (
                      <div className="space-y-2 mb-4">
                        {path.courses.map((course, index) => (
                          <div key={course.id} className="flex items-start gap-3 pb-2 last:pb-0">
                            <CheckCircle className="w-4 h-4 text-amber-700 mt-1 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-amber-800 text-sm font-medium">{index + 1}. {course.title}</p>
                              <p className="text-amber-600 text-xs">{course.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Skills */}
                  <div className="mb-6 pb-6 border-t-2 border-amber-200 pt-4">
                    <p className="text-amber-700 text-sm mb-3 font-medium">Skills You&apos;ll Learn</p>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map(skill => (
                        <span
                          key={skill}
                          className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-950">{path.price}</span>
                    <button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-2 rounded-lg transition flex items-center gap-2">
                      Enroll Path
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-t-2 border-amber-200">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-700 to-amber-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Career Path Today</h2>
          <p className="text-amber-100 mb-8 font-medium">Join thousands of students learning structured career paths</p>
          <button className="bg-white hover:bg-amber-50 text-amber-700 font-bold px-8 py-3 rounded-lg transition transform hover:scale-105">
            Explore All Paths
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-amber-200 bg-white/50 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center text-amber-700">
          <p>© 2024 LMS Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
