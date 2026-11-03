"use client";

import React, { useState } from "react";
import { SignInButton, UserButton, Show } from "@clerk/nextjs";
import { Suspense } from "react";
import Link from "next/link";
import Auth from "./Auth";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import {
  BookOpen,
  Users,
  Target,
  TrendingUp,
  Play,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Lightbulb,
  MessageSquare,
} from "lucide-react";

export default function Hero() {
  const { isDark } = useTheme();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  // Featured Courses
  const courses = [
    {
      id: 1,
      title: "Web Development Basics",
      instructor: "Sarah Johnson",
      students: 1240,
      rating: 4.8,
      icon: BookOpen,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      title: "Advanced React",
      instructor: "Mike Chen",
      students: 856,
      rating: 4.9,
      icon: Zap,
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 3,
      title: "UI/UX Design",
      instructor: "Emma Davis",
      students: 934,
      rating: 4.7,
      icon: Lightbulb,
      color: "from-pink-400 to-pink-600",
    },
  ];

  // Statistics
  const stats = [
    { label: "Active Students", value: "15,234", icon: Users },
    { label: "Total Courses", value: "248", icon: BookOpen },
    { label: "Learning Hours", value: "45,892", icon: Clock },
    { label: "Completion Rate", value: "94%", icon: CheckCircle },
  ];

  // Features
  const features = [
    {
      icon: Target,
      title: "Personalized Learning",
      description: "AI-powered recommendations tailored to your goals",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Learn together with thousands of peers worldwide",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Earn recognized certificates upon completion",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics",
    },
    {
      icon: MessageSquare,
      title: "Expert Mentoring",
      description: "Get guidance from industry professionals",
    },
    {
      icon: Zap,
      title: "Interactive Content",
      description: "Engaging lessons with hands-on projects",
    },
  ];

  return (
    <div
      className={`min-h-screen ${isDark ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" : "bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"}`}
    >
      {/* Header Navigation */}
      <header
        className={`sticky top-0 z-50 ${isDark ? "bg-slate-950/90 border-b border-blue-500/30" : "bg-white/80 border-b border-amber-200"} backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/lms.png" alt="lms logo" className="w-12 h-12" />
              <span
                className={`text-2xl font-bold ${isDark ? "text-blue-400" : "text-amber-900"}`}
              >
                COURSA
              </span>
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link
                href="/courses"
                className={`${isDark ? "text-blue-300 hover:text-blue-100" : "text-amber-700 hover:text-amber-900"} transition font-medium`}
              >
                Courses
              </Link>
              <Link
                href="/paths"
                className={`${isDark ? "text-blue-300 hover:text-blue-100" : "text-amber-700 hover:text-amber-900"} transition font-medium`}
              >
                Paths
              </Link>
              <Link
                href="/community"
                className={`${isDark ? "text-blue-300 hover:text-blue-100" : "text-amber-700 hover:text-amber-900"} transition font-medium`}
              >
                Community
              </Link>
              <Link
                href="/pricing"
                className={`${isDark ? "text-blue-300 hover:text-blue-100" : "text-amber-700 hover:text-amber-900"} transition font-medium`}
              >
                Pricing
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Suspense fallback={<div className="h-10 w-10 rounded-full bg-slate-200" />}>
                <Show
                  when="signed-out"
                  fallback={
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "h-10 w-10",
                        },
                      }}
                    />
                  }
                >
                  <SignInButton mode="modal">
                    <button className={`${isDark ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-600 hover:bg-blue-700"} text-white px-6 py-2 rounded-lg transition font-semibold`}>
                      Sign in
                    </button>
                  </SignInButton>
                </Show>
              </Suspense>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className=" relative px-4 sm:px-6 lg:px-8 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full w-fit ${isDark ? "bg-blue-500/10 border-blue-400/30" : "bg-amber-100 border-amber-300"}`}
                >
                  <Zap
                    className={`w-4 h-4 ${isDark ? "text-blue-300" : "text-amber-700"}`}
                  />
                  <span
                    className={`text-sm font-medium ${isDark ? "text-blue-200" : "text-amber-800"}`}
                  >
                    Learn Smarter, Not Harder
                  </span>
                </div>
                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isDark ? "text-blue-50" : "text-amber-950"}`}
                >
                  Master New Skills at Your Own Pace
                </h1>
                <p
                  className={`text-lg leading-relaxed ${isDark ? "text-blue-200" : "text-amber-800"}`}
                >
                  Access thousands of courses from industry experts. Learn web
                  development, design, data science, and more with interactive
                  lessons and real-world projects.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => {
                    setAuthMode("signup");
                    setAuthOpen(true);
                  }}
                  className={`flex items-center justify-center gap-2 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl ${isDark ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-600 hover:bg-blue-700"}`}
                >
                  <Play className="w-5 h-5" />
                  Get Started
                </button>
                <Link
                  href="/quizzes"
                  className={`flex items-center justify-center gap-2 border font-semibold px-8 py-3.5 rounded-full shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${isDark ? "border-blue-400/50 bg-slate-900/40 text-blue-200 hover:bg-blue-500/10" : "border-slate-300 bg-white/80 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"}`}
                >
                  📝 Take Quiz
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/courses"
                  className={`flex items-center justify-center gap-2 border font-semibold px-8 py-3.5 rounded-full shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${isDark ? "border-blue-400/50 bg-slate-900/40 text-blue-200 hover:bg-blue-500/10" : "border-slate-300 bg-white/80 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"}`}
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <TrendingUp
                    className={`w-5 h-5 ${isDark ? "text-blue-300" : "text-amber-700"}`}
                  />
                  <span
                    className={`font-medium ${isDark ? "text-blue-200" : "text-amber-800"}`}
                  >
                    95% Success Rate
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users
                    className={`w-5 h-5 ${isDark ? "text-blue-300" : "text-amber-700"}`}
                  />
                  <span
                    className={`font-medium ${isDark ? "text-blue-200" : "text-amber-800"}`}
                  >
                    50K+ Active Learners
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual - Featured Courses Preview */}
            <div className="hidden md:grid grid-cols-1 gap-4">
              {courses.slice(0, 2).map((course) => {
                const IconComponent = course.icon;
                return (
                  <div
                    key={course.id}
                    className={`${isDark ? "bg-slate-800/50 border-2 border-blue-500/30 hover:border-blue-400" : "bg-white border-2 border-amber-200 hover:border-amber-400"} backdrop-blur-sm p-6 rounded-xl transition group shadow-lg`}
                  >
                    <div
                      className={`bg-gradient-to-r ${course.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className={`${isDark ? "text-blue-100" : "text-amber-950"} font-semibold mb-2`}
                    >
                      {course.title}
                    </h3>
                    <p
                      className={`${isDark ? "text-blue-300" : "text-amber-700"} text-sm mb-4`}
                    >
                      {course.instructor}
                    </p>
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-xs ${isDark ? "text-blue-300" : "text-amber-700"}`}
                      >
                        {course.students} students
                      </span>
                      <span
                        className={`flex items-center gap-1 ${isDark ? "text-blue-300" : "text-amber-700"} text-sm font-semibold`}
                      >
                        ⭐ {course.rating}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        className={`px-4 sm:px-6 lg:px-8 py-16 ${isDark ? "border-t border-blue-500/30" : "border-t-2 border-amber-200"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`${isDark ? "bg-slate-800/50 border-2 border-blue-500/30 hover:border-blue-400" : "bg-white/60 border-2 border-amber-200 hover:border-amber-400"} backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-lg transition`}
                >
                  <IconComponent
                    className={`w-8 h-8 ${isDark ? "text-blue-400" : "text-amber-700"} mx-auto mb-3`}
                  />
                  <p
                    className={`${isDark ? "text-blue-300" : "text-amber-700"} text-sm mb-2 font-medium`}
                  >
                    {stat.label}
                  </p>
                  <p
                    className={`text-2xl md:text-3xl font-bold ${isDark ? "text-blue-100" : "text-amber-950"}`}
                  >
                    {stat.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section
        className={`px-4 sm:px-6 lg:px-8 py-16 ${isDark ? "border-t border-blue-500/30" : "border-t-2 border-amber-200"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2
                className={`text-3xl md:text-4xl font-bold ${isDark ? "text-blue-300" : "text-amber-950"} mb-2`}
              >
                Featured Courses
              </h2>
              <p
                className={`${isDark ? "text-blue-200" : "text-amber-700"} font-medium`}
              >
                Start your learning journey with our most popular courses
              </p>
            </div>
            <Link
              href="/courses"
              className={`hidden md:flex items-center gap-2 ${isDark ? "text-blue-300 hover:text-blue-100" : "text-amber-700 hover:text-amber-900"} transition font-semibold`}
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => {
              const IconComponent = course.icon;
              return (
                <div
                  key={course.id}
                  className={`${isDark ? "bg-slate-800/50 border-2 border-blue-500/30 hover:border-blue-400" : "bg-white/70 border-2 border-amber-200 hover:border-amber-400"} backdrop-blur-sm rounded-xl overflow-hidden transition group cursor-pointer shadow-md hover:shadow-lg`}
                  onMouseEnter={() => setHoveredCard(course.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Course Header */}
                  <div
                    className={`bg-gradient-to-r ${course.color} h-32 flex items-center justify-center group-hover:scale-105 transition`}
                  >
                    <IconComponent className="w-16 h-16 text-white opacity-80" />
                  </div>

                  {/* Course Info */}
                  <div className="p-6">
                    <h3
                      className={`${isDark ? "text-blue-100" : "text-amber-950"} font-bold text-lg mb-2`}
                    >
                      {course.title}
                    </h3>
                    <p
                      className={`${isDark ? "text-blue-300" : "text-amber-700"} text-sm mb-4 font-medium`}
                    >
                      {course.instructor}
                    </p>

                    {/* Course Stats */}
                    <div
                      className={`space-y-3 mb-6 pb-6 ${isDark ? "border-t border-blue-500/30" : "border-t-2 border-amber-200"} pt-4`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`${isDark ? "text-blue-300" : "text-amber-700"} text-sm flex items-center gap-2 font-medium`}
                        >
                          <Users className="w-4 h-4" />
                          {course.students} enrolled
                        </span>
                        <span
                          className={`${isDark ? "text-blue-300" : "text-amber-700"} font-semibold`}
                        >
                          ⭐ {course.rating}
                        </span>
                      </div>
                      <div
                        className={`w-full ${isDark ? "bg-blue-500/30" : "bg-amber-200"} rounded-full h-2`}
                      >
                        <div
                          className={`${isDark ? "bg-gradient-to-r from-blue-500 to-blue-600" : "bg-gradient-to-r from-amber-600 to-amber-700"} h-2 rounded-full`}
                          style={{ width: "75%" }}
                        />
                      </div>
                    </div>

                    {/* Enroll Button */}
                    <button
                      className={`w-full ${isDark ? "bg-blue-600 hover:bg-blue-500" : "bg-amber-700 hover:bg-amber-800"} text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2 group/btn`}
                    >
                      Enroll Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={`px-4 sm:px-6 lg:px-8 py-16 ${isDark ? "border-t border-blue-500/30" : "border-t-2 border-amber-200"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold ${isDark ? "text-blue-300" : "text-amber-950"} mb-4`}
            >
              Why Choose LMS Pro?
            </h2>
            <p
              className={`${isDark ? "text-blue-200" : "text-amber-700"} text-lg font-medium`}
            >
              Everything you need to succeed in your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`${isDark ? "bg-slate-800/50 border-2 border-blue-500/30 hover:border-blue-400 hover:bg-slate-800/80" : "bg-white/70 border-2 border-amber-200 hover:border-amber-400 hover:bg-white/90"} backdrop-blur-sm rounded-xl p-6 transition group shadow-md`}
                >
                  <div
                    className={`${isDark ? "bg-blue-600/30 text-blue-400" : "bg-amber-100 text-amber-700"} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:${isDark ? "bg-blue-600/50" : "bg-amber-200"} transition`}
                  >
                    <IconComponent
                      className={`w-6 h-6 ${isDark ? "text-blue-300" : "text-amber-700"}`}
                    />
                  </div>
                  <h3
                    className={`${isDark ? "text-blue-200" : "text-amber-950"} font-semibold text-lg mb-2`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`${isDark ? "text-blue-300" : "text-amber-700"} text-sm leading-relaxed`}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`px-4 sm:px-6 lg:px-8 py-16 ${isDark ? "border-t border-blue-500/30" : "border-t-2 border-amber-200"}`}
      >
        <div
          className={`max-w-4xl mx-auto ${isDark ? "bg-gradient-to-r from-blue-900 to-blue-800" : "bg-gradient-to-r from-amber-700 to-amber-800"} rounded-2xl p-8 md:p-12 text-center shadow-2xl`}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold ${isDark ? "text-blue-100" : "text-white"} mb-4`}
          >
            Ready to Start Learning?
          </h2>
          <p
            className={`${isDark ? "text-blue-200" : "text-amber-100"} mb-8 text-lg font-medium`}
          >
            Join thousands of students transforming their careers through
            quality education.
          </p>
          <button
            onClick={() => {
              setAuthMode("signup");
              setAuthOpen(true);
            }}
            className={`${isDark ? "bg-blue-600 hover:bg-blue-500 text-white" : "bg-white hover:bg-amber-50 text-amber-700"} font-bold px-8 py-3 rounded-lg transition transform hover:scale-105`}
          >
            Start Free Trial Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${isDark ? "border-t border-blue-500/30 bg-slate-900/50" : "border-t-2 border-amber-200 bg-white/50"} px-4 sm:px-6 lg:px-8 py-12`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <BookOpen
                  className={`w-6 h-6 ${isDark ? "text-blue-400" : "text-amber-700"}`}
                />
                <span
                  className={`text-lg font-bold ${isDark ? "text-blue-300" : "text-amber-950"}`}
                >
                  LMS Pro
                </span>
              </Link>
              <p
                className={`${isDark ? "text-blue-300" : "text-amber-700"} text-sm`}
              >
                Learn, grow, and achieve your goals with our platform.
              </p>
            </div>
            <div>
              <h4
                className={`${isDark ? "text-blue-300" : "text-amber-950"} font-semibold mb-4`}
              >
                Platform
              </h4>
              <ul
                className={`space-y-2 ${isDark ? "text-blue-300" : "text-amber-700"} text-sm`}
              >
                <li>
                  <Link
                    href="/courses"
                    className={`${isDark ? "hover:text-blue-200" : "hover:text-amber-900"} transition`}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/paths"
                    className={`${isDark ? "hover:text-blue-200" : "hover:text-amber-900"} transition`}
                  >
                    Paths
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certificates"
                    className={`${isDark ? "hover:text-blue-200" : "hover:text-amber-900"} transition`}
                  >
                    Certificates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className={`${isDark ? "text-blue-300" : "text-amber-950"} font-semibold mb-4`}
              >
                Community
              </h4>
              <ul
                className={`space-y-2 ${isDark ? "text-blue-300" : "text-amber-700"} text-sm`}
              >
                <li>
                  <Link
                    href="/forum"
                    className={`${isDark ? "hover:text-blue-200" : "hover:text-amber-900"} transition`}
                  >
                    Forum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className={`${isDark ? "hover:text-blue-200" : "hover:text-amber-900"} transition`}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`${isDark ? "hover:text-blue-200" : "hover:text-amber-900"} transition`}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className={`${isDark ? "text-blue-300" : "text-amber-950"} font-semibold mb-4`}
              >
                Support
              </h4>
              <ul
                className={`space-y-2 ${isDark ? "text-blue-300" : "text-amber-700"} text-sm`}
              >
                <li>
                  <Link
                    href="/help"
                    className={`${isDark ? "hover:text-blue-200" : "hover:text-amber-900"} transition`}
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`${isDark ? "hover:text-blue-200" : "hover:text-amber-900"} transition`}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className={`${isDark ? "hover:text-blue-200" : "hover:text-amber-900"} transition`}
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${isDark ? "border-t border-blue-500/30" : "border-t-2 border-amber-200"} pt-8`}
          >
            <p
              className={`text-center ${isDark ? "text-blue-300" : "text-amber-700"} text-sm`}
            >
              © 2024 LMS Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <Auth
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        initialMode={authMode}
      />
    </div>
  );
}
