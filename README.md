# 🎬 Faiorea Visuals - Premium Cinematic Website

A luxury creative studio portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Install & Run
```bash
npm install
npm run dev
```

Visit **http://localhost:3001** to see the website in action.

### Build for Production
```bash
npm run build
npm start
```

## 📋 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page with all sections
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles and animations
├── components/
│   ├── Navbar.tsx            # Fixed navigation with scroll effects
│   ├── Footer.tsx            # Footer with links and social
│   └── sections/
│       ├── HeroSection.tsx           # Full-screen hero with CTA
│       ├── SocialProofSection.tsx    # Stats/impact section
│       ├── ServicesPreviewSection.tsx # 4 service cards
│       ├── ProcessSection.tsx        # 4-step timeline
│       ├── ProjectsPreviewSection.tsx # Project gallery
│       ├── PackagesSection.tsx       # Package categories
│       ├── TestimonialsSection.tsx   # Client testimonials
│       ├── FAQSection.tsx            # FAQ accordion
│       └── BookAShootCTASection.tsx  # Final CTA section
└── utils/
    ├── animations.ts         # Reusable Framer Motion variants
    └── constants.ts          # Brand info, links, content
```

## ✨ Features Implemented

### 1. **Navbar** 
- Fixed positioning with scroll detection
- Blur/darkening effect on scroll
- Responsive hamburger menu for mobile
- Smooth transitions and hover effects

### 2. **Hero Section**
- Full-screen cinematic design
- Staggered text reveals with premium animations
- Animated gradient text for main heading
- CTA buttons with glow effects
- Animated scroll indicator

### 3. **Social Proof Section**
- Animated number counters
- Editable statistics (Projects, Clients, Events, Content)
- Luxury card styling with hover effects

### 4. **Services Preview**
- 4 premium service cards (Videography, Video Editing, Event Coverage, Brand Content)
- Emoji icons with hover scaling
- Gold accent bar animations

### 5. **Process Section**
- 4-step timeline layout
- Connected elements with gradient line
- Step numbers in gold circles
- Desktop arrow connectors

### 6. **Featured Projects**
- Masonry/grid layout (4 columns on desktop)
- Lazy-loaded project cards
- Dark overlay on hover
- Instagram link integration
- Category badges

### 7. **Custom Packages**
- Category grid (5 package types)
- Description with pricing note
- "Request a Quote" CTA

### 8. **Testimonials Section**
- Premium testimonial card structure
- Star ratings support
- Client image, name, position
- Quote styling
- Ready for real client feedback

### 9. **FAQ Accordion**
- Smooth accordion animations
- 6 pre-populated questions
- Elegant design with gold accents
- Contact CTA for additional questions

### 10. **Book a Shoot CTA**
- Cinematic call-to-action section
- Animated gradient background elements
- Primary and secondary CTAs
- Trust indicators

### 11. **Footer**
- Dark luxury aesthetic
- Quick links and services
- Social media links (Instagram, TikTok)
- Copyright and legal links

## 🎨 Design System

### Colors
- **Primary Black**: `#111111`
- **Soft Gold**: `#D4AF37`
- **White**: `#FFFFFF`
- **Light Grey**: `#F5F5F5`

### Typography
- Modern sans-serif system font
- Strong hierarchy with custom sizes
- Premium visual rhythm

### Animations
- Fade-up effects
- Scale-in animations
- Staggered reveals
- Hover glow effects
- Smooth transitions
- Parallax effects
- Scroll-triggered animations

## 🔧 Key Technologies

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Premium animations
- **React** - Component library

## 📝 Customization Guide

### Update Brand Information
Edit `/src/utils/constants.ts`:
```typescript
export const BRAND_INFO = {
  name: 'Faiorea Visuals',
  tagline: 'Authentic. Creative. Unforgettable.',
  // ... update other fields
};
```

### Update Navigation Links
```typescript
export const NAVIGATION_LINKS = [
  { label: 'Home', href: '#home' },
  // ... add more links
];
```

### Update Services
```typescript
export const SERVICES = [
  {
    id: 1,
    title: 'Your Service',
    description: 'Service description',
    icon: '🎬',
  },
  // ... add more services
];
```

### Update Social Statistics
In `/src/components/sections/SocialProofSection.tsx`:
```typescript
const STATS: Stat[] = [
  { label: 'Projects Completed', value: 50 }, // Change value
  // ... update other stats
];
```

### Add Real Testimonials
In `/src/components/sections/TestimonialsSection.tsx`:
```typescript
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    clientName: 'Real Client Name',
    clientPosition: 'Position / Organization',
    clientImage: 'url-to-real-image',
    review: 'Real testimonial content',
    rating: 5,
  },
  // ... add more testimonials
];
```

### Update Project Gallery
In `/src/components/sections/ProjectsPreviewSection.tsx`:
```typescript
const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    category: 'Weddings',
    title: 'Real Project Title',
    description: 'Project description',
    image: 'url-to-project-image',
    instagramLink: 'instagram-profile-link',
  },
  // ... add more projects
];
```

## 🔮 Future-Ready Architecture

The website is structured to support:

- ✅ Full About Page
- ✅ Portfolio Management System
- ✅ Instagram Integration
- ✅ Client Brief Form
- ✅ Booking Form
- ✅ Google Sheets Integration
- ✅ Email Notifications
- ✅ WhatsApp Integration
- ✅ Client Dashboard
- ✅ Media Gallery Expansion

## 🎯 Next Steps for Phase 2

1. **Add Real Content**
   - Update projects with real images
   - Add client testimonials
   - Update statistics

2. **Forms Integration**
   - Contact form submission
   - Booking form with calendar
   - Quote request form

3. **Social Integration**
   - Instagram feed integration
   - TikTok video embeds
   - Social sharing buttons

4. **Performance Optimization**
   - Image optimization
   - Code splitting
   - Caching strategies

5. **Analytics & SEO**
   - Google Analytics setup
   - Meta tags optimization
   - Sitemap generation

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
The project works with any Node.js hosting:
- Netlify
- AWS Amplify
- Digital Ocean
- Heroku

## 📖 ESLint & Code Quality

```bash
npm run lint
```

## 🐛 Troubleshooting

### Port 3000 Already in Use
The dev server will automatically use port 3001 if 3000 is busy.

### Build Errors
```bash
rm -rf .next
npm install
npm run dev
```

### TypeScript Errors
The tsconfig is configured with `strict: false` for easier development. Adjust in `tsconfig.json` if needed.

## 📄 License

© 2026 Faiorea Visuals. All rights reserved.

---

**Built with ❤️ for Faiorea Visuals** 🎬
