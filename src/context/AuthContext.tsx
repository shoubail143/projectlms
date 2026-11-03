'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export type UserRole = 'admin' | 'user' | null;

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('lms_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    try {
      setIsLoading(true);

      // Admin credentials check
      if (email === 'shoubail144@gmail.com' && password === 'Shoubail144') {
        const adminUser: User = {
          id: 'admin-001',
          email: 'shoubail144@gmail.com',
          name: 'Admin User',
          role: 'admin',
        };
        setUser(adminUser);
        localStorage.setItem('lms_user', JSON.stringify(adminUser));
        return { success: true, message: 'Login successful! Welcome Admin.' };
      }

      // Any other email/password combination creates a regular user
      if (email && password && email.length > 0 && password.length >= 6) {
        const regularUser: User = {
          id: `user-${Date.now()}`,
          email: email,
          name: email.split('@')[0], // Extract name from email
          role: 'user',
        };
        setUser(regularUser);
        localStorage.setItem('lms_user', JSON.stringify(regularUser));
        return { success: true, message: `Welcome ${regularUser.name}!` };
      }

      return { success: false, message: 'Invalid email or password' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Login failed. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<{ success: boolean; message: string }> => {
    try {
      setIsLoading(true);

      // Validation
      if (!name || name.length < 2) {
        return { success: false, message: 'Name must be at least 2 characters' };
      }

      if (!email || !email.includes('@')) {
        return { success: false, message: 'Please enter a valid email' };
      }

      if (!password || password.length < 6) {
        return { success: false, message: 'Password must be at least 6 characters' };
      }

      // Create user with 'user' role (not admin)
      const newUser: User = {
        id: `user-${Date.now()}`,
        email: email,
        name: name,
        role: 'user',
      };

      setUser(newUser);
      localStorage.setItem('lms_user', JSON.stringify(newUser));

      return { success: true, message: `Welcome ${name}! Account created successfully.` };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, message: 'Signup failed. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('lms_user');
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
