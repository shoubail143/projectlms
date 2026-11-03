# 🎨 Layout & Design Guide

## 📱 Responsive Layouts

### 1. Courses Page Layout

#### Mobile (320px - 640px)
```
┌─────────────────┐
│    HEADER       │
│ 🌟 COURSA Home  │
└─────────────────┘
┌─────────────────┐
│  HERO SECTION   │
│ Explore Courses │
├─────────────────┤
│  SEARCH BOX     │
├─────────────────┤
│ [Category Tags] │
├─────────────────┤
│  Course Card 1  │
│  [Image Area]   │
│  Title          │
│  Category       │
│  Price | Enroll │
├─────────────────┤
│  Course Card 2  │
│  (repeating)    │
├─────────────────┤
│     FOOTER      │
└─────────────────┘
```

#### Tablet (641px - 1024px)
```
┌──────────────────────────┐
│       HEADER             │
│ 🌟 COURSA | Courses...   │
└──────────────────────────┘
┌──────────────────────────┐
│    HERO + SEARCH         │
├──────────────────────────┤
│  [Categories (flex)]     │
├──────────┬───────────────┤
│ Course 1 │ Course 2      │
│          │               │
├──────────┼───────────────┤
│ Course 3 │ Course 4      │
└──────────┴───────────────┘
```

#### Desktop (1024px+)
```
┌────────────────────────────────────┐
│        HEADER (Sticky)             │
│ 🌟 | Courses | Paths | Community   │
└────────────────────────────────────┘
┌────────────────────────────────────┐
│        HERO + SEARCH               │
├────────────────────────────────────┤
│ [All Categories Visible]           │
├───┬───┬───┬────────────────────────┤
│C1 │C2 │C3 │ C4                     │
├───┼───┼───┼────────────────────────┤
│C5 │C6 │C7 │ C8                     │
└───┴───┴───┴────────────────────────┘
```

---

### 2. Paths Page Layout

#### Mobile
```
┌─────────────────┐
│     HEADER      │
├─────────────────┤
│   HERO TEXT     │
├─────────────────┤
│  Path Card 1    │
│  ┌─────────────┐│
│  │ Icon        ││
│  │ Title       ││
│  │ Description ││
│  │ Stats       ││
│  │ Courses (▼) ││
│  │ Skills      ││
│  │ $Price      ││
│  │ [Enroll]    ││
│  └─────────────┘│
├─────────────────┤
│  Path Card 2    │
│  (similar)      │
└─────────────────┘
```

#### Desktop
```
┌────────────────────────────────────┐
│     HEADER + HERO                  │
├────────────────┬───────────────────┤
│  Path 1        │  Path 2           │
│  [Card with    │  [Card with       │
│   expandable   │   expandable      │
│   courses]     │   courses]        │
├────────────────┼───────────────────┤
│  Path 3        │  Path 4           │
└────────────────┴───────────────────┘
```

---

### 3. Community Page Layout

#### Mobile
```
┌─────────────────┐
│     HEADER      │
├─────────────────┤
│  HERO + SEARCH  │
├─────────────────┤
│ [Category Btns] │
├─────────────────┤
│  Discussion 1   │
│  👨‍💻 Title      │
│  Category | ... │
│  Preview text   │
│  Stats          │
├─────────────────┤
│  Discussion 2   │
│  (repeating)    │
├─────────────────┤
│  SIDEBAR        │
│  Events         │
│  Leaderboard    │
│  Stats          │
└─────────────────┘
```

#### Tablet
```
┌──────────────────────────┐
│      HEADER              │
├───────────────┬──────────┤
│ Discussions   │ Sidebar: │
│ (2 columns)   │ Events   │
│ - Discussion1 │ Leaders  │
│ - Discussion2 │ Stats    │
│ - Discussion3 │          │
│ - Discussion4 │          │
└───────────────┴──────────┘
```

#### Desktop
```
┌────────────────────────────┬──────────┐
│        HEADER              │          │
├────────────────────────────┼──────────┤
│  Search & Categories       │ Sidebar  │
├────────────────────────────┼──────────┤
│                            │ Events   │
│  Discussions (grid)        │          │
│  - Disc1 - Disc2 - Disc3  │ Leaders  │
│                            │          │
│  Discussions (continued)   │ Stats    │
│  - Disc4 - Disc5 - Disc6  │          │
│                            │          │
├────────────────────────────┼──────────┤
│          FOOTER            │          │
└────────────────────────────┴──────────┘
```

---

### 4. Pricing Page Layout

