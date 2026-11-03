'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Users, Heart, Share2, Search, Plus, Zap, Award, TrendingUp } from 'lucide-react';

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const discussions = [
    {
      id: 1,
      title: 'Best practices for React hooks in large applications',
      category: 'Development',
      author: 'Sarah Chen',
      avatar: '👨‍💻',
      replies: 24,
      likes: 156,
      views: 1203,
      timestamp: '2 hours ago',
      preview: 'I\'ve been wondering about the best way to organize custom hooks...',
    },
    {
      id: 2,
      title: 'UI Design tips for mobile-first approach',
      category: 'Design',
      author: 'Emma Davis',
      avatar: '👩‍🎨',
      replies: 18,
      likes: 124,
      views: 892,
      timestamp: '4 hours ago',
      preview: 'Mobile-first design is crucial. Here are my top 5 tips...',
    },
    {
      id: 3,
      title: 'Dealing with imposter syndrome in tech',
      category: 'Career',
      author: 'Mike Johnson',
      avatar: '👨‍💼',
      replies: 42,
      likes: 298,
      views: 2145,
      timestamp: '6 hours ago',
      preview: 'Many of us struggle with this feeling. Let\'s discuss strategies...',
    },
    {
      id: 4,
      title: 'AWS certification worth it in 2024?',
      category: 'Cloud',
      author: 'Alex Rodriguez',
      avatar: '👨‍💻',
      replies: 31,
      likes: 187,
      views: 1456,
      timestamp: '8 hours ago',
      preview: 'Planning to take the AWS Solutions Architect exam...',
    },
    {
      id: 5,
      title: 'Data science interview preparation guide',
      category: 'Data Science',
      author: 'Lisa Wang',
      avatar: '👩‍🔬',
      replies: 36,
      likes: 267,
      views: 1789,
      timestamp: '10 hours ago',
      preview: 'I recently went through several data science interviews...',
    },
    {
      id: 6,
      title: 'Best tools for UI/UX design in 2024',
      category: 'Design',
      author: 'John Smith',
      avatar: '👨‍🎨',
      replies: 28,
      likes: 201,
      views: 1612,
      timestamp: '12 hours ago',
      preview: 'Beyond Figma, here are some amazing tools I\'ve discovered...',
    },
  ];

  const categories = ['all', 'Development', 'Design', 'Career', 'Cloud', 'Data Science', 'Questions'];

  const events = [
    {
      id: 1,
      title: 'Live Coding Session: Building with React',
      date: 'Nov 5, 2024',
      time: '2:00 PM EST',
      attendees: 342,
      speaker: 'Sarah Johnson',
      icon: '🔴',
    },
    {
      id: 2,
      title: 'Design Thinking Workshop',
      date: 'Nov 7, 2024',
      time: '3:00 PM EST',
      attendees: 215,
      speaker: 'Emma Davis',
      icon: '🎨',
    },
    {
      id: 3,
      title: 'Career Growth Panel Discussion',
      date: 'Nov 10, 2024',
      time: '4:00 PM EST',
      attendees: 567,
      speaker: 'Multiple Experts',
      icon: '💼',
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Chen', points: 2450, avatar: '👩‍💻', badge: '🏆' },
    { rank: 2, name: 'Mike Johnson', points: 2180, avatar: '👨‍💼', badge: '🥈' },
    { rank: 3, name: 'Emma Davis', points: 1950, avatar: '👩‍🎨', badge: '🥉' },
    { rank: 4, name: 'Alex Rodriguez', points: 1720, avatar: '👨‍💻' },
    { rank: 5, name: 'Lisa Wang', points: 1590, avatar: '👩‍🔬' },
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          discussion.preview.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b-2 border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-amber-900">🌟 COURSA</Link>
            <nav className="hidden md:flex gap-8">
              <Link href="/courses" className="text-amber-700 hover:text-amber-900 transition font-medium">Courses</Link>
              <Link href="/paths" className="text-amber-700 hover:text-amber-900 transition font-medium">Paths</Link>
              <Link href="/community" className="text-amber-700 font-semibold">Community</Link>
              <Link href="/pricing" className="text-amber-700 hover:text-amber-900 transition font-medium">Pricing</Link>
            </nav>
            <Link href="/" className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg transition font-semibold">
              Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 border-b-2 border-amber-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">Community Hub</h1>
          <p className="text-amber-700 text-lg font-medium">Connect with fellow learners, share knowledge, and grow together</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Discussions */}
          <div className="lg:col-span-2">
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-3 w-5 h-5 text-amber-600" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border-2 border-amber-200 rounded-lg pl-12 pr-4 py-3 text-amber-950 placeholder-amber-500 focus:outline-none focus:border-amber-400 transition"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCategory === category
                      ? 'bg-amber-700 text-white'
                      : 'bg-white text-amber-700 border-2 border-amber-200 hover:bg-amber-50'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* New Discussion Button */}
            <button className="w-full mb-8 bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" />
              Start New Discussion
            </button>

            {/* Discussions List */}
            <div className="space-y-4">
              {filteredDiscussions.map(discussion => (
                <div
                  key={discussion.id}
                  className="bg-white/70 backdrop-blur-sm border-2 border-amber-200 rounded-xl p-6 hover:border-amber-400 transition cursor-pointer group shadow-md"
                >
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <div className="text-3xl flex-shrink-0">{discussion.avatar}</div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-amber-950 font-semibold group-hover:text-amber-700 transition line-clamp-2">
                          {discussion.title}
                        </h3>
                        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0">
                          {discussion.category}
                        </span>
                      </div>

                      <p className="text-amber-700 text-sm mb-3 line-clamp-2">{discussion.preview}</p>

                      <div className="flex items-center justify-between text-xs text-amber-700">
                        <div className="flex items-center gap-4">
                          <span>{discussion.author}</span>
                          <span>{discussion.timestamp}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3" /> {discussion.replies}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3" /> {discussion.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            👁 {discussion.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white/70 backdrop-blur-sm border-2 border-amber-200 rounded-xl p-6 shadow-md">
              <h3 className="text-amber-950 font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-700" />
                Upcoming Events
              </h3>
              <div className="space-y-3">
                {events.map(event => (
                  <div key={event.id} className="pb-3 border-b-2 border-amber-200 last:border-b-0 last:pb-0">
                    <p className="text-sm text-amber-950 font-semibold mb-1">{event.title}</p>
                    <p className="text-xs text-amber-700 mb-2">{event.date} • {event.time}</p>
                    <div className="flex items-center justify-between text-xs text-amber-700">
                      <span>{event.speaker}</span>
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white/70 backdrop-blur-sm border-2 border-amber-200 rounded-xl p-6 shadow-md">
              <h3 className="text-amber-950 font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-700" />
                Top Contributors
              </h3>
              <div className="space-y-2">
                {leaderboard.map(user => (
                  <div key={user.rank} className="flex items-center justify-between p-2 rounded-lg hover:bg-amber-50 transition">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{user.avatar}</span>
                      <div className="min-w-0">
                        <p className="text-sm text-amber-950 font-medium truncate">{user.name}</p>
                        <p className="text-xs text-amber-700">{user.points} pts</p>
                      </div>
                    </div>
                    <span className="text-lg">{user.badge || '#' + user.rank}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gradient-to-br from-amber-700 to-amber-800 rounded-xl p-6 text-white shadow-lg">
              <h3 className="font-bold mb-4">Community Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-amber-100">Active Members</span>
                  <span className="font-bold">12,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-100">Total Discussions</span>
                  <span className="font-bold">3,280</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-100">Resources Shared</span>
                  <span className="font-bold">1,540</span>
                </div>
              </div>
            </div>
          </div>
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
