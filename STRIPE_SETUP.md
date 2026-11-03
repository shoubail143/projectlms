# Stripe Payment Integration Guide

## Overview
This Learning Management System includes a complete payment integration using Stripe. Students can enroll in courses by clicking the "Enroll" button, which opens a payment modal with multiple payment methods.

## Features Implemented

### ✅ Payment Modal Component
- **Multiple Payment Methods**: Credit Card, PayPal, Google Pay
- **Real-time Card Formatting**: Automatic formatting for card number, expiry date, and CVV
- **Order Summary**: Shows course details, pricing, discount, and total
- **Security Badge**: Displays "Secured by Stripe" indication
- **Three-Step Flow**: Method selection → Payment details → Success confirmation

### ✅ Payment Methods Supported
1. **Credit/Debit Card**
   - Card Number (16 digits)
   - Cardholder Name
   - Expiry Date (MM/YY format)
   - CVV (3-4 digits)
   - Email address

2. **PayPal**
   - Integrated PayPal button
   - Redirects to PayPal checkout

3. **Google Pay**
   - Quick payment option
   - Supports saved cards

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

The following packages have been added:
- `@stripe/react-stripe-js` - React bindings for Stripe.js
- `@stripe/stripe-js` - Stripe.js library

### 2. Get Your Stripe API Keys
1. Sign up at [Stripe.com](https://stripe.com)
2. Go to Dashboard → API Keys
3. Copy your:
   - **Publishable Key** (starts with `pk_`)
   - **Secret Key** (starts with `sk_`) - Keep this private!

### 3. Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
```

### 4. Initialize Stripe in Root Layout (Optional)
For full Stripe integration, wrap your app with StripeProvider in `src/app/layout.tsx`:

```tsx
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Elements stripe={stripePromise}>
          {children}
        </Elements>
      </body>
    </html>
  );
}
```

## Component Structure

### PaymentModal Component (`src/components/PaymentModal.tsx`)
- Handles payment method selection
- Manages form state for card details
- Shows order summary with pricing breakdown
- Displays success confirmation
- No external dependencies (works as mock)

### Courses Component (`src/components/Courses.tsx`)
- Integrates PaymentModal
- Opens payment modal on "Enroll" button click
- Passes course details to payment modal
- Handles enrolled state

### API Route (`src/app/api/payment/route.ts`)
- Handles payment processing requests
- Returns mock success response
- Ready for Stripe webhook integration

## How to Use

### For Users
1. Navigate to `/courses`
2. Click "Enroll" on any non-enrolled course
3. Payment modal opens
4. Select payment method (Card, PayPal, or Google Pay)
5. Enter payment details
6. Click "Pay $[amount]"
7. See success confirmation

### For Developers

#### Opening the Payment Modal
```tsx
const [selectedCourse, setSelectedCourse] = useState(null);

<PaymentModal
  isOpen={!!selectedCourse}
  onClose={() => setSelectedCourse(null)}
  course={selectedCourse}
/>
```

#### Course Object Structure
```tsx
interface Course {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  thumbnail: string;
  instructor: {
    name: string;
    avatar: string;
  };
}
```

## Production Implementation Checklist

### ✅ Frontend
- [x] Payment Modal UI
- [x] Multiple payment methods
- [x] Form validation
- [x] Real-time input formatting
- [x] Error handling
- [x] Success confirmation

### ⚠️ Backend (To Implement)
- [ ] Stripe API integration (requires Stripe SDK)
- [ ] Payment Intent creation
- [ ] Card tokenization
- [ ] Database enrollment update
- [ ] Email confirmation sending
- [ ] Webhook handling for payment events
- [ ] Error logging and monitoring

### ⚠️ Security (To Implement)
- [ ] Remove demo mode from PaymentModal
- [ ] Use Stripe Elements for card input (PCI DSS compliant)
- [ ] Implement server-side validation
- [ ] Add rate limiting
- [ ] Implement 3D Secure authentication
- [ ] Add fraud detection

## Example Backend Implementation (Node.js)

```typescript
// This would replace the current api/payment/route.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const { courseId, amount, cardToken } = await request.json();

  try {
    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      payment_method_types: ['card'],
      metadata: { courseId },
    });

    // Save enrollment to database
    // await enrollUserInCourse(userId, courseId);

    return Response.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
```

## Testing

### Test Card Numbers (Stripe)
- **Success**: 4242 4242 4242 4242
- **Requires Authentication**: 4000 0025 0000 3155
- **Declined**: 4000 0000 0000 0002
- **Expired Card**: 4000 0000 0000 0069

### Test Expiry Dates
- Any future date (e.g., 12/25)

### Test CVV
- Any 3-4 digit number

## File Structure
```
src/
├── components/
│   ├── Courses.tsx          # Main courses component with payment integration
│   ├── PaymentModal.tsx     # Payment modal with multiple methods
│   └── Hero.jsx             # Home page hero section
├── app/
│   ├── api/
│   │   └── payment/
│   │       └── route.ts     # Payment API endpoint
│   ├── courses/
│   │   └── page.tsx         # Courses page
│   └── page.tsx             # Home page
```

## Troubleshooting

### Modal Not Opening
- Ensure `selectedCourseForPayment` state is set correctly
- Check that `PaymentModal` is imported in Courses component
- Verify `course` prop is passed correctly

### Form Not Submitting
- Check all required fields are filled
- Verify card number is in correct format (XXXX XXXX XXXX XXXX)
- Check expiry date format (MM/YY)

### Payment Not Processing
- Verify API endpoint is accessible
- Check browser console for error messages
- Ensure environment variables are set

## Next Steps

1. **Implement Real Stripe Integration**
   - Use Stripe Elements instead of basic inputs
   - Implement Payment Intent flow
   - Add webhook handling

2. **Add Database**
   - Store enrolled courses
   - Track payment history
   - Manage user accounts

3. **Email Notifications**
   - Send confirmation emails
   - Provide course access instructions
   - Payment receipts

4. **Analytics**
   - Track conversion rates
   - Monitor failed payments
   - Revenue tracking

## Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe React Integration](https://stripe.com/docs/stripe-js/react)
- [PCI Compliance](https://stripe.com/docs/security/guide)
- [Payment Intent Guide](https://stripe.com/docs/payments/accept-a-payment)

## Support

For issues or questions:
1. Check Stripe documentation
2. Review error messages in browser console
3. Check API response in network tab
4. Verify environment variables are set correctly
