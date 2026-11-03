'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, X, ArrowRight, Zap } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      id: 1,
      name: 'Starter',
      description: 'Perfect for beginners',
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      color: 'from-blue-400 to-blue-600',
      recommended: false,
      features: [
        { name: 'Access to 50+ courses', included: true },
        { name: 'Certificate of completion', included: true },
        { name: 'Community access', included: true },
        { name: 'Email support', included: true },
        { name: 'Offline downloads', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Priority support', included: false },
        { name: '1-on-1 mentoring', included: false },
      ],
    },
    {
      id: 2,
      name: 'Professional',
      description: 'Best for active learners',
      monthlyPrice: 29.99,
      annualPrice: 299.99,
      color: 'from-purple-400 to-purple-600',
      recommended: true,
      features: [
        { name: 'Access to 500+ courses', included: true },
        { name: 'Certificate of completion', included: true },
        { name: 'Community access', included: true },
        { name: 'Email support', included: true },
        { name: 'Offline downloads', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Priority support', included: false },
        { name: '1-on-1 mentoring', included: false },
      ],
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'For teams and organizations',
      monthlyPrice: 99.99,
      annualPrice: 999.99,
      color: 'from-pink-400 to-pink-600',
      recommended: false,
      features: [
        { name: 'Unlimited course access', included: true },
        { name: 'Certificate of completion', included: true },
        { name: 'Community access', included: true },
        { name: 'Email support', included: true },
        { name: 'Offline downloads', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Priority support', included: true },
        { name: '1-on-1 mentoring', included: true },
      ],
    },
  ];

  const faqItems = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and various digital payment methods depending on your region.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 7-day free trial for all plans. No credit card required to start.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with your purchase.',
    },
    {
      question: 'What happens when my subscription ends?',
      answer: 'Your subscription will automatically renew on the next billing date unless you choose to cancel.',
    },
    {
      question: 'Can I get a team discount?',
      answer: 'Yes! Contact our sales team for custom enterprise pricing and team discounts.',
    },
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const annualCost = plan.annualPrice;
    const savings = Math.round(((monthlyCost - annualCost) / monthlyCost) * 100);
    return savings;
  };

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
              <Link href="/community" className="text-amber-700 hover:text-amber-900 transition font-medium">Community</Link>
              <Link href="/pricing" className="text-amber-700 font-semibold">Pricing</Link>
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-amber-700 text-lg mb-8 font-medium">Choose the perfect plan for your learning journey</p>

          {/* Billing Toggle */}
          <div className="inline-flex gap-4 bg-white border-2 border-amber-200 rounded-xl p-2">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                billingPeriod === 'monthly'
                  ? 'bg-amber-700 text-white'
                  : 'text-amber-700 hover:text-amber-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
                billingPeriod === 'annual'
                  ? 'bg-amber-700 text-white'
                  : 'text-amber-700 hover:text-amber-900'
              }`}
            >
              Annual
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Save up to 17%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map(plan => (
              <div
                key={plan.id}
                className={`relative rounded-2xl overflow-hidden transition transform hover:scale-105 ${
                  plan.recommended ? 'ring-2 ring-amber-700 md:scale-105' : ''
                }`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-700 to-amber-800 text-white py-2 text-center text-sm font-bold flex items-center justify-center gap-1">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                {/* Card */}
                <div className="bg-white/70 backdrop-blur-sm border-2 border-amber-200 shadow-lg">
                  <div className="p-8">
                    {/* Plan Header */}
                    <h3 className="text-2xl font-bold text-amber-950 mb-2">{plan.name}</h3>
                    <p className="text-amber-700 text-sm mb-6 font-medium">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-8">
                      <span className="text-5xl font-bold text-amber-950">${getPrice(plan)}</span>
                      <span className="text-amber-700 ml-2">
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                      {billingPeriod === 'annual' && (
                        <div className="mt-2 text-green-600 text-sm font-semibold">
                          Save {getSavings(plan)}% annually
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-3 rounded-lg font-bold mb-8 transition flex items-center justify-center gap-2 ${
                        plan.recommended
                          ? 'bg-amber-700 hover:bg-amber-800 text-white'
                          : 'border-2 border-amber-700 text-amber-700 hover:bg-amber-50'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Features */}
                    <div className="space-y-4">
                      <p className="text-sm font-semibold text-amber-700 mb-4">What&apos;s included:</p>
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                          )}
                          <span
                            className={`text-sm ${
                              feature.included ? 'text-amber-800' : 'text-amber-600'
                            }`}
                          >
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-t-2 border-amber-200 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm border-2 border-amber-200 rounded-xl p-6 shadow-md">
                <h3 className="text-amber-950 font-semibold mb-3 text-lg">{item.question}</h3>
                <p className="text-amber-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-t-2 border-amber-200">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-700 to-amber-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-amber-100 mb-8 font-medium">Join thousands of students who are transforming their careers</p>
          <button className="bg-white hover:bg-amber-50 text-amber-700 font-bold px-8 py-3 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 mx-auto">
            Start Your Free Trial
            <ArrowRight className="w-5 h-5" />
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