#### Mobile
```
┌─────────────────┐
│     HEADER      │
├─────────────────┤
│  HERO + TOGGLE  │
│  Monthly|Annual │
├─────────────────┤
│  Plan Card 1    │
│  ┌───────────┐  │
│  │ Starter   │  │
│  │ $9.99     │  │
│  │ [CTA Btn] │  │
│  │ Features  │  │
│  │ ✓ Feature1│  │
│  │ ✓ Feature2│  │
│  │ ✗ Feature3│  │
│  └───────────┘  │
├─────────────────┤
│  Plan Card 2    │
│  (similar)      │
├─────────────────┤
│  Plan Card 3    │
│  (similar)      │
├─────────────────┤
│   FAQ Items     │
└─────────────────┘
```

#### Desktop
```
┌────────────────────────────────┐
│      HEADER + HERO + TOGGLE    │
├────────┬────────┬─────────────┤
│ Card 1 │ Card 2 │ Card 3      │
│Starter │ Pro ⭐ │ Enterprise  │
│$9.99   │ $29.99 │ $99.99      │
│        │ [Rec]  │             │
│ Feats  │ Feats  │ Feats       │
│ [CTA]  │ [CTA]  │ [CTA]       │
├────────┴────────┴─────────────┤
│          FAQ SECTION           │
│ Q: Can I change plans?         │
│ A: Yes, anytime               │
│ Q: Payment methods?            │
│ A: All major credit cards      │
└────────────────────────────────┘
```

---

### 5. User Dashboard Layout

#### Mobile
```
┌─────────────────┐
│     HEADER      │
│ Dashboard | My  │
│ Courses | ...   │
├─────────────────┤
│  Welcome Card   │
│  Hello, User!   │
├─────────────────┤
│  Quick Stats    │
│  4 Courses      │
│  2 Certs        │
├─────────────────┤
│  My Courses     │
│  [Course 1] 75% │
│  [Course 2] 50% │
├─────────────────┤
│  Recent Updates │
│  You completed  │
│  Course X       │
└─────────────────┘
```

#### Desktop
```
┌──────────────────────────────┐
│      HEADER (Sticky)         │
├─────────┬────────────────────┤
│SIDEBAR  │   MAIN CONTENT     │
│         │                    │
│ 🏠 Home │  Welcome Section   │
│ 📚 My   │  ┌──────────────┐  │
│ Courses │  │ Stats: 4/2/5 │  │
│ ❤️Wish  │  └──────────────┘  │
│ 🎓 Cert │  My Courses        │
│ ⚙️ Set  │  ┌──┬──┬──┬──┐   │
│         │  │C1│C2│C3│C4│   │
│ Logout  │  └──┴──┴──┴──┘   │
└─────────┴────────────────────┘
```

---

### 6. Admin Dashboard Layout

#### Mobile
```
┌─────────────────┐
│     HEADER      │
│ 🏠 Menu | Logout│
├─────────────────┤
│  Menu Items     │
│  > Dashboard    │
│  > Users        │
│  > Courses      │
│  > Analytics    │
│  > Reports      │
│  > Settings     │
├─────────────────┤
│  Main Content   │
│  (Changes based │
│   on selection) │
└─────────────────┘
```

#### Desktop
```
┌──────────────────────────────┐
│      HEADER (Sticky)         │
├────────┬─────────────────────┤
│        │                     │
│ SIDEBAR│   MAIN CONTENT      │
│        │                     │
│🏠 Dashboard                  │
│👥 Users          Stats Cards │
│📚 Courses        ┌─┬─┬─┬─┐   │
│📊 Analytics      │ │ │ │ │   │
│📑 Reports        └─┴─┴─┴─┘   │
│⚙️ Settings       Recent Data  │
│                 Tables/Charts │
│Logout           Activity Log  │
│                             │
└────────┴─────────────────────┘
```

---

## 🎨 Color Usage

### Header Navigation
- **Background**: `bg-slate-900/80 backdrop-blur-sm`
- **Text**: `text-slate-400` → hover `text-white`
- **Active**: `text-blue-400 font-semibold`
- **Border**: `border-slate-700`

### Hero Sections
- **Background**: `bg-gradient-to-br from-blue-600 to-purple-600`
- **Text**: `text-white`
- **CTA**: `bg-white text-blue-600`

### Cards
- **Background**: `bg-slate-800/50 border-slate-700`
- **Hover**: `border-blue-500/50`
- **Text**: `text-white`, `text-slate-400`

### Buttons
- **Primary**: `bg-blue-600 hover:bg-blue-700`
- **Secondary**: `border border-slate-600`
- **Danger**: `bg-red-600 hover:bg-red-700`

### Badges
- **Info**: `bg-blue-500/20 text-blue-300`
- **Success**: `bg-green-500/20 text-green-300`
- **Warning**: `bg-yellow-500/20 text-yellow-300`

---

## 🖼️ Grid Breakpoints

