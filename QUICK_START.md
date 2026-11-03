# 🚀 Quick Start Guide

## Starting Your LMS

### 1. Start Development Server
```bash
npm run dev
```

### 2. Access Your LMS
- **Home**: http://localhost:3000/
- **Courses**: http://localhost:3000/courses
- **Paths**: http://localhost:3000/paths
- **Community**: http://localhost:3000/community
- **Pricing**: http://localhost:3000/pricing

---

## 👤 Login Credentials

### Admin Dashboard
- **Email**: shoubail144@gmail.com
- **Password**: Shoubail144
- **Access**: http://localhost:3000/admin

### User Dashboard
- **Email**: Any other email
- **Password**: Any password
- **Access**: http://localhost:3000/dashboard

---

## 📱 Test Navigation

### Home Page
- [ ] Hero section displays
- [ ] Featured courses show
- [ ] "Get Started Free" button works
- [ ] "Sign In" button works
- [ ] All stats display

### Courses Page
- [ ] 8 courses display
- [ ] Search works (try "React")
- [ ] Category filter works
- [ ] Cards responsive
- [ ] Enroll buttons visible

### Paths Page
- [ ] 6 learning paths display
- [ ] Expand/collapse courses
- [ ] Skills badges show
- [ ] Pricing displays
- [ ] Cards responsive

### Community Page
- [ ] 6 discussions display
- [ ] Search functionality works
- [ ] Category filter works
- [ ] Leaderboard shows
- [ ] Events display

### Pricing Page
- [ ] 3 plans display
- [ ] Toggle Monthly/Annual
- [ ] Savings calculation works
- [ ] FAQ items display
- [ ] Cards responsive

---

## 📱 Screen Sizes to Test

### Mobile (375px)
- Use DevTools: F12 → Toggle Device Toolbar
- Select iPhone SE

### Tablet (768px)
- Use DevTools: F12 → Toggle Device Toolbar
- Select iPad

### Desktop (1024px)
- Use DevTools: F12 → Toggle Device Toolbar
- Select Desktop

---

## 🔑 Key Features

### ✅ Courses Page
- **Search**: Type in search box
- **Filter**: Click category buttons
- **Result**: {count} courses found

### ✅ Paths Page
- **Expand**: Click course count to expand
- **View**: See 6 courses per path
- **Skills**: Hover over skill badges

### ✅ Community Page
- **Search**: Find discussions
- **Filter**: Select categories
- **View**: See engagement metrics

### ✅ Pricing Page
- **Toggle**: Monthly ↔ Annual
- **Savings**: See annual savings
- **Compare**: View all features

---

## 🎨 Customization

### Change Theme Colors
Edit `src/app/globals.css` or Tailwind config

### Change Platform Name
Edit Hero component:
```jsx
<span className="text-2xl font-bold text-white">COURSA</span>
```

### Add More Courses
Edit course arrays in:
- `src/app/courses/page.tsx`
- `src/components/Hero.tsx`

### Add More Paths
Edit paths array in:
- `src/app/paths/page.tsx`

### Add More Discussions
Edit discussions array in:
- `src/app/community/page.tsx`

---

## 🐛 Common Issues

### Port Already in Use
```bash
# Kill process on port 3000
# Windows: taskkill /PID <pid> /F
# Mac/Linux: kill -9 <pid>
```

### Styles Not Loading
```bash
npm run dev
# Then hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

### Build Errors
```bash
rm -r .next node_modules
npm install
npm run dev
```

---

## 📊 Page Statistics

| Page | Route | Components | Features |
|------|-------|-----------|----------|
| Courses | `/courses` | Search, Filter | 8 courses |
| Paths | `/paths` | Expandable | 6 paths |
| Community | `/community` | Forum, Events | Discussions |
| Pricing | `/pricing` | Toggle, FAQ | 3 plans |
| Admin | `/admin/*` | Dashboard | 6 sections |
| User | `/dashboard/*` | Dashboard | 6 sections |

---

## 🎯 What Each Page Does

### 🏠 Home (`/`)
- Hero section with CTA buttons
- Featured courses preview
- Platform statistics
- Features showcase
- Call to action sections

### 📚 Courses (`/courses`)
- Browse all courses
- Search by title/description
- Filter by category
- View course details
- Enroll in courses

### 🛣️ Paths (`/paths`)
- View learning paths
- See structured courses
- Learn required skills
- Compare path prices
- Choose your path

### 👥 Community (`/community`)
- Read discussions
- Search topics
- View leaderboard
- Attend events
- Join conversations

### 💰 Pricing (`/pricing`)
- View all plans
- Compare features
- Toggle billing period
- Read FAQ
- Choose subscription

### 🔐 Admin (`/admin`)
- View analytics
- Manage users
- Manage courses
- View reports
- Settings

### 👤 User (`/dashboard`)
- View my courses
- Check wishlist
- View certificates
- Update settings
- Track progress

---

## 🚀 Deployment

### Before Deploy
- [ ] Test all pages
- [ ] Check mobile responsiveness
- [ ] Verify links work
- [ ] Test auth flows
- [ ] Check payments

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_API_URL=your_api_url
STRIPE_PUBLIC_KEY=your_stripe_key
```

---

## 📚 Additional Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [TypeScript](https://www.typescriptlang.org)

---

## 💡 Tips & Tricks

### Enable Dark Mode
Already enabled! Default dark theme.

### Add Dark/Light Toggle
Edit layout.tsx to add theme toggle

### Add Animations
Tailwind includes animation utilities:
```jsx
className="animate-bounce hover:animate-spin"
```

### Add Shadows
```jsx
className="shadow-lg hover:shadow-2xl"
```

### Add Gradients
```jsx
className="bg-gradient-to-r from-blue-500 to-purple-600"
```

---

## ✨ Features Summary

✅ Fully Responsive Design
✅ Dark Theme
✅ Search & Filter
✅ User Authentication
✅ Admin Dashboard
✅ Course Management
✅ Payment Integration (Demo)
✅ Community Features
✅ Pricing Plans
✅ Learning Paths

---

## 🎉 You're All Set!

Your LMS is ready to use. Start the development server and explore:

```bash
npm run dev
```

Visit **http://localhost:3000** and enjoy! 🚀

---

**Happy Learning! 📚**
