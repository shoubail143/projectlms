"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LogOut,
  BarChart3,
  Users,
  BookOpen,
  TrendingUp,
  Settings,
  Bell,
  PieChart,
  Activity,
  Award,
  Calendar,
  DollarSign,
  Eye,
  MoreVertical,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import ThemeToggle from "./ThemeToggle";

export default function AdminDashboard() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (!user || user.role !== "admin") {
    return (
      <div className="dashboard-shell min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Access Denied
          </h1>
          <p className="text-slate-400 mb-8">
            You don't have permission to access this page.
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-gray-900 dark:text-white px-6 py-2 rounded-lg transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  // Dashboard statistics
  const stats = [
    {
      label: "Total Users",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Active Courses",
      value: "48",
      change: "+3%",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
    },
    {
      label: "Total Revenue",
      value: "$45,231",
      change: "+8%",
      icon: DollarSign,
      color: "from-green-500 to-green-600",
    },
    {
      label: "Engagement Rate",
      value: "87%",
      change: "+5%",
      icon: TrendingUp,
      color: "from-pink-500 to-pink-600",
    },
  ];

  // Recent activities
  const activities = [
    {
      id: 1,
      user: "John Doe",
      action: "Enrolled in Web Development",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-400",
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "Completed React Course",
      time: "5 hours ago",
      icon: Award,
      color: "text-yellow-400",
    },
    {
      id: 3,
      user: "Mike Johnson",
      action: "Payment failed",
      time: "1 day ago",
      icon: AlertCircle,
      color: "text-red-400",
    },
    {
      id: 4,
      user: "Sarah Williams",
      action: "Started Python Course",
      time: "2 days ago",
      icon: CheckCircle,
      color: "text-green-400",
    },
  ];

  // Recent courses
  const recentCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      students: 342,
      rating: 4.8,
      revenue: "$12,450",
    },
    {
      id: 2,
      title: "Advanced React & Next.js",
      students: 256,
      rating: 4.9,
      revenue: "$9,280",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      students: 198,
      rating: 4.7,
      revenue: "$7,120",
    },
    {
      id: 4,
      title: "Python for Data Science",
      students: 421,
      rating: 4.8,
      revenue: "$15,360",
    },
  ];

  const NavItem = ({
    label,
    icon: Icon,
    href,
  }: {
    label: string;
    icon: React.ReactNode;
    href: string;
  }) => (
    <Link
      href={href}
      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700/50 transition text-slate-300 font-medium"
    >
      {Icon}
      <span>{label}</span>
    </Link>
  );

  return (
    <div className="dashboard-shell min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sidebar */}
      <div className="dashboard-sidebar fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-800 to-slate-900 border-r border-slate-700 z-40">
        {/* Logo */}
        <div className="p-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-gray-800 dark:text-white">
              Admin Dash
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1">
          <NavItem
            label="Dashboard"
            icon={<BarChart3 className="w-5 h-5" />}
            href="/admin"
          />
          <NavItem
            label="Users"
            icon={<Users className="w-5 h-5" />}
            href="/admin/users"
          />
          <NavItem
            label="Courses"
            icon={<BookOpen className="w-5 h-5" />}
            href="/admin/courses"
          />
          <NavItem
            label="Analytics"
            icon={<PieChart className="w-5 h-5" />}
            href="/admin/analytics"
          />
          <NavItem
            label="Reports"
            icon={<Activity className="w-5 h-5" />}
            href="/admin/reports"
          />
          <NavItem
            label="Settings"
            icon={<Settings className="w-5 h-5" />}
            href="/admin/settings"
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
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Dashboard
              </h1>
              <p className="text-slate-400 text-sm">
                Welcome back, {user?.name}! 👋
              </p>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button className="p-2 hover:bg-slate-700 rounded-lg transition relative">
                <Bell className="w-6 h-6 text-slate-400 hover:text-white" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-green-400 text-sm font-semibold">
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-slate-400 text-sm font-medium mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Revenue Chart */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Revenue Trend
              </h2>
              <div className="space-y-4">
                {[
                  { month: "Jan", value: 65, max: 100 },
                  { month: "Feb", value: 72, max: 100 },
                  { month: "Mar", value: 68, max: 100 },
                  { month: "Apr", value: 85, max: 100 },
                  { month: "May", value: 90, max: 100 },
                ].map((item) => (
                  <div key={item.month}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{item.month}</span>
                      <span className="text-slate-400">{item.value}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Distribution */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-purple-400" />
                User Distribution
              </h2>
              <div className="space-y-4">
                {[
                  {
                    category: "Active",
                    count: 856,
                    color: "from-green-500 to-green-600",
                  },
                  {
                    category: "Inactive",
                    count: 342,
                    color: "from-yellow-500 to-yellow-600",
                  },
                  {
                    category: "Trial",
                    count: 128,
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    category: "Premium",
                    count: 45,
                    color: "from-purple-500 to-purple-600",
                  },
                ].map((item) => (
                  <div key={item.category} className="flex items-center gap-4">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}
                    ></div>
                    <span className="text-slate-300 text-sm flex-1">
                      {item.category}
                    </span>
                    <span className="text-white font-semibold">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tables Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Courses */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                Top Courses
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-2 text-slate-400 font-medium">
                        Course
                      </th>
                      <th className="text-right py-3 px-2 text-slate-400 font-medium">
                        Students
                      </th>
                      <th className="text-right py-3 px-2 text-slate-400 font-medium">
                        Rating
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentCourses.map((course) => (
                      <tr
                        key={course.id}
                        className="border-b border-slate-700 hover:bg-slate-700/20 transition"
                      >
                        <td className="py-3 px-2 text-slate-300">
                          {course.title}
                        </td>
                        <td className="text-right py-3 px-2 text-white font-medium">
                          {course.students}
                        </td>
                        <td className="text-right py-3 px-2">
                          <span className="flex items-center gap-1 justify-end text-yellow-400">
                            ⭐ {course.rating}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-400" />
                Recent Activity
              </h2>
              <div className="space-y-3">
                {activities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div
                      key={activity.id}
                      className="flex items-start gap-3 p-3 bg-white border rounded-lg hover:bg-slate-700/40 transition"
                    >
                      <Icon
                        className={`w-5 h-5 ${activity.color} flex-shrink-0 mt-0.5`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-slate-300 text-sm">
                          <span className="font-semibold">{activity.user}</span>{" "}
                          {activity.action}
                        </p>
                        <p className="text-slate-500 text-xs mt-1">
                          {activity.time}
                        </p>
                      </div>
                      <button className="p-1 hover:bg-slate-600 rounded transition text-slate-400">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
