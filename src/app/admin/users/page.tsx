'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Users, Mail, LogOut, Edit, Trash2, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function AdminUsersPage() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user', status: 'active', joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active', joined: '2024-02-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'user', status: 'inactive', joined: '2024-01-05' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'user', status: 'active', joined: '2024-03-10' },
    { id: 5, name: 'Admin User', email: 'shoubail144@gmail.com', role: 'admin', status: 'active', joined: '2023-11-01' },
  ]);

  return (
    <ProtectedRoute requiredRole="admin">
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
                <h1 className="text-2xl font-bold text-white">User Management</h1>
                <p className="text-slate-400 text-sm">{users.length} total users</p>
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
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-800/70">
                    <th className="text-left py-4 px-6 text-slate-400 font-semibold">Name</th>
                    <th className="text-left py-4 px-6 text-slate-400 font-semibold">Email</th>
                    <th className="text-left py-4 px-6 text-slate-400 font-semibold">Role</th>
                    <th className="text-left py-4 px-6 text-slate-400 font-semibold">Status</th>
                    <th className="text-left py-4 px-6 text-slate-400 font-semibold">Joined</th>
                    <th className="text-left py-4 px-6 text-slate-400 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((userItem) => (
                    <tr key={userItem.id} className="border-b border-slate-700 hover:bg-slate-700/20 transition">
                      <td className="py-4 px-6 text-white font-medium">{userItem.name}</td>
                      <td className="py-4 px-6 text-slate-300 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-slate-500" />
                        {userItem.email}
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                          userItem.role === 'admin' 
                            ? 'bg-purple-500/20 text-purple-300' 
                            : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          <Shield className="w-3 h-3" />
                          {userItem.role}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                          userItem.status === 'active' 
                            ? 'bg-green-500/20 text-green-300' 
                            : 'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {userItem.status === 'active' ? <CheckCircle className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                          {userItem.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-300">{userItem.joined}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-slate-700 rounded-lg transition text-slate-400 hover:text-blue-400">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-slate-700 rounded-lg transition text-slate-400 hover:text-red-400">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
