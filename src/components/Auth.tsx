'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, Mail, Lock, User, Eye, EyeOff, Loader } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

export default function Auth({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const router = useRouter();
  const { login, signup } = useAuth();
  const { isDark } = useTheme();
  const fieldClass = `w-full border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition ${isDark ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-500' : 'bg-stone-50 border-stone-300 text-stone-900 placeholder-stone-400'}`;
  const passwordFieldClass = `w-full border rounded-lg pl-10 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition ${isDark ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-500' : 'bg-stone-50 border-stone-300 text-stone-900 placeholder-stone-400'}`;
  const labelClass = `block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-stone-700'}`;

  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form states
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const resetForms = () => {
    setLoginForm({ email: '', password: '' });
    setSignupForm({ name: '', email: '', password: '', confirmPassword: '' });
    setError('');
    setSuccess('');
    setShowPassword(false);
  };

  const handleCloseModal = () => {
    resetForms();
    onClose();
  };

  const handleSwitchMode = () => {
    resetForms();
    setMode(mode === 'login' ? 'signup' : 'login');
  };

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!loginForm.email || !loginForm.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setIsLoading(true);
      const result = await login(loginForm.email, loginForm.password);

      if (result.success) {
        setSuccess(result.message);
        // Small delay to show success message
        setTimeout(() => {
          handleCloseModal();
          // Check role and redirect
          if (loginForm.email === 'shoubail144@gmail.com') {
            router.push('/admin');
          } else {
            router.push('/dashboard');
          }
        }, 800);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!signupForm.name || !signupForm.email || !signupForm.password) {
      setError('Please fill in all fields');
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (signupForm.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      setIsLoading(true);
      const result = await signup(signupForm.name, signupForm.email, signupForm.password);

      if (result.success) {
        setSuccess(result.message);
        // Small delay to show success message
        setTimeout(() => {
          handleCloseModal();
          // New users always go to dashboard
          router.push('/dashboard');
        }, 800);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className={`absolute inset-0 backdrop-blur-sm ${isDark ? 'bg-slate-950/80' : 'bg-stone-950/45'}`} onClick={handleCloseModal} />

      {/* Modal */}
      <div className={`relative border rounded-2xl w-full max-w-md shadow-2xl ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-stone-200'}`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${isDark ? 'border-slate-700' : 'border-stone-200'}`}>
          <h2 className={`text-2xl font-bold ${isDark ? 'text-slate-100' : 'text-stone-900'}`}>
            {mode === 'login' ? '🔐 Sign In' : '✨ Create Account'}
          </h2>
          <button
            onClick={handleCloseModal}
            className={`p-2 rounded-lg transition ${isDark ? 'hover:bg-slate-800' : 'hover:bg-stone-100'}`}
            disabled={isLoading}
          >
            <X className={`w-6 h-6 ${isDark ? 'text-slate-400' : 'text-stone-500'}`} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
              <div className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                <span className="text-red-400 font-bold">!</span>
              </div>
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-start gap-3">
              <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                <span className="text-green-400 font-bold">✓</span>
              </div>
              <p className="text-green-300 text-sm">{success}</p>
            </div>
          )}

          {/* Login Form */}
          {mode === 'login' && (
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Input */}
              <div>
                <label className={labelClass}>Email Address</label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-3 w-5 h-5 ${isDark ? 'text-slate-500' : 'text-stone-400'}`} />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                        className={fieldClass}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className={labelClass}>Password</label>
                <div className="relative">
                  <Lock className={`absolute left-3 top-3 w-5 h-5 ${isDark ? 'text-slate-500' : 'text-stone-400'}`} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className={passwordFieldClass}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-3 transition ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-stone-400 hover:text-stone-700'}`}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Demo Credentials Hint */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <p className="text-xs text-blue-300">
                  <span className="font-semibold">Admin Demo:</span> shoubail144@gmail.com / Shoubail144
                </p>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-600/50 disabled:to-blue-700/50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>

              {/* Switch to Signup */}
              <p className={`text-center text-sm ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  onClick={handleSwitchMode}
                  disabled={isLoading}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition"
                >
                  Create one
                </button>
              </p>
            </form>
          )}

          {/* Signup Form */}
          {mode === 'signup' && (
            <form onSubmit={handleSignup} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className={labelClass}>Full Name</label>
                <div className="relative">
                  <User className={`absolute left-3 top-3 w-5 h-5 ${isDark ? 'text-slate-500' : 'text-stone-400'}`} />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={signupForm.name}
                    onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                    className={fieldClass}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className={labelClass}>Email Address</label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-3 w-5 h-5 ${isDark ? 'text-slate-500' : 'text-stone-400'}`} />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                    className={fieldClass}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className={labelClass}>Password</label>
                <div className="relative">
                  <Lock className={`absolute left-3 top-3 w-5 h-5 ${isDark ? 'text-slate-500' : 'text-stone-400'}`} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="At least 6 characters"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                    className={passwordFieldClass}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-3 transition ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-stone-400 hover:text-stone-700'}`}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label className={labelClass}>Confirm Password</label>
                <div className="relative">
                  <Lock className={`absolute left-3 top-3 w-5 h-5 ${isDark ? 'text-slate-500' : 'text-stone-400'}`} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={signupForm.confirmPassword}
                    onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                    className={passwordFieldClass}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-3 transition ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-stone-400 hover:text-stone-700'}`}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className={`rounded-lg p-3 ${isDark ? 'bg-slate-800/80' : 'bg-stone-100'}`}>
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>Password must have:</p>
                <ul className={`text-xs space-y-1 ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
                  <li>✓ At least 6 characters</li>
                  <li>✓ Match confirm password</li>
                </ul>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>

              {/* Switch to Login */}
              <p className={`text-center text-sm ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={handleSwitchMode}
                  disabled={isLoading}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition"
                >
                  Sign in
                </button>
              </p>
            </form>
          )}

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${isDark ? 'border-slate-700' : 'border-stone-200'}`}></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${isDark ? 'bg-slate-900 text-slate-400' : 'bg-white text-stone-500'}`}>
                Or continue as guest
              </span>
            </div>
          </div>

          {/* Guest Button */}
          <button
            onClick={handleCloseModal}
            disabled={isLoading}
            className={`w-full border font-semibold py-3 rounded-lg transition ${isDark ? 'border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-800' : 'border-stone-300 text-stone-700 hover:border-blue-400 hover:bg-blue-50'}`}
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}
