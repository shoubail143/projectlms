'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Heart, CheckCircle, LogOut, ShoppingCart } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function WishlistPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [wishlist, setWishlist] = useState([
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
  ]);

  const handleRemoveFromWishlist = (id: number) => {
    setWishlist(wishlist.filter((course) => course.id !== id));
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

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
                <h1 className="text-2xl font-bold text-white">My Wishlist</h1>
                <p className="text-slate-400 text-sm">{wishlist.length} courses saved</p>
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
          {wishlist.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((course) => (
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
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-blue-400">{course.price}</span>
                      <button
                        onClick={() => handleRemoveFromWishlist(course.id)}
                        className="p-2 hover:bg-slate-700 rounded-lg transition text-red-400 hover:text-red-300"
                        title="Remove from wishlist"
                      >
                        <Heart className="w-5 h-5 fill-current" />
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                      <Link
                        href={`/dashboard/course/${course.id}`}
                        className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" />
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Wishlist is Empty</h3>
              <p className="text-slate-400 mb-6">Add courses to your wishlist to save them for later.</p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                <CheckCircle className="w-4 h-4" />
                Explore Courses
              </Link>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