### Tailwind Classes Used
```css
/* Mobile First */
grid-cols-1              /* 320px - all mobile */
md:grid-cols-2           /* 768px - tablet */
lg:grid-cols-3           /* 1024px - desktop */
lg:grid-cols-4           /* 1024px+ desktop */
```

### Typical Grid Configurations
- **1 column**: `grid-cols-1` (mobile)
- **2 columns**: `md:grid-cols-2` (tablet)
- **3 columns**: `lg:grid-cols-3` (desktop)
- **4 columns**: `lg:grid-cols-4` (large desktop)

---

## 📦 Component Spacing

### Padding
- `px-4` - Mobile horizontal
- `sm:px-6` - Tablet horizontal
- `lg:px-8` - Desktop horizontal
- `py-8` - Mobile vertical
- `md:py-12` - Tablet vertical
- `lg:py-16` - Desktop vertical

### Gaps
- `gap-4` - Mobile spacing between items
- `gap-6` - Tablet spacing
- `gap-8` - Desktop spacing

### Sections
```css
py-8 border-b border-slate-700   /* Mobile section */
py-12 md:py-16                    /* Responsive section */
```

---

## 🚀 Animation Classes

### Hover Effects
- `hover:scale-105` - Grow on hover
- `hover:border-blue-500/50` - Border change
- `hover:bg-slate-700/50` - Background change
- `hover:text-blue-400` - Text color change
- `transition` - Smooth animation

### Group Effects
```jsx
group hover:group-hover/btn:translate-x-1
```

---

## 📐 Typography

### Headings
```css
h1: text-4xl md:text-5xl lg:text-6xl font-bold
h2: text-3xl md:text-4xl font-bold
h3: text-2xl font-bold
h4: text-lg font-semibold
```

### Body Text
```css
Paragraph: text-base text-slate-300
Small: text-sm text-slate-400
Tiny: text-xs text-slate-500
```

### Font Weights
- Regular: `font-normal`
- Medium: `font-medium`
- Semibold: `font-semibold`
- Bold: `font-bold`

---

## 📊 Chart & Graph Layouts

### Bar Charts
```jsx
<div className="w-full bg-slate-700 rounded-full h-2">
  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" 
       style={{ width: '75%' }} />
</div>
```

### Stat Cards
```jsx
<div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
  <icon className="w-8 h-8 text-blue-400" />
  <p className="text-slate-400">Label</p>
  <p className="text-3xl font-bold text-white">Value</p>
</div>
```

---

## 🔍 Search & Filter Styles

### Search Input
```jsx
<div className="relative">
  <Search className="absolute left-4 top-3 w-5 h-5 text-slate-500" />
  <input className="w-full bg-slate-800 border border-slate-700 rounded-lg 
                     pl-12 pr-4 py-3 text-white placeholder-slate-500 
                     focus:outline-none focus:border-blue-500 transition" />
</div>
```

### Filter Buttons
```jsx
<button className={`px-4 py-2 rounded-lg font-medium transition ${
  isActive 
    ? 'bg-blue-600 text-white'
    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
}`}>
  Category
</button>
```

---

## 📋 Table Layouts

### Table Structure
```jsx
<table className="w-full text-sm">
  <thead className="border-b border-slate-700 bg-slate-800/70">
    <tr>
      <th className="text-left py-4 px-6 text-slate-400 font-semibold">
        Column
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-slate-700 hover:bg-slate-700/20 transition">
      <td className="py-4 px-6 text-white font-medium">Data</td>
    </tr>
  </tbody>
</table>
```

---

## 🎯 Mobile-First Tips

1. **Always Start Mobile**: Default styles for 320px
2. **Add Breakpoints**: `md:`, `lg:`, `xl:`
3. **Touch Targets**: Min 44x44 px buttons
4. **Safe Zone**: 16px padding from edges
5. **Text**: Readable at small sizes
6. **Images**: Responsive with `max-w-full`
7. **Spacing**: Increase spacing on larger screens

---

## ✨ Best Practices

### Colors
- Use semantic colors (blue for primary, red for danger)
- Consistent opacity levels (slate-400, slate-500, etc.)
- High contrast for accessibility

### Spacing
- Consistent padding/margins
- Use multiples of 4px (Tailwind default)
- More space on larger screens

### Typography
- Readable font sizes
- Proper line heights
- Clear hierarchy

### Interactions
- Smooth transitions (0.3s)
- Hover states
- Focus states for accessibility
- Loading states

---

## 📱 Testing Responsive

### Quick Test
1. F12 → Device Toolbar
2. Select device:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1024px+)
3. Test all interactions
4. Check text readability
5. Verify buttons work

---

**All layouts are fully responsive and production-ready! 🚀**
