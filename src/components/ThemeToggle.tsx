'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className={`relative flex h-10 w-[68px] items-center rounded-full border p-1 shadow-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        isDark
          ? 'border-slate-600 bg-slate-800 focus-visible:ring-blue-400 focus-visible:ring-offset-slate-950'
          : 'border-amber-200 bg-white focus-visible:ring-amber-500 focus-visible:ring-offset-white'
      }`}
    >
      <span
        className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full shadow-sm transition-all duration-300 ${
          isDark
            ? 'left-[31px] bg-slate-700 text-blue-200'
            : 'left-1 bg-amber-100 text-amber-800'
        }`}
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </span>
    </button>
  );
}
