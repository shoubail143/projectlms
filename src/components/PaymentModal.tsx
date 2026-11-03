'use client';

import React, { useState } from 'react';
import { X, CreditCard, DollarSign, Lock, CheckCircle } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    id: number;
    title: string;
    price: number;
    originalPrice: number;
    thumbnail: string;
    instructor: { name: string; avatar: string };
  };
}

export default function PaymentModal({ isOpen, onClose, course }: PaymentModalProps) {
  const { isDark } = useTheme();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'method' | 'details' | 'success'>('method');

  // Card state
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    email: '',
  });

  const discountPercentage = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

  const handlePaymentMethodSelect = (method: 'card' | 'paypal') => {
    setPaymentMethod(method);
    setPaymentStep('details');
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'cardNumber') {
      const cleaned = value.replace(/\s/g, '').slice(0, 16);
      const formatted = cleaned.replace(/(\d{4})/g, '$1 ').trim();
      setCardData({ ...cardData, [name]: formatted });
    } else if (name === 'expiryDate') {
      const cleaned = value.replace(/\D/g, '').slice(0, 4);
      const formatted = cleaned.length >= 2 ? `${cleaned.slice(0, 2)}/${cleaned.slice(2)}` : cleaned;
      setCardData({ ...cardData, [name]: formatted });
    } else if (name === 'cvv') {
      setCardData({ ...cardData, [name]: value.slice(0, 4) });
    } else {
      setCardData({ ...cardData, [name]: value });
    }
  };

  const handleProcessPayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStep('success');
    }, 2000);
  };

  const handleClose = () => {
    setPaymentStep('method');
    setPaymentMethod(null);
    setCardData({
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
      email: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className={`relative ${isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500/50' : 'bg-gradient-to-br from-white via-amber-50 to-orange-50 border-2 border-amber-200'} rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl`}>
        {/* Header */}
        <div className={`sticky top-0 flex items-center justify-between p-6 ${isDark ? 'border-b border-blue-500/30 bg-slate-800/80' : 'border-b-2 border-amber-200 bg-white/80'} backdrop-blur-sm`}>
          <h2 className={`text-2xl font-bold ${isDark ? 'text-blue-300' : 'text-amber-950'} flex items-center gap-2`}>
            <CreditCard className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-amber-600'}`} />
            Complete Your Purchase
          </h2>
          <button
            onClick={handleClose}
            className={`p-2 rounded-lg transition ${isDark ? 'hover:bg-slate-700' : 'hover:bg-amber-100'}`}
          >
            <X className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-amber-700'}`} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left - Order Summary */}
            <div className="md:col-span-1">
              <div className={`${isDark ? 'bg-slate-700/50 border-2 border-blue-500/30' : 'bg-white border-2 border-amber-200'} rounded-xl p-4 sticky top-24`}>
                <h3 className={`font-semibold ${isDark ? 'text-blue-300' : 'text-amber-950'} mb-4`}>Order Summary</h3>

                {/* Course Card */}
                <div className={`${isDark ? 'bg-slate-600/30 border border-blue-500/30' : 'bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-200'} rounded-lg p-3 mb-4`}>
                  <div className="text-3xl mb-2">{course.thumbnail}</div>
                  <h4 className={`text-sm font-semibold ${isDark ? 'text-blue-200' : 'text-amber-950'} mb-1 line-clamp-2`}>
                    {course.title}
                  </h4>
                  <p className={`text-xs ${isDark ? 'text-blue-400' : 'text-amber-700'}`}>{course.instructor.name}</p>
                </div>

                {/* Price Breakdown */}
                <div className={`space-y-2 text-sm mb-4 pb-4 ${isDark ? 'border-b border-blue-500/30' : 'border-b-2 border-amber-200'}`}>
                  <div className={`flex justify-between ${isDark ? 'text-blue-400' : 'text-amber-700'}`}>
                    <span>Original Price</span>
                    <span className="line-through">${course.originalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={isDark ? 'text-blue-400' : 'text-amber-700'}>Discount ({discountPercentage}%)</span>
                    <span className="text-green-500 font-semibold">
                      -${(course.originalPrice - course.price).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-4">
                  <span className={`font-semibold ${isDark ? 'text-blue-300' : 'text-amber-950'}`}>Total</span>
                  <span className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-amber-700'}`}>
                    ${course.price.toFixed(2)}
                  </span>
                </div>

                {/* Security Badge */}
                <div className={`${isDark ? 'bg-green-900/30 border border-green-600/50' : 'bg-green-100 border border-green-300'} rounded-lg p-3 flex items-center gap-2`}>
                  <Lock className={`w-4 h-4 ${isDark ? 'text-green-400' : 'text-green-700'} flex-shrink-0`} />
                  <p className={`text-xs font-semibold ${isDark ? 'text-green-300' : 'text-green-700'}`}>Secured by Stripe</p>
                </div>
              </div>
            </div>

            {/* Right - Payment Form */}
            <div className="md:col-span-2">
              {paymentStep === 'method' && (
                <div className="space-y-4">
                  <p className={`${isDark ? 'text-blue-300' : 'text-amber-700'} mb-6 font-medium`}>Choose your payment method</p>

                  {/* Credit Card Option */}
                  <button
                    onClick={() => handlePaymentMethodSelect('card')}
                    className={`w-full p-4 border-2 rounded-lg transition group ${isDark ? 'border-blue-500/30 hover:border-blue-400 hover:bg-slate-700/30' : 'border-amber-200 hover:border-amber-600 hover:bg-amber-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition ${isDark ? 'bg-blue-600/30 group-hover:bg-blue-600/50' : 'bg-amber-100 group-hover:bg-amber-200'}`}>
                        <CreditCard className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-amber-700'}`} />
                      </div>
                      <div className="text-left">
                        <p className={`font-semibold ${isDark ? 'text-blue-300' : 'text-amber-950'}`}>Credit or Debit Card</p>
                        <p className={`text-sm ${isDark ? 'text-blue-400' : 'text-amber-700'}`}>Visa, Mastercard, Amex</p>
                      </div>
                      <div className="ml-auto">
                        <div className={`w-5 h-5 border-2 rounded-full ${isDark ? 'border-blue-400 group-hover:border-blue-300' : 'border-amber-400 group-hover:border-amber-700'} transition`} />
                      </div>
                    </div>
                  </button>

                  {/* PayPal Option */}
                  <button
                    onClick={() => handlePaymentMethodSelect('paypal')}
                    className={`w-full p-4 border-2 rounded-lg transition group ${isDark ? 'border-blue-500/30 hover:border-blue-400 hover:bg-slate-700/30' : 'border-amber-200 hover:border-amber-600 hover:bg-amber-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition ${isDark ? 'bg-yellow-900/50 group-hover:bg-yellow-800/50' : 'bg-yellow-100 group-hover:bg-yellow-200'}`}>
                        <span className={`text-xl font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}>P</span>
                      </div>
                      <div className="text-left">
                        <p className={`font-semibold ${isDark ? 'text-blue-300' : 'text-amber-950'}`}>PayPal</p>
                        <p className={`text-sm ${isDark ? 'text-blue-400' : 'text-amber-700'}`}>Pay securely with your PayPal account</p>
                      </div>
                      <div className="ml-auto">
                        <div className={`w-5 h-5 border-2 rounded-full ${isDark ? 'border-blue-400 group-hover:border-blue-300' : 'border-amber-400 group-hover:border-amber-700'} transition`} />
                      </div>
                    </div>
                  </button>

                  {/* Google Pay Option */}
                  <button
                    onClick={() => handlePaymentMethodSelect('card')}
                    className={`w-full p-4 border-2 rounded-lg transition group ${isDark ? 'border-blue-500/30 hover:border-blue-400 hover:bg-slate-700/30' : 'border-amber-200 hover:border-amber-600 hover:bg-amber-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition ${isDark ? 'bg-red-900/50 group-hover:bg-red-800/50' : 'bg-red-100 group-hover:bg-red-200'}`}>
                        <span className={`text-lg font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>G</span>
                      </div>
                      <div className="text-left">
                        <p className={`font-semibold ${isDark ? 'text-blue-300' : 'text-amber-950'}`}>Google Pay</p>
                        <p className={`text-sm ${isDark ? 'text-blue-400' : 'text-amber-700'}`}>Quick and secure payment</p>
                      </div>
                      <div className="ml-auto">
                        <div className={`w-5 h-5 border-2 rounded-full ${isDark ? 'border-blue-400 group-hover:border-blue-300' : 'border-amber-400 group-hover:border-amber-700'} transition`} />
                      </div>
                    </div>
                  </button>

                  <div className={`pt-4 ${isDark ? 'border-t border-blue-500/30' : 'border-t-2 border-amber-200'}`}>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className={`w-4 h-4 rounded ${isDark ? 'accent-blue-500' : 'accent-amber-600'}`} />
                      <span className={`text-sm ${isDark ? 'text-blue-300' : 'text-amber-700'}`}>
                        I agree to the{' '}
                        <a href="#" className={`${isDark ? 'text-blue-300 hover:text-blue-200' : 'text-amber-800 hover:text-amber-950'} font-semibold`}>
                          terms and conditions
                        </a>
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {paymentStep === 'details' && paymentMethod === 'card' && (
                <div className="space-y-4">
                  <h3 className={`font-semibold ${isDark ? 'text-blue-300' : 'text-amber-950'} mb-4 flex items-center gap-2`}>
                    <CreditCard className="w-5 h-5" />
                    Enter Card Details
                  </h3>

                  {/* Email */}
                  <div>
                    <label className={`block text-sm font-medium ${isDark ? 'text-blue-300' : 'text-amber-950'} mb-2`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={cardData.email}
                      onChange={handleCardInputChange}
                      className={`w-full rounded-lg px-4 py-2 focus:outline-none transition ${isDark ? 'bg-slate-700 border-2 border-blue-500/50 text-blue-100 placeholder-blue-600 focus:border-blue-400' : 'bg-white border-2 border-amber-200 text-amber-950 placeholder-amber-500 focus:border-amber-600'}`}
                    />
                  </div>

                  {/* Card Holder Name */}
                  <div>
                    <label className={`block text-sm font-medium ${isDark ? 'text-blue-300' : 'text-amber-950'} mb-2`}>
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      placeholder="John Doe"
                      value={cardData.cardName}
                      onChange={handleCardInputChange}
                      className={`w-full rounded-lg px-4 py-2 focus:outline-none transition ${isDark ? 'bg-slate-700 border-2 border-blue-500/50 text-blue-100 placeholder-blue-600 focus:border-blue-400' : 'bg-white border-2 border-amber-200 text-amber-950 placeholder-amber-500 focus:border-amber-600'}`}
                    />
                  </div>

                  {/* Card Number */}
                  <div>
                    <label className={`block text-sm font-medium ${isDark ? 'text-blue-300' : 'text-amber-950'} mb-2`}>
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardData.cardNumber}
                      onChange={handleCardInputChange}
                      maxLength={19}
                      className={`w-full rounded-lg px-4 py-2 focus:outline-none transition font-mono ${isDark ? 'bg-slate-700 border-2 border-blue-500/50 text-blue-100 placeholder-blue-600 focus:border-blue-400' : 'bg-white border-2 border-amber-200 text-amber-950 placeholder-amber-500 focus:border-amber-600'}`}
                    />
                  </div>

                  {/* Expiry & CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium ${isDark ? 'text-blue-300' : 'text-amber-950'} mb-2`}>
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={cardData.expiryDate}
                        onChange={handleCardInputChange}
                        maxLength={5}
                        className={`w-full rounded-lg px-4 py-2 focus:outline-none transition font-mono ${isDark ? 'bg-slate-700 border-2 border-blue-500/50 text-blue-100 placeholder-blue-600 focus:border-blue-400' : 'bg-white border-2 border-amber-200 text-amber-950 placeholder-amber-500 focus:border-amber-600'}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${isDark ? 'text-blue-300' : 'text-amber-950'} mb-2`}>
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="123"
                        value={cardData.cvv}
                        onChange={handleCardInputChange}
                        maxLength={4}
                        className={`w-full rounded-lg px-4 py-2 focus:outline-none transition font-mono ${isDark ? 'bg-slate-700 border-2 border-blue-500/50 text-blue-100 placeholder-blue-600 focus:border-blue-400' : 'bg-white border-2 border-amber-200 text-amber-950 placeholder-amber-500 focus:border-amber-600'}`}
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => {
                        setPaymentStep('method');
                        setPaymentMethod(null);
                      }}
                      className={`flex-1 px-4 py-2 border-2 rounded-lg font-medium transition ${isDark ? 'border-blue-500/50 text-blue-300 hover:text-blue-200 hover:border-blue-400' : 'border-amber-200 text-amber-700 hover:text-amber-950 hover:border-amber-400'}`}
                    >
                      Back
                    </button>
                    <button
                      onClick={handleProcessPayment}
                      disabled={
                        isProcessing ||
                        !cardData.cardNumber ||
                        !cardData.cardName ||
                        !cardData.expiryDate ||
                        !cardData.cvv ||
                        !cardData.email
                      }
                      className={`flex-1 text-white font-semibold py-2 rounded-lg transition ${isDark ? 'bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50' : 'bg-amber-700 hover:bg-amber-800 disabled:bg-amber-600/50'} disabled:cursor-not-allowed`}
                    >
                      {isProcessing ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        `Pay $${course.price.toFixed(2)}`
                      )}
                    </button>
                  </div>
                </div>
              )}

              {paymentStep === 'details' && paymentMethod === 'paypal' && (
                <div className="space-y-4">
                  <div className={`${isDark ? 'bg-yellow-900/20 border border-yellow-600/50' : 'bg-yellow-100 border-2 border-yellow-300'} rounded-lg p-4 text-center`}>
                    <p className={`${isDark ? 'text-yellow-300' : 'text-yellow-800'} mb-4 font-semibold`}>Redirecting to PayPal...</p>
                    <button
                      onClick={handleProcessPayment}
                      disabled={isProcessing}
                      className={`w-full ${isDark ? 'bg-yellow-600 hover:bg-yellow-500 disabled:bg-yellow-600/50' : 'bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-500/50'} text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2`}
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <span className="text-lg">P</span>
                          Continue to PayPal
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setPaymentStep('method');
                      setPaymentMethod(null);
                    }}
                    className={`w-full px-4 py-2 border-2 rounded-lg font-medium transition ${isDark ? 'border-blue-500/50 text-blue-300 hover:text-blue-200 hover:border-blue-400' : 'border-amber-200 text-amber-700 hover:text-amber-950 hover:border-amber-400'}`}
                  >
                    Back
                  </button>
                </div>
              )}

              {paymentStep === 'success' && (
                <div className="text-center py-8">
                  <div className={`w-16 h-16 ${isDark ? 'bg-green-900/30 border-2 border-green-600' : 'bg-green-100 border-2 border-green-500'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <CheckCircle className={`w-8 h-8 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-blue-300' : 'text-amber-950'} mb-2`}>Payment Successful!</h3>
                  <p className={`${isDark ? 'text-blue-300' : 'text-amber-700'} mb-2 font-medium`}>
                    Thank you for your purchase.
                  </p>
                  <p className={`text-sm ${isDark ? 'text-blue-400' : 'text-amber-600'} mb-6`}>
                    Confirmation has been sent to {cardData.email || 'your email'}
                  </p>

                  <div className={`${isDark ? 'bg-slate-700/30 border border-blue-500/30' : 'bg-amber-50 border-2 border-amber-200'} rounded-lg p-4 mb-6 text-left`}>
                    <p className={`text-sm ${isDark ? 'text-blue-300' : 'text-amber-700'} mb-2 font-semibold`}>Order Details:</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className={isDark ? 'text-blue-400' : 'text-amber-700'}>Course:</span>
                        <span className={`font-semibold ${isDark ? 'text-blue-300' : 'text-amber-950'}`}>{course.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isDark ? 'text-blue-400' : 'text-amber-700'}>Amount:</span>
                        <span className={`font-semibold ${isDark ? 'text-blue-300' : 'text-amber-950'}`}>${course.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className={`w-full text-white font-semibold py-2 rounded-lg transition ${isDark ? 'bg-blue-600 hover:bg-blue-500' : 'bg-amber-700 hover:bg-amber-800'}`}
                  >
                    Continue to Course
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
