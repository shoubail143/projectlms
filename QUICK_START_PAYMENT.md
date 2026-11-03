# Quick Start - Payment Integration

## 🚀 Start in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Test Payment
1. Go to `http://localhost:3000`
2. Click on any course's "Enroll" button
3. Payment modal pops up!

## 🎯 What You Can Do Now

✅ Click "Enroll" on any course  
✅ Select payment method (Card, PayPal, Google Pay)  
✅ Enter card details (auto-formatted)  
✅ See order summary with pricing  
✅ Get success confirmation  

## 📝 Test Card Numbers

| Type | Number |
|------|--------|
| Success | 4242 4242 4242 4242 |
| Declined | 4000 0000 0000 0002 |
| Auth Required | 4000 0025 0000 3155 |
| Expired | 4000 0000 0000 0069 |

**Expiry**: Any future date (12/25)  
**CVV**: Any 3-4 digits (123)

## 🎨 UI Features

- 💳 **Multiple Payment Methods**: Card, PayPal, Google Pay
- 📊 **Order Summary**: Shows pricing breakdown
- 🎯 **Smart Formatting**: Auto-formats card details
- ✨ **Smooth Animations**: Professional transitions
- 📱 **Responsive**: Works on mobile & desktop
- 🔒 **Security Badge**: "Secured by Stripe"

## 📂 Key Files

| File | Purpose |
|------|---------|
| `src/components/PaymentModal.tsx` | Payment UI |
| `src/components/Courses.tsx` | Integrated courses |
| `src/app/api/payment/route.ts` | Payment endpoint |

## 🔑 For Production

When ready to go live:

1. **Get Stripe Keys**
   ```bash
   # Visit https://dashboard.stripe.com/apikeys
   # Copy your test keys
   ```

2. **Add Environment Variables**
   ```bash
   # Create .env.local
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
   STRIPE_SECRET_KEY=sk_test_xxxxx
   ```

3. **Replace Mock with Real Stripe**
   - See `STRIPE_SETUP.md` for detailed guide
   - Implement Stripe Elements
   - Add webhook handling
   - Update backend API

## ❓ FAQ

**Q: Will this charge real money?**  
A: No! This is a demo. No real payments are processed.

**Q: How do I connect real Stripe?**  
A: Read `STRIPE_SETUP.md` for step-by-step guide.

**Q: Is it secure?**  
A: This demo is not production-ready. For production, follow Stripe's PCI compliance guide.

**Q: Can I customize it?**  
A: Yes! Edit `PaymentModal.tsx` to customize colors, text, fields, etc.

## 🐛 Issues?

1. **Modal not opening?**
   - Check browser console
   - Refresh the page
   - Try a different course

2. **Card formatting broken?**
   - Clear browser cache
   - Restart dev server

3. **Need help?**
   - See `PAYMENT_INTEGRATION.md`
   - Check `STRIPE_SETUP.md`
   - Read code comments

## 📚 Learn More

- [Stripe Documentation](https://stripe.com/docs)
- [React Stripe Guide](https://stripe.com/docs/stripe-js/react)
- [Payment Intents](https://stripe.com/docs/payments/accept-a-payment)

## 🎉 You're All Set!

Try it now:
```bash
npm run dev
# Then visit http://localhost:3000/courses
```

Click "Enroll" on any course to see the payment modal in action!

---

**Demo Mode Features:**
- ✅ Beautiful UI with smooth animations
- ✅ Multiple payment methods
- ✅ Real-time card formatting
- ✅ Order summary with discounts
- ✅ Success confirmation flow
- ✅ 100% responsive design

**Next Steps:**
1. Get your Stripe API keys
2. Set up environment variables
3. Implement real Stripe integration
4. Connect to your database
5. Go live!
